<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">투표</h1>
				<h2 class="subtitle-1 grey--text mt-2">민주주의의 힘이 필요할 때</h2>
				<v-divider class="my-6"></v-divider>
				<Picture :src="imgs.vote" caption="닉네임 노출을 허락받은 사진입니다" />
				<v-row>
					<v-col>
						<p><code>!투표 등록 [투표 제목]</code> 명령어를 사용하여 투표를 등록합니다.</p>
						<p>
							<code>
								!투표 등록 야식<br>
								치킨<br>
								피자<br>
								족발
							</code>
						</p>
						<p>투표가 등록되면, 청취자들을 <code>!투표 [번호]</code> 명령어를 사용하여 투표에 참여할 수 있습니다.</p>
						<p>투표는 1인 1회만 참여 가능합니다.</p>
						<p>투표 등록자는 <code>!투표 마감</code> 명령어를 사용하여 투표 결과를 확인할 수 있습니다.</p>
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
		title: Lang('meta.docs.bundle.vote'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.bundle.vote.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "번들", "vote", "투표"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.bundle.vote'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.bundle.vote.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/vote/vote.gif'),
				vmid: 'og:image',
			},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		],
	},
	name: 'bundle.vote',
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
				vote: require('@/assets/docs/bundle/vote/vote.gif'),
			}
		}
	}
}
</script>
