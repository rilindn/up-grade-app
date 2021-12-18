import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About"),
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: () => import("../views/ContactUs"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
