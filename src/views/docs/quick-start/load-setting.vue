<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">설정 불러오기</h1>
				<h2 class="subtitle-1 grey--text mt-2">새로운 버전 업그레이드시 이전 설정 로딩</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">새로운 버전 실행</h1>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							기존 사용자가 새로 업데이트 했을 때만 해당됩니다!<br>
							이전 버전 설정이 잘못 된 상태로 불러오면, 새로운 버전도 잘못됩니다.<br>
							설정이 잘 불러와 지는지 확인하고 이전 버전을 삭제해 주세요.
						</v-sheet>
					</v-col>
				</v-row>
				<!-- S:Click Load Setting -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">1. 설정 불러오기</h1>
					</v-col>
				</v-row>
				<!-- S:Picture -->
				<Picture :src="imgs.findFile" />
				<!-- E:Picture -->
				<v-row class="mt-6">
					<v-col>
						SETTING 탭 &gt; SOPIA 설정 &gt; 설정 불러오기를 클릭합니다.
					</v-col>
				</v-row>
				<!-- E:Click Load Setting -->
				<!-- S:Select Folder -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">2. 폴더 선택</h1>
					</v-col>
				</v-row>
				<!-- S:Picture -->
				<Picture :src="imgs.prevVerFolder" />
				<!-- E:Picture -->
				<v-row class="mt-6">
					<v-col>
						이전 버전의 <code>SOPIA.exe</code>가 있는 폴더를 선택합니다.
					</v-col>
				</v-row>
				<!-- E:Select Folder -->
				<!-- S:Check Success -->
				<v-row class="mt-6">
					<v-col>
						<h1 class="title font-weight-bold mb-3">3. 성공 확인</h1>
					</v-col>
				</v-row>
				<!-- S:Picture -->
				<Picture :src="imgs.successLoad" />
				<!-- E:Picture -->
				<v-row class="mt-6">
					<v-col>
						성공 메시지가 나오는지 확인합니다.
					</v-col>
				</v-row>
				<!-- E:Check Success -->
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
		title: Lang('meta.docs.load-setting'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.load-setting.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "설정 불러오기"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.load-setting'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.load-setting.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/quick-start/load-setting/success-load.png'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'load-setting',
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
				"findFile": require('@/assets/docs/quick-start/load-setting/find-file.png'),
				"prevVerFolder": require('@/assets/docs/quick-start/load-setting/prev-ver-folder.png'),
				"successLoad": require('@/assets/docs/quick-start/load-setting/success-load.png'),
			},
		}
	}
}
</script>
