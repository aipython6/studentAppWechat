<template>
		<!-- 最终学习的页面 -->
	<view class="container">
		<view class="chapter">
			<view class="text">{{ chapter }}</view>
			<view class="time">当前课程已学习:{{ show_time }}</view>
		</view>
		
		<block v-for="item, index in chapterContentList">
			<view class="box">
				<image :src="item.url" mode="widthFix" @click="previewImage(index)" />
			</view>
		</block>
	</view>
</template>

<script>
	import { getChapterConentList } from '@/api/project/project.js'
	import { setStudyProjectRecord, getStudyProjectRecord, updateStudyProjectRecord } from '@/api/project/edit_project.js'
	import { mapGetters } from 'vuex'
	import moment from 'moment'
	export default {
		data() {
			return {
				chapterContentList: [],
				chapter: '',
				show_time: '',
				// 该门课程的学习总时间
				study_time: 0,
				bid: '',
				pid: '',
				// 是否为首次学习该课本
				isFirst: true
			}
		},
		computed: {
			// 开始学习时间和结束学习时间
			...mapGetters[('start_time', 'end_time', 'study_time', 'hasLogin')]
		},
		onHide() {
			this.end_time = new Date()
			// 首次学习
			if (this.isFirst) {
				this.setStudyProjectRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, study_time: this.study_time })
			} else {
				this.updateStudyProjectRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, study_time: this.study_time })
			}
		},
		onUnload() {
				this.end_time = new Date()
				// 首次学习
				if (this.isFirst) {
					this.setStudyProjectRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, study_time: this.study_time })
				} else {
					this.updateStudyProjectRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, study_time: this.study_time })
				}
		},
		
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.fullName
			})
			this.getStudyProjectRecord({ pid: obj.pid })
			this.start_time = new Date()
			this.start()
			this.bid = obj.bid
			this.pid = obj.pid
			// type = 0表示获取章节内容
			this.getChapterConentList({ bid: obj.bid, type: 0 })
			this.chapter = obj.name
		},
		methods: {
			// 学习时间计时器
			start() {
				const time_id = setInterval(() => {
					this.study_time ++
					const time = moment.duration(this.study_time, 'seconds')
					let hours = time.hours()
					let minutes = time.minutes()
					let seconds = time.seconds()
					this.show_time = moment({ h: hours, m: minutes, s: seconds }).format('HH:mm:ss')
				},1000)
			},
			// 只要用户进入到这个界面,则进行判断：是否为首次学习
			getStudyProjectRecord(data) {
				getStudyProjectRecord(data).then(res => {
					const { content } = res.data
					// 不是首次学习
					if (content.length > 0) {
						this.isFirst = false
						const { study_time } = content[0]
						this.study_time = study_time
					} else {
						this.isFirst = true
						this.study_time = 0
					}
				})
			},
			setStudyProjectRecord(data) {
				setStudyProjectRecord(data).then(res => {})
			},
			
			// 当用户退出页面时,更新课程学习关系表中的一条记录
			updateStudyProjectRecord(data) {
				updateStudyProjectRecord(data).then(res => {})
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
					urls: imgList,
					loop: true
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
			font-weight: bold;
		.chapter {
			position: sticky;
			top: 0;
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
