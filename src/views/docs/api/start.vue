<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">소피아 API 시작하기</h1>
				<h2 class="subtitle-1 grey--text mt-2">세상에서 가장 똑똑하고 일 잘하는 매니저 만들기</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">사전 지식</h1>
				<Picture :src="imgs.nodejs" />
				<v-row>
					<v-col>
						<p>소피아는 프로그래밍 언어 중 하나인 Javascript 를 사용했습니다. API 가이드에선 프로그래밍에 관한 설명은 없으며, 오로지 소피아가 지원하는 객체와 그 사용법에 대해서만 설명합니다.</p>
						<p>자바스크립트 가이드는 <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/" target="_blink" class="blue-grey--text">MDN</a> 을 참고하십시오.</p>
					</v-col>
				</v-row>


				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">소피아 객체</h1>
				<v-row>
					<v-col>
						<p>모든 API 는 <code>sopia</code> 객체에서 지원합니다. 해당 객체는 <a href="https://nodejs.org/api/events.html" target="_blink" class="blue-grey--text">EventEmitter</a> 입니다.</p>
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
		title: Lang('meta.docs.api.start'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.start.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.start'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.start.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/home/bot.png'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'api.start',
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
				nodejs: require('@/assets/docs/api/start/nodejs.png'),
			}
		}
	}
}
</script>
