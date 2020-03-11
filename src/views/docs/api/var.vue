<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">Var 객체</h1>
				<h2 class="subtitle-1 grey--text mt-2">임시적인 변수를 저장하는 객체</h2>
				<v-divider class="my-6"></v-divider>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							해당 객체는 코드 리로딩 ( F5, 번들 설치 ) 발생시 초기화되는 객체입니다.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<code class="teal--text text--darken-4">
							<span class="title font-weight-bold py-0">
								sopia.var :<span class="font-weight-regular">Object</span>
							</span>
						</code>

						<code class="black--text">
							<span class="body-1 font-weight-bold">sopia.live</span>
						</code>
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
export default {
	name: 'template',
	components: {
	},
	created: function() {
	},
	mounted: function() {
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
		}
	}
}
</script>
