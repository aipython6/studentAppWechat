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
			<view v-for="item, index in hotProjectList" :key="item.id">
				<box :projectName="item.projectName" />
			</view>
		</view>
		<view class="project-list" v-for="item,index in projectList">
			<projectListItem :parentType="item.parentName" :childrenList="item.childrenList" />
		</view>
	</view>
</template>

<script>
	import projectListItem from './projectListItem/projectListItem.vue'
	import box from './hotProject/box.vue'
	export default {
		components: { projectListItem, box },
		data() {
			return {
				projectName: '',
				projectList: [
					{ id: 1, parentName: '理学', childrenList: [{ id: 1, childrenName: '数学', bgColor: '#e21077' }, { id: 2, childrenName: '物理', bgColor: '#00d4ff' }, { id: 3, childrenName: '化学', bgColor: '#fdbb2d' }] },
					{ id: 2, parentName: '工学', childrenList: [{ id: 4, childrenName: '计算机', bgColor: '#28a17d' }, { id: 5, childrenName: '电子信息', bgColor: '#38c322' }, { id: 6, childrenName: '电气工程', bgColor: '#833ab4' }, { id: 22, childrenName: '机械工程', bgColor: '#1dfd85' }, { id: 23, childrenName: '力学', bgColor: '#cd196b' }, { id: 24, childrenName: '通信', bgColor: '#fd1de9' }] },
					{ id: 3, parentName: '经济学', childrenList: [{ id: 7, childrenName: '经济', bgColor: '#fddc1d' }, { id: 8, childrenName: '金融', bgColor: '#fd2df9' }, { id:9, childrenName: '证券', bgColor: '#46dafc' }] },
					{ id: 5, parentName: '管理学', childrenList: [{ id: 13, childrenName: '管理', bgColor: '#1dcffd' }, { id: 14, childrenName: '工商', bgColor: '#a12878' }, { id: 15, childrenName: '财会', bgColor: '#eeaeca' }] },
					{ id: 6, parentName: '人文社科', childrenList: [{ id: 16, childrenName: '法学', bgColor: '#8619cd' }, { id: 17, childrenName: '政治', bgColor: '#a19328' }, { id: 18, childrenName: '文学', bgColor: '#fc466b' }] },
					{ id: 7, parentName: '其他', childrenList: [{ id: 19, childrenName: '医学', bgColor: '#cd4619' }, { id: 20, childrenName: '农学', bgColor: '#22c1c3' }, { id: 21, childrenName: '艺术', bgColor: '#162883' }] }
				],
				hotProjectList: [{ id: 1, projectName: '计算机' }, { id: 2, projectName: '经济' }, { id: 3, projectName: '金融' }, { id: 4, projectName: '法学' },
				{ id: 5, projectName: '电子信息' }, { id: 6, projectName: '医学' }]
			}
		},
		methods: {
			search() {
				
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
