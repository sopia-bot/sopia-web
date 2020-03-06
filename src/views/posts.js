import Lang from '../languages/Lang.js';
import { routeAssignUrl } from '../modules/common.js';

export default {
	cGroupList: [
		{
			name: Lang('docs.quick.start'), 
			key: '/docs/quick-start',
			singleSub: [
				{
					key: '/docs/quick-start/install',
					name: Lang('docs.quick.install'),
				},
				{
					key: '/docs/quick-start/manager',
					name: Lang('docs.quick.manager'),
				},
				{
					key: '/docs/quick-start/load-setting',
					name: Lang('docs.quick.load-setting'),
				},
			],
		},
		{
			name: Lang('docs.menus'), 
			key: '/docs/menus',
			singleSub: [
				{
					key: '/docs/menus/home',
					name: Lang('docs.menus.home'),
				},
				{
					key: '/docs/menus/code',
					name: Lang('docs.menus.code'),
				},
			],
		},
	],
	cList: [
		/*
		{ name: 'single-1', click: () => {} },
		{ name: 'single-2', click: () => {} },
		*/
	]
}
