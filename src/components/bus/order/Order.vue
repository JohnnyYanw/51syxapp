<template>
	<div>
		<app-header title="订单填写"></app-header>
		<div class="s-content list-body">
			汽车票订单页
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