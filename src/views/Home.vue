<template>
	<!-- S:Content -->
	<v-content>
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
										@click="selectUser(user.tag);">
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
		<!-- S:Introduce -->
		<v-row align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" class="px-12">
				<v-img :src="imgs.bot" class="mb-9" max-width="300px"></v-img>
				<h1 class="display-3 font-weight-bold mb-5 purple--text text--darken-3">SOPIA</h1>
				<p class="title">{{ Lang('home.introduce') }}</p>
			</v-col>
			<v-col cols="0" sm="1" md="3"></v-col>
		</v-row>
		<!-- E:Introduce -->
		<!-- S:Buttons -->
		<v-row>
			<v-col cols="1" sm="1" md="2"></v-col>
			<v-col align="center" class="px-12">
				<v-btn
					x-large
					dark
					@click="openNewTab('/SOPIA.zip')"
					class="purple darken-3 mx-6"
					elevation="15">
					{{ Lang('home.download') }}
				</v-btn>
				<v-btn
					x-large
					dark
					class="yellow darken-3 mx-6"
					@click="openNewTab('https://drive.google.com/drive/folders/19ufWSDuN8gq6ZTgv5Qk8GjeZdD3P7NYq')"
					elevation="15">
					{{ Lang('home.google-down') }}
				</v-btn>
				<v-btn
					x-large
					dark
					class="teal darken-3 mx-6"
					@click="routeAssignUrl('/docs/')"
					elevation="15">
					{{ Lang('home.use-doc') }}
				</v-btn>
			</v-col>
			<v-col cols="1" sm="1" md="2"></v-col>
		</v-row>
		<!-- E:Buttons -->
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<v-row align="center">
			<v-col align="center" class="px-12">
				<h2>시리얼을 잃어버렸을 땐?</h2>
			</v-col>
		</v-row>
		<v-row align="center">
			<v-col align="center" class="px-12">
				<v-col cols="12">
					<v-text-field
						label="@고유 닉네임"
						v-model="acctag"
						disabled
						style="display: inline-flex; max-width: 200px; width: 90%;"
						color="purple darken-4"
						single-line></v-text-field>
					<v-btn
						text
						color="purple darken-4"
						style="display: inline-flex;"
						@click="users=[]; dialog = true;">
						검색
					</v-btn>
				</v-col>
			</v-col>
		</v-row>
		<v-row align="center">
			<v-col align="center" class="px-12">
				<v-skeleton-loader
					v-if="serialLoading"
					class="mx-auto"
					max-width="400px"
					type="text"
					></v-skeleton-loader>
				<span v-else>{{ serial }}</span>
			</v-col>
		</v-row>
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<!-- S:Good Design -->
		<v-row align="center">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.main" />
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.good-design') }} </p>
				<p class="title"> {{ Lang('intro.good-design2') }} </p>
			</v-col>
		</v-row>
		<!-- E:Good Design -->
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<!-- S:Freedome -->
		<v-row align="center">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.free') }} </p>
				<p class="title"> {{ Lang('intro.free2') }} </p>
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.free" />
			</v-col>
		</v-row>
		<!-- E:Freedome -->
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<!-- S:Spoorchat -->
		<v-row align="center">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.spoorchat" />
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.spoorchat') }} </p>
				<p class="title"> {{ Lang('intro.spoorchat2') }} </p>
				<p class="title"> {{ Lang('intro.spoorchat3') }} </p>
			</v-col>
		</v-row>
		<!-- E:Spoorchat -->
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<!-- S:Setting -->
		<v-row align="center">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.setting') }} </p>
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.setting" />
			</v-col>
		</v-row>
		<!-- E:Setting -->
		<!-- S:Divider -->
		<v-row class="px-12 my-6">
			<v-col class="px-12">
				<v-divider></v-divider>
			</v-col>
		</v-row>
		<!-- E:Divider -->
		<!-- S:Bundle -->
		<v-row align="center" class="mb-12">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.bundle" />
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.bundle') }} </p>
				<p class="title"> {{ Lang('intro.bundle2') }} </p>
			</v-col>
		</v-row>
		<!-- E:Bundle -->
		<v-img :src="imgs.kakao" class="custom" max-height="700px">
			<v-content class="pa-0">
				<v-row align="center" class="ma-0" style="height:700px; background-color: rgba(0, 0, 0, 0.7);">
					<v-col cols="12" align="center">
						<h1 class="display-2 font-weight-bold yellow--text text--lighten-3">{{ Lang('intro.comunity') }}</h1>
						<br>
						<p class="white--text">{{ Lang('intro.kakao') }}<br>{{ Lang('intro.kakao2') }}</p>
						<v-btn
							large
							dark
							@click="hrefChange('kakaoopen://join?l=gtHSynXb&r=EW')"
							color="yellow darken-3"
							tile
							class="mt-6">커뮤니티 참여</v-btn>
					</v-col>
				</v-row>
			</v-content>
		</v-img>
		<!-- S:Anydesk -->
		<v-row align="center" class="mt-6">
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.anydesk') }} </p>
				<p class="title"> {{ Lang('intro.anydesk2') }} </p>
				<v-btn
					large
					dark
					@click="openNewTab('https://anydesk.com/en')"
					color="red darken-3"> {{ Lang('download') }} </v-btn>
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<Picture :src="imgs.anydesk" />
			</v-col>
		</v-row>
		<!-- E:Anydesk -->
		<Footer/>
	</v-content>
	<!-- E:Content -->
</template>
<style>
div.v-image.shop-banner div.v-responsive__content {
	background: rgba(0, 0, 0, 0.8);
}
div.row {
	width: 100%;
	margin-right:unset;
}
div.v-image.shop-banner .v-image__image.v-image__image--cover {
	background-size: contain;
}
</style>
<script>
import Footer from './Com/footer';
import { routeAssignUrl, hrefChange, openNewTab, getContent, mkKeyword } from '../modules/common.js';
import Lang from '../languages/Lang.js';
//import UserChart from './UserChart';

export default {
	metaInfo: {
		title: Lang('meta.home'),
		htmlAttrs: {
			lang: navigator.language,
			dir: 'ltr'
		},
		meta: [
			{ charset: 'utf-8' },
			{ meta: 'description', content: "No.1 매니저 소피아. 스푼 라디오 No.1 매니저 봇 소피아를 사용해 보세요. 당신의 스푼 방송을 더 멋지게 만들어주는 매니저 프로그램입니다.", vmid: 'description' },
			{ name: 'keywords', content: mkKeyword() },
			{ name: 'author', content: Lang('author') },
			{
				property: 'og:title',
				content: Lang('meta.home'),
				vmid: 'og:title'
			},
			{
				property: 'og:description',
				content: Lang('meta.home.desc'),
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
	name: 'home',
	components: {
        //UserChart,
		Footer
	},
	methods: {
		routeAssignUrl,
		openNewTab,
		hrefChange,
		Lang,
		rand(x) {
			return Math.floor(Math.random() * x);
		},
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
		selectUser(tag) {
			this.serialLoading = true;
			const xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if ( xhr.status === 200 && xhr.readyState === 4 ) {
					const res = JSON.parse(xhr.responseText);
					this.serial = res.data;
					this.serialLoading = false;
				}
			};
			xhr.open('get', 'https://cors-proxy.org/api/');
			xhr.setRequestHeader('cors-proxy-url', `https://us-central1-sopia-bot.cloudfunctions.net/findSerial/${tag}`);
			xhr.send();
			this.acctag = tag;
			this.dialog = false;
			this.nickname = '';
		},
	},
	data: function() {
		return {
			imgs: {
				"bot": require('@/assets/home/bot.png'),
				"main": require('@/assets/home/main.gif'),
				"free": require('@/assets/home/free.gif'),
				"spoorchat": require('@/assets/home/spoorchat.gif'),
				"setting": require('@/assets/home/setting.gif'),
				"bundle": require('@/assets/home/bundle.gif'),
				"kakao": require('@/assets/home/kakao.gif'),
				"anydesk": require('@/assets/home/anydesk.png'),
			},
			dialog: false,
			acctag: '',
			users: [],
			nickname: '',
			serial: '',
			serialLoading: false,
		};
	},
}
</script>
