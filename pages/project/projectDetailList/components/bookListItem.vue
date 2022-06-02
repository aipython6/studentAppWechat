<template>
	<!-- 显示每个课本详情的组件 -->
	<view class="book-item">
		<view class="main" @tap="toBookDetail(bookItem.bid, bookItem.name, bookItem.clickNum)">
			<view class="img">
				<u--image :showLoading="true" :src="bookItem.src" width="80px" height="100px" radius="8" />
			</view>
			<view class="info">
				<view class="bookName">{{ bookItem.name }}</view>
				<view class="baseinfo">
					<text>作者: {{ bookItem.author }}</text>
					<text>出版社: {{ bookItem.publishedName }}</text>
					<text>已浏览: <text style="color: #DD524D;">{{ bookItem.clickNum }}次</text></text>
				</view>
			</view>
			<u-divider />
		</view>
	</view>
</template>

<script>
	export default {
		name: 'bookListItem',
		props: {
			bookItem: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		methods: {
			// 根据id查询对应的课本,展示课本详情和可进行学习的页面
			toBookDetail(bid, name, clickNum) {
				uni.navigateTo({
					url: `../../book/index?bid=${bid}&name=${name}&clickNum=${clickNum}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.book-item {
		padding: 0 15rpx;
		margin: 0 20rpx 55rpx 20rpx;
		.main {
			height: 90px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.info {
				margin-left: 50rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				.bookName {
					margin-bottom: 15rpx;
					font-size: 18px;
					font-weight: bold;
				}
				.baseinfo {
					height: 70px;
					font-size: 14px;
					color: #BBBCBE;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
		}
	}
</style>
