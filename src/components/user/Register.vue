<template>
	<div class="s-register">
		<app-header title="会员注册"></app-header>
		<router-view class="s-content">Login</router-view>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'register',
		components: {
			'app-header': Header
		},
		mounted() {
			
		}
	}
</script>