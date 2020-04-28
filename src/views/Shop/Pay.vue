<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
		<v-row align="center" class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
                <v-row>
                    <v-col cols="12" align="center">
                        <h1 class="title font-weight-bold">구매해 주셔서 감사합니다</h1>
                        <v-card style="width:100%" elevation="1" class="mt-6">
                            <v-list two-line>
                                <template v-for="(item, idx) in cart">
                                    <v-list-item :key="item.key + idx">
                                        <v-list-item-avatar>
                                            <v-img :src="item.imgs[0]" />
                                        </v-list-item-avatar>

                                        <v-list-item-content class="text-left">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                            <v-list-item-subtitle>
                                                <span v-if="item.option">{{ item.option }}, </span>
                                                {{ item.num }} {{ item.unit }}
                                            </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row align="center" class="mt-12">
                    <v-col cols="12">
                        <h1 class="title font-weight-bold">구매자 정보</h1>
                    </v-col>
                </v-row>
				<v-row align="center" class="mt-0">
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
                                    small
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
				<v-row class="mt-12">
					<v-col cols="12" align="left">
						<h1 class="title font-weight-bold">개인정보 제공 동의</h1>
                        <v-textarea
                            :value="terms"
                            readonly
                            color="purple darken-4"
                            hint="개인정보 제공 동의" />
						<v-checkbox
							v-model="agree1"
							color="purple darken-4"
							label="동의"></v-checkbox>
						<v-checkbox
							v-model="agree2"
							color="purple darken-4"
							label="입금이후엔 단순변심으로 환불 및 구매 취소가 불가능합니다."></v-checkbox>
						<v-checkbox
							v-model="agree3"
							color="purple darken-4"
							label="배송 시작 이후 배송지 변경이 불가능합니다."></v-checkbox>
						<v-checkbox
							v-model="agree4"
							color="purple darken-4"
							label="정보가 잘못 기입되었을 때, 처리가 늦어지거나 누락될 수 있습니다."></v-checkbox>
					</v-col>
				</v-row>
                <v-row class="mt-6">
                    <v-col cols="12" align="right">
                        <v-btn
                            color="purple darken-4"
                            dark
                            large
                            :loading="loading"
                            @click="pushBuyReady">구매 하기</v-btn>
                    </v-col>
                </v-row>
			</v-col>
			<v-col cols="0" sm="1" md="3"></v-col>
		</v-row>
		<!-- E:Introduce -->

		<Footer class="mt-12"/>

        <v-dialog
            v-model="dialog"
            max-width="500px"
            width="80%">
            <v-card class="pt-5">
                <v-card-text class="subtitle-1 font-weight-bold">
                    {{ dialogText }}
                </v-card-text>
                <v-divider />
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="purple darken-4" text @click="dialog = false">
                        확인
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
import { routeAssignUrl } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';

const OBJdump = (obj) => Object.assign( Object.create( Object.getPrototypeOf(obj)), obj);
const parseCart = (cart) => {
    const result = [];
    let price = 0;
    cart.forEach(c => {
        const obj = {}
        obj['name'] = c.title;
        obj['num'] = c.num;
        obj['key'] = c.key;
        obj['unit'] = c.unit;
        if ( c.option ) {
            obj['option'] = c.option;
        }

        price += (c.price * c.num);
        result.push(obj);
    });
    return { price, result };
};

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
		Lang,
        numberWithCommas(x) {
            const str = x.toString();
            let strLen = str.length - 1;
            const arr = [];
            for ( let i = 1; strLen >= 0; i++, strLen-- ) {
                arr.unshift(str[strLen]);
                if ( i % 3 === 0 ) {
                    arr.unshift(",");
                }
            }
            return arr.join("");
        },
		findAddress() {
			new daum.Postcode({
				oncomplete: (data) => {
					this.address = data.roadAddress;
					this.zipcode = data.zonecode;
				}
			}).open();
		},
        pushBuyReady() {
            const alert = (msg) => {
                this.dialogText = msg;
                this.dialog = true;
            };

            if ( this.name.length <= 2 ) {
                alert("입금자 명을 정확히 써주세요");
                return;
            }

            if ( this.address.trim() === "" ) {
                alert("주소를 기입해 주세요.");
                return;
            }

            if ( this.detailAddr.trim() === "" ) {
                alert("상세주소를 기입해 주세요.");
                return;
            }

            if ( !this.agree1 ) {
                alert("개인정보 제공에 동의하셔야 합니다.");
                return;
            }

            if ( !this.agree2 ) {
                alert("입금 후 환불 및 취소 불가에 동의하셔야 합니다.");
                return;
            }

            if ( !this.agree3 ) {
                alert("배송지 변경 불가에 동의하셔야 합니다.");
                return;
            }

            if ( !this.agree4 ) {
                alert("처리 지연 관련에 동의하셔야 합니다.");
                return;
            }

            const { price, result } = parseCart(this.$store.getters.cart);
            this.loading = true;

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 ) {
                    this.loading = false;
                    if ( xhr.status === 200 ) {
                        this.$store.commit('fin', price);
                        this.routeAssignUrl('/shop/finish/', this);
                    } else {
                        alert("주문에 실패하였습니다. 잠시 후 다시 시도해 주세요.");
                    }
                }
            };
            xhr.open('put', `https://us-central1-sopia-bot.cloudfunctions.net/shop/buy`);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({
                name: this.name,
                email: this.email,
                address: this.address,
                detailAddr: this.detailAddr,
                zipcode: this.zipcode,
                price,
                items: result,
            }));
        },
	},
    created() {
    },
    mounted() {
        this.cart = this.$store.getters.cart;
        if ( !this.cart || this.cart.length <= 0 ) { 
            alert("구매하고자 하는 물품이 없습니다.");
            this.routeAssignUrl('/shop/', this);
            return;
        }
        this.$store.commit('fin', false);
    
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = xhr.responseText;
                this.terms = data;
            }
        };
        xhr.open('get', `/terms.txt`);
        xhr.send();

        setTimeout(() => {
            document.querySelector('#router-view').scroll(0, 0)
        }, 100);
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
			agree1: false,
            agree2: false,
            agree3: false,
            agree4: false,
            terms: "",
            cart: [],
            dialog: false,
            dialogText: "",
            loading: false,
		};
	},
}
</script>
