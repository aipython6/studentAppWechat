<template>
	<!-- 课程列表页面 -->
	<view class="container">
		<u-search
			placeholder="根据课程名称搜索"
			clearabled
			shape="square"
			:show-action="true"
			actionText="搜索"
			:animation="true"
			v-model="projectName" 
			@search="search" />
		<uni-section title="热门课程" type="line" padding></uni-section>
		<view class="hotProject">
			<view v-for="item, index in hotProjectList" :key="item.sid">
				<box :projectName="item.name" :sid="item.sid" />
			</view>
		</view>
		<view class="project-list" v-for="item,index in projectList">
			<projectListItem :parentType="item.pname" :childrenList="item.children" />
		</view>
	</view>
</template>

<script>
	import projectListItem from './projectListItem/projectListItem.vue'
	import box from './hotProject/box.vue'
	import { getTopAndSecondProjec, getSecondProjectByName } from '@/api/project/project.js'
	export default {
		components: { projectListItem, box },
		data() {
			return {
				projectName: '',
				projectList: [],
				hotProjectList: []
			}
		},
		onLoad() {
			this.getTopAndSecondProjec()
		},
		methods: {
			search(value) {
				getSecondProjectByName({ name: value }).then(res => {
						const { content, hot_content } = res.data
						this.projectList = content
						this.hotProjectList = hot_content
				})
			},
			getTopAndSecondProjec() {
				getTopAndSecondProjec().then(res => {
						const { content, hot_content } = res.data
						this.projectList = content
						this.hotProjectList = hot_content
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx 15rpx 85rpx 15rpx;
		.hotProject {
			height: 70px;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}
	}
</style>
