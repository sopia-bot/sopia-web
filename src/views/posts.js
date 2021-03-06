import Lang from '../languages/Lang.js';
import { routeAssignUrl } from '../modules/common.js';

export default {
	cGroupList: [
		{
			name: Lang('docs.quick.start'), 
			key: '/docs/quick-start',
			singleSub: [
				{
					key: '/docs/quick-start/how-to-sign/',
					name: Lang('docs.quick.how-to-sign'),
				},
				{
					key: '/docs/quick-start/install/',
					name: Lang('docs.quick.install'),
				},
				{
					key: '/docs/quick-start/manager/',
					name: Lang('docs.quick.manager'),
				},
				{
					key: '/docs/quick-start/spoor-chat/',
					name: Lang('docs.quick.spoor-chat'),
				},
			],
		},
		{
			name: Lang('docs.menus'), 
			key: '/docs/menus',
			singleSub: [
				{
					key: '/docs/menus/home/',
					name: Lang('docs.menus.home'),
				},
				{
					key: '/docs/menus/ez-cmd/',
					name: Lang('docs.menus.ez-cmd'),
				},
				{
					key: '/docs/menus/code/',
					name: Lang('docs.menus.code'),
				},
				{
					key: '/docs/menus/spoor-chat/',
					name: Lang('docs.menus.spoor-chat'),
				},
				{
					key: '/docs/menus/setting/',
					name: Lang('docs.menus.setting'),
				},
				{
					key: '/docs/menus/bundle/',
					name: Lang('docs.menus.bundle'),
				},
			],
		},
		{
			name: Lang('docs.bundle'), 
			key: '/docs/bundle',
			singleSub: [
				{
					key: '/docs/bundle/onoff/',
					name: Lang('docs.bundle.onoff'),
				},
				{
					key: '/docs/bundle/loop/',
					name: Lang('docs.bundle.loop'),
				},
				{
					key: '/docs/bundle/signature/',
					name: Lang('docs.bundle.signature'),
				},
				{
					key: '/docs/bundle/song-request/',
					name: Lang('docs.bundle.song-request'),
				},
				{
					key: '/docs/bundle/vote/',
					name: Lang('docs.bundle.vote'),
				},
				{
					key: '/docs/bundle/now-song/',
					name: Lang('docs.bundle.now-song'),
				},
				{
					key: '/docs/bundle/minigame/',
					name: Lang('docs.bundle.minigame'),
				},
				{
					key: '/docs/bundle/ez-cmd/',
					name: Lang('docs.bundle.ez-cmd'),
				},
				{
					key: '/docs/bundle/roulette/',
					name: Lang('docs.bundle.roulette'),
				},
			],
		},
		{
			name: Lang('docs.api'), 
			key: '/docs/api',
			singleSub: [
				{
					key: '/docs/api/start/',
					name: Lang('docs.api.start'),
				},
				{
					key: '/docs/api/sopia/',
					name: Lang('docs.api.sopia'),
				},
				{
					key: '/docs/api/var/',
					name: Lang('docs.api.var'),
				},
				{
					key: '/docs/api/config/',
					name: Lang('docs.api.config'),
				},
				{
					key: '/docs/api/itv/',
					name: Lang('docs.api.itv'),
				},
				{
					key: '/docs/api/inject/',
					name: Lang('docs.api.inject'),
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
