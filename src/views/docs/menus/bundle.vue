<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">BUNDLE</h1>
				<h2 class="subtitle-1 grey--text mt-2">더 많은 소피아의 기능</h2>
				<v-divider class="my-6"></v-divider>
				<v-row>
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							각 번들의 세세한 설명 및 사용법은 <router-link to="/docs/bundle/onoff/" class="blue-grey--text">번들 안내</router-link> 메뉴에서 확인할 수 있습니다.
						</v-sheet>
					</v-col>
				</v-row>

				<Picture :src="imgs.bundle" />

				<v-row class="mt-6">
					<v-col>
						소피아가 기본적으로 제공하지 않는 편리한 기능들을 기능별로 사용할 수 있습니다.<br>
						프로그램을 업데이트하지 않아도, 번들은 업데이트 가능합니다.<br>
						<code class="red--text">매니저</code> 라고 적혀있는 번들은, 매니저 이상의 권한을 가진 사람만 사용할 수 있습니다.
					</v-col>
				</v-row>

				<!-- S:Footer -->
				<v-divider class="mt-12 mb-3"></v-divider>
				<v-row class="my-6">
					<v-col align="center">
						<p class="blue-grey--text text--lighten-3">작성자 - 개발자 윤군</p>
					</v-col>
				</v-row>
				<!-- E:Footer -->
			</v-col>
			<v-col cols="0" sm="1" md="4"></v-col>
		</v-row>
	</v-container>
</template>
<script>
import { mkKeyword } from '../../../modules/common.js';
import Lang from '../../../languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.bundle'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "onoff", "반복", "시그니처", "신청곡"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/menus/bundle/bundle.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'menus-bundle',
	components: {
	},
	created: function() {
	},
	mounted: function() {
	},
	computed: {
		small_() {
			return this.$store.getters.small;
		}
	},
	watch: {
		small_(val) {
			this.small = val;
		}
	},
	data: function() {
		return {
			small: false,
			imgs: {
				bundle: require('@/assets/docs/menus/bundle/bundle.gif'),
			},
		}
	}
}
</script>
