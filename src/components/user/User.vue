<template>
	<div class="s-user">
		<app-header title="个人中心"></app-header>
		<div class="s-content">
			<app-banner></app-banner>
			<user-items></user-items>
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';
	import Banner from 'components/user/template/Banner';
	import Useritems from 'components/user/template/Useritems';

	export default {
		name: 'user',
		components: {
			'app-header': Header,
			'app-banner': Banner,
			'user-items': Useritems
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