<template>
	<!-- 某个科目下所有课本的列表 -->
	<view class="container">
		<u-search
		placeholder="根据课程名称搜索"
		clearabled
		shape="square"
		:show-action="true"
		actionText="搜索"
		:animation="true"
		v-model="bookName" 
		@search="search">
		</u-search>
		<uni-section :title="projectName" type="line" padding />
		<bookBox :projectList="projectList" />
	</view>
</template>

<script>
	import bookBox from './components/bookBox.vue'
	import { getBookTypeList } from '@/api/project/project.js'
	export default {
		components: { bookBox },
		data() {
			return {
				projectName: '',
				bookName: '',
				projectList:[],
				tempList: []
			}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.name
			})
			this.projectName = obj.name
			this.getBookTypeList({ sid: obj.sid })
		},
		methods: {
			search(value) {
				if (value) {
					this.projectList = this.projectList.filter(item => item.name.indexOf(value) !== -1)
				} else {
					this.projectList = this.tempList
				}
			},
			getBookTypeList(data) {
				getBookTypeList(data).then(res => {
					const { content } = res.data
					this.projectList = content
					this.tempList = content
				})
			}
		}
	}
</script>

<style>
	.container {
		margin: 15rpx 15rpx 55rpx 15rpx;
	}
</style>
