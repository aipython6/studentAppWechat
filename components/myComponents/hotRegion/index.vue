<template>
	<view class="container">
		<swiper :indicator-dots="true" class="swiper">
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(item, index) in regionList.slice(0,12)" 
			:index="index"
			:key="item.id"
			@click="click(item)"
			>
			<text class="grid-text">{{ item.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ item.num }})</text>
			</u-grid-item>
			</u-grid>
			</swiper-item>
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(item, index) in regionList.slice(13,25)" 
			:index="index+12"
			:key="item.id"
			@click="click(item)"
			>
			<text class="grid-text">{{ item.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ item.num }})</text>
			</u-grid-item>
			</u-grid>
			</swiper-item>
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(item, index) in regionList.slice(25,36)" 
			:index="index+24"
			:key="item.id"
			@click="click(item)"
			>
			<text class="grid-text">{{ item.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ item.num }})</text>
			</u-grid-item>
			</u-grid>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'hotRegion',
		props: {
			regionList: {
				type: Array,
				default: () => {
					return []
				}
			}
			},
			methods: {
				click (item) {
					uni.navigateTo({
						url: `../../pages/exam/websiteList/index?name=${item.name}&pid=${item.id}`
					});
				}
			}
	}
</script>

<style lang="scss" scoped>
	.container {
			margin: 0 15rpx;
			.swiper {
			 height: 520rpx;
			}
		.grid-text {
			font-size: 14px;
			color: #909399;
			padding: 10rpx 0 20rpx 0rpx;
			box-sizing: border-box;
		}
	}
</style>
