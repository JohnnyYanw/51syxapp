<template>
	<div class="nav-items">
		<div class="nav-top nav-box">
			<ul>
				<li class="nav-item top-item">
					<router-link to="/tourcar">
						<img src="static/img/tourcar_img.gif">
					</router-link>
				</li>
				<li class="nav-item top-item">
					<router-link to="/bus">
						<img src="static/img/bus_img.png">
					</router-link>
				</li>
			</ul>
		</div>
		<div class="nav-bottom nav-box">
			<ul>
				<li class="nav-item bottom-item">
					<router-link to="/tourcar">
						<img src="static/img/tourcar_img02.jpg">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link to="/hotel">
						<img src="static/img/hotel_img.png">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link to="/scenery">
						<img src="static/img/scenic_img.png">
					</router-link>
				</li>
				<li class="nav-item bottom-item">
					<router-link to="/hotelcar">
						<img src="static/img/holiday_img.png">
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'nav'
	}
</script>

<style lang="less" scoped>
	.nav-items {
		padding-top: 6px;
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
