<template>
	<view class="container" @tap="toBookDetail(bid, projectName)">
		<u-swipe-action>
				<u-swipe-action-item :options="options" :duration="1000">
						<view class="swipe-action u-border-top u-border-bottom">
								<view class="swipe-action__content">
									<u-row justify="space-between" gutter="10">
										<u-col span="1"><text style="font-size: 16px;">{{ pid }}.</text></u-col>
										<u-col span="3">
											<u--image :src="avatar" radius="10" :fade="true" duration="450" height="80" width="80" />
										</u-col>
										<u-col span="8">
											<view class="line1">
												<text class="swipe-action__content__text">课程名称: {{ projectName }}</text>
												<text class="swipe-action__content__text">出版社: {{ publshedName }}</text>
											</view>
											<view class="line2">
												<text class="swipe-action__content__text">收藏时间: {{ collectedTime }}</text>
											</view>
											<view class="line3">
												<text class="swipe-action__content__text">浏览次数: {{ clickNum }}</text>
											</view>
											<view class="line4">
												<text class="swipe-action__content__text">状态: {{ studyStatus }}</text>
											</view>
										</u-col>
									</u-row>
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
			bid: {
				type: Number,
			},
			pid: {
				type: Number,
			},
			avatar: {
				type: String,
				default: () => {
					return ''
				}
			},
			projectName: {
				type: String,
				default: () => {
					return ''
				}
			},
			/// 出版社
			publshedName: {
				type: String,
				default: () => {
					return ''
				}
			},
			// 收藏时间
			collectedTime: {
				type: String,
				default: () => {
					return ''
				}
			},
			// 课程浏览次数
			clickNum: {
				type: String,
				default: () => {
					return 0
				}
			},
			// 状态：已学习/未学习
			studyStatus: {
				type: String,
				default: () => {
					return ''
				}
			}
		},
		data() {
			return {
				options: [{text: '取消收藏',style: { backgroundColor: '#FFC75F'} }]
			}
		},
		methods: {
			toBookDetail(bid, projectName) {
				uni.navigateTo({
					url: `../../book/index?bid = ${bid}&bookName=${projectName}`
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
