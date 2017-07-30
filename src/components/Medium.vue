<template>
	<div class="g-wrap">
		<router-view></router-view>
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


