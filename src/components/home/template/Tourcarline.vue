<template>
	<div class="tourcar-items items-box">
		<h2 class="item-title">
			<router-link to="tourcar">纯车自由行</router-link>
		</h2>
		<div class="swiper-container swiper-line">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="items of infoList">
					<div class="slide-item" v-for="item of items">
						<img :src="item.url">
						<i>精品线路</i>
						<span class="line-info">{{item.info}}</span>
						<span class="line-price">
							<strong class="old-price">¥<em>{{item.oldPrice}}</em></strong>
							<strong class="new-price">¥<em>{{item.newPrice}}</em></strong>
						</span>
						<router-link :to="{path: 'tourcar/detail', query: {id: item.id}}"></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'assets/swiper/swiper.css';

	let infoList = [
		[
			{
				url: 'static/img/1-xh.jpg',
				info: '上海——杭州',
				oldPrice: 107,
				newPrice: 90,
				id: 936620
			}, {
				url: 'static/img/1-tmh.jpg',
				info: '上海——溧阳',
				oldPrice: 155,
				newPrice: 144,
				id: 923499
			}
		], [
			{
				url: 'static/img/1-cs.jpg',
				info: '上海——常熟',
				oldPrice: 130,
				newPrice: 83,
				id: 922377
			}, {
				url: 'static/img/1-zz.jpg',
				info: '上海——周庄',
				oldPrice: 90,
				newPrice: 76,
				id: 936626
			}
		], [
			{
				url: 'static/img/1-hs.jpg',
				info: '上海——黄山',
				oldPrice: 150,
				newPrice: 135,
				id: 922015
			}, {
				url: 'static/img/1-sz.jpg',
				info: '上海——盛泽',
				oldPrice: 123,
				newPrice: 100,
				id: 921778
			}
		]
	];
	export default {
		name: 'Tourcarline',
		data() {
			return {
				infoList: infoList
			}
		},
		methods: {
			slideLine() {
				new Swiper('.swiper-line', {
					direction: 'horizontal',
					autoplay: 3500,
					autoplayDisableOnInteraction : false,
					speed: 500,
					loop: true
				})
			}
		},
		mounted: function() {
			let _this = this;
			setTimeout(() => {
				_this.slideLine();
			}, 1000);
		}
	}
</script>

<style lang="less" scoped>
	.items-box {
		width: 100%;
		background: #FFF;
		margin-bottom: 8px;
		.item-title {
			width: 96%;
			padding: 0 2%;
			margin-bottom: 5px;
			height: 35px;
			line-height: 35px;
			border-bottom: solid 1px #ededed;
			font-size: 16px;
			position: relative;
			a {
				display: block;
				width: 100%;
				height: 100%;
				color: #ee9821;
				&::after {
					position: absolute;
					right: 2%;
					top: 10px;
					content: '';
					display: block;
					width: 10px;
					height: 15px;
					background: url(../../../../static/img/more_icon.png) no-repeat left top;
					background-size: 10px 15px;
				}
			}
		}
		.swiper-line {
			width: 96%;
			margin: 0 auto;
			overflow: hidden;
			font-size: 0;
			.slide-item {
				position: relative;
				display: inline-block;
				width: 49%;
				&:nth-child(2n+1) {
					margin-right: 2%;
				}
				img {
					width: 100%;
				}
				i {
					position: absolute;
					left: 0;
					top: 0;
					display: block;
					width: 60px;
					height: 20px;
					line-height: 20px;
					text-align: center;
					font-size: 12px;
					color: #FFF;
					background: rgba(0, 0, 0, 0.3);
				}
				span {
					display: block;
					font-size: 14px;
					line-height: 24px;
					overflow: hidden;
					&.line-price {
						position: absolute;
						right: 0;
						bottom: 0;
					}
					.old-price {
						text-decoration: line-through;
						color: #f4c18c;
					}
					.new-price {
						color: #EE9821;
					}
				}
				a {
					position: absolute;
					left: 0;
					top: 0;
					display: block;
					width: 100%;
					height: 100%;
					background: rgba(0, 0, 0, 0);
					z-index: 2;
				}
			}
		}
	}
</style>