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
						<h1 class="headline">{{ time2Locale(item) }}</h1>
						<p><span>{{ ready[item].name }}</span>: <span>{{ numberWithCommas(ready[item].price) }}</span> 원</p>
						<p class="subtitle-1">{{ready[item].address}} {{ ready[item].detailAddr }}</p>
					</v-col>
					<v-col cols="4">
						<v-btn
							icon
							color="green darken-1"
							class="mr-3"
							:loading="loading"
							@click="acceptRequest(item)">
							<v-icon>mdi-check</v-icon>
						</v-btn>
						<v-btn
							icon
							color="red darken-3"
							:loading="loading"
							@click="cancelRequest(item)">
							<v-icon>mdi-cancel</v-icon>
						</v-btn>
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
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = JSON.parse(xhr.responseText);
				this.ready = data;
				this.readyItems = Object.keys(data);
            }
        };
        xhr.open('get', `https://sopia-bot.firebaseio.com/shop/ready.json`);
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
