<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Sopia 객체</h1>
				<h2 class="subtitle-1 grey--text mt-2">모든 API의 집합소</h2>

				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							모든 API 는 <code>sopia</code> 객체에서 지원합니다. 해당 객체는 <a href="https://nodejs.org/api/events.html" target="_blink" class="blue-grey--text">EventEmitter</a> 입니다.
						</v-sheet>
					</v-col>
				</v-row>

				<v-row>
					<v-col>
						<p>
							<code class="teal--text text--darken-4">
								<span class="title font-weight-bold py-0">
									sopia :<span class="font-weight-regular">EventEmitter</span>
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

				<v-divider class="my-12"></v-divider>
				<h2 class="title font-weight-bold mt-2">예제 코드</h2>

				<v-row>
					<v-col>
						<p>다음 코드는 각 이벤트 발생에 따라 Console 에 기록하는 코드입니다.</p>
						
						<vue-embed-gist
							gist-id="c8eea9fbe4bf9a434e5d3de5f61af3ce"
							file="api.sopia.ex-1.js"></vue-embed-gist>
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
		title: Lang('meta.docs.api.sopia'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.sopia.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api", "sopia", "이벤트", "입장", "좋아요", "선물"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.sopia'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.sopia.desc'),
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
	name: 'api.template',
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
				{
					type: "event",
					name: "message",
					desc: "청취자가 채팅을 쳤을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "event",
					name: "join",
					desc: "청취자가 라이브에 입장했을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "event",
					name: "like",
					desc: "청취자가 좋아요를 눌렀을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "event",
					name: "present",
					desc: "청취자가 스푼을 후원했을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "event",
					name: "shadowjoin",
					desc: "청취자가 유령 상태로 라이브에 참여했을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "event",
					name: "update",
					desc: "라이브 정보가 업데이트 되었을 때",
					sub: "파라미터",
					params: [
						{ name: "live event", type: "object", desc: "라이브 이벤트 발생시 정보" },
					]
				},
				{
					type: "function",
					name: "log",
					desc: "Console 에 기록하는 함수",
					sub: "파라미터",
					params: [
						{ name: "args", type: "varargs", desc: "가변인자로, 전부 문자열화 되어 기록됩니다" },
					]
				},
			]
		}
	}
}
</script>
