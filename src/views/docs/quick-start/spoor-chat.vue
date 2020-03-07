<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Spoor Chat 설정</h1>
				<h2 class="subtitle-1 grey--text mt-2">스푼라디오에서 도네이션 사용하기</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">Spoor Chat 이란?</h1>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							 * DJ 본인이 사용해야지만 가능합니다.<br>
							 * 소피아 프로그램의 소리가 방송에 들려야지만 가능합니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row class="mt-6">
					<v-col>
						Spoon + Super Chat 의 합성어로, 유튜브의 후원기능인 Super Chat을 스푼라디오에 도입시켰습니다.<br>
						청취자가 최소 요구 스푼을 선물하고, 대기 시간 이내에 채팅을 치면 음성합성 시스템이 읽어줍니다.<br>

						<br>
						소피아는 다음 TTS 엔진을 사용합니다.
						<v-btn @click="openNewTab('https://cloud.google.com/text-to-speech/')" text color="light-blue darken-4">Google Cloud Text to Speech</v-btn>
					</v-col>
				</v-row>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">사용하기</h1>
				<v-row class="mt-6">
					<v-col>
						사용하는 것은 매우 쉽습니다. Spoor Chat 탭에서 사용하기를 활성시켜준 뒤 Save를 누르면 즉시 적용됩니다.

						<Picture :src="imgs.enable" />
					</v-col>
				</v-row>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">최소 요구 스푼 지정</h1>
				<v-row class="mt-6">
					<v-col>
						기본적으로 1스푼으로 지정되어 있지만, 많이 받다보면 방송 진행에 어려움이 있을 수 있습니다.<br>
						요구하는 스푼의 개수를 지정한 후 Save를 누르면 즉시 적용되어 해당 스푼 이상을 선물받았을 때만 동작합니다.

						<Picture :src="imgs.minSpoon" />
					</v-col>
				</v-row>



				<!-- S:Footer -->
				<v-divider class="mt-12 mb-3"></v-divider>
				<v-row class="my-6">
					<v-col align="center">
						<p class="blue-grey--text text--lighten-3">작성자 - 개발자 윤군</p>
					</v-col>
				</v-row>
				<!-- E:Footer -->
			</v-col>
			<v-col cols="0" sm="1" md="4"></v-col>
		</v-row>
	</v-container>
</template>
<script>
import { openNewTab } from '../../../modules/common.js';

export default {
	name: 'spoor-chat',
	components: {
	},
	methods: {
		openNewTab,
	},
	computed: {
		small_() {
			return this.$store.getters.small;
		}
	},
	watch: {
		small_(val) {
			this.small = val;
		}
	},
	data: function() {
		return {
			small: false,
			imgs: {
				enable: require('@/assets/docs/quick-start/spoor-chat/enable.gif'),
				minSpoon: require('@/assets/docs/quick-start/spoor-chat/min-spoon.gif')
			}
		}
	}
}
</script>
