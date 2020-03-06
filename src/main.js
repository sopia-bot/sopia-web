import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Picture from "./views/Com/Picture";

Vue.config.productionTip = false;
Vue.component('Picture', Picture);

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount("#app");
