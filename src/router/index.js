import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import AddInfoFormView from "../views/AddInfoFormView/AddInfoFormView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeView },
    { path: "/login", component: LoginView },
    {
      path: "/agregar-sesion",
      component: AddInfoFormView,
      meta: { requiresAuth: true },
    },
  ],
});

// guard simple con localStorage
router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth) {
    const ok = localStorage.getItem("auth_ok") === "1";
    if (!ok) return next("/login");
  }
  next();
});

export default router;
