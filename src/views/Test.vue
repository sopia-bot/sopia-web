<template>
	<!-- S:Content -->
	<v-content>
		<!-- S:Introduce -->
        <v-row class="mt-12">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col align="center" cols="12" sm="10" md="6" class="px-12">
				<v-row
					v-for="(item, idx) in readyItems"
					:key="item"
					class="my-3"
					align="center">
					<v-col cols="8" class="text-left title">
						<!--
						<h1 class="headline">{{ time2Locale(item) }}</h1>
						-->
						<p><span>{{ ready[item].name }}</span>: <span>{{ numberWithCommas(ready[item].price) }}</span> 원</p>
						<p class="subtitle-1">{{ready[item].address}} {{ ready[item].detailAddr }} ({{ ready[item].zipcode }})</p>
					</v-col>
					<v-col cols="4">
						<v-btn
							icon
							x-large
							color="green darken-1"
							class="mr-3"
							:loading="loading"
							@click="successPost(item)">
							<v-icon>mdi-check</v-icon>
						</v-btn>
					</v-col>
					<v-col cols="12">
						<v-list>
							<v-list-item
								two-line
								v-for="(aaa, iidx) in ready[item].items"
								:key="ready[item].address + aaa.key"
								>
								<v-list-item-content class="text-left">
									<v-list-item-title>
									{{ aaa.name }} {{ aaa.num }} {{ aaa.unit }}
									</v-list-item-title>
									<v-list-item-subtitle>
										{{ aaa.option }}
									</v-list-item-subtitle>
								</v-list-item-content>
							</v-list-item>
						</v-list>
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
import Footer from '@/views/Com/footer';
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
		successPost(addr) {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if ( xhr.readyState === 4 ) {
                    this.loading = false;
                    if ( xhr.status === 200 ) {
						const idx = this.readyItems.indexOf(addr);
						if ( idx >= 0 ) {
							this.readyItems.splice(idx, 1);
						}
                    }
                }
            };
            xhr.open('post', `https://us-central1-sopia-bot.cloudfunctions.net/shop/finish`);
            xhr.setRequestHeader("Content-Type", "application/json");

			const key = this.ready[addr].key;
            xhr.send(JSON.stringify({
				time: key,
            }));
		},
	},
    mounted() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = JSON.parse(xhr.responseText);

				const addr = {};

				for ( const [time, d] of Object.entries(data) ) {
					if ( addr[d.address] ) {
						for ( const is of d.items ) {
							const idx = addr[d.address].items.findIndex(a => a.key === d.key);
							if ( idx >= 0 ) {
								addr[d.address].items[idx].num += is.num;
							}
						}
					} else {
						addr[d.address] = d;
						addr[d.address].key = time;
					}
				}

				console.log(addr);

				this.ready = addr;
				this.readyItems = Object.keys(addr);
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
