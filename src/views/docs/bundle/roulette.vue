<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">룰렛</h1>
				<h2 class="subtitle-1 grey--text mt-2">요즘 스푼 인싸들만 쓴다는 이것?!</h2>
				<v-divider class="my-6"></v-divider>
				<v-row>
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							소피아 <code>1.9.5</code> 버전 이상 지원합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<Picture :src="imgs.menu" />
				<v-row>
					<v-col>
						해당 번들을 사용기로 하면, OTHER 메뉴에 <code>ROULETTE</code> 메뉴가 추가됩니다.<br>
						만약 추가되지 않았거나 페이지가 정상 이동하지 않을 경우 소피아 프로그램을 재시작 해야 합니다.
					</v-col>
				</v-row>
				<Picture :src="imgs.setting" />
				<v-row>
					<v-col>
						<ul>
							<li>룰렛 사용: 룰렛 번들 사용 여부</li>
							<li>최소 요구 스푼: 룰렛이 돌아가기 위한 최소 스푼 갯수</li>
							<li>룰렛 효과 사용: 룰렛이 돌아가는 효과 사용 여부</li>
							<li>룰렛 효과 지속 시간: 룰렛이 돌아가는 효과 지속 시간</li>
						</ul>
					</v-col>
				</v-row>
				<Picture :src="imgs.list" />
				<v-row>
					<v-col>
						룰렛이 랜덤으로 뽑을 아이템 내용과 그 내용의 확률을 정할 수 있으며 확률은 백분율입니다.
					</v-col>
				</v-row>
				<Picture :src="imgs.example" />
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
	name: 'roulette',
	metaInfo: {
		title: Lang('meta.docs.bundle.roulette'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.ez-cmd.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "명령어", "룰렛"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.roulette'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.roulette.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/roulette/example.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
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
				menu: require('@/assets/docs/bundle/roulette/menu.gif'),
				setting: require('@/assets/docs/bundle/roulette/setting.gif'),
				list: require('@/assets/docs/bundle/roulette/list.gif'),
				example: require('@/assets/docs/bundle/roulette/example.gif'),
			},
		}
	}
}
</script>

