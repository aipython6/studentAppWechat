<template>
	<view class="container">
		<view class="box">
			<u--image :src="item.img" radius="10" :fade="true" duration="450" height="80" width="80" />
			<view class="name-info" @tap='updateClickNum(item.id, item.clickNum)'>
				<view class="name">
					<text>{{ item.name }}</text>
				</view>
				<view class="url">
					<u-link
					:href="item.url"
					:text="item.url"
					:under-line="true"
					mpTips="链接已复制" />
				</view>
				<view class="info">
					<text>地区: {{ item.region }}</text>
					<text>类别: {{ item.type }}</text>
					<text style="color: #fd1d1d;">热度: {{ item.clickNum }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hotWebsite',
		props: {
			item: {
				type: Object,
				default: () => {
					return {}
				}
			},
		},
		methods: {
			updateClickNum(id, clickNum) {
				this.$emit('updateClickNum', { id: id, clickNum: clickNum })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 0;
		margin: 0;
		.box {
			padding: 5px;
			margin: 0 15rpx;
			display: flex;
			// width: 100%;
			border-radius: 5px;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			.name-info {
				padding-left: 20rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				color: #808080;
				font-size: 25rpx;
				.name {
					
				}
				.info {
					width: 400rpx;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
