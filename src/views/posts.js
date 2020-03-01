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
				}
			],
			click: () => {},
		}
	],
	cList: [
		/*
		{ name: 'single-1', click: () => {} },
		{ name: 'single-2', click: () => {} },
		*/
	]
}
