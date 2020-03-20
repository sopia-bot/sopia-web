
<template>
	<v-content class="custom">
		<!-- S:Error SnackBar -->
		<v-snackbar
			v-model="snackbar"
			:timeout="5000"
			multi-line>
			{{ snackText }}
			<v-btn
				color="red"
				text
				@click="snackbar = false">
				Close
			</v-btn>
		</v-snackbar>
		<!-- E:Error SnackBar -->
		<v-dialog
			v-model="resDiag"
			width="80%"
			max-width=600>
			<v-card class="pa-3">
				<v-card-title class="headline purple--text text--darken-4">환영합니다!</v-card-title>
				<v-card-text>
					<v-container>
						<v-row align="center">
							<v-col>
								<h2 class="title black--text">신청이 완료되었습니다.</h2>
								<h3 class="subtitle-1">스푸너님의 시리얼은 <span class="purple--text text--darken-4">{{ serial }}</span> 입니다.</h3>
								<h3 class="subtitle-1">아래 내용을 복사하여 1:1 카톡방으로 보내주시면 확인 후 발급해 드립니다.</h3>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col>
								<v-textarea
									id="ta"
									:value="resText"
									color="purple darken-4"
									label="신청 양식"></v-textarea>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="center">
								<v-btn class="purple darken-4" dark @click="copyText">복사</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
			</v-card>
		</v-dialog>
		<!-- S:User Search Dialog -->
		<v-dialog
			v-model="dialog"
			width="80%"
			max-width="600">
			<v-card class="pa-3">
				<v-card-title class="headline purple--text text--darken-4">유저 검색</v-card-title>
				<v-card-text>
					<v-container>
						<v-row align="center">
							<v-col cols="7" sm="9">
								<v-text-field
									label="닉네임"
									v-model="nickname"
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
							<v-col align="center">
								<v-btn
									text
									color="purple darken-4"
									@click="searchUsers">
									검색
								</v-btn>
							</v-col>
						</v-row>
						<v-divider></v-divider>
						<v-row align="center">
							<v-col align="center">
								<v-list two-line>
									<v-list-item
										v-for="(user, idx) in users"
										:key="idx"
										align="center"
										@click="dtype === 'dj' ? djtag = user.tag : acctag = user.tag; dialog=false;">
										<v-list-item-avatar>
											<v-img :src="user.profile_url"></v-img>
										</v-list-item-avatar>
										<v-list-item-content align="left">
											<v-list-item-title>{{ user.nickname }}</v-list-item-title>
											<v-list-item-subtitle>{{ user.tag }}</v-list-item-subtitle>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-col>
						</v-row>
					</v-container>
				</v-card-text>
			</v-card>
		</v-dialog>
		<!-- E:User Search Dialog -->
		<v-row align="center">
			<v-col cols="0" sm="2" md="3"></v-col>
			<v-col align="center">
				<v-stepper v-model="step" vertical style="box-shadow: none;">
					<v-stepper-step :complete="step > 1" step="1" color="purple darken-3">
						당신은 DJ 인가요?
					</v-stepper-step>
					<v-stepper-content step="1">
						<v-radio-group v-model="who" row class="ml-6" @mouseup="step = 2">
							<v-radio label="DJ" color="orange darken-2" value="dj"></v-radio>
							<v-radio label="매니저" color="light-blue accent-1" value="manager"></v-radio>
						</v-radio-group>
					</v-stepper-content>


					<v-stepper-step
						:complete="step > 2 && djtag !== ''"
						step="2"
						color="purple darken-3">
						<span v-if="who === 'dj'" >
							당신은 누구인가요? - {{ djtag }}
						</span>
						<span v-else>
							당신이 매니저를 할 주 DJ는 누구인가요? - {{ djtag }}
						</span>
					</v-stepper-step>
					<v-stepper-content step="2">
						<v-row align="center">
							<v-col cols="8">
								<v-text-field
									label="@고유 닉네임"
									v-model="djtag"
									disabled
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
							<v-col align="right">
								<v-btn
									text
									color="purple darken-4"
									@click="dtype = 'dj'; users=[]; nickname=''; dialog = true;">
									검색
								</v-btn>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn @click="step = 1" class="mr-3">이전</v-btn>
								<v-btn
									:disabled="djtag === ''"
									color="purple darken-4"
									:dark="djtag !== ''"
									@click="step = 3">다음</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>

					<v-stepper-step
						:complete="step > 3 && acctag !== ''"
						step="3"
						color="purple darken-3">
						발급받을 계정은 무엇인가요? - {{ acctag }}
					</v-stepper-step>
					<v-stepper-content step="3">
						<v-row align="center">
							<v-col cols="8">
								<v-text-field
									label="@고유 닉네임"
									v-model="acctag"
									disabled
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
							<v-col align="right">
								<v-btn
									text
									color="purple darken-4"
									@click="dtype = 'acc'; users=[]; nickname=''; dialog = true;">
									검색
								</v-btn>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn @click="step = 2" class="mr-3">이전</v-btn>
								<v-btn
									:disabled="acctag === ''"
									color="purple darken-4"
									:dark="acctag !== ''"
									@click="step = 4">다음</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>



					<v-stepper-step
						:complete="step > 4 && selected.length > 0"
						step="4"
						color="purple darken-3">
						매니저 할 방송은 주로 어떤 컨텐츠를 진행하나요?
					</v-stepper-step>
					<v-stepper-content step="4">
						<v-row align="center">
							<v-col>
								<v-container class="py-0">
									<v-row
										align="center"
										justify="start">
										<v-col
											v-for="(selection, i) in selections"
											:key="selection"
											class="shrink">
											<v-chip
												close
												@click:close="selected.splice(i, 1)">
												{{ selection }}
											</v-chip>
										</v-col>

										<v-col v-if="!allSelected" cols="12">
											<v-text-field
												ref="search"
												v-model="search"
												full-width
												hide-details
												label="검색"
												color="purple darken-4"
												single-line
												></v-text-field>
										</v-col>
									</v-row>
								</v-container>
								<v-divider v-if="!allSelected"></v-divider>
								<v-list>
									<template v-for="(item, i) in categories">
										<v-list-item
											v-if="!selected.includes(i)"
											:key="i"
											@click="selected.push(i)">
											<v-list-item-title align="left">{{ item }}</v-list-item-title>
										</v-list-item>
									</template>
								</v-list>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn @click="step = 3" class="mr-3">이전</v-btn>
								<v-btn
									:disabled="selected.length === 0"
									color="purple darken-4"
									:dark="selected.length > 0"
									@click="step = 5">완료</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>



					<v-stepper-step
						:complete="step > 4"
						step="5"
						color="purple darken-3">
						시리얼 요청
					</v-stepper-step>
					<v-stepper-content step="5">
						<v-row align="center">
							<v-col align="center">
								<h2 class="title">신청 준비가 완료되었습니다!</h2>
								<h3 class="subtitle-1">아래 버튼을 눌러 시리얼을 발급하세요!</h3>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="center" class="pr-6">
								<v-btn
									color="light-blue accent-2"
									:disable="loading"
									:loading="loading"
									:dark="!loading"
									@click="step = 5; genSerial()">
									발급해 주세요!
								</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>
				</v-stepper>
			</v-col>
			<v-col cols="0" sm="2" md="3"></v-col>
		</v-row>
	</v-content>
</template>
<style scoped>
main.v-content.custom > div.v-content__wrap {
	height: 100%;
}
main.v-content.custom > div.v-content__wrap > div.row {
	height: 100%;
	margin: 0;
}
</style>
<script>
import { mkKeyword } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';

export default {
	metaInfo: {
		title: "소피아 시리얼 발급",
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: "소피아를 사용하기 위해 시리얼을 발급하십시오.", vmid: 'description' },
			{ name: 'keywords', content: mkKeyword() },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: "소피아 시리얼 발급",
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: "소피아를 사용하기 위해 시리얼을 발급하십시오.",
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
	name: 'signin',
	mounted: function() {
	},
	methods: {
		searchUsers() {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					const data = JSON.parse(xhr.responseText);
					const results = data.results;
					this.users = results;
				}
			};
			xhr.open('get', `https://api.spooncast.net/search/user/?q=${this.nickname}`);
			xhr.send();
		},
		genSerial() {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					this.loading = false;
					const data = JSON.parse(xhr.responseText);
					if ( data.result === true ) {
						this.serial = data.msg;
						let text = "";
						text += new Date().toLocaleString() + " 소피아 신청\n\n";
						text += "신청자: " + (this.who === 'dj' ? 'DJ' : '매니저') + "\n";
						text += "DJ: " + this.djtag + "\n";
						text += "요청자: " + this.acctag + "\n";
						text += "카테고리: ";
						this.selected.forEach((s, idx) => {
							text += this.items[s];
							if ( idx < this.selected.length - 1 ) {
								text += ", ";
							}
						});
						text += "\n";
						text += "시리얼: " + this.serial;
						this.resText = text;
						this.resDiag = true;
					} else {
						this.snackbar = true;
						this.snackText = data.msg;
					}
				}
			};
			xhr.open('get', `https://us-central1-sopia-bot.cloudfunctions.net/genSerial/${this.acctag}`);
			xhr.send();
			this.loading = true;
		},
		copyText() {
			document.querySelector('#ta').select();
			document.execCommand('copy');
			this.snackbar = true;
			this.snackText = "복사되었습니다.";
		},
	},
	computed: {
		allSelected () {
			return this.selected.length === this.items.length;
		},
		categories () {
			const search = this.search.toLowerCase();

			if (!search) return this.items;

			return this.items.filter(item => {
				const text = item.toLowerCase();

				return text.indexOf(search) > -1;
			});
		},
		selections () {
			const selections = [];

			for (const selection of this.selected) {
				selections.push(this.items[selection]);
			}

			return selections;
		},
	},
	data: function() {
		return {
			step: 1,
			who: 'dj',
			editable: true,
			djtag: '',
			acctag: '',
			dialog: false,
			nickname: '',
			users: [],
			dtype: 'dj',
			items: [
				'소통 방송',
				'잠 방송',
				'책 읽어주는 방송',
				'전화 데이트 방송',
				'소개팅 방송',
				'이상형 월드컵 방송',
				'노래 및 음악 연주 방송',
				'플레이 리스트 방송',
				'기타',
			],
			search: '',
			selected: [],
			snackbar: false,
			snackText: '',
			resDiag: false,
			resText: '',
			serial: '',
			loading: false,
		}
	}
}
</script>
