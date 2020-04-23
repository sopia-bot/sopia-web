<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
		<v-row align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
				<v-row>
					<v-col cols="12" align="left">
						<h1 class="title">본인은 굿즈 판매 작업에 대해 필요하는 개인정보 제공에 동의합니다.</h1>
						<v-checkbox
							v-model="agree"
							color="purple darken-4"
							label="동의"></v-checkbox>
					</v-col>
				</v-row>
				<v-row align="center">
					<v-col cols="12" md="6">
						<v-text-field
							v-model="name"
							label="입금자 명"
							color="purple darken-4"
							required
							></v-text-field>
						<v-text-field
							v-model="email"
							label="이메일"
							color="purple darken-4"
							required
							></v-text-field>
					</v-col>
					<v-col cols="12" md="6">
						<v-text-field
							v-model="address"
							label="주소"
							required
							color="purple darken-4"
							readonly
							>
							<template v-slot:append>
								<v-btn
									text
									color="purple darken-3"
									@click="findAddress">
									주소 찾기
								</v-btn>
							</template>
						</v-text-field>
						<v-text-field
							v-model="detailAddr"
							label="상세 주소"
							color="purple darken-4"
							required
							></v-text-field>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="0" sm="1" md="3"></v-col>
		</v-row>
		<!-- E:Introduce -->

		<Footer class="mt-12"/>
	</v-content>
	<!-- E:Content -->
</template>
<style scope>
div.row {
	width: 100%;
	margin:unset;
	margin-right:unset;
}
.get-num input {
    text-align: center;
}
.v-image__image.v-image__image--cover {
	background-size: contain;
}

.custom.row,
.custom .col,
.custom .v-card,
.custom .v-responsive.v-image {
    height: 100%;
    margin: 0;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

.custom .v-responsive.v-image {
    background-color: white;
}
</style>
<script>
import Footer from '../Com/footer';
import { routeAssignUrl, hrefChange, openNewTab, getContent, mkKeyword } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';
import EventBus from '@/modules/event-bus.js';

const OBJdump = (obj) => Object.assign( Object.create( Object.getPrototypeOf(obj)), obj);

export default {
/*
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
*/
	name: 'shopList',
	components: {
		Footer
	},
	methods: {
		routeAssignUrl,
		openNewTab,
		hrefChange,
		Lang,
        numberWithCommas(x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
		findAddress() {
			new daum.Postcode({
				oncomplete: (data) => {
					this.address = data.roadAddress;
					this.zipcode = data.zonecode;
				}
			}).open();
		},
	},
    mounted() {
		console.log(daum);
    },
	data() {
		return {
            snackbar: false,
            snackText: "",
			name: "",
			email: "",
			address: "",
			detailAddr: "",
			zipcode: 0,
			agree: false,
		};
	},
}
</script>
