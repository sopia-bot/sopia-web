<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">설치하기</h1>
				<h2 class="subtitle-1 grey--text mt-2">설치하기</h2>
				<v-divider class="my-6"></v-divider>
				<!-- S:Download -->
				<h1 class="headline font-weight-bold">다운로드</h1>
				<!-- S:Sheet Card -->
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							소피아는 가장 최신 버전을 사용하는 걸 권장하고 있습니다.<br>
							최신 버전을 다운로드 해 주세요.
						</v-sheet>
					</v-col>
				</v-row>
				<!-- E:Sheet Card -->
				<!-- S:Home Zip Install -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">1. 홈페이지에서 다운로드</h1>
						홈페이지는 항상 최신의 파일만 관리하고 있기 때문에 페이지에서 다운받는 것을 권장합니다.<br>
						<br>
						<v-btn @click="openNewTab('/SOPIA.zip')" text color="purple darken-3">다운로드 링크</v-btn>
					</v-col>
				</v-row>
				<!-- E:Home Zip Install -->
				<!-- S:Google Zip Install -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">2. 구글드라이브에서 다운로드</h1>
						구글 드라이브는 과거 버전부터 현재까지의 모든 버전을 모아두고 있습니다.<br>
						<br>
						<v-btn @click="openNewTab('https://drive.google.com/drive/folders/19ufWSDuN8gq6ZTgv5Qk8GjeZdD3P7NYq')" text color="yellow darken-4">다운로드 링크</v-btn>
					</v-col>
				</v-row>
				<!-- E:Google Zip Install -->
				<!-- E:Download -->
				<v-divider class="my-6"></v-divider>
				<!-- S:Run SOPIA -->
				<h1 class="headline font-weight-bold">소피아 실행</h1>
				<!-- S:Sheet Card -->
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							소피아는 PC에서만 실행시킬 수 있습니다. Windows 시스템 기반이지만, 리눅스나 Mac OS 또한 가능합니다.<br>
							리눅스, Mac OS 는 따로 상담 후 빌드를 해야 합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<!-- E:Sheet Card -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">1. 압축 해제</h1>
						다운로드한 <code>SOPIA.zip</code> 의 내용을 한 폴더에 압축 해제합니다.<br>
					</v-col>
				</v-row>
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold">2. 프로그램 실행</h1>
					</v-col>
				</v-row>
				<Picture :src="imgs.sopiaExe" />
				<v-row>
					<v-col>
						응용프로그램 <code>SOPIA.exe</code> 를 실행시킵니다.
					</v-col>
				</v-row>
				<Picture :src="imgs.sopiaSign" />
				<v-row>
					<v-col>
						위와 같은 화면이 보이면 성공입니다.
					</v-col>
				</v-row>
				<!-- E:Run SOPIA -->

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
import { openNewTab, mkKeyword } from '../../../modules/common.js';
import Lang from '../../../languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.install'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.install.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["설치", "소피아 설치", "소피아 다운", "스푼 매니저 프로그램 다운", "스푼 봇 다운"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.install'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.install.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/quick-start/install/sopia-sign.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'install',
	components: {
	},
	methods: {
		openNewTab
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
				"sopiaExe": require('@/assets/docs/quick-start/install/sopia-exe.gif'),
				"sopiaSign": require('@/assets/docs/quick-start/install/sopia-sign.gif'),
			},
		}
	}
}
</script>
