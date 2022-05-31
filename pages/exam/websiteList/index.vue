<template>
	<!-- 网站列表页面 -->
	<view class="container">
		<view class="header">
			<u-search shape="square" :clearabled="true" placeholder="根据网站名称搜索" v-model="keyword" :showAction="false" @search="search" />
		</view>
		<view class="center">
			<u-collapse accordion>
					<u-collapse-item v-for="item,index in websiteList" :key="item.id" :title="item.name" :border="false">
							<view class="item">
								<u-avatar :src="item.img" fontSize="22"></u-avatar>
								<u-link class="link" :href="item.url" :text="item.name" mpTips="链接已复制"></u-link>
								<text class="text">热度: {{ item.clickNum }}</text>
							</view>
					</u-collapse-item>
			</u-collapse>
		</view>
		<u-loadmore
			:status="status" 
			:loading-text="loadingText" 
			:loadmore-text="loadmoreText" 
			:nomore-text="nomoreText"
		/>
	</view>
</template>

<script>
	import { all_website, all_website_byName } from '@/api/website/website.js'
	export default {
		data() {
			return {
				status: '加载更多',
				loadingText: '努力加载中',
				loadmoreText: '轻轻上拉',
				nomoreText: '已经到底了',
				page: 1,
				keyword: '',
				websiteList: []
			}
		},
		onLoad(obj) {
			const { name, id } = obj
			this.getWebsiteList(name)
		},
		methods: {
			scrolltolower(obj) {
				
			},
			getWebsiteList(name) {
				all_website().then(res => {
					const { content } = res.data
					this.websiteList = content.filter((item, index) => item.region === name)
				})
			},
			search(value) {
				const temp = { name: value }
				all_website_byName(temp).then(res => {
					const { content } = res.data
					this.websiteList = content
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.header {
			margin: 20rpx;
		}
		.center {
			.item {
				display: flex;
				align-items: center;
				justify-content: space-around;
				.link {
					margin-left: 10rpx !important;
				}
				.text {
					color: #F56C6C;
				}
			}
		}
	}
</style>
