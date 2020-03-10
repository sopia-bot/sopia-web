<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">시그니처</h1>
				<h2 class="subtitle-1 grey--text mt-2">현재 등록된 시그니처 텍스트 목록 확인</h2>
				<v-divider class="my-6"></v-divider>
				<Picture :src="imgs.list" />
				<v-row>
					<v-col>
						시그니처는 <router-link class="blue-grey--text">Spoor Chat</router-link>에서 부가적으로 본인이 등록해야 하는 것을,
						똑똑한 여러분이라면 이미 이전 글을 읽어서 알고 계실겁니다.<br>
						시그니처 번들은 등록된 시그니처 목록을 보여주는 <code>!시그니처</code> 명령어를 추가합니다.
					</v-col>
				</v-row>
				<Picture :src="imgs.cmd" />
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
		title: Lang('meta.docs.bundle.signature'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.signature.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "signature", "도네이션", "도네", "시그니처"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.signature'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.signature.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/signature/signature-list.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.signature',
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
				cmd: require('@/assets/docs/bundle/signature/signature-cmd.gif'),
				list: require('@/assets/docs/bundle/signature/signature-list.gif'),
			}
		}
	}
}
</script>
