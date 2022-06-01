<template>
	<!-- 练习题页面 -->
	<view class="container">
		<view class="chapter">
			<view class="text">{{ chapter }}</view>
			<view class="time">当前课程做题时间:{{ show_time }}</view>
		</view>
		
		<block v-for="item, index in exerciseList">
			<view class="box">
				<image :src="item.url" mode="widthFix" @click="previewImage(item.ccid)" />
			</view>
		</block>
	</view>
</template>

<script>
	import { getChapterConentList } from '@/api/project/project.js'
	import { setExerciseRecord, getExerciseRecord, updateExerciseRecord } from '@/api/project/exercise.js'
	import { mapGetters } from 'vuex'
	import moment from 'moment'
	export default {
		data() {
			return {
				isFirst: true,
				chapter: '',
				show_time: '',
				exercise_time: 0,
				bid: '',
				pid: '',
				exerciseList: []
			}
		},
		computed: {
			...mapGetters[('start_time', 'end_time', 'exercise_time', 'hasLogin')]
		},
		onHide() {
			this.end_time = new Date()
			// 首次学习
			if (this.isFirst) {
				this.setExerciseRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, exercise_time: this.exercise_time })
			} else {
				this.updateExerciseRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, exercise_time: this.exercise_time })
			}
		},
		onUnload() {
				this.end_time = new Date()
				// 首次做题
				if (this.isFirst) {
					this.setExerciseRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, exercise_time: this.exercise_time })
				} else {
					this.updateExerciseRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, exercise_time: this.exercise_time })
				}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.fullName
			})
			this.getExerciseRecord({ pid: obj.pid })
			this.start_time = new Date()
			this.start()
			this.bid = obj.bid
			this.pid = obj.pid
			// type = 1表示获取练习题
			this.getChapterConentList({ bid: obj.bid, type: 1 })
			this.chapter = obj.name
		},
		methods: {
			getChapterConentList(data) {
				getChapterConentList(data).then(res => {
					const { content } = res.data
					this.exerciseList = content
				})
			},
			// 做题时间计时器
			start() {
				const time_id = setInterval(() => {
					this.exercise_time ++
					const time = moment.duration(this.exercise_time, 'seconds')
					let hours = time.hours()
					let minutes = time.minutes()
					let seconds = time.seconds()
					this.show_time = moment({ h: hours, m: minutes, s: seconds }).format('HH:mm:ss')
				},1000)
			},
			
			// 只要用户进入到这个界面,则进行判断：是否为首次做题
			getExerciseRecord(data) {
				getExerciseRecord(data).then(res => {
					const { content } = res.data
					// 不是首次学习
					if (content.length > 0) {
						this.isFirst = false
						const { exercise_time } = content[0]
						this.exercise_time = exercise_time
					} else {
						this.isFirst = true
						this.exercise_time = 0
					}
				})
			},
			setExerciseRecord(data) {
				setExerciseRecord(data).then(res => {})
			},
			// 当用户退出页面时,更新课程学习关系表中的一条记录
			updateExerciseRecord(data) {
				updateExerciseRecord(data).then(res => {})
			},
		
			previewImage(index) {
				let imgList = this.exerciseList.map(e => e.url)
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
				color: #845EC2;
			}
		}
	}
</style>
