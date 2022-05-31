<template>
	<view class="container">
		<swiper :indicator-dots="true" class="swiper">
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(region, index) in regionList.slice(0,12)" 
			:index="index"
			:key="region.id"
			@click="gotoLinksPage(region.name, region.id)"
			>
			<text class="grid-text">{{ region.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ region.num }})</text>
			</u-grid-item>
			</u-grid>
			</swiper-item>
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(region, index) in regionList.slice(13,25)" 
			:index="index+12"
			:key="region.id"
			@click="gotoLinksPage(region.name, region.id)"
			>
			<text class="grid-text">{{ region.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ region.num }})</text>
			</u-grid-item>
			</u-grid>
			</swiper-item>
			<swiper-item>
			<u-grid :border="true" :col="4">
			<u-grid-item
			v-for="(region, index) in regionList.slice(25,36)" 
			:index="index+24"
			:key="region.id"
			@click="gotoLinksPage(region.name,region.id)"
			>
			<text class="grid-text">{{ region.name }}</text>
			<text class="grid-text" style="color:#007AFF">({{ region.num }})</text>
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
				gotoLinksPage(name, id) {
					uni.navigateTo({
						url: `../../pages/exam/websiteList/index?name=${name}&pid=${id}`
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
