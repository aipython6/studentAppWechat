<template>
	<!-- 每个children小组件 -->
	<view class="main" @tap="goProjectDetailList(obj.name, obj.sid, obj.clickNum)">
		<view class="box">
			<view class="img" :style="{backgroundColor: obj.bgColor}">{{ obj.name.charAt(0) }}</view>
			<text>{{ obj.name }}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			obj: {
				type: Object,
				default: () => {
					return {}
				}
			},
		},
			methods: {
				goProjectDetailList(name, sid, clickNum) {
					this.$emit('gotoProjectList', { name: name, sid: sid, clickNum: clickNum })
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
