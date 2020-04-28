<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
        <v-row class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
                <h1 class="display-1 font-weight-bold">
                    구매해 주셔서 감사합니다!
                </h1>
                <p class="text-left mt-6"> 소피아를 아끼는 마음으로 굿즈를 구매해 주신것에 대해 진심으로 감사드립니다.  </p>
                <p class="text-left"> 굿즈는 물량확보 후 순차 발송이 아니라 구매신청 완료 후 주문제작에 들어가므로 다소 시간이 걸립니다.  </p>
                <p class="text-left"> 5월 4일부터 주문 후, 물량을 확보하는 대로 순차발송하게 되므로 짧게는 2주 길게는 1달정도 후에 배송받으실 수 있습니다.  </p>
                <p class="text-left"> 더 나은 서비스와 기능, 더 좋은 굿즈로 찾아뵙겠습니다.  </p>
                <p class="red--text mt-12 text--darken-3"> 신청 후 24시간 이내 입금이 확인되지 않으면 신청 취소될 수 있습니다.  </p>

                <h2 class="title mt-12"> 아래 계좌로 {{ numberWithCommas(price) }} 원을 이체해 주시면 됩니다. </h2>
                <p class="grey--text">입금 확인시 메일이 발송됩니다.</p>
                
                <p class="headline mt-6 purple--text text--darken-4">국민은행 620601-01-521114 윤여준</p>
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
import { routeAssignUrl } from '@/modules/common.js';
import Lang from '@/languages/Lang.js';

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
	},
    mounted() {
        const fin = this.$store.getters.fin;
        if ( !fin ) {
            alert("구매한 이력이 없습니다.");
            this.routeAssignUrl('/shop/', this);
            return;
        }

        this.$store.commit('fin', false);
        this.price = fin;
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
            price: 0,
		};
	},
}
</script>
