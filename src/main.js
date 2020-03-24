import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import filters from "@/filters";

Vue.use(VueSpinners);

Vue.filter("shortVrs", filters.toShortVrs);
Vue.filter("shortAddress", filters.toShortAddress);
Vue.filter("basePorcent", filters.toBasePorcent);
Vue.filter("getFirstWord", filters.getFirstWord);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
