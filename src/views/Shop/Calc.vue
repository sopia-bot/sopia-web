<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
        <v-row class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
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
	name: 'accept',
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
		time2Locale(time) {
			return new Date(parseInt(time,10)).toLocaleString();
		},
		acceptRequest(time) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 ) {
                    this.loading = false;
                    if ( xhr.status === 200 ) {
						const idx = this.readyItems.indexOf(time);
						if ( idx >= 0 ) {
							this.readyItems.splice(idx, 1);
						}
                    }
                }
            };
            xhr.open('post', `https://us-central1-sopia-bot.cloudfunctions.net/shop/accept`);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({
				time,
            }));
		},
		cancelRequest(time) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 ) {
                    this.loading = false;
                    if ( xhr.status === 200 ) {
						const idx = this.readyItems.indexOf(time);
						if ( idx >= 0 ) {
							this.readyItems.splice(idx, 1);
						}
                    }
                }
            };
            xhr.open('delete', `https://us-central1-sopia-bot.cloudfunctions.net/shop/cancel`);
            xhr.setRequestHeader("Content-Type", "application/json");

            xhr.send(JSON.stringify({
				time,
            }));
		},
	},
    mounted() {
		let phone = {};
		let band = 0;
		let cup = 0;
		let hood = {};


        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = JSON.parse(xhr.responseText);
				window.d = data;

				const keys = Object.keys(data);
				keys.forEach(k => {
					const d = data[k];
					const items = d.items;

					items.forEach(item => {
						if ( item.key === "iphone" ) {
							if ( phone[item.option] ) {
								phone[item.option] += item.num;
							} else {
								phone[item.option] = item.num;
							}
						} else if ( item.key === "band" ) {
							band += item.num;
						} else if ( item.key === "cup" ) {
							cup += item.num;
						} else if ( item.key === "hood" ) {
							if ( typeof item.option === "undefined" ) {
								console.log(d);
							}
							if ( hood[item.option] ) {
								hood[item.option] += item.num;
							} else {
								hood[item.option] = item.num;
							}
						}
					});
				});

				console.log(phone);
				console.log("팔찌", band);
				console.log("컵", cup);
				console.log("후드", hood);

				const reqer = [];
				keys.forEach(k => {
					const d = data[k];

					if ( !reqer.includes(d.name) ) {
						reqer.push(d.name);
					}
				});

				console.log(reqer);
            }
        };
        xhr.open('get', `https://sopia-bot.firebaseio.com/shop/accept.json`);
        xhr.send();
    },
	data() {
		return {
			ready: {},
			readyItems: [],
			loading: false,
		};
	},
}
</script>
