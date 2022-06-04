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
								<u--image :src="item.img" radius="10" :fade="true" duration="450" height="60" width="60" mode="aspectFit" />
								<u-link class="link" :href="item.url" :text="item.name" mpTips="链接已复制"></u-link>
								<text class="text">热度: {{ item.clickNum }}</text>
							</view>
					</u-collapse-item>
			</u-collapse>
		</view>
		<view v-if="isLoadMore">
			<u-loadmore :status="status" />
		</view>
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
				listQuery: { page: 1, size: 10 },
				keyword: '',
				websiteList: [],
				name: '',
				isLoadMore: false
			}
		},
		onLoad(obj) {
			const { name, id } = obj
			this.name = name
			this.getWebsiteList(name)
		},
		onReachBottom() {
			console.log('bottom')
			this.listQuery.page += 1
			this.getWebsiteList(this.name)
		},
		methods: {
			getWebsiteList(name) {
				all_website(this.listQuery).then(res => {
					const { content } = res.data
					if (content.length > 0) {
						this.websiteList = this.websiteList.concat(content)
						this.websiteList = content.filter((item, index) => item.region === name)
						if (content.length < this.listQuery.size) {
							this.isLoadMore = true
							this.status = '没有更多数据了~'
						} else {
							this.isLoadMore = false
						}
					} else {
						this.isLoadMore = true
						this.status = '没有更多数据了~'
					}
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
				justify-content: space-between;
				.text {
					color: #F56C6C;
				}
			}
		}
	}
</style>
