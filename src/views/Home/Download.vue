<template>
  <div class="box" ref="box">
    <v-row style="height: 30vh; margin-top: 20vh;">
      <v-col offset="1" cols="10">
        <p
            data-sa="flip-bottom"
			data-sa-delay="500"
            style="text-align: center;"
            class="text-h3 indigo--text text--darken-4 font-weight-bold"
            v-html="$t('download.title')"></p>
        <p
            data-sa="flip-bottom"
			data-sa-delay="500"
            style="text-align: center;"
            class="text-subtitle2 indigo--text text--darken-4"
            v-html="$t('download.description')"></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1" cols="10" align="center">
        <v-btn
            x-large
            depressed
            dark tile
            @click="download"
            color="indigo">{{ $t('download.latest') }}</v-btn>
        <p class="mt-2 text-caption">{{ $t('download.version') + ': ' + version }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Download',
  data: () => ({
    version: '0.0.0',
    url: '',
  }),
  async created() {
    const res = await axios.get('https://api.sopia.dev/contents/latest/');
    const latest = res.data.data[0];
    this.version = latest.version;
    this.url = `https://sopia-v3.s3.ap-northeast-2.amazonaws.com/${latest.files[0].url}`;
  },
  methods: {
    download() {
      window.open(this.url);
    },
  },
};
</script>
