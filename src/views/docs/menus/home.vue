<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">HOME</h1>
				<h2 class="subtitle-1 grey--text mt-2">라이브 정보와 Console</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">1. 라이브 정보</h1>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							라이브 정보는 로그인 한 뒤, 방송에 입장해야 수집됩니다.
						</v-sheet>
					</v-col>
				</v-row>
				<Picture :src="imgs.liveInfo" caption="닉네임 노출을 허락받은 사진입니다." max-width="600px" />
				<v-row class="mt-6">
					<v-col>
						라이브 및 디제이 정보가 화면에 표시되며, 오른쪽 텍스트를 클릭하면 클립보드에 복사됩니다.
					</v-col>
				</v-row>


				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">2. Console</h1>
				<Picture :src="imgs.consoleEx"/>
				<v-row class="mt-6">
					<v-col>
						<code>Console</code> 은 자바스크립트 콘솔창입니다.<br>
						개발자도구 하위 호환이라고 볼 수 있습니다.<br>
						소피아 동작을 디버깅 할 수 있습니다.
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
		title: Lang('meta.docs.home'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.home.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "HOME"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.home'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.home.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/menus/home/live-info.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'home',
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
				'liveInfo': require('@/assets/docs/menus/home/live-info.gif'),
				'consoleEx': require('@/assets/docs/menus/home/console-ex.gif'),
			}
		}
	}
}
</script>
