<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:SHOP -->
		<v-img dark :src="imgs.shops[rand(imgs.shops.length)]" class="shop-banner" height="500px" style="background-size: contain;">
			<v-content class="pa-0">
				<v-row align="center" style="height:500px">
					<v-col align="center" style="height: unset;">
						<h1 class="display-2 font-weight-black">
							<span class="purple--text text--lighten-2">SOPIA</span> <span style="color:white;">SHOP </span>
							<v-btn @click="routeAssignUrl('/shop/')" color="purple lighten-2" icon x-large>
								<v-icon>mdi-arrow-right-bold-circle</v-icon>
							</v-btn>
						</h1>
					</v-col>
				</v-row>
			</v-content>
		</v-img>
		<!-- E:SHOP -->
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
				<v-row align="center" style="height:700px">
					<v-col cols="12" align="center">
						<h1 class="display-2 font-weight-bold yellow--text text--lighten-3">{{ Lang('intro.comunity') }}</h1>
						<br>
						<p class="white--text">{{ Lang('intro.kakao') }}<br>{{ Lang('intro.kakao2') }}</p>
						<v-btn
							large
							dark
							@click="hrefChange('kakaoopen://join?l=gtHSynXb&r=EW')"
							color="yellow darken-3"
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
		}
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
				shops: [
					require('@/assets/shop/galaxyS9P.gif'),
					require('@/assets/shop/galaxyS20.gif'),
					require('@/assets/shop/iPhoneX.gif'),
					require('@/assets/shop/hood.png'),
					require('@/assets/shop/cup.jpg'),
					require('@/assets/shop/band-front.jpg'),
					require('@/assets/shop/band-back.jpg'),
				],
			},
		};
	},
}
</script>
