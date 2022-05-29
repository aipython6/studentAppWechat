<template>
		<!-- 最终学习的页面 -->
	<view class="container">
		<view class="chapter">
			<view class="text">{{ chapter }}</view>
			<view class="time">当前学习时间:</view>
		</view>
		
		<block v-for="item, index in chapterContentList">
			<view class="box">
				<image :src="item.url" mode="widthFix" @click="previewImage(item.ccid)" />
			</view>
		</block>
	</view>
</template>

<script>
	import { getChapterConentList } from '@/api/project/project.js'
	import { studyProjectRecord } from '@/api/project/edit_project.js'
	import { mapGetters } from 'vuex'
	
	let enter_time = ''
	let out_time = ''
	let stay_time =''
	export default {
		data() {
			return {
				chapterContentList: [],
				chapter: ''
			}
		},
		computed: {
			// 开始学习时间和结束学习时间
			...mapGetters[('start_time', 'end_time')]
		},
		onShow() {
			enter_time = new Date()
			console.log(enter_time);
		},
		onHide() {
			out_time = new Date()
			stay_time = out_time.getTime() - enter_time.getTime()
			console.log(stay_time);
		},
		onUnload() {
				out_time = new Date()
				stay_time = out_time.getTime() - enter_time.getTime()
				console.log(stay_time);
		},
		
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.name
			})
			this.getChapterConentList({ bid: obj.bid, type: 0 })
			this.chapter = obj.name
			// this.studyProjectRecord({ bid: obj.bid })
		},
		methods: {
			
			// 只要用户进入到这个界面,则将添加一条记录到课程学习关系表
			studyProjectRecord(data) {
				studyProjectRecord(data).then(res => {})
			},
			
			getChapterConentList(data) {
				getChapterConentList(data).then(res => {
					const { content } = res.data
					this.chapterContentList = content
				})
			},
			previewImage(index) {
				let imgList = this.chapterContentList.map(e => e.url)
				uni.previewImage({
					current: index,
					urls: imgList
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
			font-weight: bold;
		.chapter {
			padding: 25rpx;
			height: 40rpx;
			font-size: 15px;
			color: #2b0c7c;
			background-color: #ededed;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.time {
				color: #f15791;
			}
		}
	}
</style>
