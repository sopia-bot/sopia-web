<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">어떻게 시리얼을 발급하나요?</h1>
				<h2 class="subtitle-1 grey--text mt-2">내가 이것까지 써야 했었나</h2>
				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							매번 말하지만 <strong>구글</strong> 및 <strong>애플</strong> 계정은 안 됩니다.<br>
							구글은 소피아 2에서 지원할 예정, 애플 미정이니 참고하시고 <br>
							본인 부주의로 인한 시리얼 발급 미숙 및 관리 부족은 해결 안 해드립니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						아래 링크를 클릭해 가입 페이지로 들어갑니다.<br>
						<a href="/signin" target="_blank" class="blue-grey--text text--darken-4">시리얼 발급</a>
					</v-col>
				</v-row>

				<Picture :src="imgs.selectType" caption="계정 신청자가 DJ인지 매니저인지 선택합니다."  />

				<Picture :src="imgs.whoDj" caption="소피아가 사용될 주 방송의 DJ를 한 명 고릅니다."  />

				<Picture :src="imgs.search" caption="하도 제대로 못 보내서 스푼 검색 시스템을 넣어놨습니다."  />

				<Picture :src="imgs.whoManager" caption="소피아를 사용할 계정을 선택합니다."  />

				<Picture :src="imgs.contents" caption="소피아가 사용되는 방송의 컨텐츠를 선택합니다."  />

				<Picture :src="imgs.requestSerial" caption="예상 외로 이 버튼을 못 누르는 사람들이 많습니다."  />

				<Picture :src="imgs.finalStep" caption="또 예상 외로 무엇을 보내야 하는지 모르는 사람도 많습니다."  />


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
		title: Lang('meta.docs.how-to-sign'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.how-to-sign.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "시리얼 발급", "시리얼", "발급", "키"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.how-to-sign'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.how-to-sign.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/quick-start/how-to-sign/select-type.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'howToSign',
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
				selectType: require('@/assets/docs/quick-start/how-to-sign/select-type.gif'),
				whoDj: require('@/assets/docs/quick-start/how-to-sign/who-dj.gif'),
				search: require('@/assets/docs/quick-start/how-to-sign/search.gif'),
				whoManager: require('@/assets/docs/quick-start/how-to-sign/who-manager.gif'),
				contents: require('@/assets/docs/quick-start/how-to-sign/contents.gif'),
				requestSerial: require('@/assets/docs/quick-start/how-to-sign/request-serial.gif'),
				finalStep: require('@/assets/docs/quick-start/how-to-sign/final-step.gif'),
			}
		}
	}
}
</script>
