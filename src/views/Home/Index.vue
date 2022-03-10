<template>
	<!-- S:Content -->
	<div ref="fullpage">
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
	</div>
	<!-- E:Content -->
</template>
<script>
import Banner from './Banner.vue';
import Focus from './Focus.vue';
import Funny from './Funny.vue';
import Download from './Download.vue';
export default {
	name: 'home',
  metaInfo() {
    return {
      title: 'SOPIAv3',
      htmlAttrs: {
        lang: navigator.language,
        dir: 'ltr',
      },
      meta: [
        {charset: 'utf-8'},
        {meta: 'description', content: this.$t('description'),},
        {name: 'keywords', content: this.mkKeyword()},
        {name: 'author', content: this.$t('author')},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          property: 'og:title',
          content: 'SOPIAv3',
          vmid: 'og:title',
        },
        {
          property: 'og:description',
          content: this.$t('description'),
          vmid: 'og:description',
        },
        {
          property: 'og:image',
          content: require('../../assets/icon.png'),
          vmid: 'og:image',
        },
      ],
    };
  },
	components: {
		Banner,
		Focus,
		Funny,
    Download,
	},
	data: () => ({
		options: {
			scrollBar: true,
			licenseKey: 'E272EB83-D1A74347-98FEBE4D-59C588A0',
		},
	}),
	methods: {
	},
	mounted() {
    this.$evt.$off('move-scroll');
    this.$evt.$on('move-scroll', (page) => {
      window.fullpage_api.moveTo(page);
    });
		try {
			document.querySelector('html').className = '';
			new window.fullpage(this.$refs.fullpage, this.options);
		} catch {
			document.querySelector('html').className = '';
			new window.fullpage(this.$refs.fullpage, this.options);
		}
		document.querySelector('body').style.overflowX = 'hidden';
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
