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
		<view class="icon">
			<u-icon :name="isCollect === false ? 'star' : 'star-fill'" size="22" @click="handle(bookItem.bid, isCollect)" />
			<text v-if="!isCollect">收藏</text>
			<text v-else>已收藏</text>
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
			},
			isCollect: {
				type: Boolean,
				default: () => {
					return false
				}
			}
		},
		data() {
			return {
			}
		},
		methods: {
			handle(bid, isCollect) {
				const temp = { bid: bid, isCollect: isCollect }
				this.$emit('collect', temp)
			},
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
		.icon {
			display: flex;
			margin-top: 15rpx;
		}
	}
</style>
