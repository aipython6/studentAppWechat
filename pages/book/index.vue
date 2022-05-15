<template>
	<!-- 点击课本学习后跳转到对应的学习页面 -->
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.bookName
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
