<template>
	<div class="data-lists">
		<div class="list-item" v-for="item of sceneryList">
			<div class="item-img">
				<img :src="item.imgUrl">
				<span class="scenery-name">{{item.name}}</span>
			</div>
			<div class="item-detail">
				<div class="item-info">
					<h2 class="name">{{item.name}}</h2>
					<p class="des">{{item.description}}</p>
					<p class="location">{{item.location}}</p>
				</div>
				<div class="item-type">
					<b>{{item.themeType}}</b>
					<b>{{item.payMode}}</b>
					<span class="price">
						&yen;<em>{{item.price}}</em>起
					</span>
				</div>
			</div>
			<router-link class="detail-link" to="scenery/detail" :title="item.name"></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'scenery',
		props: {
			sceneryList: {
				type: Array,
				required: true
			}
		}
	}
</script>

<style lang="less" scoped>
	.data-lists {
		.list-item {
			position: relative;
			padding: 6px 0;
			border-bottom: solid 1px #DDD;
			display: flex;
			&:first-child {
				padding-top: 0;
			}
			&:last-child {
				padding-bottom: 0;
				border-bottom: none;
			}
			.item-img {
				position: relative;
				width: 110px;
				height: 83px;
				img {
					width: 100%;
					height: 100%;
				}
				.scenery-name {
					position: absolute;
					left: 0;
					bottom: 0;
					display: block;
					width: 100%;
					padding: 2px 0;
					font-size: 11px;
					color: #FFF;
					text-align: center;
					background-color: rgba(0, 0, 0, .3);
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
			.item-detail {
				position: relative;
				flex: 1;
				width: 0;
				margin-left: 6px;
				font-size: 12px;
				.item-info {
					line-height: 16px;
					.name {
						font-size: 15px;
						line-height: 24px;
						color: #000;
					}
					.name, p {
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.item-type {
					position: relative;
					height: 18px;
					margin-top: 5px;
					line-height: 18px;
					font-size: 0;
					b {
						display: inline-block;
						height: 100%;
						padding: 0 6px;
						border: solid 1px #009efc;
						border-radius: 9px;
						box-sizing: border-box;
						font-size: 12px;
						color: #009efc;
						&:first-child {
							margin-right: 5px;
						}
					}
					.price {
						position: absolute;
						right: 0;
						bottom: 0;
						font-size: 12px;
						color: #ee9821;
						em {
							font-size: 18px;
						}
					}
				}
			}
			.detail-link {
				position: absolute;
				left: 0;
				top: 0;
				display: block;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0);
				z-index: 2;
			}
		}
	}
</style>