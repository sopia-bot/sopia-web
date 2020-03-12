<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Itv 객체</h1>
				<h2 class="subtitle-1 grey--text mt-2">일정 시간마다 반복 작업 수행</h2>

				<v-divider class="my-6"></v-divider>

				<v-row>
					<v-col>
						<p>
							<code class="teal--text text--darken-4">
								<span class="title font-weight-bold py-0">
									sopia.itv : <span class="font-weight-regular">Object</span>
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
						<p>다음 코드는 5초마다 현재 몇 회 반복했는지 채팅을 보내면서, 5회 동작 후 반복을 제거하는 코드입니다.</p>
						
						<vue-embed-gist
							gist-id="e79c365d5435abb295acd413ab05d88a"
							file="api.itv.ex-1.js"></vue-embed-gist>
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
		title: Lang('meta.docs.api.itv'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: Lang('meta.docs.api.itv.desc'), vmid: 'description' },
			{ name: 'keywords', content: mkKeyword(["봇 사용법", "스푼 라디오 매니저 사용법", "api", "sopia", "반복", "itv", "interval", "인터벌"]) },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.docs.api.itv'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.docs.api.itv.desc'),
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
	name: 'api.itv',
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
					type: "function",
					name: "add",
					desc: "반복 작업 추가",
					sub: "파라미터",
					params: [
						{ name: "key", type: "string", desc: "반복 작업 이름" },
						{ name: "func", type: "function", desc: "반복 작업을 수행할 함수" },
						{ name: "time", type: "number", desc: "반복 시간 ( ms 단위 )" },
					]
				},
				{
					type: "function",
					name: "clear",
					desc: "반복 작업 제거",
					sub: "파라미터",
					params: [
						{ name: "key", type: "string", desc: "반복 작업 이름" },
					]
				},
				{
					type: "function",
					name: "clear",
					desc: "반복 작업 다시 시작",
					sub: "파라미터",
					params: [
						{ name: "key", type: "string", desc: "반복 작업 이름" },
					]
				},
			]
		}
	}
}
</script>
