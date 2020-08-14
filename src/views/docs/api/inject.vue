<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">스크립트 삽입</h1>
				<h2 class="subtitle-1 grey--text mt-2">소피아를 완전 커스텀</h2>

				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							프로그램이 로딩되기 전, 로딩 중, 로딩 완료 세 단계에 따른 커스텀 스크립트를 삽입할 수 있습니다.
						</v-sheet>
					</v-col>
				</v-row>

				<v-divider class="my-12"></v-divider>

				<v-row>
					<v-col>
						<p class="text-button">해당 기능은 <code>sopia/inject</code> 폴더 안에 있는 스크립트를 <code>파일 이름 순</code>으로 정렬한 뒤, 순차적으로 실행합니다.</p>
					</v-col>
				</v-row>

				<v-divider class="my-12"></v-divider>

				<v-row>
					<v-col>
						<div>
							<v-chip
								:color="typeColor('function')"
								small
								outlined
								class="ma-2 text-capitalize">
								function
							</v-chip>
							<code class="black--text mr-3">
								<span class="body-1 font-weight-bold">preload</span>
							</code>
							<span>
								프로그램 로딩 전 호출되는 함수
							</span>

							<div class="mt-6 pl-6">
								정확히 <a href="https://www.w3schools.com/html/html_head.asp" target="_blink" class="blue-grey--text">Head</a> 태그가 로딩될 때 호출됩니다.
								<br>
								아직 DOM 조차 생성되지 않은 상태입니다.
								<br>
								<router-link to="/docs/api/sopia/" class="blue-grey--text">sopia</router-link> 객체는 존재합니다.
							</div>
						</div>
					</v-col>
				</v-row>

				<v-row>
					<v-col>
						<div>
							<v-chip
								:color="typeColor('function')"
								small
								outlined
								class="ma-2 text-capitalize">
								function
							</v-chip>
							<code class="black--text mr-3">
								<span class="body-1 font-weight-bold">loading</span>
							</code>
							<span>
								프로그램 로딩 중에 호출되는 함수
							</span>

							<div class="mt-6 pl-6">
								정확히 DOM 트리가 생성된 후 즉시 호출됩니다.
								<br>
								아직 이미지나 다른 스크립트의 로딩이 끝나지 않았을 수 있습니다.
							</div>
						</div>
					</v-col>
				</v-row>

				<v-row>
					<v-col>
						<div>
							<v-chip
								:color="typeColor('function')"
								small
								outlined
								class="ma-2 text-capitalize">
								function
							</v-chip>
							<code class="black--text mr-3">
								<span class="body-1 font-weight-bold">complete</span>
							</code>
							<span>
								프로그램 로딩 후 호출되는 함수
							</span>

							<div class="mt-6 pl-6">
								정확히 <a href="https://developer.mozilla.org/ko/docs/Web/Events/DOMContentLoaded" target="_blink" class="blue-grey--text">DOMContentLoaded</a> 이벤트발생시 호출됩니다.
								<br>
								모든 이미지 및 하위요소의 로딩이 끝난 상황입니다.
							</div>
						</div>
					</v-col>
				</v-row>

				<v-divider class="my-12"></v-divider>

				<v-row>
					<v-col>
						<p>해당 함수들은 스크립트에서 <a href="https://nodejs.org/api/modules.html#modules_exports_shortcut" target="_blink" class="blue-grey--text">exports</a> 해서 사용합니다.</p>
						<p>예제는 폴더의 <code>0.zero.js</code> 와 <code>1.one.js</code> 를 참조하세요.</p>
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
import { mkKeyword } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';

export default {
	metaInfo: {
		title: Lang('meta.docs.api.inject'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.inject.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api", "sopia", "이벤트", '스크립트', '삽입', 'Inject', 'Script Inject']) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.inject'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.inject.desc'),
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
	name: 'api.inject',
	methods: {
		typeColor(type, text) {
			let color = "", bright = "";
			switch(type) {
				case "event":
					color = "yellow"
					bright = "darken-3";
					break;
				case "object":
					color = "green";
					bright = "darken-4";
					break;
				case "function":
					color = "cyan";
					bright = "darken-4";
					break;
				case "boolean":
					color = "pink";
					bright = "darken-4";
					break;
				case "string":
					color = "lime";
					bright = "darken-2";
					break;
			}

			if ( text ) {
				color += "--text";
				bright = "text--" + bright;
			}

			return `${color} ${bright}`;
		}
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
			objs: [
				{
					type: "event",
					name: "all",
					desc: "모든 라이브 이벤트 발생시",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
			]
		}
	}
}
</script>
