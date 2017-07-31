<template>
	<div class="g-wrap">
		<!-- <transition name="view-fade" mode="out-in"> -->
			<router-view></router-view>
		<!-- </transition> -->
		<app-footer></app-footer>
	</div>
</template>

<script>
	import Footer from './common/Footer';

	export default {
		name: 'Medium',
		components: {
			'app-footer': Footer
		}
	}
</script>

<style lang="less" scoped>
	.view-fade-enter-active, .view-fade-leave-active {
		transition: opacity .1s ease;
	}
	.view-fade-enter, .view-fade-leave-to {
		opacity: 0;
	}
</style>
