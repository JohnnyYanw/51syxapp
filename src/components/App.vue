<template>
	<div class="g-body">
		<!-- <transition name="view-fade" mode="out-in"> -->
			<router-view></router-view>
		<!-- </transition> -->
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'App'
	}
</script>

<style lang="less">
	html {
		height: 100%;
	}
	body {
		position: relative;
		margin: 0 auto;
		min-width: 320px;
		max-width: 750px;
		height: 100%;
		font-size: 10px;
		color: #666;
		background: #F1F1F1;
	}
	.g-body {
		width: 100%;
		font-size: 1.4em;
		.s-content {
			position: absolute;
			left: 0;
			top: 44px;
			width: 100%;
		}
	}
	.view-fade-enter-active, .view-fade-leave-active {
		transition: opacity .1s ease;
	}
	.view-fade-enter, .view-fade-leave-to {
		opacity: 0;
	}
</style>
