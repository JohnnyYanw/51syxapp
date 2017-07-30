<template>
	<div class="s-help">
		<app-header title="帮助中心"></app-header>
		<div class="s-content">
			<div class="nav-wrap">
				<router-link v-for="tab in tabList" :to="tab.path" :key="tab.id" class="nav-item">{{tab.tabTxt}}</router-link>
			</div>
			<router-view class="about-page"></router-view>
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';

	export default {
		name: 'help',
		components: {
			'app-header': Header
		},
		data() {
			return {
				tabList: [
					{
						path: 'bus',
						tabTxt: '汽车相关'
					}, {
						path: 'tourcar',
						tabTxt: '景区直通车'
					}, {
						path: 'train',
						tabTxt: '火车相关'
					}
				]
			}
		},
		methods: {

		},
		mounted() {
			
		}
	}
</script>

<style lang="less" scoped>
	.s-content {
		&::after {
			position: absolute;
			bottom: -53px;
			display: block;
			content: '';
			width: 100%;
			height: 53px;
		}
		.nav-wrap {
			width: 100%;
			height: 56px;
			font-size: 16px;
			background: #FFF;
			display: -webkit-flex;
			display: -webkit-box;
			display: flex;
			margin-top: 8px;
			margin-bottom: 5px;
			.nav-item {
				display: block;
				height: 50px;
				line-height: 50px;
				margin: 3px 0;
				text-align: center;
				color: #666;
				flex: 1;
				-webkit-flex: 1;
				-webkit-box-flex: 1;
				&:nth-child(2) {
					border-left: solid 3px #ECECEC;
					border-right: solid 3px #ECECEC;
				}
				&.on {
					color: #EE9821;
				}
			}
		}
		.about-page {
			background: #FFF;
		}
	}
</style>