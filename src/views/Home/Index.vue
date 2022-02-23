<template>
	<!-- S:Content -->
	<full-page ref="fullpage" :options="options" id="fullpage">
		<div class="section" style="overflow: hidden;">
			<banner />
		</div>
		<div class="section">
			<focus />
		</div>
	</full-page>
	<!-- E:Content -->
</template>
<script>
import Banner from './Banner.vue';
import Donation from './Donation.vue';
import Focus from './Focus.vue';
export default {
	name: 'home',
	components: {
		Banner,
		Donation,
		Focus,
	},
	data: () => ({
		options: {
			scrollBar: true,
		},
	}),
	methods: {
	},
	mounted() {
		SA.initHandler();
	},
}
</script>
<style>
.box {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
</style>