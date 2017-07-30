<template>
	<div class="s-home">
		<app-banner></app-banner>
		<app-nav></app-nav>
		<app-tourcar></app-tourcar>
		<app-line></app-line>
	</div>
</template>

<script>
	import Banner from './template/Banner';
	import Nav from './template/Nav';
	import Tourcarline from './template/Tourcarline';
	import Linelist from './template/Linelist';

	export default {
		components: {
			'app-banner': Banner,
			'app-nav': Nav,
			'app-tourcar': Tourcarline,
			'app-line': Linelist
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted: function() {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.s-home {
		width: 100%;
		&::after {
			display: block;
			content: '';
			height: 53px;

		}
	}
</style>
