<template>
	<div class="swiper-container slider_box">
		<div class="swiper-wrapper">
			<div 
				class="swiper-slide slide-item" 
				v-for="img in banImgs" 
				:key="img.id"
			>
				<a href="javascript: void(0);">
					<img :src="img.url">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'assets/swiper/swiper.css';

	export default {
		name: 'Banner',
		data () {
			return {
				banImgs: [
					{
						url: 'static/img/img01.png'
					},{
						url: 'static/img/img02.png'
					},{
						url: 'static/img/img03.png'
					}
				]
			}
		},
		methods: {
			swiper: function() {
				this.mySwiper = new Swiper('.slider_box', {
					direction: 'horizontal',
					autoplay: 3000,
					autoplayDisableOnInteraction : false,
					speed: 500,
					loop: true
				});
			}
		},
		mounted: function() {
			let _this = this;
			setTimeout(() => {
				_this.swiper();
			}, 1000);
		}
	}
</script>

<style lang="less" scoped>
	.slider_box {
		width: 100%;
		height: 2.8rem;
		.slide-item {
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>