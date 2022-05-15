<template>
	<view class="container">
		<view class="box">
			<u--image :src="img" radius="10" :fade="true" duration="450" height="80" width="80"></u--image>
			<view class="name-info">
				<view class="name">
					<text>{{ name }}</text>
				</view>
				<view class="url">
					<u-link :href="url" :text="url" :under-line="true" mpTips="链接已复制"></u-link>
				</view>
				<view class="info">
					<text>地区: {{ region }}</text>
					<text>类别: {{ type }}</text>
					<text style="color: #fd1d1d;">热度: {{ clickNum }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'hotWebsite',
		props: {
			name: {
				type: String,
				default: () => {
					return ''
				}
			},
			img: {
				type: String,
				default: () => {
					return 'https://cdn.uviewui.com/uview/album/1.jpg'
				}
			},
			region: {
				type: String,
				default: () => {
					return ''
				}
			},
			clickNum: {
				type: Number,
				default: () => {
					return ''
				}
			},
			type: {
				type: String,
				default: () => {
					return ''
				}
			},
			url: {
				type: String,
				default: () => {
					return ''
				}
			}
		},
		methods: {
			
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
