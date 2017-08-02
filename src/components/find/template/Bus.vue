<template>
	<div class="bus-lines">
		<div class="line-item">
			<div class="line-name">
				<span class="item city-name">上海</span>
				<i class="item point"></i>
				<span class="item city-name">南京</span>
			</div>
			<div class="line-price">&yen;110.00</div>
			<div class="line-book">
				<router-link class="book-btn" :to="{path: 'bus/list', query: {startCity: '上海', endCity: '南京'}}">预订</router-link>
			</div>
		</div>
		<div class="line-item">
			<div class="line-name">
				<span class="item city-name">上海</span>
				<i class="item point"></i>
				<span class="item city-name">成都</span>
			</div>
			<div class="line-price">&yen;320.00</div>
			<div class="line-book">
				<router-link class="book-btn" :to="{path: 'bus/list', query: {startCity: '上海', endCity: '成都'}}">预订</router-link>
			</div>
		</div>
		<div class="line-item">
			<div class="line-name">
				<span class="item city-name">成都</span>
				<i class="item point"></i>
				<span class="item city-name">济南</span>
			</div>
			<div class="line-price">&yen;503.00</div>
			<div class="line-book">
				<router-link class="book-btn" :to="{path: 'bus/list', query: {startCity: '成都', endCity: '济南'}}">预订</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bus'
	}
</script>

<style lang="less" scoped>
	.bus-lines {
		.line-item {
			display: flex;
			height: 35px;
			line-height: 35px;
			font-size: 16px;
			.line-name {
				display: flex;
				flex: 1;
				width: 100%;
				.item {
					display: block;
					width: 100%;
					text-align: center;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: clip;
				}
				span {
					flex: 1;
				}
				.point {
					width: 50px;
					height: 100%;
					background: url(../../../../static/img/point.png) no-repeat left 10px;
					background-size: 50px 13px;
				}
			}
			.line-price {
				width: 65px;
				padding-left: 10px;
				color: #fd6e12;
			}
			.line-book {
				width: 100px;
				text-align: center;
				.book-btn {
					display: block;
					width: 75px;
					height: 25px;
					margin: 5px auto;
					line-height: 25px;
					border-radius: 5px;
					background-color: #fd6e12;
					color: #FFF;
				}
			}
		}
	}
</style>