import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/posts.js';
import goTo from 'vuetify/es5/services/goto';
import path from 'path';

Vue.use(VueRouter)

const docsChildren = [];
Posts.cGroupList.forEach((group) => {
	const subGroup = group.singleSub;
	subGroup.forEach((g) => {
		const item = new Object();
		item.path = g.key.replace("/docs/", "");
		item.component = () => import('../views' + g.key.replace(/\/$/, "") + '.vue');
		item.pathToRegexpOptions = {
			strict: true,
		};
		docsChildren.push(item);
	});
});
Posts.cList.forEach((g) => {
	const item = new Object();
	item.path = g.key.replace("/docs/", "");
	item.component = () => import('../views' + g.key.replace(/\/$/, "") + '.vue');
	item.pathToRegexpOptions = {
		strict: true,
	};
	docsChildren.push(item);
});
console.log(docsChildren);

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
		redirect: '/docs/quick-start/install/'
	},
	{
		path: '/sitemap',
		name: 'Sitemap',
		component: () => import('../views/sitemap.vue'),
	},
	{
		path: '/signin/',
		name: 'Sign In',
		component: () => import('../views/SignIn.vue'),
	},
	{
		path: '/release/',
		name: 'Release Note',
		component: () => import('../views/Note.vue'),
	},
	{
		path: '/refresh-key/',
		name: 'Refresh Serial Key',
		component: () => import('../views/RefKey.vue'),
	},
    {
        path: '/shop/',
        name: 'Shop',
        component: () => import('../views/Shop/List.vue'),
    },
    {
        path: '/shop/pay',
        name: 'Pay',
        component: () => import('../views/Shop/Pay.vue'),
    },
    {
        path: '/shop/finish',
        name: 'Fin',
        component: () => import('../views/Shop/Fin.vue'),
    },
    {
        path: '/shop/accept',
        name: 'Accept',
        component: () => import('../views/Shop/Accept.vue'),
    },
]

localStorage.setItem('routes', JSON.stringify(routes));

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
