import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home/Index.vue'),
	},
	//{
	//	path: '/sitemap',
	//	name: 'Sitemap',
	//	component: () => import('../views/sitemap.vue'),
	//},
];

//localStorage.setItem('routes', JSON.stringify(routes));

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
