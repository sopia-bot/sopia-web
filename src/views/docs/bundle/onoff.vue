<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">On Off</h1>
				<h2 class="subtitle-1 grey--text mt-2">각 이벤트별로 On/Off</h2>
				<v-divider class="my-6"></v-divider>
				<v-row>
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							해당 번들을 설치하면 모든 반응이 <code>off</code> 되어있습니다.<br>
							명령어를 사용해 기능별로 <code>on</code> 할 수 있습니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">입장</h1>
				<Picture :src="imgs.join" />
				<v-row>
					<v-col>
						<code>!입장 on</code> 이라는 명령어를 사용하여 청취자가 입장하는 것에 대한 반응을 할 수 있습니다.<br>
						또한 <code>!입장 off</code> 라는 명령어를 사용하여 청취자가 입장하는 것에 대한 반응을 하지 않을 수 있습니다.
					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">좋아요</h1>
				<Picture :src="imgs.like" />

				<v-row>
					<v-col>
						<code>!좋아요 on</code> 이라는 명령어를 사용하여 청취자가 좋아요를 누르는 것에 대한 반응을 할 수 있습니다.<br>
						또한 <code>!좋아요 off</code> 라는 명령어를 사용하여 청취자가 좋아요를 누르는 것에 대한 반응을 하지 않을 수 있습니다.
					</v-col>
				</v-row>

				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">선물</h1>

				<v-row>
					<v-col>
						<code>!선물 on</code> 이라는 명령어를 사용하여 청취자가 스푼을 선물하는 것에 대한 반응을 할 수 있습니다.<br>
						또한 <code>!선물 off</code> 라는 명령어를 사용하여 청취자가 스푼을 선물하는 것에 대한 반응을 하지 않을 수 있습니다.
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
		title: Lang('meta.docs.bundle.onoff'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.onoff.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "onoff"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.onoff'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.onoff.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/onoff/join.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.onoff',
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
				join: require('@/assets/docs/bundle/onoff/join.gif'),
				like: require('@/assets/docs/bundle/onoff/like.gif'),
			},
		}
	}
}
</script>
