<script setup>
import { ref, computed, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// ---------- utils ----------
const isPast = (s) => {
    if (!s?.fecha) return false
    const hoy = new Date(); hoy.setHours(0, 0, 0, 0)
    const d = new Date(`${s.fecha}T23:59:59`)
    return !isNaN(d.getTime()) && d < hoy
}
const byDate = (a, b) => new Date(a.fecha) - new Date(b.fecha)
const genId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

// ---------- state ----------
const sesiones = ref([]) // aquí viven TODAS las sesiones (futuras + pasadas)
const editId = ref(null)

const form = ref({
    id: null,
    numero: "",
    titulo: "",
    fecha: "",   // YYYY-MM-DD
    lugar: "",
    temas: "",   // string "a, b, c"
})

onMounted(() => {
    try {
        const raw = JSON.parse(localStorage.getItem("sesionesFuturas") || "[]")
        sesiones.value = Array.isArray(raw) ? raw : []
    } catch {
        sesiones.value = []
    }
})

// ---------- computed ----------
const futuras = computed(() =>
    sesiones.value.filter(s => !isPast(s)).sort(byDate)
)
const pasadas = computed(() =>
    sesiones.value.filter(s => isPast(s)).sort(byDate)
)

// ---------- helpers ----------
function saveAll() {
    localStorage.setItem("sesionesFuturas", JSON.stringify(sesiones.value))
}

function resetForm() {
    editId.value = null
    form.value = {
        id: null,
        numero: "",
        titulo: "",
        fecha: "",
        lugar: "",
        temas: "",
    }
}

function fillFormFromSession(s) {
    editId.value = s.id ?? null
    form.value = {
        id: s.id ?? null,
        numero: s.numero ?? "",
        titulo: s.titulo ?? "",
        fecha: s.fecha ?? "",
        lugar: s.lugar ?? "",
        temas: Array.isArray(s.temasCentrales) ? s.temasCentrales.join(", ") : (s.temas ?? ""),
    }
}

// ---------- actions ----------
function submitForm() {
    if (!form.value.numero || !form.value.titulo || !form.value.fecha || !form.value.lugar) return

    const temasArray = form.value.temas
        ? form.value.temas.split(",").map(s => s.trim()).filter(Boolean)
        : []

    const payload = {
        id: form.value.id || genId(),
        numero: form.value.numero,
        titulo: form.value.titulo,
        fecha: form.value.fecha,
        lugar: form.value.lugar,
        temasCentrales: temasArray.length ? temasArray : ["General"],
    }

    if (editId.value) {
        // editar
        const idx = sesiones.value.findIndex(s => (s.id ?? null) === editId.value)
        if (idx >= 0) {
            sesiones.value.splice(idx, 1, payload)
        } else {
            // fallback si no hay id previo: matchear por numero+titulo+fecha
            const idx2 = sesiones.value.findIndex(s =>
                s.numero === payload.numero && s.titulo === payload.titulo && s.fecha === payload.fecha
            )
            if (idx2 >= 0) sesiones.value.splice(idx2, 1, payload)
            else sesiones.value.push(payload)
        }
    } else {
        // crear
        sesiones.value.push(payload)
    }

    saveAll()
    resetForm() // no redirige
}

function editarSesion(s) {
    fillFormFromSession(s)
}

function eliminarSesion(s, collection = "auto") {
    // collection es solo decorativo por si lo quieres usar en el template
    const byId = (x) => (x.id ?? "") === (s.id ?? "")
    let idx = sesiones.value.findIndex(byId)
    if (idx < 0) {
        // fallback si no hay id
        idx = sesiones.value.findIndex(x =>
            x.numero === s.numero && x.titulo === s.titulo && x.fecha === s.fecha && x.lugar === s.lugar
        )
    }
    if (idx >= 0) {
        sesiones.value.splice(idx, 1)
        saveAll()
        // si estabas editando justo esta, resetea el form
        if (editId.value && (s.id && s.id === editId.value)) resetForm()
    }
}

function volverHome() {
    router.push("/")
}
</script>

<template>
    <header style="display:flex; gap:10px; align-items:center; margin-top: 100px;">
        <h2 style="margin:0;">Gestionar sesiones</h2>
        <button type="button" @click="volverHome"
            style="padding:8px 12px; border:1px solid #94a3b8; background:transparent; border-radius:10px; cursor:pointer;">
            Regresar
        </button>
    </header>
    <main style="min-height:100vh; background:#eef1f3; padding:24px;display: flex; flex-direction: row; gap: 16px;">


        <!-- Formulario -->
        <form @submit.prevent="submitForm"
            style="background:#fff; width:100%; max-width:680px; padding:16px; border-radius:12px; border:1px solid #e5e7eb;">
            <h3 style="margin:0 0 12px;">{{ editId ? "Editar sesión" : "Agregar sesión" }}</h3>

            <div style="display:grid; gap:10px;">
                <label>
                    <div>No. de sesión</div>
                    <input v-model="form.numero" required
                        style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px;">
                </label>

                <label>
                    <div>Título</div>
                    <input v-model="form.titulo" required
                        style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px;">
                </label>

                <label>
                    <div>Fecha</div>
                    <input type="date" v-model="form.fecha" required
                        style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px;">
                </label>

                <label>
                    <div>Lugar</div>
                    <input v-model="form.lugar" required
                        style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px;">
                </label>

                <label>
                    <div>Temas (separados por coma)</div>
                    <input v-model="form.temas" placeholder="Tema 1, Tema 2"
                        style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px;">
                </label>

                <div style="display:flex; gap:10px; margin-top:6px;">
                    <button type="submit"
                        style="padding:10px 14px; border:0; border-radius:10px; background:#22c55e; color:white; cursor:pointer;">
                        {{ editId ? "Guardar cambios" : "Guardar" }}
                    </button>
                    <button type="button" @click="resetForm"
                        style="padding:10px 14px; border:1px solid #94a3b8; background:transparent; border-radius:10px; cursor:pointer;">
                        Limpiar
                    </button>
                </div>
            </div>
        </form>

        <!-- Listados -->
        <section style="display:grid; gap:16px; width:100%; max-width:880px;">
            <!-- Futuras -->
            <div style="background:#eef1f3; padding:14px; border-radius:12px;">
                <h3 style="margin:0 0 8px;">Futuras</h3>
                <div v-if="futuras.length === 0" style="opacity:.7;">No hay sesiones futuras.</div>
                <div v-for="(s, i) in futuras" :key="s.id ?? `f-${i}`"
                    style="padding:10px 0; border-bottom:1px solid #e5e7eb; display:grid; gap:6px;">
                    <div><strong>#{{ s.numero }} — {{ s.titulo }}</strong></div>
                    <div>{{ s.fecha }} · {{ s.lugar }}</div>
                    <ul style="margin:0 0 0 18px;">
                        <li v-for="(t, j) in s.temasCentrales" :key="j">{{ t }}</li>
                    </ul>
                    <div style="display:flex; gap:8px;">
                        <button @click="editarSesion(s)"
                            style="padding:6px 10px; border:1px solid #2563eb; color:#2563eb; background:#fff; border-radius:8px; cursor:pointer;">
                            Editar
                        </button>
                        <button @click="eliminarSesion(s, 'futuras')"
                            style="padding:6px 10px; border:1px solid #ef4444; color:#ef4444; background:#fff; border-radius:8px; cursor:pointer;">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>

            <!-- Pasadas -->
            <div style="background:#fff; padding:14px; border-radius:12px; border:1px solid #e5e7eb;">
                <h3 style="margin:0 0 8px;">Pasadas</h3>
                <div v-if="pasadas.length === 0" style="opacity:.7;">No hay sesiones pasadas.</div>
                <div v-for="(p, i) in pasadas" :key="p.id ?? `p-${i}`"
                    style="padding:10px 0; border-bottom:1px solid #e5e7eb; display:grid; gap:6px;">
                    <div><strong>#{{ p.numero }} — {{ p.titulo }}</strong></div>
                    <div>{{ p.fecha }} · {{ p.lugar }}</div>
                    <ul style="margin:0 0 0 18px;">
                        <li v-for="(t, j) in p.temasCentrales" :key="j">{{ t }}</li>
                    </ul>
                    <div style="display:flex; gap:8px;">
                        <button @click="editarSesion(p)"
                            style="padding:6px 10px; border:1px solid #2563eb; color:#2563eb; background:#fff; border-radius:8px; cursor:pointer;">
                            Editar
                        </button>
                        <button @click="eliminarSesion(p, 'pasadas')"
                            style="padding:6px 10px; border:1px solid #ef4444; color:#ef4444; background:#fff; border-radius:8px; cursor:pointer;">
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
