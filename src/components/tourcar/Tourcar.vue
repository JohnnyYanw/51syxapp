<template>
	<div class="s-wrap">
		<app-header title="景区直通车"></app-header>
		<router-view class="s-content"></router-view>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		components: {
			"app-header": Header
		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	
</style>