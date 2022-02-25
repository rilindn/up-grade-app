import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import { getLoggedUser } from "../api/ApiMethods";

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
        path: "StudentHome",
        name: "Home",
        meta: { requiredRole: ["Student"] },
        component: () => import("@/views/StudentHome"),
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
        path: "/attendance",
        name: "Attendance",
        meta: { requiredRole: ["Student"] },
        component: () => import("@/views/AttendanceRemarks"),
      },
      {
        path: "/subjects-board",
        name: "Subjects Board",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/SubjectsBoard"),
      },
      {
        path: "/teachers",
        name: "Teachers",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Teachers"),
      },
      {
        path: "/admins",
        name: "Admins",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Admins"),
      },
      {
        path: "/teacher-classes",
        name: "My Classes",
        meta: { requiredRole: ["Staff"] },
        component: () => import("@/views/TeacherClasses"),
      },
      // {
      //   path: "/teacher-student",
      //   name: "My Students",
      //   meta: { requiredRole: ["Staff"] },
      //   component: () => import("@/views/Teacher_Student"),
      // },
      {
        path: "/admin",
        name: "Dashboard",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/Dashboard"),
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
        meta: { requiredRole: ["Student", "Admin"] },
        component: () => import("@/views/StudentProfile"),
      },
      {
        path: "teacher-schedule",
        name: "Teacher Schedule",
        meta: { requiredRole: ["Staff"] },
        component: () => import("@/views/TeacherSchedule"),
      },
      {
        path: "/class-students",
        name: "ClassStudents",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/ClassStudents"),
      },
      {
        path: "/assign-roles",
        name: "AssignRoles",
        meta: { requiredRole: ["Admin"] },
        component: () => import("@/views/AssignRoles"),
      },
      {
        path: "/access-denied",
        name: "Access Denied",
        component: () => import("@/views/AccessDenied"),
      },
      {
        path: ":catchAll(.*)",
        name: "Not Found",
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

router.beforeEach(async (to, from, next) => {
  if (to.name !== "Login" && localStorage.getItem("token") === null) {
    next({ name: "Login" });
  } else {
    if (store.getters.isAuthenticated) handleRouteRedirect(to, from, next);
    else {
      await fetchLoggedUser();
      handleRouteRedirect(to, from, next);
    }
  }
});

const handleRouteRedirect = (to, from, next) => {
  const requiredRole = to.meta.requiredRole;
  const requiresAuth = to.meta.requiresAuth;
  const isAuthenticated = store.getters.isAuthenticated;
  const userRole = store.getters.userRole;

  if (requiresAuth && !isAuthenticated) next({ name: "Login" });
  else if (to.name === "Login" && isAuthenticated) next({ path: "/" });
  else if (requiredRole && !requiredRole.includes(userRole))
    next({ path: "/access-denied" });
  else next();
};

const fetchLoggedUser = async () => {
  try {
    const result = await getLoggedUser();
    const user = result?.data?.user;
    if (user) {
      store.dispatch({
        type: "SET_LOGGED_USER",
        user,
      });
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default router;
