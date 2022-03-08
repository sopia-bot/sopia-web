<template>
	<ul class="chat-thread" ref="chatbox">
		<li
			v-for="chat of chatList"
			:key="chat.text"
			:class="chat.class">
			{{ chat.text }}
		</li>
	</ul>
</template>
<script>
export default {
	data: () => ({
		chatList: [],
		delay: 1500,
		scrollFix: true,
	}),
	async mounted() {
		console.log('mounted!!');
		this.scrollAutoFix();
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.0'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.1'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.2'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.3'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.4'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.5'),
			class: 'type-chat left',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.block'),
			class: 'type-block',
		});
		await this.$sleep(this.delay);
		this.chatPush({
			text: this.$t('focus.chat.end'),
			class: 'type-chat right',
		});
	},
	methods: {
		chatPush(chat) {
			if ( this.chatList.length >= 3 ) {
				//this.chatList.shift();
			}
			this.chatList.push(chat);
		},
		async scrollAutoFix() {
			while ( this.scrollFix ) {
				await this.$sleep(500);
				this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight;
			}
		},
	},
}
</script>
<style scoped lang="scss">
// Variables
// --------------------------------------
$scrollbar-width:              10px;
$chat-thread-bgd-color:        rgba(25,147,147,0.2);
$chat-thread-msg-arrow-size:   15px;
$chat-thread-avatar-size:      50px;
$chat-thread-offset:           #{$chat-thread-avatar-size + 30px};

body {
	padding: 0;
	margin: 0;
	background: -moz-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);
	background: -webkit-linear-gradient(-45deg, #183850 0, #183850 25%, #192C46 50%, #22254C 75%, #22254C 100%);
	background-repeat: no-repeat;
	background-attachment: fixed;
}

.chat-thread {
	position: absolute;
	right: 0px;
	margin: 24px auto 0 auto;
	padding: 0 20px 0 0;
	list-style: none;
	overflow-y: hidden;
  	overflow-x: hidden;
}

.chat-thread li {
	position: relative;
	clear: both;
	display: inline-block;
	padding: 16px 40px 16px 20px;
	margin: 0 0 20px 0;
	font: 16px/20px 'Noto Sans', sans-serif;
	border-radius: 10px;
	background-color: $chat-thread-bgd-color;
}

.chat-thread li.type-block {
	color: red;
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}

/* Chat - Avatar */
.chat-thread li.type-chat:before {
	position: absolute;
	top: 0;
	width: $chat-thread-avatar-size;
	height: $chat-thread-avatar-size;
	border-radius: $chat-thread-avatar-size;
	content: '';
}

/* Chat - Speech Bubble Arrow */
.chat-thread li.type-chat:after {
	position: absolute;
	top: $chat-thread-msg-arrow-size;
	content: '';
	width: 0;
	height: 0;
	border-top: $chat-thread-msg-arrow-size solid $chat-thread-bgd-color;
}

.chat-thread li.type-chat.right {
	animation: show-chat-odd 0.15s 1 ease-in;
	-moz-animation: show-chat-odd 0.15s 1 ease-in;
	-webkit-animation: show-chat-odd 0.15s 1 ease-in;
	float: right;
	margin-right: $chat-thread-offset;
	color: #0AD5C1;
}

.chat-thread li.type-chat.right:before {
	right: -$chat-thread-offset;
  // Placeholder avatar 1
	background-image: url(https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png);
  background-size: contain;
}

.chat-thread li.type-chat.right:after {
	border-right: $chat-thread-msg-arrow-size solid transparent;
	right: -$chat-thread-msg-arrow-size;
}

.chat-thread li.type-chat.left {
	animation: show-chat-even 0.15s 1 ease-in;
	-moz-animation: show-chat-even 0.15s 1 ease-in;
	-webkit-animation: show-chat-even 0.15s 1 ease-in;
	float: left;
	margin-left: $chat-thread-offset;
	color: #0EC879;
}

.chat-thread li.type-chat.left:before {
	left: -$chat-thread-offset;
  // Placeholder avatar 2
  background-image: url(https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png);
  background-size: contain;
}

.chat-thread li.type-chat.left:after {
	border-left: $chat-thread-msg-arrow-size solid transparent;
	left: -$chat-thread-msg-arrow-size;
}

.chat-window {
	position: fixed;
	bottom: 18px;
}

.chat-window-message {
	width: 100%;
	height: 48px;
	font: 32px/48px 'Noto Sans', sans-serif;
	background: none;
	color: #0AD5C1;
	border: 0;
	border-bottom: 1px solid $chat-thread-bgd-color;
	outline: none;
}

// A tiny bit responsive...
// --------------------------------------
/* Small screens */
@media all and (max-width: 767px) {
	.chat-thread {
		width: 90%;
		height: 320px;
	}

	.chat-window {
		left: 5%;
		width: 90%;
	}
}

/* Medium and large screens */
@media all and (min-width: 768px) {
	.chat-thread {
		width: 50%;
		height: 320px;
	}

	.chat-window {
		left: 25%;
		width: 50%;
	}
}

// Animation
// --------------------------------------
@keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}

@-moz-keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}

@-webkit-keyframes show-chat-even {
  0% {
    margin-left: -480px;
  }
  100% {
    margin-left: 0;
  }
}

@keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}

@-moz-keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}

@-webkit-keyframes show-chat-odd {
  0% {
    margin-right: -480px;
  }
  100% {
    margin-right: 0;
  }
}
</style>