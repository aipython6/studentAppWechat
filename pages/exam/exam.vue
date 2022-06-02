<template>
	<view>
		<view class="app-container">
			<view class="header">
				<u-swiper
					:list="swiperList"
					keyName="image"
					showTitle
					:autoplay="true"
					circular
					indicator
					ndicatorMode="line"
					previousMargin="30"
					nextMargin="10"
					radius="5"
					bgColor="#ffffff"
					height="160"
					easingFunction="easeInOutCubic"
				></u-swiper>
				<u-notice-bar :text="notice" mode="closable" color="#2776be"></u-notice-bar>
				<view class="header-input">
					<u-search
					placeholder="根据考试网站名称搜索"
					clearabled
					shape="square"
					:show-action="true"
					actionText="搜索"
					:animation="true"
					v-model="keyword" 
					@search="search">
					</u-search>
				</view>
			</view>
			<!-- 热门网站 -->
			<view class="hot-website">
				<uni-section title="热门考试网站" type="line" padding color="#fd1d1d"></uni-section>
				<view class="website-content-list" v-for="item,index in showWebsiteList" :key="item.id">
					<hotWebsite :item="item" @updateClickNum="updateClickNum" />
					<u-gap height="7" bgColor="#F2F6FC" v-if="params.size % 5 !== 0"></u-gap>
				</view>
				<view class="website-pages">
					<uni-pagination
					:total="websiteList.length"
					:current="params.page"
					:pageSize="params.size"
					title="标题文字"
					prevText="上一页"
					nextText="下一页"
					@change="change" />
				</view>
			</view>
			<!-- 热门地区 -->
			<view class="hot-region">
				<uni-section title="热门地区" type="line" padding color="#e21077"></uni-section>
				<view class="region-content-list">
					<hotRegion :regionList="regionList" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { all_website, all_website_byName, all_region_website, updateClickNum } from '@/api/website/website.js'
	import { get_nocice } from '@/api/notice/notice.js'
	import { all_images } from '@/api/images/images.js'
	import hotWebsite from '../../components/myComponents/hotWebsite/index.vue'
	import hotRegion from '../../components/myComponents/hotRegion/index.vue'
	export default {
		components: { hotWebsite, hotRegion },
		data() {
			return {
				notice: "",
				swiperList: [],
				keyword: '',
				params: { page: 1, size: 5 },
				total: 0,
				// 所有的考试网站列表
				websiteList: [],
				showWebsiteList: [],
				regionList:[],
			}
		},
		onLoad() {
			this.getWebsiteList({ page: this.params.page, size: this.params.size })
			this.getRegionWebsite()
			this.allImages()
			this.getNotice()
		},
		methods: {
			allImages() {
				all_images({ type: 0 }).then(res => {
					const { content } = res.data
					this.swiperList = content
				})
			},
			getNotice() {
				// type=0滚动消息
					get_nocice({ type: 0 }).then(res => {
						const { content } = res.data
						this.notice = content
					})
			},
			search(value) {
				const temp = Object.assign({}, this.params, { name: value })
				all_website_byName(temp).then(res => {
					const { content, total } = res.data
					this.showWebsiteList = content
					this.total = total
				})
			},
			getWebsiteList(params) {
				all_website(params).then(res => {
						const { content, total } = res.data
						this.showWebsiteList = content
						this.total = total
				})
			},
			change(obj) {
				this.params.page = obj.current
				this.getWebsiteList({ page: this.params.page, size: this.params.size })
			},
			getRegionWebsite() {
				all_region_website().then(res => {
					const { content } = res.data
					this.regionList = content
				})
			},
			// 只要用户复制一次,则对clickNum++
			updateClickNum({ id, clickNum }) {
				updateClickNum({ id: id, clickNum: clickNum }).then(res => {})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.app-container {
		.header {
			
		}
		.header-input {
			margin: 10rpx 10rpx 25rpx 10rpx;
		}
		.hot-website {
			.website-pages {
				margin: 8rpx 10rpx 0 10rpx;
			}
			margin-bottom: 30rpx;
		}
		.hot-region {
			margin: 0 15rpx;
			.region-content-list {
					margin-bottom: 20px;
			}
		}
	}
</style>
