
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
										@click="newacctag = user.tag; dialog=false;">
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
						기존 시리얼을 입력하십시오.
					</v-stepper-step>
					<v-stepper-content step="1">
						<v-row align="center">
							<v-col>
								<v-text-field
									label="XXXX-XXXX-XXXX-HHMM"
									v-model="serial"
									:rules="[rules.serial]"
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn
									:disabled="typeof rules.serial(serial) === 'string' && !loading"
									color="purple darken-4"
									:dark="typeof rules.serial(serial) !== 'string'"
									:loading="loading"
									@click="checkSerial">다음</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>

					<v-stepper-step
						:complete="step > 2 && acctag !== ''"
						step="2"
						color="purple darken-3">
						다음 계정을 변경합니다. - {{ acctag }}
					</v-stepper-step>
					<v-stepper-content step="2">
						<v-row align="center">
							<v-col>
								<v-text-field
									label="@고유 닉네임"
									v-model="acctag"
									disabled
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn @click="step = 1" class="mr-3">이전</v-btn>
								<v-btn
									:disabled="acctag === ''"
									color="purple darken-4"
									:dark="acctag !== ''"
									@click="step = 3">다음</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>


					<v-stepper-step
						:complete="step > 3 && newacctag !== ''"
						step="3"
						color="purple darken-3">
						발급받을 계정은 무엇인가요? - {{ newacctag }}
					</v-stepper-step>
					<v-stepper-content step="3">
						<v-row align="center">
							<v-col cols="8">
								<v-text-field
									label="@고유 닉네임"
									v-model="newacctag"
									disabled
									color="purple darken-4"
									single-line></v-text-field>
							</v-col>
							<v-col align="right">
								<v-btn
									text
									color="purple darken-4"
									@click="users=[]; nickname=''; dialog = true;">
									검색
								</v-btn>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="right" class="pr-6">
								<v-btn @click="step = 2" class="mr-3">이전</v-btn>
								<v-btn
									:disabled="newacctag === ''"
									color="purple darken-4"
									:dark="newacctag !== ''"
									@click="step = 4">다음</v-btn>
							</v-col>
						</v-row>
					</v-stepper-content>





					<v-stepper-step
						:complete="step > 4"
						step="4"
						color="purple darken-3">
						시리얼 변경 요청
					</v-stepper-step>
					<v-stepper-content step="4">
						<v-row align="center">
							<v-col align="center">
								<h2 class="title">변경 신청 준비가 완료되었습니다!</h2>
								<h3 class="subtitle-1">아래 버튼을 눌러 시리얼을 변경하세요!</h3>
							</v-col>
						</v-row>
						<v-row align="center">
							<v-col align="center" class="pr-6">
								<v-btn
									color="light-blue accent-2"
									:disabled="loading"
									:loading="loading"
									:dark="!loading"
									@click="refSerial()">
									변경해 주세요!
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
		title: "소피아 시리얼 변경",
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: "유효하지 않은 시리얼을 변경하세요.", vmid: 'description' },
			{ name: 'keywords', content: mkKeyword() },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: "소피아 시리얼 변경",
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: "유효하지 않은 시리얼을 변경하세요.",
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
	name: 'refresh-serial-key',
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
		checkSerial() {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					this.loading = false;
					const data = JSON.parse(xhr.responseText);
					if ( data.result ) {
						this.acctag = data.msg;
						this.step = 2;
					} else {
						this.snackText = data.msg;
						this.snackbar = true;
					}
				}
			};
			xhr.open('get', `https://us-central1-sopia-bot.cloudfunctions.net/getUserBySerial/${this.serial}`);
			xhr.send();
			this.loading = true;
		},
		refSerial() {
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					const data = JSON.parse(xhr.responseText);
					this.snackText = data.msg;
					this.snackbar = true;
					this.loading = false;
				}
			};
			xhr.open('post', `https://us-central1-sopia-bot.cloudfunctions.net/refreshSerial/${this.serial}`);
			xhr.send(JSON.stringify({ spoon_id: this.newacctag }));
			this.loading = true;
		},
	},
	data: function() {
		return {
			step: 1,
			acctag: '',
			newacctag: '',
			dialog: false,
			nickname: '',
			users: [],
			search: '',
			selected: [],
			snackbar: false,
			snackText: '',
			resDiag: false,
			resText: '',
			serial: '',
			loading: false,
			rules: {
				serial: v => !!v.match(/[A-Z]{4}-[A-Z]{4}-[A-Z]{4}-[0-9]{4}/) || '시리얼 형식이 맞지 않습니다.',
			}
		}
	}
}
</script>
