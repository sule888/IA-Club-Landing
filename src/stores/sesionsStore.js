import { defineStore } from "pinia";

const KEY = "sesions-store-v1";
const uuid = () =>
  globalThis.crypto?.randomUUID?.() ||
  `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "");
  } catch {
    return { sessions: [] };
  }
}

export const useSesionsStore = defineStore("sesions", {
  state: () => ({
    sessions: [],
    ...load(),
  }),

  getters: {
    sortedByDate: (s) =>
      [...s.sessions].sort((a, b) => new Date(a.fecha) - new Date(b.fecha)),
    futuras: (s) =>
      s.sessions
        .filter((x) => {
          if (!x.fecha) return false;
          const hoy = new Date();
          hoy.setHours(0, 0, 0, 0);
          const d = new Date(`${x.fecha}T23:59:59`);
          return !isNaN(d.getTime()) && d >= hoy;
        })
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha)),
    pasadas: (s) =>
      s.sessions
        .filter((x) => {
          if (!x.fecha) return false;
          const hoy = new Date();
          hoy.setHours(0, 0, 0, 0);
          const d = new Date(`${x.fecha}T23:59:59`);
          return !isNaN(d.getTime()) && d < hoy;
        })
        .sort((a, b) => new Date(a.fecha) - new Date(b.fecha)),
    nextNumero: (s) =>
      s.sessions.length
        ? Math.max(...s.sessions.map((x) => x.numero || 0)) + 1
        : 1,
  },

  actions: {
    persist() {
      localStorage.setItem(KEY, JSON.stringify({ sessions: this.sessions }));
    },

    addSession(payload) {
      const sesion = {
        id: uuid(),
        numero: payload.numero ?? this.nextNumero,
        titulo: payload.titulo?.trim() || "",
        fecha: payload.fecha || "", // "YYYY-MM-DD"
        lugar: payload.lugar?.trim() || "",
        temasCentrales: Array.isArray(payload.temasCentrales)
          ? payload.temasCentrales
          : (payload.temasCentrales || []).filter(Boolean),
      };
      this.sessions.push(sesion);
      this.persist();
      return sesion.id;
    },

    updateSession(id, patch) {
      const i = this.sessions.findIndex((s) => s.id === id);
      if (i === -1) return;
      const prev = this.sessions[i];
      this.sessions[i] = {
        ...prev,
        ...patch,
        temasCentrales: Array.isArray(patch?.temasCentrales)
          ? patch.temasCentrales
          : prev.temasCentrales,
      };
      this.persist();
    },

    removeSession(id) {
      this.sessions = this.sessions.filter((s) => s.id !== id);
      this.persist();
    },

    clearAll() {
      this.sessions = [];
      this.persist();
    },
  },
});
