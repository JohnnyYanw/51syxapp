<template>
	<div>
		<app-header title="汽车票"></app-header>
		<div class="s-content">
			<div class="banner">
				<img src="static/img/bus_banner.png">
			</div>
			<div class="s-form">
				<div class="city-items">
					<span class="item">出发城市</span>
					<span class="item">到达城市</span>
				</div>
				<form>
					<div class="city-info">
						<div class="info-item">
							<input type="text" name="startCity" placeholder="出发城市" readonly="readonly">
						</div>
						<i class="change-icon"></i>
						<div class="info-item">
							<input type="text" name="endCity" placeholder="目的地" readonly="readonly">
						</div>
					</div>
					<div class="date-info">
						<span class="info-text">出发日期</span>
						<input type="text" name="startDate" value="2017-08-05">
					</div>
				</form>
			</div>
			<input type="button" value="查询" class="search-btn">
			<div>
				<router-link to="bus/list">列表页</router-link>
			</div>
			<div>
				<router-link to="bus/order">订单页</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'index',
		components: {
			"app-header": Header
		}
	}
</script>

<style lang="less" scoped>
	.s-content {
		.banner {
			width: 100%;
			min-height: 128px;
			font-size: 0;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.s-form {
			padding: 10px;
			background-color: #FFF;
			font-size: 15px;
			.city-items {
				display: flex;
				line-height: 24px;
				margin-bottom: 5px;
				.item {
					display: block;
					flex: 1;
					text-align: right;
					&:first-child {
						text-align: left;
					}
				}
			}
			.city-info {
				display: flex;
				padding-bottom: 5px;
				border-bottom: solid 1px #DDD;
				.info-item {
					flex: 1;
					width: 100%;
					height: 24px;
					line-height: 24px;
					padding: 5px 0;
					input {
						width: 100%;
						height: 100%;
						text-align: center;
						font-size: 17px;
						font-weight: 600;
						color: #333;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: clip;
					}
				}
				.change-icon {
					display: block;
					width: 18px;
					height: 18px;
					margin: 8px 5px;
					background: url(../../../../static/img/change-icon.png) no-repeat left top;
					background-size: 18px 18px;
				}
			}
			.date-info {
				display: flex;
				height: 28px;
				line-height: 25px;
				padding-top: 15px;
				.info-text {
					display: block;
					flex: 1;
				}
				input {
					display: block;
					flex: 2;
					// padding-right: 25px;
					text-align: center;
					font-size: 17px;
					font-weight: 600;
					color: #333;
				}
			}
		}
		.search-btn {
			display: block;
			width: 70%;
			line-height: 35px;
			margin: 15px auto;
			background-color: #FE9A11;
			font-size: 17px;
			color: #FFF;
			border-radius: 5px;
		}
	}
</style>