import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		small: false,
		draw: false,
        cart: [],
        fin: false,
	},
	getters: {
		small: state => state.small,
		draw: state => state.draw,
        cart: state => state.cart,
        fin: state => state.fin,
	},
	mutations: {
		small: (state, val) => {
			state.small = val;
		},
		draw: (state, val) => {
			state.draw = val;
		},
        cart: (state, val) => {
            state.cart = val;
        },
        fin: (state, val) => {
            state.fin = val;
        },
	},
	actions: {
	},
	modules: {
	}
})
