import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: () => import("@/layouts/MainLayout"),
    meta: { requiresAuth: true },
    redirect: "/welcome",
    children: [
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
        path: "/classes",
        name: "Classes",
        component: () => import("@/views/Classes"),
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
  {
    path: "/admin",
    name: "AdminLayout",
    component: () => import("@/layouts/AdminLayout"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "AdminHome",
        component: () => import("@/views/AdminHome"),
      },
    ],
  },
  {
    path: "/landingpage",
    name: "LandingPage",
    component: () => import("@/views/LandingPage"),
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
