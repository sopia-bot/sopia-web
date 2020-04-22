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
                            <v-img :src="img" height="100%"></v-img>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
                <br>
				<h1 class="display-1 font-weight-bold mb-2 purple--text text--darken-3">
                    {{ item.title }}
                </h1>
                <span class="title black--text">{{ item.price }}</span>
                <v-text-field
                    v-model="item.num"
                    type="number"
                    class="get-num"
                    style="width: 100px;"
                    label="개수"
                    prepend-icon="mdi-minus"
                    @click:prepend="decrement(item)"
                    append-outer-icon="mdi-plus"
                    @click:append-outer="increment(item)"></v-text-field>
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
    text-align: right;
}
.v-image__image.v-image__image--cover {
	background-size: contain;
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
        increment (item) {
            item.num = parseInt(item.num,10) + 1
        },
        decrement (item) {
            if ( item.num > 0 ) {
                item.num = parseInt(item.num,10) - 1;
            }
        },
	},
    mounted() {
        console.log(this.items);
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
                    num: 0,
                },
				{
					imgs: [
						require('@/assets/shop/hood.png'),
					],
					key: "hood",
					title: "후드 집업 (25장 한정)",
					price: "39000",
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
					num: 0,
				},
            ],
		};
	},
}
</script>
