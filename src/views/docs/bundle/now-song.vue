<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">현재곡</h1>
				<h2 class="subtitle-1 grey--text mt-2">어멋, 이 노래는 플리에 넣어야 해!</h2>
				<v-divider class="my-6"></v-divider>
				<!-- S:Sheet Card -->
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							- Windows 에서만 동작합니다. <br>
							- <a href="https://www.melon.com/" target="_blank" class="blue-grey--text">멜론 플레이어</a>에서 재생되는 노래만 가능합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<!-- E:Sheet Card -->
				<Picture :src="imgs.nowSong" />
				<v-row>
					<v-col>
						<code>!현재곡</code> 명령어를 이용하여, 재생중인 곡의 제목 및 가수명을 알 수 있습니다.<br>
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
		title: Lang('meta.docs.bundle.now-song'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.now-song.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "현재곡", "멜론", "플리"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.now-song.loop'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.now-song.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/now-song/command.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.now-song',
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
				nowSong: require('@/assets/docs/bundle/now-song/command.gif'),
			}
		}
	}
}
</script>
