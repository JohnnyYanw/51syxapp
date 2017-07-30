<template>
	<div class="banner">
		<div class="avatar">
			<img src="static/img/user_avatar.png">
		</div>
		<div class="login-btn">
			<router-link class="a-btn" to="login">登录/注册</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Banner',
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.banner {
		position: relative;
		width: 100%;
		height: 3.6rem;
		background: url(../../../../static/img/user_banner.png) left top no-repeat;
		background-size: 7.5rem 3.6rem;
		.avatar {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 2rem;
			height: 2rem;
			border-radius: 100%;
			overflow: hidden;
			margin-left: -1rem;
			margin-top: -1.3rem;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.login-btn {
			width: 2rem;
			height: 35px;
			position: absolute;
			top: 73%;
			left: 50%;
			margin-left: -1rem;
			background: #df5349;
			font-size: 14px;
			text-align: center;
			border-radius: 8px;
			.a-btn {
				display: block;
				width: 100%;
				line-height: 35px;
				color: #FFF;
			}
		}
	}
</style>