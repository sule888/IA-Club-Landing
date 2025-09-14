<script setup>
import { reactive, ref, computed } from "vue";
import { useSesionsStore } from "../../../stores/sesionsStore";
import { storeToRefs } from "pinia";
import { Icon } from "@iconify/vue";
import Input from "../../../components/GeneralComponents/Input.vue";

const store = useSesionsStore();
const { sessions, nextNumero } = storeToRefs(store);

const editId = ref(null);
const isEditing = computed(() => !!editId.value);

const form = reactive({
    numero: null,
    titulo: "",
    fecha: "",
    lugar: "",
    temas: "",
});

const fields = [
    { key: "numero", label: "No. de Sesión", type: "number", placeholder: "Número de sesión", /*required: true,*/ min: 1, integerOnly: true },
    { key: "titulo", label: "Título", type: "text", placeholder: "Título", required: true },
    { key: "fecha", label: "Fecha", type: "date", required: true },
    { key: "lugar", label: "Lugar", type: "text", placeholder: "Lugar" },
    { key: "temas", label: "Temas centrales", type: "text", placeholder: "tema1, tema2, tema3" },
];

function resetForm() {
    editId.value = null;
    form.numero = null;
    form.titulo = "";
    form.fecha = "";
    form.lugar = "";
    form.temas = "";
}

function toArrayTemas(str) {
    return (str || "").split(",").map(s => s.trim()).filter(Boolean);
}

function submit() {
    if (!form.titulo || !form.fecha) return;

    const payload = {
        numero: form.numero ?? nextNumero.value,
        titulo: form.titulo,
        fecha: form.fecha,
        lugar: form.lugar,
        temasCentrales: toArrayTemas(form.temas),
    };

    if (isEditing.value) {
        store.updateSession(editId.value, payload);
    } else {
        store.addSession(payload);
    }

    resetForm();
}

function startEdit(id) {
    const s = sessions.value.find(x => x.id === id);
    if (!s) return;
    editId.value = s.id;
    form.numero = s.numero ?? null;
    form.titulo = s.titulo || "";
    form.fecha = s.fecha || "";
    form.lugar = s.lugar || "";
    form.temas = (s.temasCentrales || []).join(", ");
}

function remove(id) {
    if (!confirm("¿Eliminar esta sesión?")) return;
    store.removeSession(id);
    if (editId.value === id) resetForm();
}
</script>

<template>

    <div class="main-cont">
        <form @submit.prevent="submit" class="cont-form">

            <div v-for="f in fields" :key="f.key">
                <Input v-model="form[f.key]" :label="f.label" :type="f.type" :placeholder="f.placeholder"
                    :required="f.required" :min="f.min" :max="f.max" :step="f.step" :integer-only="f.integerOnly" />
            </div>



            <div class="actions">
                <button class="main-btn" type="submit">
                    {{ isEditing ? "Guardar cambios" : "Agregar sesión" }}
                </button>
                <button class="secondary-btn" type="button" v-if="isEditing" @click="resetForm">
                    Cancelar edición
                </button>
            </div>
        </form>

        <div class="cont-sesions-list">
            <div v-for="s in sessions" :key="s.id" class="cont-sesion">
                <div class="sesion-info">
                    <p class="normal-text text-sec-color">
                        {{ s.numero }}. {{ s.titulo }} — {{ s.fecha }} <span v-if="s.lugar">· {{ s.lugar }}</span>
                    </p>
                    <ul class="sesion-ul" v-if="s.temasCentrales?.length">
                        <li class="normal-text" v-for="(t, j) in s.temasCentrales" :key="j">{{ t }}</li>
                    </ul>
                </div>
                <div class="sesion-actions">

                    <button class="main-btn" @click="startEdit(s.id)">
                        <Icon icon="line-md:edit" width="24" height="24" />
                    </button>
                    <button class="secondary-btn" @click="remove(s.id)">
                        <Icon icon="line-md:trash" width="24" height="24" />
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.main-cont {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    width: 100%;
}

.cont-form {
    flex: 2 1 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.cont-sesions-list {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 16px;
    max-height: 70vh;
    overflow: auto;
}

.cont-sesion {
    display: flex;
    align-items: center;
    gap: 32px;
    padding: 10px 12px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06);
}

.sesion-items {
    display: flex;
    gap: 8px;
}

.sesion-info {
    flex: 1;

}

.sesion-ul {
    margin-left: 32px;
    margin-top: 16px;
}

.sesion-actions {
    display: flex;
    gap: 8px;
}

.actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
}

@media (max-width: 900px) {
    .main-cont {
        flex-direction: column;
    }

    .cont-form,
    .cont-sesions-list {
        flex: 1 1 auto;
        width: 100%;
    }

    .cont-sesions-list {
        max-height: none;
    }
}

@media (max-width: 600px) {
    .cont-sesion {
        flex-direction: column;
        align-items: stretch;
    }

    .sesion-actions {
        justify-content: flex-end;
    }
}
</style>
