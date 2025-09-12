<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  sesionesFuturas: { type: Array, required: true },
});

const isPast = (s) => {
  if (!s?.fecha) return false;
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const d = new Date(`${s.fecha}T23:59:59`);
  return !isNaN(d.getTime()) && d < hoy;
};

const byDate = (a, b) => new Date(a.fecha) - new Date(b.fecha);

const futurasMostrables = computed(() =>
  props.sesionesFuturas.filter((s) => !isPast(s)).sort(byDate)
);

const pasadas = computed(() =>
  props.sesionesFuturas
    .filter(isPast)
    .sort(byDate)
    .map(({ numero, titulo, fecha, temasCentrales, lugar }) => ({
      numero,
      titulo,
      fecha,
      temasCentrales,
      lugar,
    }))
);
const desplegableBtn = ref()
function desplegar() {
  desplegableBtn.value = !desplegableBtn.value
}
</script>

<template>
  <section>
    <header>
      <h2 class="titles text-main-color">Sesiones</h2>
    </header>
    <div class="main-cont-sesiones">
      <div style="flex: 1;">
        <h3 class="subtitles">Futuras</h3>
        <div v-if="futurasMostrables.length === 0">No hay sesiones futuras.</div>
        <div class="cont-column-sesion">
          <div v-for="(sesion, index) in futurasMostrables" :key="index" class="cont-sesion">
            <div>
              <p class="normal-text text-sec-color">
                {{ sesion.numero }}. {{ sesion.titulo }}
              </p>
            </div>
            <div class="sesion-items">
              <p class="normal-text-bold">Fecha:</p> {{ sesion.fecha }}
            </div>
            <div class="sesion-items">
              <p class="normal-text-bold">Lugar:</p> {{ sesion.lugar }}
            </div>
            <p class="normal-text-bold">Temas centrales:</p>
            <ul class="sesion-ul">
              <li v-for="(t, j) in sesion.temasCentrales" :key="j">{{ t }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="flex: 1;">
        <h3 class="subtitles">Pasadas</h3>
        <div v-if="pasadas.length === 0">No hay sesiones pasadas.</div>
        <div class="cont-column-sesion">
          <div v-for="(p, i) in pasadas" :key="i" class="cont-sesion">
            <div style="display: flex; gap: 16px;">

              <p class="normal-text text-sec-color"> # {{ p.numero }} - {{ p.titulo }} </p>
              <p>{{ p.fecha }}</p>
            </div>
            <button class="btn-desplegable normal-text-bold" v-on:click="desplegar">Temas centrales </button>
            <ul class="sesion-ul" v-show="desplegableBtn">
              <li v-for="(t, j) in p.temasCentrales" :key="j">{{ t }}</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
<style>
.main-cont-sesiones {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
}

.cont-column-sesion {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.cont-sesion {
  display: flex;
  flex-direction: column;
  background: #fff;
  gap: 8px;
  border-radius: 8px;
  border-left: 6px solid var(--main-color);
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.sesion-items {
  display: flex;
  gap: 8px;
}

.sesion-ul {
  display: flex;
  flex-direction: column;
  margin-left: 24px;
}
</style>
