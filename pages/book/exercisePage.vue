<template>
	<!-- 练习题页面 -->
	<view class="container">
		<view class="chapter">
			<view class="text">{{ chapter }}</view>
			<view class="time">当前课程已学习:{{ show_time }}</view>
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
	import { setExerciseRecord, getExerciseRecord, updateExerciseRecord } from '@/api/project/edit_project.js'
	import { mapGetters } from 'vuex'
	import moment from 'moment'
	export default {
		data() {
			return {
				chapter: '',
				show_time: '',
				study_time: 0,
				bid: '',
				pid: '',
				exerciseList: []
			}
		},
		computed: {
			...mapGetters[('start_time', 'end_time', 'study_time', 'hasLogin')]
		},
		onHide() {
			this.end_time = new Date()
			// 首次学习
			if (this.isFirst) {
				this.setExerciseRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, study_time: this.study_time })
			} else {
				this.updateExerciseRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, study_time: this.study_time })
			}
		},
		onUnload() {
				this.end_time = new Date()
				// 首次学习
				if (this.isFirst) {
					this.setExerciseRecord({ bid: this.bid, pid: this.pid, start_time: this.start_time, end_time: this.end_time, temp_start_time: this.start_time, temp_end_time: this.end_tiem, study_time: this.study_time })
				} else {
					this.updateExerciseRecord({ bid: this.bid, pid: this.pid, temp_start_time: this.start_time, temp_end_time: this.end_time, study_time: this.study_time })
				}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.fullName
			})
			
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
		}
	}
</script>

<style>

</style>
