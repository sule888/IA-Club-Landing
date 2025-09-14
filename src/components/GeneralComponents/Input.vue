<template>
    <div class="main-input">
        <label v-if="label" class=" text-main-color">
            {{ label }} <span v-if="required" class="required">*</span>
        </label>

        <input class="input-control normal-text" :class="{ 'input-control-error': showError }" :type="type"
            :placeholder="placeholder" :value="inner" :min="min" :max="max" :step="step"
            :inputmode="type === 'number' ? 'numeric' : undefined" @input="onInput" @keypress="onKeypress"
            @wheel.prevent />

        <p v-if="showError" class="input-error normal-text">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    modelValue: { type: [String, Number, null], default: null },
    label: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" },
    required: { type: Boolean, default: false },
    min: { type: [Number, String], default: undefined },
    max: { type: [Number, String], default: undefined },
    step: { type: [Number, String], default: undefined },
    integerOnly: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue"]);

const inner = ref("");
watch(
    () => props.modelValue,
    (v) => { inner.value = v == null ? "" : String(v); },
    { immediate: true }
);

const showError = ref(false);
const errorMessage = ref("");

function validate(str) {
    showError.value = false;
    errorMessage.value = "";

    if (props.required && str.trim() === "") {
        showError.value = true;
        errorMessage.value = "Este campo es obligatorio.";
        return;
    }

    if (props.type === "number" && str.trim() !== "") {
        const n = Number(str);
        if (Number.isNaN(n)) {
            showError.value = true;
            errorMessage.value = "Ingresa un número válido.";
            return;
        }
        if (props.min != null && n < Number(props.min)) {
            showError.value = true;
            errorMessage.value = `Debe ser ≥ ${props.min}.`;
            return;
        }
        if (props.max != null && n > Number(props.max)) {
            showError.value = true;
            errorMessage.value = `Debe ser ≤ ${props.max}.`;
            return;
        }
    }
}

function sanitizeNumber(raw) {
    return String(raw ?? "").replace(/\D+/g, "");
}
function onKeypress(e) {
    if (props.type !== "number") return;
    const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter"];
    if (allowed.includes(e.key)) return;

    if (props.integerOnly) {
        if (!/^\d$/.test(e.key)) e.preventDefault();
    } else {
        const el = e.target;
        if (!/^\d$/.test(e.key) && !(e.key === "." && !el.value.includes("."))) {
            e.preventDefault();
        }
    }
}

function onInput(e) {
    let val = e.target.value;
    if (props.type === "number") val = sanitizeNumber(val);

    inner.value = val;

    let out = val === "" ? null : val;
    if (props.type === "number") out = val === "" ? null : Number(val);

    emit("update:modelValue", out);
    validate(val);
}

</script>

<style scoped>
.main-input {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.required {
    color: var(--sec-color);
    margin-left: 4px;
}

.input-control {
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    border: 2px solid rgba(0, 99, 177, 0.25);
    background: #fff;

}

.input-control:hover {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.14);
}

.input-control:focus {
    border-color: var(--main-color);
    box-shadow: 0 0 0 3px rgba(0, 99, 177, 0.18);
}

.input-control-error {
    border-color: var(--sec-color);
    box-shadow: 0 0 0 3px rgba(177, 77, 0, 0.18);
}

.input-error {
    color: var(--sec-color);
    font-weight: bold;
}
</style>
