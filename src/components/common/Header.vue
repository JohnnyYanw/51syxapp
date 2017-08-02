<template>
	<header class="header">
		<a @click="$router.go(-1)" class="prev"></a>
		<div class="header-title">{{title}}</div>
	</header>
</template>

<script>
	export default {
		name: 'Header',
		props: [
			'title'
		]
	}
</script>

<style lang="less">
	.header {
		display: block;
		min-width: 320px;
		max-width: 750px;
		width: 100%;
		height: 44px;
		background: #009efc;
		position: fixed;
		z-index: 99;
		.prev {
			position: absolute;
			left: 0;
			top: 0;
			display: block;
			height: 44px;
			width: 6%;
			padding-left: 4%;
			&::before {
				content: '';
				display: block;
				width: 14px;
				height: 14px;
				border-left: 2px solid #fff;
				border-top: 2px solid #fff;
				margin: 14px 0 0 5px;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
		}
		.header-title {
			width: 100%;
			text-align: center;
			line-height: 44px;
			font-size: 18px;
			color: #fff;
			background: -webkit-gradient(linear, left bottom, right top, from(#37a6da), to(#194dd3));
			background: -webkit-linear-gradient(left bottom, #37a6da, #194dd3);
			background: linear-gradient(left bottom, #37a6da, #194dd3);
		}
	}
</style>