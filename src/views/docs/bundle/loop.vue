<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">반복</h1>
				<h2 class="subtitle-1 grey--text mt-2">특정 문장을 일정 시간마다 반복해서 출력</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">단일 반복</h1>
				<Picture :src="imgs.single" />
				<v-row>
					<v-col>
						<code>!반복 [초] [문장]</code> 명령어를 이용하여, 원하는 문장을 일정 시간마다 반복해서 출력되도록 할 수 있습니다.<br>
						<code>!반복 제거</code> 또는 <code>!반복 삭제</code> 명령어를 이용하여, 현재 반복 중인 동작을 정지할 수 있습니다.
					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">다중 반복</h1>
				<Picture :src="imgs.multiple" />
				<v-row>
					<v-col>
						반복 추가 명령어를 사용하여 여러번 입력하면 동작이 <a href="https://ko.wikipedia.org/wiki/스택" target="_blink" class="blue-grey--text">스택</a>으로 쌓입니다.
						추가한 동작을 삭제할 때는 가장 마지막에 추가된 동작이 먼저 삭제됩니다.
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
		title: Lang('meta.docs.bundle.loop'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.loop.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "loop", "반복"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.loop'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.loop.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/loop/loop-1.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.loop',
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
				single: require('@/assets/docs/bundle/loop/loop-1.gif'),
				multiple: require('@/assets/docs/bundle/loop/loop-2.gif'),
			}
		}
	}
}
</script>
