<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">간편 매니저</h1>
				<h2 class="subtitle-1 grey--text mt-2">가장 빨리 매니저를 사용하는 방법</h2>
				<v-divider class="my-6"></v-divider>
				<v-row>
					<v-col>
						<!-- S:Login -->
						<h1 class="headline font-weight-bold">로그인</h1>
						<!-- S:Assign Serial -->
						<v-row class="mt-6">
							<v-col>
								<h1 class="title font-weight-bold mb-3">1. 시리얼 인증</h1>
								개발자에게 할당받은 시리얼로 아이디와 함께 인증합니다.<br>
								하나의 계정에 한 개 시리얼이 할당되며, 다른 PC에서 중복 로그인이 불가능합니다.
							</v-col>
						</v-row>
						<!-- E:Assign Serial -->
						<!-- S:Picture -->
						<Picture :src="imgs.sopiaSerial" />
						<!-- E:Picture -->
						<!-- S:Login Spoon -->
						<v-row class="mt-6">
							<v-col>
								<h1 class="title font-weight-bold mb-3">2. 스푼 로그인</h1>
								시리얼을 할당받은 계정으로 스푼에 로그인 합니다. 이외의 계정은 사용할 수 없습니다.
							</v-col>
						</v-row>
						<!-- E:Login Spoon -->
						<!-- S:Picture -->
						<Picture :src="imgs.sopiaLogin" />
						<!-- E:Picture -->
						<!-- S:Join Live -->
						<v-row class="mt-6">
							<v-col>
								<h1 class="title font-weight-bold mb-3">3. 방송 입장</h1>
								로그인 했으면 오른쪽 화면을 방송에 입장시킵니다.<br>
								그리고 <code class="light-blue--text">매니저</code> 를 위임하면 즉시 동작합니다.
							</v-col>
						</v-row>
						<!-- E:Join Live -->
						<!-- S:Picture -->
						<Picture :src="imgs.sopiaWelcome" caption="닉네임 노출 허락받은 사진입니다." />
						<!-- E:Picture -->

						<v-row class="mt-6">
							<v-col>
								<h1 class="title font-weight-bold mb-3">4. 쉬운 명령어 설정</h1>
								아무리 간단하다고 하지만 코딩은 처음 본 사람에겐 너무나 어려운 것이었습니다.<br>
								<router-link to="/docs/bundle/ez-cmd/" class="blue-grey--text">이 번들</router-link>을 사용하여 코딩 없이 명령어와 반응을 편하게 설정 가능합니다.
							</v-col>
						</v-row>
						<!-- E:Login -->
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
		title: Lang('meta.docs.manager'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.manager.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.manager'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.manager.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/quick-start/manager/sopia-login.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'manager',
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
				"sopiaSerial": require('@/assets/docs/quick-start/manager/sopia-serial.gif'),
				"sopiaLogin": require('@/assets/docs/quick-start/manager/sopia-login.gif'),
				"sopiaWelcome": require('@/assets/docs/quick-start/manager/sopia-welcome.gif'),
			},
		}
	}
}
</script>
