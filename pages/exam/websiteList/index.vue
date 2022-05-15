<template>
	<!-- 网站列表页面 -->
	<view class="container">
		<view class="header">
			<u-search shape="square" :clearabled="true" placeholder="根据网站名称搜索" v-model="keyword" :showAction="false"></u-search>
		</view>
		<view class="center">
			<u-collapse accordion>
					<u-collapse-item v-for="item,index in websiteList" :key="item.id" :title="item.name" :border="false">
							<view class="item">
								<u-avatar icon="star-fill" fontSize="22"></u-avatar>
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
			const name = obj.name
			this.getWebsiteList(name)
		},
		// onReachBottom() {
		// 	if(this.page >= 3) return ;
		// 	this.status = '加载中';
		// 	this.page = ++ this.page;
		// 	setTimeout(() => {
		// 		this.list += 10;
		// 		if(this.page >= 3) this.status = '已经到底了';
		// 		else this.status = '加载中';
		// 	}, 2000)
		// },
		methods: {
			scrolltolower(obj) {
				
			},
			getWebsiteList(name) {
				const items = [
					{ id: 1, name: '全国计算机等级考试',	region :'全国', url: 'http://ncre.neea.edu.cn/', type: '信息技术', clickNum: 210, img: 'http://localhost:3000/images/hotwebsites/播放视频.png' },
					{ id: 2, name: '中国教育考试网',	region :'全国', url: 'https://www.neea.edu.cn/', type: '教育考试', clickNum: 140, img: 'http://localhost:3000/images/hotwebsites/模块搭建.png' },
					{ id: 3, name: '北京市教育考试网',	region :'北京', url: 'http://www.bjeea.cn/', type: '教育考试', clickNum: 130, img: 'http://localhost:3000/images/hotwebsites/日夜作息.png' },
					{ id: 4, name: '天津市教育考试网',	region :'天津', url: 'http://www.zhaokao.net/', type: '教育考试', clickNum: 120, img: 'http://localhost:3000/images/hotwebsites/数据监控.png' },
					{ id: 5, name: '山东教育考试网',	region :'山东', url: 'http://ncre.neea.edu.cn/', type: '信息技术', clickNum: 100, img: 'http://localhost:3000/images/hotwebsites/播放视频.png' },
					{ id: 6, name: '河北教育考试网',	region :'河北', url: 'https://www.neea.edu.cn/', type: '教育考试', clickNum: 80, img: 'http://localhost:3000/images/hotwebsites/模块搭建.png' },
					{ id: 7, name: '江苏教育考试网',	region :'江苏', url: 'http://www.bjeea.cn/', type: '教育考试', clickNum: 60, img: 'http://localhost:3000/images/hotwebsites/日夜作息.png' },
					{ id: 8, name: '湖南教育考试网',	region :'湖南', url: 'http://www.zhaokao.net/', type: '教育考试', clickNum: 50, img: 'http://localhost:3000/images/hotwebsites/数据监控.png' }					
				]
				this.websiteList = items.filter((item, index) => item.region === name)
				// const that = this
				// uni.request({
				// 	url: 'http://localhost:3000/website/getWebsiteList',
				// 	method: 'GET',
				// 	data: { id: id },
				// 	success: (res) => {
				// 		that.websiteList = res.data.list
				// 	}
				// })
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
