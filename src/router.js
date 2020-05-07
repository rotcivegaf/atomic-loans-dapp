import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import SignatureDetail from "@/views/SignatureDetail";
import ProvideSignature from "@/views/ProvideSignature";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/signature-detail/:sig",
      name: "SignatureDetail",
      component: SignatureDetail
    },
    {
      path: "/provide-signature",
      name: "ProvideSignature",
      component: ProvideSignature
    },
    {
      path: "*",
      name: "Error",
      component: Error
    }
  ]
});
