<template>
	<!-- 学习中心 -->
	<view class="container">
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
				nextMargin="30"
				radius="5"
				bgColor="#ffffff"
				height="160"
				easingFunction="easeInOutCubic"
			></u-swiper>
		</view>
		
		<view class="project">
			<uni-section title="课程目录" type="line" padding />
			<projectStudy :item="projectList" />
		</view>
		<view class="study">
			<uni-section title="大家都在学" type="line" padding></uni-section>
				<view class="study-list">
					<view>
						<view><u--text :text="'当前已有'+ num +'位'" size="16" type="primary"></u--text></view>
						<view><u--text text="同学学习了课程" size="16" type="primary"></u--text></view>
					</view>
					<view>
						<view><u--text text="当前已有5523位" size="16" type="primary"></u--text></view>
						<view><u--text text="同学在做题" size="16" type="primary"></u--text></view>
					</view>
				</view>
		</view>
		<uni-section title="今日战果" type="line" padding></uni-section>
			<view class="result-list">
				
			</view>
	</view>
</template>

<script>
	import projectStudy from '../../components/myComponents/center/project_study/projectStudy.vue'
	import { all_images } from '@/api/images/images.js'
	import { getStudentNumFromStudyProject } from '@/api/project/edit_project.js'
	export default {
		components: { projectStudy },
		data() {
			return {
				swiperList: [],
				projectList: [],
				num: ''
			}
		},
		onLoad() {
			this.allImages()
			this.allProjects()
			this.getStudentNumFromStudyProject()
		},
		methods: {
			allImages() {
				all_images({ type: 0 }).then(res => {
					const { content } = res.data
					this.swiperList = content
				})
			},
			allProjects() {
				let id = 0
				all_images({ type: 1 }).then(res => {
					const { content } = res.data
					this.projectList = content.map(e => {
						id++
						return {
							id: id, src: e.image, value: e.title
						}
					})
				})
			},
			// 从课程学习关系表中获取已学习的学生数量
			getStudentNumFromStudyProject() {
				getStudentNumFromStudyProject().then(res => {
					const { num } = res.data
					this.num = num
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 0 10rpx 50rpx 10rpx;
		.project {
			.project-list {
				.item {
					display: flex;
				}
			}
		}
		.study {
			.study-list {
				margin: 0 15rpx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>
