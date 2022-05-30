<template>
	<!-- 展示热门课程的小box -->
	<view class="main" @tap="goProjectDetailList(projectName, sid)">
		<view class="box">
				<text>{{ projectName }}</text>
		</view>
	</view>
</template>

<script>
	export	default {
		name: 'box',
		props: {
			projectName: {
				type: String,
				default: () => {
					return ''
				}
			},
			sid: {
				type: Number,
				default: () => {
					return 0
				}
			}
		},
		methods: {
			goProjectDetailList(name, sid) {
				uni.navigateTo({
					url: `./projectDetailList/bookList?name=${name}&sid=${sid}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {
		.box {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 8rpx;
			background-color: #F2F6FC;
			height: 20px;
			width: 160rpx;
			font-size: 10px;
			padding: 5rpx;
		}
	}
</style>
