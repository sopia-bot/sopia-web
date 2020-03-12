<template>
	<v-content>
		<v-row style="overflow: hidden; height:100%; width:100%; margin:0;">
			<v-col cols="0" md="3" xl="2" class="d-none d-md-flex pr-1 pl-0 py-0">
				<Navi />
			</v-col>
			<Navi class="d-md-none"/>
			<v-col style="overflow: auto;">
				<v-row align="center">
					<v-col style="display:block; height:500px">
						<transition name="scroll-y-reverse-transition">
							<router-view></router-view>
						</transition>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-content>
</template>
<style>
@import url("https://github.githubassets.com/assets/gist-embed-4ac6018bcc05457cde2f66d2e7299d11.css");

.sheet-card {
	border-left: 6px solid #607D8B !important;
}
.flow-card {
	width: 350px;
	max-width: 80%;
}
code {
	box-shadow: unset !important;
	color: #4A148C !important;
	font-weight: 300 !important;
	font-family: unset !important;
	padding: 3px 6px !important;
}

@media screen and (max-width: 960px) {
	.gist {
		margin: 2rem 1rem;
		box-shadow: 5px 5px 10px 1px #afafaf;
	}
}

@media screen and (min-width: 960px) {
	.gist {
		margin: 2rem 3rem;
		box-shadow: 5px 5px 10px 1px #afafaf;
	}
}

@media screen and (min-width: 1264px) {
	.gist {
		margin: 2rem 4rem;
		box-shadow: 5px 5px 10px 1px #afafaf;
	}
}

@media screen and (min-width: 1680px) {
	.gist {
		margin: 2rem 5rem;
		box-shadow: 5px 5px 10px 1px #afafaf;
	}
}

</style>
<script>
import Navi from './Com/navi';
import { routeAssignUrl } from '../modules/common.js';

export default {
	name: 'docs',
	components: {
		Navi,
	},
	mounted: function() {
		if ( this.$route.path === "/docs" ) {
			routeAssignUrl('/docs/quick-start/install/', this);
		}
	},
	data: function () {
		return {
		}
	}
}
</script>
