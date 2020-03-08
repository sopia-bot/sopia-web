<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Spoor Chat</h1>
				<h2 class="subtitle-1 grey--text mt-2">스푼라디오에서 도네이션 사용하기</h2>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							간단한 사용법은 <router-link class="blue-grey--text" to="/docs/quick-start/spoor-chat">Spoor Chat 설정</router-link> 문서를 참고하세요.<br>
							이 문서에선 시그니처에 대해 설명합니다.
						</v-sheet>
					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">시그니처란?</h1>
				<v-row class="mt-6">
					<v-col>
						특정 단어에 대하여 DJ 본인의 음성을 등록해 두면, 해당 단어의 Spoor Chat은 음성합성 시스템이 아닌 등록한 음성이 재생됩니다.
					</v-col>
				</v-row>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">시그니처 등록하기</h1>
				<v-row class="mt-6">
					<v-col>
						Spoor Signature 우측 하단 + 버튼을 눌러 <code>mp3</code> 또는 <code>base64</code> 확장자 파일을 선택할 수 있습니다.

						<Picture :src="imgs.add" />

						아니면 마이크 모양 버튼을 눌러 즉석에서 녹음할 수 있습니다.

						<Picture :src="imgs.record" />

						시그니처 텍스트를 입력하고 등록을 누르면 추가됩니다.
						이후 꼭 Save를 눌러 적용시켜야 등록한 시그니처가 적용됩니다.

						<Picture :src="imgs.added" />
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
		title: Lang('meta.docs.m.spoor-chat'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.m.spoor-chat.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "도네이션", "스푼 도네", "스푼 시그니처", "시그니처"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.m.spoor-chat'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.m.spoor-chat.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/menus/spoor-chat/signature-added.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'spoor-chat-menu',
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
				add: require('@/assets/docs/menus/spoor-chat/signature-add.gif'),
				added: require('@/assets/docs/menus/spoor-chat/signature-added.gif'),
				record: require('@/assets/docs/menus/spoor-chat/signature-record.gif'),
			}
		}
	}
}
</script>
