<template>
	<!-- 展示课本详细信息的组件 -->
	<view class="container">
		<view class="main">
			<u--image :showLoading="true" :src="bookItem.src" width="80px" height="100px" radius="8" />
			<view class="info">
				<view>作者: {{bookItem.author}}</view>
				<view>出版社: {{bookItem.publishedName}}</view>
				<view>ISBN: {{bookItem.ISBN}}</view>
				<view>课程: {{bookItem.name}}</view>
				<view>点击量: {{bookItem.clickNum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'bookInfo',
		props: {
			bookItem: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.main {
			color: #6b64ab;
			display: flex;
			.info {
				margin-left: 25rpx;
			}
		}
	}
</style>
