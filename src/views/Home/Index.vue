<template>
	<!-- S:Content -->
	<full-page ref="fullpage" :options="options" id="fullpage">
		<div class="section" style="overflow: hidden;">
			<banner />
		</div>
		<div class="section">
			<focus />
		</div>
		<div class="section">
			<funny/>
		</div>
    <div class="section">
      <download/>
    </div>
	</full-page>
	<!-- E:Content -->
</template>
<script>
import Banner from './Banner.vue';
import Focus from './Focus.vue';
import Funny from './Funny.vue';
import Download from './Download.vue';
export default {
	name: 'home',
	components: {
		Banner,
		Focus,
		Funny,
    Download,
	},
	data: () => ({
		options: {
			scrollBar: true,
		},
	}),
	methods: {
	},
	mounted() {
    this.$evt.$off('move-scroll');
    this.$evt.$on('move-scroll', (page) => {
      this.$refs.fullpage.api.moveTo(page);
    });
		SA.scrollHandler();
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