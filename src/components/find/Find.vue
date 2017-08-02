<template>
	<div class="s-find">
		<app-header title="发现"></app-header>
		<div class="s-content">
			<div class="item-wrap tourcar-wrap">
				<div class="title">
					<router-link to="tourcar">景区直通车</router-link>
				</div>
				<app-tourcar></app-tourcar>
			</div>
			<div class="item-wrap bus-wrap">
				<div class="title">
					<router-link to="bus">汽车票</router-link>
				</div>
				<app-bus></app-bus>
			</div>
			<div class="item-wrap scenery-wrap">
				<div class="title">
					<router-link to="scenery">热门景点</router-link>
				</div>
				<app-scenery :sceneryList="sceneryList"></app-scenery>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from 'components/common/Header';
	import tourcar from './template/Tourcar';
	import bus from './template/Bus';
	import scenery from './template/Scenery';

	export default {
		name: 'find',
		data() {
			return {
				sceneryList: []
			}
		},
		components: {
			'app-header': Header,
			'app-tourcar': tourcar,
			'app-bus': bus,
			'app-scenery': scenery
		},
		methods: {

		},
		mounted() {
			this.$http.get('static/json/scenery.json')
				.then((res) => {
					this.sceneryList = res.body;
				}, (res) => {
					console.log('请求出错！');
				});
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
		.item-wrap {
			padding: 5px 10px 10px;
			margin-top: 8px;
			background: #FFF;
			border-top: solid 1px #d5dce2;
			border-bottom: solid 1px #d5dce2;
			&:last-child {
				border-bottom: none;
			}
			.title {
				line-height: 30px;
				margin-bottom: 5px;
				font-size: 17px;
				border-bottom: solid 1px #DDD;
				a {
					position: relative;
					display: block;
					width: 100%;
					color: #ee9821;
					&::after {
						position: absolute;
						right: 0;
						top: 7px;
						display: block;
						width: 10px;
						height: 15px;
						content: '';
						background: url(../../../static/img/more_icon.png) no-repeat left top;
						background-size: 10px 15px;
					}
				}
			}
		}
	}
</style>