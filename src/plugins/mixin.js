import Vue from 'vue';

Vue.mixin({
	methods: {
		$t(key, ...args) {
			let str = this.$vuetify.lang.t('$vuetify.' + key);

			args.forEach((arg, idx) => {
				const regx = new RegExp(`\\$${idx}`, 'g');
				str = str.replace(regx, arg);
			});

			str = str.replace(/{{\s*([\w.-]*)?\s*}}/g,
				(org, arg1) => this.$vuetify.lang.t('$vuetify.' + arg1));
			return str;
		},
		$assign(url, newTab) {
			const router = this && this.$router;

			if ( url === '-1' ) {
				if ( window.history.length > 2 ) {
					window.history.go(-1);
					return true;
				}
				return false;
			}

			if ( newTab ) {
				window.open(url);
				return true;
			}
			
			if ( router ) {
				if ( router.currentRoute.path !== url ) {
					router.push({ path: url, })
						.catch(() => {
							// ignore error
						});
				}
			}
		},
		$sleep(ms) {
			return new Promise((r) => setTimeout(r, ms));
		},
		mkKeyword(words) {
			const defaultKeywords = [
				"SOPIA",
				"소피아",
				"스푼 매니저",
				"스푼 봇",
				"스푼",
				"스푼라디오",
				"스푼 소피아",
				"매니저",
				"매크로",
				"스푼 매크로",
				"스푼 윤군",
				"스푼 개발자 윤군",
			];

			return defaultKeywords.concat(words).join(", ");
		},
	},
});
