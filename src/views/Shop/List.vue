<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
		<v-row v-for="(item) in items" :key="item.title" align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover>
                    <v-carousel-item
                        v-for="(img, idx) in item.imgs"
                        :key="img.title + '-img-' + idx">
                        <v-sheet
                            color="transparent"
                            height="100%">
                            <Picture rowClass="custom" :src="img"/>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <br>
				<h1 class="display-1 font-weight-bold mb-2 purple--text text--darken-3">
                    {{ item.title }}
                </h1>
                <h2 v-if="item.desc && item.desc.length > 0 " class="subtitle-2 grey--text">
                    {{ item.desc }}
                </h2>
                <span class="title black--text">{{ numberWithCommas(item.price) }}</span>
                <v-text-field
                    v-model="item.num"
                    type="text"
                    @keydown="numKeyDown"
                    class="get-num"
                    style="width: 100px;"
                    label="개수"
                    color="purple darken-4"
                    prepend-icon="mdi-minus"
                    @click:prepend="decrement(item)"
                    append-outer-icon="mdi-plus"
                    @click:append-outer="increment(item)"></v-text-field>

                <v-autocomplete
                    v-if="item.options.length > 0"
                    v-model="item.option"
                    :items="item.options"
                    color="purple darken-4"
                    style="max-width: 200px;"
                    label="옵션" />

                <v-btn
                    color="purple darken-3"
                    dark
                    large
                    >장바구니에 담기</v-btn>
			</v-col>
			<v-col cols="0" sm="1" md="3"></v-col>
		</v-row>
		<!-- E:Introduce -->
		<Footer/>
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
        numKeyDown (evt) {
            if ( evt.key.match(/[0-9]/) ) {
                return;
            }
            switch ( evt.keyCode ) {
                case 8: // backspace
                    return;
            }

            if ( evt.ctrlKey ) {
                return;
            }
            evt.preventDefault();
        },
        increment (item) {
            if ( item.key === "hood" && item.num >= 1 ) {
                item.num = 1;
                return;
            }
            if ( typeof item.num !== "number" ) {
                item.num = 0;
            }
            item.num = parseInt(item.num,10) + 1
        },
        decrement (item) {
            if ( item.num > 0 ) {
                item.num = parseInt(item.num,10) - 1;
            }
        },
        numberWithCommas(x) {
            return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        },
	},
    mounted() {
    },
	data() {
		return {
			imgs: {
			},
            items: [
                {
                    imgs: [
                        require('@/assets/shop/band-front.jpg'),
                        require('@/assets/shop/band-back.jpg'),
                    ],
                    key: "band",
                    title: "실리콘 팔찌",
                    price: "4000",
                    option: 0,
                    options: [],
                    num: 0,
                },
				{
					imgs: [
						require('@/assets/shop/hood.png'),
						require('@/assets/shop/hood-size.png'),
					],
					key: "hood",
					title: "남여 공용 후드 집업 (25장 한정)",
                    desc: "해당 항목은 1인당 1벌만 구매 가능합니다.",
					price: "39000",
                    option: 0,
                    options: [
                        'S',
                        'M',
                        'L',
                        'XL',
                        '2XL',
                    ],
					num: 0,
				},
				{
					imgs: [
						require('@/assets/shop/galaxyS9P.gif'),
						require('@/assets/shop/galaxyS20.gif'),
						require('@/assets/shop/iPhoneX.gif'),
					],
					key: "iphone",
					title: "핸드폰 케이스",
					price: "25000",
                    option: 0,
                    options: [],
					num: 0,
				},
            ],
		};
	},
}
</script>
