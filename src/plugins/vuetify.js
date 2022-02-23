import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import ko from '../languages/ko.json';

Vue.use(Vuetify);

export default new Vuetify({
	lang: {
		locales: {
			ko,
		},
		current: 'ko',
	},
});
