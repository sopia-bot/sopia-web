import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/posts.js';

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

console.log(docsChildren);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
		meta: { title: 'Vue Blog' },
	},
	{
		path: '/docs',
		name: 'Docs',
		component: () => import('../views/Docs.vue'),
		children: docsChildren,
		meta: { title: 'Vue Blog' },
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
