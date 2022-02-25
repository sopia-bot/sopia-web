<template>
	<div class="box indigo darken-4" @click="pop" ref="box">
		<v-row style="height: 80vh; margin-top: 10vh;">
			<v-col offset="1" cols="10">
				<p
					data-sa="scale"
					class="text-h3 white--text font-weight-bold"
					v-html="$t('funny.title')"></p>
				<p
					data-sa="scale"
					class="text-subtitle2 white--text"
					v-html="$t('funny.description')"></p>
				<volume-icon style="margin-top: 20vh;"/>
			</v-col>
		</v-row>
	</div>
</template>
<script>
import VolumeIcon from './VolumeIcon.vue';
export default {
	components: {
		VolumeIcon,
	},
	data: () => ({
		particles: [],
		colors: ["#eb6383","#fa9191","#ffe9c5","#b4f2e1"],
		poped: false,
	}),
	mounted() {
		window.addEventListener('scroll', this.scrollEvent);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.scrollEvent);
	},
	methods: {
		scrollEvent(evt) {
			const point = window.innerHeight;
			const rect = this.$refs.box.getBoundingClientRect();
			if ( rect.top <= point ) {
				if ( !this.poped ) {
					this.poped = true;
					this.pop();
					setTimeout(this.render.bind(this), 700);
				}
			}
		},
		pop () {
			for (let i = 0; i < 150; i++) {
				const p = document.createElement('particule');
				p.className = 'particule';
				p.x = window.innerWidth * 0.5;
				p.y = window.innerHeight + (Math.random() * window.innerHeight * 0.3);
				p.vel = {
					x: (Math.random() - 0.5) * 10,
					y: Math.random() * -20 - 15
				};
				p.mass = Math.random() * 0.2 + 0.8;
				this.particles.push(p);
				p.style.transform = `translate(${p.x}px, ${p.y}px)`;
				const size = Math.random() * 15 + 5;
				p.style.width = size + 'px';
				p.style.height = size + 'px';
				p.style.background = this.colors[Math.floor(Math.random()*this.colors.length)];
				document.body.appendChild(p);
			}
		},

		render () {
			for (let i = this.particles.length - 1; i--; i > -1) {
				const p = this.particles[i];
				p.style.transform = `translate3d(${p.x}px, ${p.y}px, 1px)`;
				
				p.x += p.vel.x;
				p.y += p.vel.y;
				
				p.vel.y += (0.5 * p.mass);
				if (p.y > (window.innerHeight * 2)) {
					//p.remove();
					this.particles.splice(i, 1);
				}
			}
			requestAnimationFrame(this.render);
		},
	},
};
</script>
<style>
.splitting .char {
	animation: slide-in 1s cubic-bezier(0.17, 0.84, 0.4, 1.49) both;
	animation-delay: calc(30ms * var(--char-index));
}

@keyframes slide-in {
	0% {
		transform: scale(2) rotate(60deg);
		opacity: 0;
	}
}
@keyframes bump-in {
	0% {
		transform: scale(0);
		opacity: 0;
	}
}
.particule {
	position: fixed;
	top: 0;
	left: 0;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	box-shadow: 1px 1px 4px #eb6383;
}
</style>