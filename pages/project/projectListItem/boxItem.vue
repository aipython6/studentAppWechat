<template>
	<!-- 每个children小组件 -->
	<view class="main" @tap="goProjectDetailList(text)">
		<view class="box">
			<view class="img" :style="{backgroundColor: bgColor}">{{ text.charAt(0) }}</view>
			<text>{{ text }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			text: {
				type: String,
				default: () => {
					return ''
				}
			},
			bgColor: {
				type: String,
				default: () => {
					return '#2979FF'
				}
			}
		},
			methods: {
				goProjectDetailList(projectName) {
					uni.navigateTo({
						url: `./projectDetailList/bookList?projectName=${projectName}`
					})
				}
			}
	}
</script>

<style lang="scss">
	.main {
			.box {
				margin-bottom: 20rpx;
				width: 100px;
				height: 88px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.img {
					color: #FFFFFF;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 8px;
					font-size: 30px;
					padding: 12rpx;
					height: 50px;
					width: 50px;
				}
			}
		
	}
</style>
