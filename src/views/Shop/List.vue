<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
        <v-row align="center" class="mt-12">
            <v-col cols="12" align="center">
                <h1 class="title font-weight-bold">
                    아래 사진은 예시 시안이며, 실물은 사진과 다를 수 있습니다.
                </h1>
            </v-col>
        </v-row>
		<v-row v-for="(item) in items" :key="item.title" align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows
                    :show-arrows-on-hover="!small">
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
                    label="옵션 (검색 가능)" />

                <v-btn
                    color="purple darken-3"
                    dark
                    large
                    @click="addCartItem(item)"
                    >장바구니에 담기</v-btn>
			</v-col>
			<v-col cols="0" sm="1" md="3"></v-col>
		</v-row>
		<!-- E:Introduce -->

		<Footer class="mt-12"/>

        <v-navigation-drawer
            v-if="drawer || !small"
            :temporary="small"
            fixed
            right
            permanent>
            <template v-slot:prepend>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="mt-4 headline mb-1">
                            <v-icon>mdi-cart-outline</v-icon>
                            장바구니
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-list-icon v-if="small">
                        <v-btn icon @click="drawer = false">
                            <v-icon color="red">mdi-close</v-icon>
                        </v-btn>
                    </v-list-icon>
                </v-list-item>
            </template>

            <v-divider />

            <v-list style="margin-bottom: 56px;">
                <v-list-item
                    v-for="(item, idx) in cart"
                    :key="'cart-' + item.key + new Date().getTime().toString()">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>
                            <span v-if="item.option">{{ item.option }}, </span>
                            {{ item.num }} {{ item.unit }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon @click="delCartItem(item, idx)">
                        <v-btn icon>
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>

            <div 
                style="bottom: 0; position: fixed; width: 100%; background-color: white;">
                <v-divider />
                <v-row>
                    <v-col cols="8">
                        <h1 class="headline">
                            {{ numberWithCommas(getTotalCartPrice()) }} 원
                        </h1>
                    </v-col>
                    <v-col cols="4" class="text-right">
                        <v-btn text color="purple darken-4" @click="buy">구매</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-navigation-drawer>
        <v-snackbar
            v-model="snackbar"
            top
            >
            {{ snackText }}
            <v-btn
                color="pink"
                text
                @click="snackbar = false">Close</v-btn>
        </v-snackbar>
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
import PhoneList from './PhoneList.js';

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
        addCartItem(item) {
            if ( item.num > 0 ) {
                this.cart.push(OBJdump(item));
                item.num = 0;
                item.option = 0;

                this.snackText = "우측 상단 메뉴를 눌러 확인이 가능합니다.";
                this.snackbar = true;
            } else {
                this.snackText = "1개 이상부터 주문 가능합니다.";
                this.snackbar = true;
            }
        },
        delCartItem(item, idx) {
            this.cart.splice(idx, 1);
        },
        getTotalCartPrice() {
            let total = 0;
            this.cart.forEach((c) => {
                total += (c.price * c.num);
            });
            return total;
        },
        buy() {
            let total = this.getTotalCartPrice();
            if ( total <= 0 ) {
                this.snackText = "구매는 1원 이상부터 가능합니다.";
                this.snackbar = true;
                return;
            }

            this.$store.commit('cart', this.cart);
            this.routeAssignUrl('/shop/pay/');
        },
	},
    mounted() {
        this.$store.commit('fin', false);
		EventBus.$on('cart-draw', (val) => {
			this.drawer = val;
		});
    },
	computed: {
		small_() {
			return this.$store.getters.small;
		},
	},
	watch: {
		small_(val) {
			this.small = val;
		},
	},
	data() {
		return {
            snackbar: false,
            snackText: "",
            cart: [
            ],
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
                    unit: "개",
                },
				{
					imgs: [
						require('@/assets/shop/hood.png'),
						require('@/assets/shop/hood-size.png'),
					],
					key: "hood",
					title: "남여 공용 후드 집업",
					price: "39000",
                    option: 'S',
                    options: [
                        'S',
                        'M',
                        'L',
                        'XL',
                        '2XL',
                    ],
					num: 0,
                    unit: "벌",
				},
				{
					imgs: [
						require('@/assets/shop/galaxyS9P.gif'),
						require('@/assets/shop/galaxyS20.gif'),
						require('@/assets/shop/iPhoneX.gif'),
					],
					key: "iphone",
					title: "핸드폰 케이스",
                    desc: "각 케이스마다 디자인이 조금씩 다를 수 있습니다.",
					price: "25000",
                    option: PhoneList[0],
                    options: PhoneList,
					num: 0,
                    unit: "개",
				},
				{
					imgs: [
						require('@/assets/shop/cup.jpg'),
					],
					key: "cup",
					title: "머그컵",
					price: "12000",
                    option: 0,
                    options: [],
					num: 0,
                    unit: "잔",
				},
            ],
			small: this.$store.getters.small,
			drawer: false,
		};
	},
}
</script>
