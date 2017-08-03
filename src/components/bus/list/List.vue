<template>
	<div>
		<app-header title="数据列表"></app-header>
		<div class="s-content list-body">
			汽车票列表页
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'list',
		components: {
			"app-header": Header
		}
	}
</script>