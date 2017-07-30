<template>
	<div class="index-body">
		景区直通车首页
		<ul>
			<li>
				<router-link 
					class="link-item" 
					to="/home"
				>
					首页
				</router-link>
			</li>
			<li>
				<router-link 
					class="link-item" 
					to="/tourcar/list"
				>
					景区直通车列表页
				</router-link>
			</li>
			<li>
				<router-link 
					class="link-item" 
					to="/tourcar/detail"
				>
					景区直通车详情页
				</router-link>
			</li>
			<li>
				<router-link 
					class="link-item" 
					to="/tourcar/order"
				>
					景区直通车订单页
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'index'
	}
</script>

<style lang="less">
	
</style>