import Vue from "vue";
import VueRouter from "vue-router";
import Employees from "../views/Employees";
import NewEmployee from "../views/NewEmployee";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Employees
  },
  {
    path: "/add-employee",
    component: NewEmployee
  }
];

const router = new VueRouter({
  routes
});

export default router;
