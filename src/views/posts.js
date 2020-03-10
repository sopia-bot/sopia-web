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
				{
					key: '/docs/quick-start/spoor-chat',
					name: Lang('docs.quick.spoor-chat'),
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
				{
					key: '/docs/menus/spoor-chat',
					name: Lang('docs.menus.spoor-chat'),
				},
				{
					key: '/docs/menus/setting',
					name: Lang('docs.menus.setting'),
				},
				{
					key: '/docs/menus/bundle',
					name: Lang('docs.menus.bundle'),
				},
			],
		},
		{
			name: Lang('docs.bundle'), 
			key: '/docs/bundle',
			singleSub: [
				{
					key: '/docs/bundle/onoff',
					name: Lang('docs.bundle.onoff'),
				},
				{
					key: '/docs/bundle/loop',
					name: Lang('docs.bundle.loop'),
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
