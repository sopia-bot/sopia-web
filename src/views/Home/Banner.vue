<template>
	<div class="box">
		<div class="wave top"></div>
		<div class="wave"></div>
		<div class="wave two"></div>
		<v-row style="height: 70vh;" align="center">
			<v-col cols="12">
				<v-row>
					<v-col offset="1" cols="10">
						<p
							data-sa="from-bottom"
							data-sa-offset="10px"
							class="text-h2 font-weight-bold indigo--text text--darken-1">SOPIA</p>
						<p
							data-sa="from-bottom"
							data-sa-offset="10px"
							data-sa-delay="500"
							class="text-subtitle">
							{{ $t('banner.description') }}
						</p>
					</v-col>
				</v-row>
        <v-row class="ma-0">
          <v-col offset="1" cols="10" class="px-0">
            <v-btn
                depressed tile
                color="indigo"
                data-sa="from-bottom"
                data-sa-delay="1000"
                class="px-4"
                @click="$evt.$emit('move-scroll', 4)"
                dark x-large>{{ $t('download') }}</v-btn>
          </v-col>
        </v-row>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {
	name: 'HomeBanner',
	data: () => ({
	}),
	methods: {
	},
}
</script>
<style scoped>
.wave {
  background: #283593;
  width: calc(100vw * 2.5);
  height: calc(100vw * 2);
  left: calc(100vw / 2 * -1);
  top: calc(100vh / 1.4 + (100vh / 4));
  transform-origin: 50% 48%;
  border-radius: 43%;
  position: absolute;
  animation: drift 10000ms infinite linear;
}

.wave.two {
  animation: drift 15000ms infinite linear;
  opacity: .5;
  background: #1A237E;
}

.wave.top {
	width: 1000px;
	height: 1000px;
	left: -250px;
	top: -900px;
	animation: drift 25000ms infinite linear;
	background: #1A237E;
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}
</style>