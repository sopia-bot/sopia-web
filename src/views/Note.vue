<template>
	<v-content>
		<v-row style="overflow: auto; height:100%; width:100%; margin:0;">
			<v-col cols="0" sm="1" md="3"></v-col>
			<v-col style="overflow: auto;">
				<v-row v-for="(note, i) in notes" :key="note.title">
					<v-col>
						<a class="name-tag" :href="'#' + note.ver" :name="note.ver">
							<span>{{ note.title }}</span>
						</a>
						<br>
						<br>
						<p v-for="(patch, idx) in note.patchs" :key="patch" class="ml-10" v-html="' - ' + patch"></p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-content>
</template>
<style scoped>
.name-tag:hover::before {
	content: "#";
	color: #311B92;
	margin-right: 5px;
	border: none;
}
.name-tag:hover {
	margin-left: 10.5px;
	border: none;
}
.name-tag {
	margin-left: 35px;
	color: #37474F;
	font-size: 2rem;
	outline: none;
	border: none;
	text-decoration: none;
}
.name-tag > span:hover {
	border-bottom: 2px solid #37474F;
	outline: none;
}
</style>
<style scope>
code {
	box-shadow: unset !important;
	color: #4A148C !important;
	font-weight: 300 !important;
	font-family: unset !important;
	padding: 3px 6px !important;
}
</style>
<script>
import { routeAssignUrl } from '@/modules/common.js';

export default {
	name: 'release-note',
	components: {
	},
	mounted() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if ( xhr.status === 200 && xhr.readyState === 4 ) {
                const data = JSON.parse(xhr.responseText);
				this.notes = data;
				this.$nextTick(() => {
					console.log(this.$route);
					if ( this.$route.hash.length > 0 ) {
						document.querySelector(`a[href="${this.$route.hash}"]`).click();
						document.body.click();
					}
				});
            }
        };
        xhr.open('get', `https://sopia-bot.firebaseio.com/notes.json`);
        xhr.send();
	},
	data: function () {
		return {
			notes: null,
		}
	}
}
</script>
