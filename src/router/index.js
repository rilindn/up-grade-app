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
        meta: { requiredRole: ["Student"] },
        component: () => import("@/views/Schedule"),
      },
      {
        path: "/classes",
        name: "Classes",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Classes"),
      },
      {
        path: "/students",
        name: "Students",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Students"),
      },
      {
        path: "/grades-board",
        name: "Grades Board",
        meta: { requiredRole: ["Student"] },
        component: () => import("@/views/GradesBoard"),
      },
      {
        path: "/subjects-board",
        name: "Subjects Board",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/SubjectsBoard"),
      },
      {
        path:"/teachers",
        name: "Teachers",
        meta: { requiredRole:["Admin"] },
        component:() => import("@/views/Teachers"),
      },
      {
        path: "/teacher-classes",
        name: "My Classes",
        meta: { requiredRole: ["Staff"] },
        component: () => import("@/views/TeacherClasses"),
      },
      {
        path: "/admin",
        name: "Dashboard",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Dashboard"),
      },
      {
        path: "/access-denied",
        name: "Access Denied",
        component: () => import("@/views/AccessDenied"),
      },
      {
        path: "/register",
        name: "Register",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Register"),
      },
      {
        path: "/student-profile",
        name: "My Profile",
        component: () => import("@/views/StudentProfile"),
      },
      {
        path: ":catchAll(.*)",
        name: "Not Found",
        component: () => import("@/views/NotFound"),
      },
      {
        path: "teacher-schedule",
        name: "Schedule",
        meta: { requiredRole: ["Staff"] },
        component: () => import("@/views/TeacherSchedule"),
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
    path: "/landingpage",
    name: "LandingPage",
    component: () => import("@/views/LandingPage"),
  },
  // {
  //   path: "/admin",
  //   name: "AdminLayout",
  //   component: () => import("@/layouts/AdminLayout"),
  //   meta: { requiresAuth: true },
  //   children: [
  //     {
  //       path: "",
  //       name: "AdminHome",
  //       component: () => import("@/views/AdminHome"),
  //     },
  //   ],
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiredRole = to.meta.requiredRole;
  const requiresAuth = to.meta.requiresAuth;
  const isAuthenticated = store.getters.isAuthenticated;
  const userRole = store.getters.userRole;

  if (requiresAuth && !isAuthenticated) next({ name: "Login" });
  else if (to.name === "Login" && isAuthenticated) next({ path: "/" });
  else if (requiredRole && !requiredRole.includes(userRole))
    next({ path: "/access-denied" });
  else next();
});

export default router;
