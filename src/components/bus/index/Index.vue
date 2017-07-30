<template>
	<div class="index-body">
		汽车票首页
		<ul>
			<li>
				<router-link 
					class="link-item" 
					to="/bus/list"
				>
					汽车票列表页
				</router-link>
			</li>
			<li>
				<router-link 
					class="link-item" 
					to="/bus/order"
				>
					汽车票订单页
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

<style lang="less" scoped>
	
</style>