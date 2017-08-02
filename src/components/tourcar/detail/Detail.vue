<template>
	<div>
		<app-header title="车次详情"></app-header>
		<div class="s-content detail-body">
			景区直通车详情页
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'detail',
		components: {
			"app-header": Header
		}
	}
</script>