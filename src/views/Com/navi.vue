<template>
	<v-navigation-drawer
		v-model="drawer"
		:width="small ?  '350px' : '100%'"
		color="white"
		style="padding-left:4rem; padding-top: 1rem;"
		class="custom"
		:permanent="!small"
		:temporary="small"
		:fixed="small"
		>
			<v-list dense>
				<v-list-group
					v-for="cGroup in cGroupList"
					:key="cGroup.key"
					class="custom"
					:value="isSelectGroup"
					color="purple--text text--darken-4"
					active-class="purple--text text--darken-4">
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title class="body-2" @click="cGroup.click">{{ cGroup.name }}</v-list-item-title>
						</v-list-item-content>
					</template>

					<!-- S:Sub Item -->
					<v-list-item
						v-for="ssingle in cGroup.singleSub"
						:key="ssingle.key"
						@click="routeAssignUrl(ssingle.key)"
						:class="getItemClass(ssingle.key)"
						value="true"
						>
						<v-list-item-content>
							<v-list-item-title class="body-2">{{ ssingle.name }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<!-- E:Sub Item -->
				</v-list-group>

				<v-list-item
					v-for="cObj in cList"
					:key="cObj.name"
					@click="cObj.click"
					>
					<v-list-item-content>
						<v-list-item-title class="body-2">{{ cObj.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
	</v-navigation-drawer>
</template>
<style scoped>
div.v-list-group.custom
	>div.v-list-group__items
	>div
	>div.v-list-item
	>div.v-list-item__content,
div.v-list-group.custom
	>div.v-list-group__items
	>div
	>div.v-list-group
	>div.v-list-group__items
	>div
	>div.v-list-item
	>div.v-list-item__content {
	/* first, second deps single item left padding */
	padding-left: 49px;
}
</style>
<style>
aside.v-navigation-drawer.custom div.v-navigation-drawer__border {
	background: none !important;
}
</style>
<script>
import { routeAssignUrl, getPostsJson } from '../../modules/common.js';
import EventBus from '../../modules/event-bus.js';
import Lang from '../../languages/Lang.js';
import Posts from '../posts.js';

const buildCategoryObject = (posts, _this) => {
	let keys = Object.keys(posts);
	let groupList = [];
	let List = [];
	let reUrl = "/blog/category";

	// first deps
	keys.forEach(k => {
		let c = posts[k];
		let sub = c.sub;
		let subKeys = Object.keys(sub);

		if ( subKeys.length === 0 ) {
			// single item
			List.push( {
				name: k,
				click: () => {
					routeAssignUrl(reUrl + c.href, _this);
				}
			} );
		} else {
			let subList = [];
			let singleSub = [];
			// sub category group

			// second deps
			subKeys.forEach(sk => {
				let sc = sub[sk];
				let ssub = sc.sub;
				let ssubKeys = Object.keys(ssub);

				if ( ssubKeys.length === 0 ) {
					// single item
					singleSub.push( {
						name: sk,
						click: () => {
							routeAssignUrl(reUrl + sc.href, _this);
						}
					} );
				} else {
					let thirdDep = [];
					// sub category group

					// third deps
					ssubKeys.forEach(ssk => {
						// only single item
						thirdDep.push( {
							name: ssk,
							click: () => {
								routeAssignUrl(reUrl + ssub[ssk].href, _this);
							}
						} );
					});

					subList.push({
						name: sk,
						click: () => {
							routeAssignUrl(reUrl + sub[sk].href, _this);
						},
						sub: thirdDep
					});
				}
			});

			groupList.push({
				name: k,
				click: () => {
					routeAssignUrl(reUrl + c.href, _this);
				},
				sub: subList,
				singleSub: singleSub
			});
		}
	});

	return { cList: List, cGroupList: groupList };
};

export default {
	name: 'navigation',
	methods: {
		routeAssignUrl,
		Lang,
		getItemClass: function(key) {
			if ( this.$route.path === key ) {
				return "ml-6 blue-grey lighten-5";
			}

			return "ml-6";
		},
		isSelectGroup: function(key) {
			const regx = new RegExp(`^${key}`);
			if ( this.$route.path.match(regx) ) {
				return true;
			}

			return false;
		}
	},
	components: {
	},
	created: function (){
		EventBus.$on('navi-draw', (val) => {
			this.drawer = val;
		});
	},
	computed: {
		small_() {
			return this.$store.getters.small;
		},
	},
	watch: {
		small_(val) {
			this.small = val;
		},
	},
	data: function () {
		return {
			drawer: false,
			cGroupList: Posts.cGroupList,
			cList: Posts.cList,
			small: this.$store.getters.small,
			item: null,
		}
	},
}
</script>
