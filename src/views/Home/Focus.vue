<template>
	<div class="box indigo darken-4" ref="box">
		<v-row style="height: 80vh; margin-top: 10vh;">
			<v-col offset="1" cols="10">
				<p
					data-sa="from-left"
					data-sa-offset="10px"
					class="text-h3 white--text font-weight-bold"
					v-html="$t('focus.title')"></p>
				<p
					data-sa="from-left"
					data-sa-offset="10px"
					data-sa-delay="500"
					class="text-subtitle2 white--text">{{ $t('focus.description') }}</p>
				<focus-chat v-if="show"/>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import FocusChat from './FocusChat.vue';
export default {
	components: {
		FocusChat,
	},
	data: () => ({
		show: false,
	}),
	mounted() {
		window.addEventListener('scroll', this.scrollEvent.bind(this));
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollEvent);
	},
	methods: {
		async scrollEvent() {
			if ( this.show ){
				return;
			}

			const point = window.innerHeight;
			const rect = this.$refs.box.getBoundingClientRect();
			console.log('point', point, 'rect', rect.top);
			if ( rect.top <= point - 5 ) {
				this.show = true;
				return;
			}
		}
	}
};
</script>
