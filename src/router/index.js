import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login"),
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: () => import("@/views/Welcome"),
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () => import("@/views/Schedule"),
  },
  {
    path: "/GradesBoard",
    name: "gradesBoard",
    component: () => import("@/views/GradesBoard"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
