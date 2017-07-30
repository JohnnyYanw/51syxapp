<template>
	<div class="s-find">
		<app-header title="发现"></app-header>
		<router-view class="s-content"></router-view>
		<div class="s-content">
			发现
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'find',
		components: {
			'app-header': Header
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.s-content {
		&::after {
			position: absolute;
			bottom: -53px;
			display: block;
			content: '';
			width: 100%;
			height: 53px;
		}
	}
</style>