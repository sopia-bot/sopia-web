import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
/blog/v/category... -> alias 를 사용하여 /blog 로 보이도록 함.
  - /blog/v/:category
/blog/posts/... -> 포스팅을 보여줌.
  - /blog/posts/:post
 */

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
		children: [
			{
				path: ':path(.*)',
				component: () => import('../views/Docs/BlogPost.vue'),
			},
		],
		meta: { title: 'Vue Blog' },
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
