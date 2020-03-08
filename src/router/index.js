import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/posts.js';
import goTo from 'vuetify/es5/services/goto';

Vue.use(VueRouter)

const docsChildren = [];
Posts.cGroupList.forEach((group) => {
	const subGroup = group.singleSub;
	subGroup.forEach((g) => {
		const item = new Object();
		item.path = g.key.replace("/docs/", "");
		item.component = () => import('../views' + g.key + '.vue');
		docsChildren.push(item);
	});
});
Posts.cList.forEach((g) => {
	const item = new Object();
	item.path = g.key.replace("/docs/", "");
	item.component = () => import('../views' + g.key + '.vue');
	docsChildren.push(item);
});

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/docs',
		name: 'Docs',
		component: () => import('../views/Docs.vue'),
		children: docsChildren,
		redirect: '/docs/quick-start/install'
	},
	{
		path: '/sitemap',
		name: 'Sitemap',
		component: () => import('../views/sitemap.vue'),
	}
]

localStorage.setItem('routes', JSON.stringify(routes));

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
