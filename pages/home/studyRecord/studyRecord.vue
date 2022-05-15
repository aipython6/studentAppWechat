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
				<view v-for="(item,index) in projectList" :key="item.id">
					<projectItem
					:pid="index+1"
					:avatar="item.avatar"
					:publshedName="item.publishedName"
					:projectName="item.projectName"
					:studyTime="item.studyTime"
					:sumStudyTime="item.sumStudyTime" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import projectItem from './projectItem.vue'
	export default {
		components: { projectItem },
		data() {
			return {
				// 根据课程名称搜索
				projectName: '',
				projectList: [
					{ id: 1, projectName: '高等数学', publishedName: '清华大学出版社', studyTime: '2022-05-13', sumStudyTime: 55, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 2, projectName: '大学英语', publishedName: '人民出版社', studyTime: '2022-05-01', sumStudyTime: 15, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 3, projectName: '大学化学', publishedName: '上海交通大学出版社', studyTime: '2022-05-11', sumStudyTime: 23, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 4, projectName: '大学物理', publishedName: '复旦大学出版社', studyTime: '2022-04-29', sumStudyTime: 109, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 5, projectName: '数据结构', publishedName: '同济大学出版社', studyTime: '2022-05-06', sumStudyTime: 10, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 6, projectName: '软件工程', publishedName: '北京大学出版社', studyTime: '2022-05-03', sumStudyTime: 88, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' }
					]
			}
		},
		methods: {
			search(e) {
				
			}
		}
	}
</script>

<style lang="scss">
	.container {
		margin: 10rpx 10rpx 50rpx 10rpx;
	}
</style>
