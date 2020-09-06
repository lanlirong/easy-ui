import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "../views/index.vue";
// import button from '../views/button.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: '/button',
    children:[
      {
        path: "/button",
        name: "button",
        component: ()=>import('../views/button.vue')
      },
      {
        path: "/input",
        name: "input",
        component: ()=>import('../views/input.vue')
      },
      {
        path: "/layout",
        name: "layout",
        component: ()=>import('../views/layout.vue')
      }
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
