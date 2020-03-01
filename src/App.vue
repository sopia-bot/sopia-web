<template>
	<v-app>
		<v-app-bar
			app
			color="white"
			prominent
			:height="small ? '' : '75px'"
			elevation="2">
			<v-container v-if="!small" style="max-width:unset" class="pa-1">
				<v-row align="center" justify="center">
					<v-col cols="4" sm="3" md="3" lg="2" xl="2" align="center">
						<div style="border-right: 1.2px solid #e5e5e5">
							<h1 class="title">
								<router-link style="text-decoration: none" class="black--text" to="/">
									<span class="purple--text text--darken-4">SOPIA</span>
								</router-link>
							</h1>
						</div>
					</v-col>

					<v-col>
						<v-btn
							v-for="menu in menus"
							:key="menu.route"
							text
							tile
							@click="routeAssignUrl(menu.route)"
							color="purple darken-4"> {{ menu.route }} </v-btn>
					</v-col>
				</v-row>
			</v-container>
			<v-container v-else style="max-width:unset" class="px-0">
				<v-row align="center" justify="center">
					<v-col align="center">
						<h1 class="title"><router-link style="text-decoration: none" class="black--text" to="/">SOPIA</router-link></h1>
					</v-col>
				</v-row>

				<v-row align="center" justify="center">
					<v-col cols="1" v-if="docs" class="py-0">
						<v-app-bar-nav-icon class="pa-0" @click="openMenu"></v-app-bar-nav-icon>
					</v-col>
					<v-col class="pa-2 px-0" align="center">
						<v-btn 
							text 
							tile 
							@click="routeAssignUrl('/')"
							color="purple darken-4">Home</v-btn>
						<v-btn
							v-for="menu in menus"
							:key="menu.route"
							text
							tile
							@click="routeAssignUrl(menu.route)"
							color="purple darken-4"> {{ menu.route }} </v-btn>
					</v-col>
					<v-col cols="1" v-if="docs" class=""></v-col>
				</v-row>
			</v-container>
		</v-app-bar>

		<v-sheet id="router-view" class="overflow-y-auto" tile max-height="100vh">
			<transition name="scroll-y-reverse-transition">
				<router-view/>
			</transition>
		</v-sheet>
	</v-app>
</template>
<style>
/* apply css in all page */
html, body {
	overflow: hidden !important;
}
</style>
<style scoped>
div.v-sheet main.v-content {
	height: 100vh;
}
</style>
<script>
import { routeAssignUrl } from './modules/common.js';
import EventBus from './modules/event-bus.js';

const openMenu = function() {
	EventBus.$emit('navi-draw', true);
};

export default {
	name: 'App',
	methods: {
		routeAssignUrl,
		getWindowWidth() {
			this.windowWidth = document.documentElement.clientWidth;
			this.$store.commit('small', this.windowWidth < 960);
		},
		openMenu,
	},
	components: {
	},
	data: function() {
		return {
			windowWidth: 0,
			small: this.$store.getters.small,
			docs: false,
			menus: [
				{ route: 'docs' },
			]
		}
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowWidth);

			//Init
			this.getWindowWidth()
		})

	},
	computed: {
		small_() {
			return this.$store.getters.small;
		}
	},
	watch: {
		small_(val) {
			this.small = val;
		},
		$route() {
			if ( this.$route.path.match(/^\/docs/) ) {
				this.docs = true;
			} else {
				this.docs = false;
			}
		}
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowWidth);
	}
};
</script>
