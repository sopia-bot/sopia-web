<template>
	<v-container>
		<v-row class="mt-6">
			<v-col cols="0" sm="1" md="1"></v-col>
			<v-col>
				<h1 class="display-1 purple--text text--darken-4">CODE</h1>
				<h2 class="subtitle-1 grey--text mt-2">소피아의 모든 동작을 프로그래밍</h2>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">1. 진입점</h1>
				<v-row class="mt-6">
					<v-col>
						<v-sheet
							elevation="4"
							class="mx-auto pa-6 sheet-card">
							이 문서에선 <code>CODE</code> 탭의 설명만 진행합니다.<br>
							상세한 프로그래밍 방법은 API DOC 을 참고하세요.
						</v-sheet>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						소피아가 초기화 될 땐 무조건 <code>sopia/main.js</code> 파일을 실행시킵니다. 즉, <code>main.js</code>는 무조건 필요합니다.
					</v-col>
				</v-row>
				<v-divider class="my-6"></v-divider>
				<h1 class="headline font-weight-bold">2. 기본으로 제공하는 코드 흐름</h1>

				<!-- S:Work Flow -->
				<v-container class="mt-6">
					<div v-for="(flow, idx) in flows" class="ma-0 pa-0" :key="flow.key">
						<v-row>
							<v-col align="center">
								<v-sheet
									elevation="4"
									class="pa-6 mx-auto flow-card"
									dark
									color="teal darken-2">
									<!-- S:Content -->
									<span v-if="flow.type === 'msg'">{{ flow.content }}</span>
									<v-select
										v-else-if="flow.type === 'array'"
										v-model="select"
										@change="test"
										:items="Object.keys(flow.content)"
										:label="flow.label"></v-select>
									<!-- E:Content -->
								</v-sheet>

							</v-col>
						</v-row>
						<v-row v-if="idx < flows.length - 1">
							<v-col align="center">
								<v-icon x-large>mdi-menu-down</v-icon>
							</v-col>
						</v-row>

						<!-- S:Sub Work Flow -->
						<div 
							v-for="(sub, sidx) in flow.content[select]"
							class="ma-0 pa-0"
							:key="sub.key">
							<v-row v-if="sidx < flow.content[select].length">
								<v-col align="center">
									<v-icon x-large>mdi-menu-down</v-icon>
								</v-col>
							</v-row>
							<v-row>
								<v-col align="center">
									<v-sheet
										elevation="4"
										class="pa-6 mx-auto flow-card"
										dark
										color="blue-grey darken-2">
										<!-- S:Content -->
										<span v-if="sub.type === 'msg'">{{ sub.content }}</span>
										<v-select
											v-else-if="flow.type === 'array'"
											:items="Object.keys(sub.content)"
											:label="flow.label"></v-select>
										<!-- E:Content -->
									</v-sheet>
								</v-col>
							</v-row>
						</div>
						<!-- E:Sub Work Flow -->
					</div>
				</v-container>
				<!-- E:Work Flow -->


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
	name: 'menus-code',
	components: {
	},
	methods: {
		test: function () {
			console.log(this.select)
		}
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
				test: require('@/assets/docs/menus/home/console-ex.gif')
			},
			select: "",
			flows: [
				{ key: 'main', content: 'main.js 호출', type: 'msg' },
				{ key: 'preload', content: 'preload.js 호출', type: 'msg' },
				{ key: 'storages', content: 'storages 로딩', type: 'msg' },
				{ key: 'functions', content: '필요 함수 선언', type: 'msg' },
				{ key: 'events', content: { 
					"Join": [
						{ key: 'join', content: '청취자 입장', type: 'msg' },
						{ key: 'joinFunction', content: 'storages 에서 입장 반응 정보를 찾음', type: 'msg' },
						{ key: 'joinRuncmd', content: '문자열화 시킴', type: 'msg' },
						{ key: 'joinSend', content: '반응 채팅으로 전송', type: 'msg' },
					],
					"Like": [
						{ key: 'like', content: '청취자가 좋아요 누름', type: 'msg' },
						{ key: 'likeFunction', content: 'storages 에서 좋아요 반응 정보를 찾음', type: 'msg' },
						{ key: 'likeRuncmd', content: '문자열화 시킴', type: 'msg' },
						{ key: 'likeSend', content: '반응 채팅으로 전송', type: 'msg' },
					],
					"Present": [
						{ key: 'present', content: '청취자가 스푼을 선물함', type: 'msg' },
						{ key: 'presentFunction', content: 'storages 에서 스푼에 대한 반응 정보를 찾음', type: 'msg' },
						{ key: 'presentFunction2', content: '정보가 없으면 기본 정보를 사용', type: 'msg' },
						{ key: 'presentRuncmd', content: '문자열화 시킴', type: 'msg' },
						{ key: 'presentSend', content: '반응 채팅으로 전송', type: 'msg' },
					],
					"Message": [
						{ key: 'message', content: '청취자가 채팅을 침', type: 'msg' },
						{ key: 'messageCheck', content: '해당 채팅이 명령어(!) 인지 검사', type: 'msg' },
						{ key: 'messageFunction', content: '명령어가 관리자 메시지인지 storages에서 찾음', type: 'msg' },
						{ key: 'messageFunction', content: '관리자 명령어가 아니면 일반 메시지인지 검사', type: 'msg' },
						{ key: 'messageFunction2', content: '정보가 없으면 채팅을 보내지 않음', type: 'msg' },
						{ key: 'messageRuncmd', content: '정보가 있으면 문자열화 시킴', type: 'msg' },
						{ key: 'messageSend', content: '반응 채팅으로 전송', type: 'msg' },
					],
				}, type: 'array', label:'이벤트 발생' },
			]
		}
	}
}
</script>
