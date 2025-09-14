<script setup>
import { useSesionsStore } from "../../stores/sesionsStore";
import { storeToRefs } from "pinia";
import SesionItem from "./SesionItem.vue";

const store = useSesionsStore();
const { futuras, pasadas } = storeToRefs(store);
</script>

<template>
  <div>
    <header>
      <h2 class="subtitles text-sec-color" style="margin-bottom: 8px;">Sesiones</h2>
    </header>

    <div class="main-cont-sesiones">
      <div class="panel panel-left">
        <header class="panel-header">
          <h3 class="panel-title">Futuras</h3>
          <div class="panel-count normal-text" v-if="futuras?.length">{{ futuras.length }}</div>
        </header>

        <p v-if="futuras.length === 0" class="panel-empty">No hay sesiones futuras.</p>

        <div class="list-box">
          <ul class="list">
            <li v-for="(s, i) in futuras" :key="s.id || i">
              <SesionItem :sesion="s" type="futura" />
            </li>
          </ul>
        </div>
      </div>

      <div class="panel panel--right">
        <header class="panel-header">
          <h3 class="panel-title">Pasadas</h3>
          <div class="panel-count normal-text" v-if="pasadas?.length">{{ pasadas.length }}</div>
        </header>

        <p v-if="pasadas.length === 0" class="panel-empty">No hay sesiones pasadas.</p>

        <div class="list-box">
          <ul class="list">
            <li v-for="(s, i) in pasadas" :key="s.id || i">
              <SesionItem :sesion="s" type="pasada" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-cont-sesiones {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  width: 100%;
}

.panel {
  background: transparent;
  padding: 0;
  min-width: 0;
}

.panel-left {
  flex: 2 1 0;
}

.panel--right {
  flex: 1 1 0;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--background-color);
}

.panel-title {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: var(--main-color);
}

.panel-count {
  background: var(--main-color);
  color: #fff;
  padding: 3px 8px;
  border-radius: 50%;
}

.panel-empty {
  margin: 8px 0 0 0;
  color: #6b7280;
}

.list-box {
  background: #fff;
  border-radius: 8px;
  padding: 8px 12px;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1000px) {
  .main-cont-sesiones {
    flex-direction: column;
  }

  .panel {
    width: 100%;
  }
}

@media (max-width: 960px) {
  .main-cont-sesiones {
    flex-direction: column;
  }

  .panel {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .panel-title {
    font-size: 18px;
  }

  .list-box {
    padding: 6px 10px;
  }

  .panel {
    width: 100%;
  }
}
</style>
