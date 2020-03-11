<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">신청곡</h1>
				<h2 class="subtitle-1 grey--text mt-2">청취자들의 신청곡 목록 관리</h2>
				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							이 명령어는 디제이가 틀어놓은 음악 스트림이과 연동되지 않습니다.<br>
							단지 신청곡 목록을 관리할 뿐입니다.
						</v-sheet>
					</v-col>
				</v-row>
				<Picture :src="imgs.cmd" />
				<v-row>
					<v-col>
						<p><code>!신청곡</code> 명령어로 현재 신청곡 목록을 확인할 수 있습니다.</p>
						<p><code>!신청곡 [신청할 곡 이름]</code> 명령어로 신청곡을 목록에 추가할 수 있습니다.</p>
						<p><code>!신청곡 삭제</code> 또는 <code>!신청곡 제거</code> 명령어로 가장 마지막에 추가된 신청곡을 제거할 수 있습니다.</p>
						<p><code>!신청곡 삭제 [신청곡 번호]</code> 또는 <code>!신청곡 제거 [신청곡 번호]</code> 명령어로 원하는 신청곡 목록을 제거할 수 있습니다.</p>
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
import { openNewTab, mkKeyword } from '../../../modules/common.js';
import Lang from '../../../languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.bundle.song-request'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.song-request.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["번들", "소피아 번들", "신청곡"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.song-request'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.song-request.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/song-request/song-req.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.song-request',
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
				cmd: require('@/assets/docs/bundle/song-request/song-req.gif'),
			},
		}
	}
}
</script>
