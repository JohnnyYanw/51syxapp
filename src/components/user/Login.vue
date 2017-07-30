<template>
	<div class="s-login">
		<app-header title="会员登录"></app-header>
		<router-view class="s-content">Login</router-view>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'login',
		components: {
			'app-header': Header
		},
		mounted() {
			
		}
	}
</script>