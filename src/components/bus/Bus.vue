<template>
	<div class="s-wrap">
		<app-header title="汽车票"></app-header>
		<router-view class="s-content"></router-view>
	</div>
</template>

<script>
	import Header from '../common/Header';

	export default {
		name: 'bus',
		components: {
			"app-header": Header
		}
	}
</script>

<style>
	
</style>