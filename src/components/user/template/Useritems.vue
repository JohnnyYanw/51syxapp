<template>
	<div class="list-group">
		<router-link class="list-item" to="passenger">
			<i class="icon passenger-icon"></i>
			<span class="item-txt">常用旅客</span>
		</router-link>
		<router-link class="list-item" to="allorders">
			<i class="icon order-icon"></i>
			<span class="item-txt">我的订单</span>
		</router-link>
		<router-link class="list-item" to="set">
			<i class="icon set-icon"></i>
			<span class="item-txt">设置</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Useritems'
	}
</script>

<style lang="less" scoped>
	.list-group {
		width: 94%;
		padding: 0 3%;
		margin-top: 10px;
		background: #FFF;
		.list-item {
			position: relative;
			display: block;
			width: 100%;
			line-height: 40px;
			padding: 5px 0;
			font-size: 16px;
			color: #000;
			border-bottom: 1px solid #CCC;
			&:last-child {
				border-bottom: none;
			}
			.item-txt {
				padding-left: 45px;
			}
			.icon {
				position: absolute;
				left: 3px;
				top: 9px;
				display: block;
				width: 32px;
				height: 32px;
				background-size: 32px;
				background-position: left top;
				background-repeat: no-repeat;
			}
			.passenger-icon {
				background-image: url(../../../../static/img/user_passenger.png);
			}
			.order-icon {
				background-image: url(../../../../static/img/user_order.png);
			}
			.set-icon {
				background-image: url(../../../../static/img/user_set.png);
			}
		}
	}
</style>