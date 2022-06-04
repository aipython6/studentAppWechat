<template>
	<!-- 每个children小组件 -->
	<view class="main" @tap="goProjectDetailList(text, sid)">
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
					this.$emit('gotoProjectList', { name: name, sid: sid })
				}
			}
	}
</script>

<style lang="scss">
	.main {
			display: flex;
			justify-content: start;
			flex-wrap: nowrap;
			align-items: center;
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
