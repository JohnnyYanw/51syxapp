<template>
	<footer class="footer">
		<router-link 
			v-for="item of footerList" 
			:to="item.path" 
			:key="item.id" 
			class="foot-item"
		>
			<i class="foot-icon" :class="item.className"></i>
			<p class="foot-text">{{ item.text }}</p>
		</router-link>
	</footer>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				footerList: [
					{
						path: '/home',
						text: '首页',
						className: 'icon-home'
					},
					{
						path: '/find',
						text: '发现',
						className: 'icon-find'
					},
					{
						path: '/help',
						text: '帮助',
						className: 'icon-help'
					},
					{
						path: '/user',
						text: '我的',
						className: 'icon-user'
					}
				]
			}
		}
	}
</script>

<style lang="less">
	.footer {
		position: fixed;
		bottom: 0;
		font-size: 0;
		display: -webkit-flex;
		display: -webkit-box;
		display: flex;
		max-width: 750px;
		width: 100%;
		height: 52px;
		background: #fff;
		border-top: 1px solid #cdcdcd;
		z-index: 99;
		.foot-item {
			-webkit-flex: 1;
			-webkit-box-flex: 1;
			flex: 1;
			text-align: center;
			color: #666;
			.foot-icon {
				display: block;
				width: 25px;
				height: 25px;
				margin: 5px auto 2px;
				background: url('../../../static/img/footer_icon.png') no-repeat;
				background-size: 111px 55px;
			}
			.icon-home {
				background-position: -28px 2px;
			}
			.icon-find {
				background-position: -85px 2px;
			}
			.icon-help {
				background-position: -29px -31px;
			}
			.icon-user {
				background-position: -90px -32px;
			}
			&.on {
				color: #009efc;
				.icon-home {
					background-position: 1px 2px;
				}
				.icon-find {
					background-position: -57px 2px;
				}
				.icon-help {
					background-position: 1px -31px;
				}
				.icon-user {
					background-position: -60px -32px;
				}
			}
			.foot-text {
				font-size: 14px;
			}
		}
	}
</style>