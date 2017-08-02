<template>
	<div class="line-wrap">
		<div class="line-item">
			<img src="static/img/1-xh.jpg" alt="">
			<span class="line-name">上海—杭州</span>
			<router-link class="link" :to="{path: 'tourcar/list', query: {startCity: '上海', endCity: '杭州'}}"></router-link>
		</div>
		<div class="line-item">
			<img src="static/img/1-tmh.jpg" alt="">
			<span class="line-name">上海—溧阳</span>
			<router-link class="link" :to="{path: 'tourcar/list', query: {startCity: '上海', endCity: '溧阳'}}"></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tourcar'
	}
</script>

<style lang="less" scoped>
	.line-wrap {
		display: flex;
		.line-item {
			position: relative;
			flex: 1;
			width: 100%;
			height: 103px;
			&:first-child {
				margin-right: 10px;
			}
			img {
				width: 100%;
				height: 100%;
			}
			.line-name {
				position: absolute;
				left: 0;
				bottom: 0;
				display: block;
				width: 100%;
				height: 24px;
				background-color: rgba(0, 0, 0, .3);
				line-height: 24px;
				font-size: 14px;
				color: #FFF;
				text-align: center;
			}
			.link {
				position: absolute;
				left: 0;
				top: 0;
				display: block;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0);
				z-index: 2;
			}
		}
	}
</style>