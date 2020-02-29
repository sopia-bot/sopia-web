<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
		<v-row align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" class="px-12">
				<v-img src="../assets/home/bot.png" class="mb-9" max-width="300px"></v-img>
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
					@click="routeAssignUrl('/docs')"
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="450px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/main.gif"
								width="100%"
								gradient="to right, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="450px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/free.gif"
								width="100%"
								gradient="to left, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="450px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/spoorchat.gif"
								width="100%"
								gradient="to left, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="450px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/setting.gif"
								width="100%"
								gradient="to left, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="450px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/bundle.gif"
								width="100%"
								gradient="to left, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
			</v-col>
			<v-col align="center" class="pa-12" cols="12" md="6">
				<p class="title"> {{ Lang('intro.bundle') }} </p>
				<p class="title"> {{ Lang('intro.bundle2') }} </p>
			</v-col>
		</v-row>
		<!-- E:Bundle -->
		<v-img src="../assets/home/kakao.gif" class="custom" max-height="700px">
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
				<v-hover>
					<template v-slot="{ hover }">
						<v-card
							max-width="600px"
							:elevation="hover ? 24 : 6">
							<v-img
								src="../assets/home/anydesk.png"
								width="100%"
								gradient="to left, rgba(0, 0, 0, 0), rgba(50, 50, 50, 0.3)"></v-img>
						</v-card>
					</template>
				</v-hover>
			</v-col>
		</v-row>
		<!-- E:Anydesk -->
		<Footer/>
	</v-content>
	<!-- E:Content -->
</template>
<style>
div.v-image.custom div.v-responsive__content {
	background: rgba(0, 0, 0, 0.8);
}
div.row {
	width: 100%;
	margin:unset;
	margin-right:unset;
}
</style>
<script>
import Footer from './Com/footer';
import { routeAssignUrl, hrefChange, openNewTab } from '../modules/common.js';
import Lang from '../languages/Lang.js';

export default {
	name: 'home',
	components: {
		Footer
	},
	methods: {
		routeAssignUrl,
		openNewTab,
		hrefChange,
		Lang,
		submit () {
		},
		clear () {
			this.title = '';
			this.email = '';
			this.content = '';
		}
	},
	data: function() {
		return {
			valid: true,
			title: '',
			titleRules: [
				v => !!v || 'Title is required',
			],
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			content: '',
			contentRules: [
				v => !!v || 'Content is required',
			]
		};
	},
}
</script>
