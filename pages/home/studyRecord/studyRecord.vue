<template>
	<!-- 课程学习记录页面 -->
	<view class="container">
		<view class="header">
			<u-search
			placeholder="根据课程名称搜索"
			clearabled
			shape="square"
			:show-action="true"
			actionText="搜索"
			:animation="true"
			v-model="projectName" 
			@search="search">
			</u-search>
		</view>
		<uni-section title="课程学习记录" type="line" padding></uni-section>
		<view class="project-main">
			<!-- 排序规则：最近学习时间/学习时长/课程名称等 -->
			<view class="sort">
				
			</view>
			<view class="project-list">
				<view v-if="projectList.length === 0">
					<text>你还未学习课程~</text>
				</view>
				<view v-for="(item, index) in projectList" :key="item.id" v-else>
					<projectItem
					:projectItem="item"
					:pid="index+1"
					 @cancel='cancel' />
				</view>
			</view>
		</view>
		<u-modal
		:show="show"
		:closeOnClickOverlay="true"
		:showCancelButton="true"
		title="删除后不可恢复,是否继续?"
		@confirm="deleteStudyRecord"
		@cancel="cancelModal"
		@close="cancelModal" />
	</view>
</template>

<script>
	import projectItem from './projectItem.vue'
	import { getStudyProjectList, deleteStudyProject } from '@/api/project/edit_project.js'
	export default {
		components: { projectItem },
		data() {
			return {
				show: false,
				id: '',
				// 根据课程名称搜索
				projectName: '',
				projectList: [],
				tempList: []
			}
		},
		onLoad() {
			this.getStudyProjectList()
		},
		methods: {
			search(value) {
				if (value) {
					this.projectList = this.projectList.filter(item => item.name.indexOf(value) !== -1)
				} else {
					this.projectList = this.tempList
				}
			},
			// 获取已学习的课程列表,根据openid获取即可
			getStudyProjectList() {
				getStudyProjectList().then(res => {
					const { content } = res.data
					this.projectList = content
					this.tempList = content
				})
			},
			cancel({ id, show }) {
				this.show = show
				this.id = id
			},
			deleteStudyRecord() {
				deleteStudyProject({ id: this.id }).then(res => {
					this.show = false
					this.getStudyProjectList()
				})
			},
			cancelModal() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 10rpx 10rpx 50rpx 10rpx;
	}
</style>
