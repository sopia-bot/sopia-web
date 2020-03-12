<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Var 객체</h1>
				<h2 class="subtitle-1 grey--text mt-2">임시적인 변수를 저장하는 객체</h2>
				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							해당 객체는 코드 리로딩 ( F5, 번들 설치 ) 발생시 초기화되는 객체입니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<p>
							<code class="teal--text text--darken-4">
								<span class="title font-weight-bold py-0">
									sopia.var :<span class="font-weight-regular">Object</span>
								</span>
							</code>
						</p>

						<p>
							<code class="black--text">
								<span class="body-1 font-weight-bold">sopia.var.live</span>
							</code>
							현재 라이브 정보
						</p>

						<p>
							<code class="black--text">
								<span class="body-1 font-weight-bold">sopia.var.created</span>
							</code>
							현재 라이브 시작 시간 (UTC)
						</p>

						<p>
							<code class="black--text">
								<span class="body-1 font-weight-bold">sopia.var._send_</span>
							</code>
							<code class="ml-3">sopia.send</code> 함수와 동일
						</p>

					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold mb-3">사용 예제</h1>
				<p>다음 예제는 <code>!before</code> 명령어를 쳤을 때 이전에 채팅을 쳤었던 청취자의 닉네임을 알려주는 예제입니다.</p>

				<vue-embed-gist
					gist-id="1a8f0176b6c6defd4ccaa4b2ebdcec3a"
					file="api.var.ex-1.js"></vue-embed-gist>

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
<style>
</style>
<script>
import { mkKeyword } from '../../../modules/common.js';
import Lang from '../../../languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.api.var'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.var.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api", "var", "변수"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.var'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.var.desc'),
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
	name: 'api.var',
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
		}
	}
}
</script>
