<template>
	<v-app>
		<v-sheet>
			<transition name="scroll-y-reverse-transition">
				<router-view/>
			</transition>
		</v-sheet>
	</v-app>
</template>
<script>

export default {
	name: 'App',
};
</script>
