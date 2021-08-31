import 'babel-polyfill';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Picture from "./views/Com/Picture";
import Meta from 'vue-meta';
import VueEmbedGist from 'vue-embed-gist';
import axios from 'axios';

import * as spoon from 'sopia-core';

Vue.config.productionTip = false;
Vue.component('Picture', Picture);
Vue.use(Meta);
Vue.component('vue-embed-gist', VueEmbedGist);

Vue.prototype.$sopia = new spoon.Client(window.navigator.userAgent); // TODO: set country
window.axios = axios;

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount("#app");
