<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">SETTING</h1>
				<h2 class="subtitle-1 grey--text mt-2">자동로그인 및 소피아 설정관리</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">소피아 설정</h1>
				<Picture :src="imgs.setting" />
				<v-row class="mt-6">
					<v-col>
						<h2 class="title">1. 자동 매니저 멘트 시작</h2>
						<p>방송에 입장시 자동으로 <code>!on</code> 명령어를 사용한 상태가 됩니다.</p>
						<span class="grey--text">곧 사라질 기능입니다.</span>
						<br><br>
						<h2 class="title">2. 매니저일때만 매니저 멘트 작동</h2>
						<p>설정하지 않을시 매니저가 아니어도 입장, 좋아요, 선물에 대한 반응을 합니다.</p>
						<br>
						<h2 class="title">3. 설정 불러오기</h2>
						<p>설정 불러오기에 대한 설명은 <router-link to="/docs/quick-start/load-setting" class="blue-grey--text">이곳</router-link>을 참고하세요.</p>
						<br>
						<h2 class="title">4. 기본 스푼 Url</h2>
						<p>이 기능은 해외 거주 사용자를 위한 기능입니다. 거주 지역 서버로 자동 접속이 되면 <code>https://spooncast.net/kr</code>로 저장 후 소피아를 재시작 하면 됩니다.</p>
					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">자동 로그인</h1>
				<Picture :src="imgs.auto" />
				<v-row class="mt-6">
					<v-col>
						<p>자동 로그인을 사용 설정하고, 로그인 타입을 설정한 뒤 저장하면 다음 소피아 실행시 자동 로그인이 진행됩니다.</p>
						<p>구글 및 페이스북은 아이디와 비밀번호를 저장하지 않아도 됩니다.</p>
						<p>소피아는 아이디와 비밀번호를 저장하지만, 수집하지 않습니다.</p>
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
		title: Lang('meta.docs.setting'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.setting.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "설정", "자동로그인"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.setting'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.setting.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/menus/setting/sopia-setting.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'setting',
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
				setting: require('@/assets/docs/menus/setting/sopia-setting.gif'),
				auto: require('@/assets/docs/menus/setting/auto-login.gif'),
			}
		}
	}
}
</script>
