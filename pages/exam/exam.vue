<template>
	<view>
		<view class="app-container">
			<view class="header">
				<u-swiper
					:list="list2"
					keyName="image"
					showTitle
					:autoplay="true"
					circular
					indicator
					ndicatorMode="line"
					previousMargin="30"
					nextMargin="30"
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
					<hotWebsite :name="item.name" :region="item.region" :type="item.type" :clickNum="item.clickNum" :url="item.url" />
					<u-gap height="7" bgColor="#F2F6FC" v-if="params.size % 5 !== 0"></u-gap>
				</view>
				<view class="website-pages">
					<uni-pagination :total="websiteList.length" :current="params.page" :pageSize="params.size" title="标题文字" @change="change" />
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
	import hotWebsite from '../../components/myComponents/hotWebsite/index.vue'
	import hotRegion from '../../components/myComponents/hotRegion/index.vue'
	export default {
		components: { hotWebsite, hotRegion },
		data() {
			return {
				notice: "欢迎访问畅学小程序,更多内容请关注公众号《畅学伴你行》",
				list2: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png', title: '昨夜星辰昨夜风，画楼西畔桂堂东'},
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png', title: '身无彩凤双飞翼，心有灵犀一点通' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png', title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳' }
				],
				keyword: '',
				// 所有的考试网站列表
				params: { page: 1, size: 5 },
				websiteList: [
					{ id: 1, name: '全国计算机等级考试',	region :'全国', url: 'http://ncre.neea.edu.cn/', type: '信息技术', clickNum: 210, img: 'http://localhost:3000/images/hotwebsites/播放视频.png' },
					{ id: 2, name: '中国教育考试网',	region :'全国', url: 'https://www.neea.edu.cn/', type: '教育考试', clickNum: 140, img: 'http://localhost:3000/images/hotwebsites/模块搭建.png' },
					{ id: 3, name: '北京市教育考试网',	region :'北京', url: 'http://www.bjeea.cn/', type: '教育考试', clickNum: 130, img: 'http://localhost:3000/images/hotwebsites/日夜作息.png' },
					{ id: 4, name: '天津市教育考试网',	region :'天津', url: 'http://www.zhaokao.net/', type: '教育考试', clickNum: 120, img: 'http://localhost:3000/images/hotwebsites/数据监控.png' },
					{ id: 5, name: '山东教育考试网',	region :'山东', url: 'http://ncre.neea.edu.cn/', type: '信息技术', clickNum: 100, img: 'http://localhost:3000/images/hotwebsites/播放视频.png' },
					{ id: 6, name: '河北教育考试网',	region :'河北', url: 'https://www.neea.edu.cn/', type: '教育考试', clickNum: 80, img: 'http://localhost:3000/images/hotwebsites/模块搭建.png' },
					{ id: 7, name: '江苏教育考试网',	region :'江苏', url: 'http://www.bjeea.cn/', type: '教育考试', clickNum: 60, img: 'http://localhost:3000/images/hotwebsites/日夜作息.png' },
					{ id: 8, name: '湖南教育考试网',	region :'湖南', url: 'http://www.zhaokao.net/', type: '教育考试', clickNum: 50, img: 'http://localhost:3000/images/hotwebsites/数据监控.png' }
				],
				showWebsiteList: [],
				regionList: [
					{ id: 1, name: '全国', num: 2 }, { id: 2, name: '北京', num: 1 }, { id: 3, name: '天津', num: 1 },
					{ id: 4, name: '山东', num: 1 }, { id: 5, name: '河北', num: 1 }, { id: 6, name: '江苏', num: 1 },
					{ id: 7, name: '湖南', num: 1 },{ id: 8, name: '河北', num: 1 }, { id: 9, name: '江苏', num: 1 },
					{ id: 10, name: '辽宁', num: 2 }, { id: 11, name: '吉林', num: 1 }, { id: 12, name: '上海', num: 1 },
					{ id: 13, name: '黑龙江', num: 1 }, { id: 14, name: '安徽', num: 1 }, { id: 15, name: '江西', num: 1 },
					{ id: 16, name: '河南', num: 1 },{ id: 17, name: '浙江', num: 1 }, { id: 18, name: '福建', num: 1 },
					{ id: 19, name: '湖北', num: 2 }, { id: 20, name: '重庆', num: 1 }, { id: 21, name: '山西', num: 1 },
					{ id: 22, name: '宁夏', num: 1 }, { id: 23, name: '内蒙古', num: 1 }, { id: 24, name: '陕西', num: 1 },
					{ id: 25, name: '青海', num: 1 },{ id: 26, name: '甘肃', num: 1 }, { id: 27, name: '新疆', num: 1 },
					{ id: 28, name: '四川', num: 1 }, { id: 29, name: '贵州', num: 1 }, { id: 30, name: '西藏', num: 1 },
					{ id: 31, name: '云南', num: 1 },{ id: 32, name: '广西', num: 1 }, { id: 33, name: '广东', num: 1 },
					{ id: 34, name: '海南', num: 1 },{ id: 35, name: '海南', num: 1 }
				]
			}
		},
		onLoad() {
			this.getWebsiteList({ page: this.params.page, size: this.params.size })
		},
		methods: {
			search(value) {
				console.log(value);
			},
			getWebsiteList({ page, size }) {
				this.showWebsiteList =  this.websiteList.filter((item, index) => index < size * page && index >= size * (page - 1))
			},
			change(obj) {
				this.params.page = obj.current
				this.getWebsiteList({ page: this.params.page, size: this.params.size })
			}
		}
	}
</script>

<style lang="scss">
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
