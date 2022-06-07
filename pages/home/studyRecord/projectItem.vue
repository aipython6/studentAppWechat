<template>
	<!-- 课程学习列表的组件 -->
	<view class="container" >
		<u-swipe-action>
				<u-swipe-action-item :options="options" :duration="1000" @click="cancel(projectItem.id)">
						<view class="swipe-action u-border-top u-border-bottom" @tap="toBookDetail(projectItem.bid, projectItem.name)">
								<view class="swipe-action__content">
									<text style="font-size: 16px;">{{ pid }}.</text>
									<u--image :src="projectItem.coverImg" radius="10" :fade="true" duration="450" height="80" width="80" />
									<view>
										<view class="line1">
											<text class="swipe-action__content__text">课程名称: {{ projectItem.name }}</text>
											<text class="swipe-action__content__text">出版社: {{ projectItem.publishedName }}</text>
										</view>
										<view class="line2">
											<text class="swipe-action__content__text">最近学习: {{ projectItem.temp_end_time }}</text>
										</view>
										<view class="line3">
											<text class="swipe-action__content__text">学习时长: {{ projectItem.study_time }}</text>
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
		name: 'projectItem',
		props: {
			pid: {
				type: Number,
			},
			projectItem: {
				type: Object,
				default: () => {
					 return {}
				 }
			}
		},
		data() {
			return {
				options: [{text: '删除',style: { backgroundColor: '#fd1d1d'} }]
			}
		},
		methods: {
			toBookDetail(bid, bookName) {
				uni.navigateTo({
					url: `../../book/index?bid=${bid}&bookName=${bookName}`
				})
			},
			// 根据id删除一条学习记录
			cancel(id) {
				this.$emit('cancel', { id: id, show: true })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.swipe-action {
				&__content {
					display: flex;
					align-items: center;
					justify-content: space-around;
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
