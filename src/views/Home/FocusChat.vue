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
	background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBoRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAASAAAATgAAAAAAAABgAAAAAQAAAGAAAAABUGFpbnQuTkVUIHYzLjUuMTAA/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgAMgAyAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8wre0/w55qLLqM62ysMrEWAdh+PSl8M6fFLMbu5K7YziNT3b1/CqniRLq98UA2SlhHGobnA55FdbajHmZwxTnLlRtm78NabDGhs/tEwchmVfMGD0znvn0pqahoN3fCH+z0RcHcWiKY4745/KuUVtTtdSFtJCvmxHmN+317Gp5dTthGZXUSXPJJVsh1PUH1rP2rZt7GKOi1LwxHIv2jRg20jPks4b64b+h/OuZZWRyrqVZTggjBBrZ0PWftFwkA8xImTpu7gVJr1kpX7UhzJ0cZ5I9a0umtDJxcWYVFFFBJ1WlKkOmQASYyoYjZnk81aukuLHTP7YFtDeW6zJEFmyu4555H8PQemaz9NmR9PhO45C7T+HFa1rrk9iwSZ3vLJU+WyaVUCsDncMjJI64H41riYRVHmS7E4KbliOWT7nPePtPvbm8j1trWSyF3GpkgkYEbl4BBHTjHBrn49GkfRLnUpn2tBgtFj76k4GD/e749K63xb4gtdTtp4LeRismGVyOmDnpWBq2pXd74ZsdPjG2GCTdHDEnzSN/ebHLH+VeXBuyR7E4wu35EXhKKObVCRnMKMwY+hwAPz5rrJ7bzYXTfu3Ag5yKwfC+nNZvcPPJHvdQDGnJjOehPTPsOlb0zLFA8m/hVJ/SvXo0oundnhV6slU5UcjRRRXPY3Luk3giYwSHCscqfetfULXOlR3TXIhZ2ZYfLILHHDkjsO3PJPSuXqeC5aPzd5ZjIQdxOcEDFa+0fJyEKmvac5myyQWJlRZnkkTHytjoeuPepLaa9vi4ib7LbOMyFG5KjtnrVMabPd30gcrCjMSZGPQf1NbF0i29pHBAUlbABVT8pPqSOwrljDW53c+lrl/RWxvymyDAWPjsPSpdVnVF8iNsk8tz0HpVFLloowEYvJjBkIwB7AdhUGSxJJyT1JrpU2o8py1IwlJS6hRS0VAiKiiikUKKUUUUxC0ooooAKKKKQH/2Q==);
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
	background-image: url(data:image/jpeg;base64,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);
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