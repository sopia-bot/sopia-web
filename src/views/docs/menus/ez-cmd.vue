<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">쉬운 명령어 추가</h1>
				<h2 class="subtitle-1 grey--text mt-2">이걸 준비하게 될 줄은 몰랐어</h2>
				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							소피아 <code>1.7.0</code> 버전부터 기본 제공 합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row class="mt-0">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							해당 기능은 <router-link to="/docs/menus/code/" class="blue-grey--text">CODE</router-link> 탭의 <code>storages</code> 폴더 안 파일을 공유합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row class="mt-0">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							해당 번들과 동시에 <router-link to="/docs/bundle/onoff/" class="blue-grey--text">OnOff</router-link> 번들을 사용중이라면, 소피아에 오동작이 일어날 수 있습니다.
						</v-sheet>
					</v-col>
				</v-row>
				<Picture :src="imgs.joinLike" />
				<v-row>
					<v-col>
						입장 & 하트에 대한 반응을 쉽게 설정할 수 있습니다.<br>
						설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다.
					</v-col>
				</v-row>
				<Picture :src="imgs.present" />
				<v-row>
					<v-col>
						스푼을 선물받았을 때에 반응을 쉽게 설정할 수 있습니다.<br>
						설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다.<br>
						<br>
						<code>추가</code> 버튼을 누르면 빈 아이템이 생성됩니다.<br>
					</v-col>
				</v-row>
				<Picture :src="imgs.sticker" />
				<v-row>
					<v-col>
						<p><code>스티커</code> 버튼을 누르면 반응할 스푼 스티커를 선택할 수 있습니다.</p>
						<p><code>기본</code> 의 값은, 설정되지 않은 스티커에 대해 반응합니다.</p>
					</v-col>
				</v-row>
				<Picture :src="imgs.command" />
				<v-row>
					<v-col>
						일정한 문장을 답변하는 명령어를 쉽게 등록합니다.<br>
						설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다.<br>
						<code>\n</code> 문자를 추가하여 개행을 삽입할 수 있습니다.<br>
						왼쪽에는 반응할 문장을 추가합니다. 띄어쓰기는 올 수 없습니다.
						위 사진으로 예를 들면 <code>!AA</code> 명령어는 <code>aaa</code> 란 문장을 답변합니다.
					</v-col>
				</v-row>
				<h3 class="red--text text--darken-3">모든 설정은 아래 적용 버튼을 눌러야 적용됩니다.</h3>
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
	name: 'bundle.ez-cmd',
	metaInfo: {
		title: Lang('meta.docs.ez-cmd'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.ez-cmd.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "명령어", "추가", "입장", "좋아요", "반응", "멘트"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.ez-cmd'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.ez-cmd.desc'),
				vmid: 'og:description',
			},
			{
				property: 'og:image',
				content: require('@/assets/docs/bundle/ez-cmd/join_like.png'),
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
				viewMenu: require('@/assets/docs/bundle/ez-cmd/view-menu.png'),
				joinLike: require('@/assets/docs/bundle/ez-cmd/join_like.png'),
				present: require('@/assets/docs/bundle/ez-cmd/present.png'),
				sticker: require('@/assets/docs/bundle/ez-cmd/sticker.png'),
				command: require('@/assets/docs/bundle/ez-cmd/command.png'),
			},
		}
	}
}
</script>
