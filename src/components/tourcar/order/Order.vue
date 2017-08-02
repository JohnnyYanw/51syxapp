<template>
	<div>
		<app-header title="订单填写"></app-header>
		<div class="s-content order-body">
			景区直通车订单页
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'order',
		components: {
			"app-header": Header
		}
	}
</script>