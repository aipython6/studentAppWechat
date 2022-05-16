<template>
	<!-- 课程收藏列表 -->
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
		<uni-section title="已收藏的课程" type="line" padding></uni-section>
		<view class="collected-main">
			<view class="collected-list">
				<view v-for="(item,index) in collectedList" :key="item.id">
					<collectedItem
					:bid="item.id"
					:pid="index+1"
					:avatar="item.avatar"
					:publshedName="item.publishedName"
					:projectName="item.projectName"
					:collctedTime="item.collectedTime"
					:clickNum="item.clickNum"
					:studyStatus="item.studyStatus" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import collectedItem from './collectedItem.vue'
	export default {
		components: { collectedItem },
		data() {
			return {
				collectedList: [
					{ id: 1, projectName: '高等数学', publishedName: '清华大学出版社', collectedTime: '2022-05-13', clickNum: 55, studyStatus: '已学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 2, projectName: '大学英语', publishedName: '人民出版社', collectedTime: '2022-05-01', clickNum: 15, studyStatus: '未学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 3, projectName: '大学化学', publishedName: '上海交通大学出版社', collectedTime: '2022-05-11', clickNum: 23, studyStatus: '已学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 4, projectName: '大学物理', publishedName: '复旦大学出版社', collectedTime: '2022-04-29', clickNum: 109, studyStatus: '已学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 5, projectName: '数据结构', publishedName: '同济大学出版社', collectedTime: '2022-05-06', clickNum: 10, studyStatus: '已学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' },
					{ id: 6, projectName: '软件工程', publishedName: '北京大学出版社', collectedTime: '2022-05-03', clickNum: 88, studyStatus: '未学习', avatar: 'https://cdn.uviewui.com/uview/album/1.jpg' }
					]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx;
	}
</style>
