<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// fallback por si no existe roles.js (está en .gitignore)
const USERS = ref([{ username: "admin", password: "superseguro" }])

// Carga opcional de credenciales reales SIN top-level await
onMounted(async () => {
    try {
        const mod = await import("../roles.js")
        if (mod?.USERS?.length) USERS.value = mod.USERS
    } catch { /* no hay roles.js, usamos fallback */ }
})

const user = ref("")
const pass = ref("")
const err = ref("")

function login() {
    const ok = USERS.value.some(u => u.username === user.value && u.password === pass.value)
    if (!ok) { err.value = "Usuario o contraseña inválidos"; return }
    localStorage.setItem("auth_ok", "1")
    router.push("/agregar-sesion")
}
</script>

<template>
    <main style="background:#eef1f3; min-height:100vh; display:grid; place-items:center;">
        <form @submit.prevent="login"
            style="background:transparent; padding:20px; border-radius:12px; max-width:360px; width:100%;">
            <h2 style="margin:0 0 12px;">Iniciar sesión</h2>

            <label style="display:block; margin-bottom:8px;">
                <div>Usuario</div>
                <input v-model="user" required
                    style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px; background:#fff;">
            </label>

            <label style="display:block; margin-bottom:12px;">
                <div>Contraseña</div>
                <input type="password" v-model="pass" required
                    style="width:100%; padding:8px; border:1px solid #cbd5e1; border-radius:8px; background:#fff;">
            </label>

            <button type="submit"
                style="width:100%; padding:10px; border:0; border-radius:10px; background:#0ea5e9; color:white; cursor:pointer;">
                Entrar
            </button>

            <p v-if="err" style="color:#ef4444; margin-top:10px;">{{ err }}</p>
        </form>
    </main>
</template>
