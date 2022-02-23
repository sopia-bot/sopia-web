<template>
	<div class="box indigo darken-4">
		<v-row style="height: 80vh; margin-top: 10vh;">
			<v-col offset="1" cols="10">
				<p class="text-h3 white--text" v-html="$t('focus.title')"></p>
				<p class="text-subtitle2 white--text">{{ $t('focus.description') }}</p>
				<focus-chat />
			</v-col>
		</v-row>
	</div>
</template>
<script>
import FocusChat from './FocusChat.vue';
export default {
	components: {
		FocusChat,
	},
};
</script>
