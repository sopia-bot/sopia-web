<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">미니게임</h1>
				<h2 class="subtitle-1 grey--text mt-2">디제이의 컨텐츠는 어디까지 늘어날까</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">1. 추첨</h1>
				<Picture :src="imgs.randomPeople" caption="닉네임 노출 허락받은 사진입니다." />
				<v-row>
					<v-col>
						<code>!추첨</code> 명령어를 이용하여, 현재 방송 목록에 있는 청취자 중 한 명을 고릅니다.
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
import { mkKeyword } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.bundle.minigame'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.minigame.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "미니게임", "랜덤", "추첨"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.minigame'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.minigame.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/minigame/random-people.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.minigame',
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
				randomPeople: require('@/assets/docs/bundle/minigame/random-people.gif'),
			}
		}
	}
}
</script>
