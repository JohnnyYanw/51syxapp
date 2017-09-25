<template>
	<div class="s-home">
		<app-banner></app-banner>
		<app-nav class="items-box"></app-nav>
		<div class="items-box">
			<h2 class="item-title">
				<router-link to="tourcar">纯车自由行</router-link>
			</h2>
			<app-tourcar></app-tourcar>
		</div>
		<div class="items-box">
			<h2 class="item-title">
				<router-link :to="'tourcar'">精选套餐线路</router-link>
			</h2>
			<app-line></app-line>
		</div>
	</div>
</template>

<script>
	import Banner from './template/Banner';
	import Nav from './template/Nav';
	import Tourcarline from './template/Tourcarline';
	import Linelist from './template/Linelist';

	export default {
		components: {
			'app-banner': Banner,
			'app-nav': Nav,
			'app-tourcar': Tourcarline,
			'app-line': Linelist
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.s-home {
		width: 100%;
		&::after {
			display: block;
			content: '';
			height: 53px;
		}
		.items-box {
			width: 100%;
			background: #FFF;
			margin-bottom: 8px;
			&:last-child {
				margin-bottom: 0;
			}
			.item-title {
				width: 96%;
				padding: 0.1rem 2%;
				margin-bottom: 5px;
				height: 30px;
				line-height: 30px;
				border-bottom: solid 1px #ededed;
				font-size: 17px;
				a {
					position: relative;
					display: block;
					width: 100%;
					height: 100%;
					color: #ee9821;
					&::after {
						position: absolute;
						right: 2%;
						top: 7px;
						content: '';
						display: block;
						width: 10px;
						height: 15px;
						background: url(../../../static/img/more_icon.png) no-repeat left top;
						background-size: 10px 15px;
					}
				}
			}
		}
	}
</style>
