<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Config 객체</h1>
				<h2 class="subtitle-1 grey--text mt-2">소피아 설정</h2>

				<v-divider class="my-6"></v-divider>
				<v-row>
					<v-col>
						<p>
							<code class="teal--text text--darken-4">
								<span class="title font-weight-bold py-0">
									sopia.config : <span class="font-weight-regular">Object</span>
								</span>
							</code>
						</p>

						<div v-for="(o, idx) in objs" :key="idx">
							<v-divider class="my-12"></v-divider>
							<v-chip
								:color="typeColor(o.type)"
								small
								outlined
								class="ma-2 text-capitalize">
								{{ o.type }}
							</v-chip>
							<code class="black--text mr-3">
								<span class="body-1 font-weight-bold">{{ o.name }}</span>
							</code>
							<span>
								{{ o.desc }}
							</span>

							<div v-if="o.sub">
							<h3 class="subheader-1 my-3 pl-3">{{ o.sub }}</h3>
								<v-simple-table fixed-header>
									<template v-slot:default>
										<thead>
											<tr>
												<th class="text-left">Name</th>
												<th class="text-left">Type</th>
												<th class="text-left">Description</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="(p, pidx) in o.params" :key="o + '' + pidx">
												<td class="text-capitalize">
													{{ p.name }}
												</td>
												<td class="text-capitalize">
													<code :class="typeColor(p.type, true)">{{ p.type }}</code>
												</td>
												<td class="text-capitalize">
													{{ p.desc }}
												</td>
											</tr>
										</tbody>
									</template>
								</v-simple-table>
							</div>
						</div>

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
		title: Lang('meta.docs.api.config'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.config.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api", "sopia", "config", "설정", "자동로그인"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.config'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.config.desc'),
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
	name: 'api.config',
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
					bright = "darken-4";
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
					type: "object",
					name: "sopia",
					desc: "소피아 설정 정보",
					sub: "하위 변수",
					params: [
						{ name: "autostart", type: "boolean", desc: "소피아 자동 시작" },
						{ name: "onlymanager", type: "boolean", desc: "매니저일때만 매니저 멘트 작동" },
						{ name: "limitoff", type: "boolean", desc: "소피아 글자수 제한 넘어갈 시 100글자씩 나누어 전송" },
					]
				},
				{
					type: "object",
					name: "autologin",
					desc: "자동 로그인 설정 정보",
					sub: "하위 변수",
					params: [
						{ name: "enable", type: "boolean", desc: "자동 로그인 기능 사용 여부" },
						{ name: "id", type: "string", desc: "이메일/핸드폰 계정일 때 Id" },
						{ name: "passwd", type: "string", desc: "이메일/핸드폰 계정일 때 비밀번호" },
						{ name: "type", type: "string", desc: "로그인 타입" },
					]
				},
				{
					type: "string",
					name: "api-url",
					desc: "소피아 api 주소",
				},
				{
					type: "object",
					name: "license",
					desc: "라이센스 인증 정보",
					sub: "하위 변수",
					params: [
						{ name: "id", type: "string", desc: "고유 닉네임 Id" },
						{ name: "key", type: "string", desc: "인증한 시리얼 키" },
					]
				},
				{
					type: "object",
					name: "spoor",
					desc: "Spoor Chat 설정 정보",
					sub: "하위 변수",
					params: [
						{ name: "enable", type: "boolean", desc: "Spoor Chat 사용 여부" },
						{ name: "type", type: "string", desc: "TTS 목소리 타입" },
						{ name: "minspoon", type: "Number", desc: "Spoor Chat 최소 요구 스푼" },
						{ name: "effectvolume", type: "Number", desc: "Spoor Chat 효과음 볼륨" },
						{ name: "ttsvolume", type: "Number", desc: "TTS 및 시그니처 볼륨" },
						{ name: "toutspoor", type: "Number", desc: "Spoor Chat 대기 시간" },
						{ name: "signature", type: "Object", desc: "시그니처 설정 정보" },
					]
				},
				{
					type: "object",
					name: "bundle",
					desc: "번들 정보",
				},
				{
					type: "string",
					name: "version",
					desc: "현재 소피아 버전 정보",
				},
			]
		}
	}
}
</script>
