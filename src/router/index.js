import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("@/layouts/MainLayout"),
    meta: { requiresAuth: true },
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("@/views/About"),
      },
      {
        path: "welcome",
        name: "Welcome",
        component: () => import("@/views/Welcome"),
      },
      {
        path: "schedule",
        name: "Schedule",
        component: () => import("@/views/Schedule"),
      },
      {
        path: ":catchAll(.*)",
        name: "NotFound",
        component: () => import("@/views/NotFound"),
      },
    ],
  },
  {
    path: "/login",
    name: "LoginLayout",
    component: () => import("@/layouts/LoginLayout"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("@/views/Login"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next({ name: "Login" });
  } else if (to.name === "Login" && store.getters.isAuthenticated)
    next({ path: "/" });
  else next();
});

export default router;
