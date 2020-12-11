export default [
	{
		title: '소피아 1.8.1',
		ver: '1.8.1',
		patchs: [
			'[!HotFix] 레거시 코드 지원되지 않는 버그 수정',
		],
	},
	{
		title: '소피아 1.8.0',
		ver: '1.8.0',
		patchs: [
			'소피아의 중요 엔진을 <a class="blue-grey--text text--darken-3" href="https://github.com/sopia-bot/sopia-core" target="_blank">sopia-core</a>로 변경했습니다.<br>기존 레거시 코드는 지원하지만, 이 때문에 소피아 입장을 두 번 합니다.',
			'<a class="blue-grey--text text--darken-3" href="https://typecast.ai/" target="_balnk">Typecast</a>의 목소리를 추가했습니다. (총 59개)',
			'SPOOR CHAT의 동작 방식을 더 최적화 하였습니다.',
			'SPOOR CHAT에서 랜덤 타입 사용시, 원하는 목소리만 선택하여 그 중 랜덤하게 사용할 수 있습니다.',
			'<code>sopia.send</code>의 함수가 100글자 넘어가는 글을 전송시 일부 전송이 되지 않는 버그를 수정했습니다.',
			'업데이트시 릴리즈노트 페이지를 띄우도록 하였습니다.',
		],
	},
	{
		title: '소피아 1.7.2',
		ver: '1.7.2',
		patchs: [
			'번들 종속성 설치시 최대 1하위 폴더까지 생성',
		],
	},
	{
		title: '소피아 1.7.1',
		ver: '1.7.1',
		patchs: [
			'<code>EZ-CMD</code>탭 즉시 적용 안 됨, 코드 증발 버그 수정',
		],
	},
	{
		title: '소피아 1.7.0',
		ver: '1.7.0',
		patchs: [
			'라이브 정보에 <code>현재 청취자 수</code>, <code>누적 하트 수</code>, <code>누적 청취자 수</code> 추가',
			'번들 <code>쉬운 명령어 추가</code>를 기본 메뉴로 제공합니다.',
			'프로그램 시작시, 공지사항 띄우는 기능 추가',
			'자동 업데이트 기능 추가. (더 이상 새로 다운받아서 다시 설정할 필요가 없습니다!)',
			'자동 업데이트 기능 추가로 인한 설정 불러오기 기능 제거',
		],
	},
	{
		title: '소피아 1.6.3',
		ver: '1.6.3',
		patchs: [
			'하나의 이벤트에 15개의 콜백이 등록될 경우 더 이상 등록되지 않는 버그 수정 (최대 200개 등록 가능)',
			'디버깅 로그 삭제',
			'에러가 로그에 남지 않는 버그 수정',
			'미니게임 번들에서 러시안 룰렛 코드 삭제',
		],
	},
	{
		title: '소피아 1.6.2',
		ver: '1.6.2',
		patchs: [
			'매니저일 때만 매니저 멘트 동작 설정 삭제 (더 이상 사용 안 함)',
			'코드 에디터 다크모드 지원 (SETTING 탭에서 설정 후 재부팅 해야 적용)',
		],
	},
	{
		title: '소피아 1.6.1',
		ver: '1.6.1',
		patchs: [
			'구글 로그인, 애플 로그인 지원하도록 수정',
			'설정 파일 복사 안 되는 버그 수정',
			'프로그램 창 크기 저장 (소피아 재시작시 유지됨)',
		],
	},
	{
		title: '소피아 1.6.0',
		ver: '1.6.0',
		patchs: [
			'배열 형태 설정 파일 불러오기 하면 내용 변형되는 버그 수정',
			'설정파일 불러오기시 <code>main.js</code>, <code>preload.js</code> 파일 불러오도록 수정',
			'성공적으로 설정파일을 불러왔을 때, 소피아 재시작하도록 수정',
			'번들 저장하는 방식 변경',
			'번들을 이용하여 새로운 페이지 생성 가능',
			'사용자 지정 번들 불러오기 기능 추가',
			'중앙 분할창 변경시 NavBar 크기 자동 변경',
			'중앙 분할창 상태 저장 (소피아 재시작시 유지됨)',
			'문법 검사 방식 수정 (더 자세한 오류 내용 확인 가능)',
			'에디터 html 문법 코드 하이라이팅 지원',
			'Spoor Chat <code>규리</code>삭제',
			'Spoor Chat <code>봄</code>, <code>라이언</code>, <code>나오미</code>, <code>닉</code> 추가',
		],
	},
	{
		title: '소피아 1.5.2',
		ver: '1.5.2',
		patchs: [
			'sopia.me 객체 null 현상 수정 (매니저 검사 못 하는 버그 수정)',
		],
	},
	{
		title: '소피아 1.5.1',
		ver: '1.5.1',
		patchs: [
			'[!HotFix] 유저정보 가져오지 못할 시, 아무런 동작하지 않는 버그 수정',
		],
	},
	{
		title: '소피아 1.5.0',
		ver: '1.5.0',
		patchs: [
			'present.json 이 undefined일 경우만 서버 내용 적용',
			'디버깅을 위한 로그파일 생성',
			'목소리 인물 변경시 생기는 버그 수정',
			'개발자도구 열기 지원',
			'스크립트 삽입 지원',
		],
	},
	{
		title: '소피아 1.4.1',
		ver: '1.4.1',
		patchs: [
			'[!HotFix] present.json 이상 동작 수정',
			'로그인시 공백있으면 오류나는 동작 수정',
		],
	},
	{
		title: '소피아 1.4.0',
		ver: '1.4.0',
		patchs: [
			'네이버 파파고 목소리 추가',
			'스티커 업데이트시 자동 추가 (해당 기능은 [스푼 통계] 번들도 적용됨)',
		],
	},
	{
		title: '소피아 1.3.5',
		ver: '1.3.5',
		patchs: [
			'[!HotFix] 오른쪽 하단 Feedback 상자 제거',
		],
	},
	{
		title: '소피아 1.3.4',
		ver: '1.3.4',
		patchs: [
			'[SpoorChat] 기본 버전에 프리미엄 목록이 있어 제대로 동작하지 않는 증상 수정',
		],
	},
	{
		title: '소피아 1.3.3',
		ver: '1.3.3',
		patchs: [
			'고유닉이 숫자로 이루어져 있으면 튕기는 문제 수정',
		],
	},
	{
		title: '소피아 1.3.2',
		ver: '1.3.2',
		patchs: [
			'자주 팅기는 문제 일부 수정',
		],
	},
	{
		title: '소피아 1.3.1',
		ver: '1.3.1',
		patchs: [
			'설정 불러오기 버그 일부 수정',
			'방송에 들어가면 자동으로 음소거',
			'미니게임 "추첨" 추가',
			'소피아 용량 최적화',
		],
	},
	{
		title: '소피아 1.3.0',
		ver: '1.3.0',
		patchs: [
			'스푼 기본 주소 설정 추가',
			'번들 기능 일부 수정',
			'멜론 현재곡 정보 명령어 번들 추가',
		],
	},
	{
		title: '소피아 1.2.11',
		ver: '1.2.11',
		patchs: [
			'Spoor Chat 버그 수정',
		],
	},
	{
		title: '소피아 1.2.10',
		ver: '1.2.10',
		patchs: [
			  'Spoor Chat 시그니처와 함께 사용시 일어나는 버그 일부 수정',
		],
	},
	{
		title: '소피아 1.2.9',
		ver: '1.2.9',
		patchs: [
			'채팅 안 보내지는 버그 수정',
			'DJ 사용시 "매니저일때만 매니저 멘트 작동" 옵션 켜져있으면 동작 안 하는 버그 수정',
		],
	},
	{
		title: '소피아 1.2.8',
		ver: '1.2.8',
		patchs: [
			'DJ 본인 계정으로 소피아 가능하도록 설정',
			'소피아 스푼 창에서 명령어 입력 가능하도록 설정',
		],
	},
	{
		title: '소피아 1.2.7',
		ver: '1.2.7',
		patchs: [
			'소피아 기반 웹브라우저 버전 업데이트',
			'Spoor Chat 스킵 기능 추가',
			'개발자 전용 명령어 추가',
		],
	},
	{
		title: '소피아 1.2.6',
		ver: '1.2.6',
		patchs: [
			'리로딩시 번들 초기화 안 되는 버그 수정',
		],
	},
	{
		title: '소피아 1.2.5',
		ver: '1.2.5',
		patchs: [
			'설정 불러오기시 \\ 생기던 문제 수정',
			'설정 불러오기시 안 불러오지는 버그 수정',
			'서버로 들어오는 트래픽 최소화',
			'UI 대폭 변경',
			'100글자 넘었을 때 안 보내지는 버그 수정',
			'기본 설정값 변경 (config.json)은 최신으로 유지 부탁드립니다.',
			'신청곡 기능 추가',
		],
	},
	{
		title: '소피아 1.2.4',
		ver: '1.2.4',
		patchs: [
			'설정 불러오기시 줄바꿈 수정',
			'설정 불러오기시 bundle 안 불러오던 점 수정',
			'스푼 최신 스티커 적용 (케이크, 감자튀김, 박수, 버블티)',
			'반복 명령어 여러개 추가시 삭제 안 되는 버그 수정',
			'OnOff 명령어 중복 채팅 안 하도록 수정.',
			'투표 기능 번들 추가',
		],
	},
	{
		title: '소피아 1.2.3',
		ver: '1.2.3',
		patchs: [
			'UI 일부 수정',
			'custom-onoff 추가.',
			'100 글자 초과시 채팅 안 보내지는 점 수정.',
			'설정 불러오기시 admin.json 에 문제가 있던 점 수정',
			'spoor chat disable 안 되는 점 수정',
			'spoor chat tts 소리 조절 안 되는 점 수정',
			'반복 명령어에서 0초는 반복 설정 안 되도록 함.',
			'반복 명령어는 매니저 이상 권한자만 가능하도록 수정',
		],
	},
	{
		title: '소피아 1.2.2',
		ver: '1.2.2',
		patchs: [
			'반복 안 되던 버그 수정',
		],
	},
	{
		title: '소피아 1.2.1',
		ver: '1.2.1',
		patchs: [
			'번들 기능 안 되는 거 수정',
		],
	},
	{
		title: '소피아 1.2.0',
		ver: '1.2.0',
		patchs: [
			'이전 설정 불러오기 기능 추가',
			'번들 기능 추가',
			'UI 변경 ( 상단 탭 )',
			'코드 리로딩 추가',
		],
	},
	{
		title: '소피아 1.1.7',
		ver: '1.1.7',
		patchs: [
			'시그니처 녹음 기능 추가',
			'이벤트 본인 감지 삭제',
			'특정 멘트 매니저만 가능하도록 수정',
			'기타 버그 수정',
		],
	},
	{
		title: '소피아 1.1.6',
		ver: '1.1.6',
		patchs: [
			'프로그램 보안 강화 및 안정화',
			'시그니처 기능 베타 추가',
			'파일 저장시 오류 검사 메타 기능 추가',
		],
	},
	{
		title: '소피아 1.1.5',
		ver: '1.1.5',
		patchs: [
			'도네이션 기능 안 되는 버그 해결',
			'잘못 된 파일이 들어 있던 것 삭제',
		],
	},
	{
		title: '소피아 1.1.4',
		ver: '1.1.4',
		patchs: [
			'Spoor Chat 최대 입력 시간 기능 추가',
			'사용 서버 변경',
		],
	},
	{
		title: '소피아 1.1.3',
		ver: '1.1.3',
		patchs: [
			'방송 입장 후 동작하지 않는 부분 수정',
		],
	},
]
