<template>
	<div class="s-help">
		<app-header></app-header>
		<div class="s-content">
			<div class="nav-wrap">
				<a v-for="(tab, index) in tabList" @click="tabToggle(tab.tabItem, index)" class="nav-item" :class="{'curr-item': currIndex === index}" href="javascript: void(0);">{{tab.tabTxt}}</a>
			</div>
			<tab-item :is="currTab" class="about-page" keep-alive></tab-item>
		</div>
	</div>
</template>

<script>
	import Header from 'components/help/template/Header';
	import Aboutbus from 'components/help/template/Aboutbus';
	import Abouttourcar from 'components/help/template/Abouttourcar';
	import Abouttrain from 'components/help/template/Abouttrain';

	export default {
		name: 'help',
		data() {
			return {
				tabList: [
					{
						tabTxt: '汽车相关',
						tabItem: Aboutbus
					}, {
						tabTxt: '景区直通车',
						tabItem: Abouttourcar
					}, {
						tabTxt: '火车相关',
						tabItem: Abouttrain
					}
				],
				currTab: Aboutbus,
				currIndex: 0
			}
		},
		components: {
			'app-header': Header
		},
		methods: {
			tabToggle(tabItem, index) {
				this.currIndex = index;
				this.currTab = tabItem;
			}
		}
	}
</script>

<style lang="less" scoped>
	.s-content {
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
				&.curr-item {
					color: #EE9821;
				}
			}
		}
	}
</style>