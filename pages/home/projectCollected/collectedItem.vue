<template>
	<view class="container" >
		<u-swipe-action>
				<u-swipe-action-item :options="options" :duration="1000" @click="cancel(bookItem.bid)">
						<view class="swipe-action u-border-top u-border-bottom">
								<view class="swipe-action__content" @tap="toBookDetail(bookItem.bid, bookItem.name)">
									<text style="font-size: 16px;">{{ pid }}.</text>
									<u--image :src="bookItem.coverImg" radius="10" :fade="true" duration="450" height="80" width="80" />
									<view>
										<view class="line1">
											<text class="swipe-action__content__text">课程名称: {{ bookItem.name }}</text>
											<text class="swipe-action__content__text">出版社: {{ bookItem.publishedName }}</text>
										</view>
										<view class="line2">
											<text class="swipe-action__content__text">收藏时间: {{ bookItem.create_time }}</text>
										</view>
										<view class="line3">
											<text class="swipe-action__content__text">浏览次数: {{ bookItem.clickNum }}</text>
										</view>
										<view class="line4">
											<text class="swipe-action__content__text">状态: {{ bookItem.status }}</text>
										</view>
									</view>
								</view>
						</view>
				</u-swipe-action-item>
		</u-swipe-action>
	</view>
</template>

<script>
	export default {
		name: 'colledtedItem',
		props: {
			pid: {
				type: Number,
			},
			bookItem: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				options: [{text: '取消收藏',style: { backgroundColor: '#FFC75F'} }]
			}
		},
		methods: {
			cancel(bid) {
				this.$emit('cancel', { bid: bid, show: true })
			},
			toBookDetail(bid, bookName) {
				uni.navigateTo({
					url: `../../book/index?bid=${bid}&name=${bookName}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.swipe-action {
				&__content {
					.line1 {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
					padding: 25rpx 10rpx;
					&__text {
						font-size: 14px;
						color: #94bbe9;
						padding-left: 30rpx;
				}
			}
		}
	}
</style>
