import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome";
import Login from "../views/Login";
import Home from "../views/Home";
import ContactUs from "../views/ContactUs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About"),
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: ContactUs,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
