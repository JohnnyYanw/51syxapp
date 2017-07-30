<template>
	<div class="nav-items items-box">
		<div class="nav-top nav-box">
			<ul>
				<li class="nav-item top-item">
					<router-link :to="'/tourcar'">
						<img src="static/img/tourcar_img.gif">
					</router-link>
				</li>
				<li class="nav-item top-item">
					<router-link :to="'/bus'">
						<img src="static/img/bus_img.png">
					</router-link>
				</li>
			</ul>
		</div>
		<div class="nav-bottom nav-box">
			<ul>
				<li class="nav-item bottom-item">
					<router-link :to="'/train'">
						<img src="static/img/train_img.png">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link :to="'/hotel'">
						<img src="static/img/hotel_img.png">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link :to="'/scenery'">
						<img src="static/img/scenic_img.png">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link :to="'/hotelcar'">
						<img src="static/img/hotelcar_img.png">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Nav'
	}
</script>

<style lang="less" scoped>
	.items-box {
		width: 100%;
		background: #FFF;
		margin-bottom: 8px;
		padding-top: 6px;
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
		.nav-box {
			width: 96%;
			margin: 0 auto;
			overflow: hidden;
			font-size: 0;
			.nav-item {
				display: inline-block;
				a {
					display: block;
					width: 100%;
				}
				img {
					width: 100%;
				}
			}
			.top-item {
				width: 49%;
				&:first-child {
					margin-right: 2%;
				}
			}
			.bottom-item {
				width: 23.5%;
			    margin-top: 6px;
			    margin-right: 2%;
			    &:last-child {
			    	margin-right: 0;
			    }
			}
		}
	}
</style>