<template>
	<div class="list-items items-box">
		<h2 class="item-title">
			<router-link :to="'tourcar'">精选套餐线路</router-link>
		</h2>
		<div class="lists-box">
			<ul>
				<li class="list-item" v-for="item of infoList">
					<router-link :to="{path: 'tourcar/detail', query: {id: item.id}}">
						<img :src="item.url">
						<i>爆款线路</i>
						<span class="line-info">{{item.info}}</span>
						<span class="line-price">
							<strong class="new-price">¥<em>{{item.newPrice}}</em>元<em class="little-font gray-font">起</em></strong>
							<strong class="old-price gray-font">原价¥<em>{{item.oldPrice}}</em></strong>
						</span>
					</router-link>
					<p class="package-info gray-font">{{item.detail}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'Linelist',
		data() {
			return {
				infoList: []
			}
		},
		methods: {
			getData() {
				this.$http.get('../../../../static/json/lineData.json')
				.then(function(res) {
					this.infoList = res.data;
				}, function() {
					console.log('请求错误！');
				});
			}
		},
		mounted() {
			this.getData();
		}
	}
</script>

<style lang="less" scoped>
	.items-box {
		width: 100%;
		background: #FFF;
		margin-bottom: 8px;
		.item-title {
			width: 96%;
			padding: 0 2%;
			margin-bottom: 5px;
			height: 35px;
			line-height: 35px;
			border-bottom: solid 1px #ededed;
			font-size: 16px;
			position: relative;
			a {
				display: block;
				width: 100%;
				height: 100%;
				color: #ee9821;
				&::after {
					position: absolute;
					right: 2%;
					top: 10px;
					content: '';
					display: block;
					width: 10px;
					height: 15px;
					background: url(../../../../static/img/more_icon.png) no-repeat left top;
					background-size: 10px 15px;
				}
			}
		}
		.lists-box {
			width: 96%;
			margin: 0 auto;
			font-size: 0;
			overflow: hidden;
			.list-item {
				display: block;
				margin-bottom: 5px;
				overflow: hidden;
				a {
					display: block;
					width: 100%;
					position: relative;
					img {
						width: 100%;
						margin-top: -10%;
					}
					i {
						position: absolute;
						left: 0;
						top: 0;
						display: block;
						width: 70px;
						height: 28px;
						line-height: 28px;
						padding: 0 5px;
						background: rgba(0, 0, 0, 0.4);
						text-align: center;
						font-size: 14px;
						color: #FFF;
					}
					span {
						font-size: 18px;
						&.line-info {
							color: #383838;
						}
						&.line-price {
								position: absolute;
								right: 0;
								bottom: 0;
						}
					}
				}
				.gray-font {
					color: #B8B8B8;
				}
				.new-price {
					color: #EE9821;
					.little-font {
						font-size: 14px;
					}
				}
				.old-price {
					text-decoration: line-through;
				}
				.package-info {
					line-height: 20px;
					font-size: 14px;
				}
			}
		}
		
	}
</style>