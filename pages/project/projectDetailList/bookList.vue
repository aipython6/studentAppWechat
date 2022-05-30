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
		<uni-section :title="projectName" type="line" padding></uni-section>
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
				projectList:[]
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
				this.projectList = this.projectList.filter((item, index) => item.name === value)
			},
			getBookTypeList(data) {
				getBookTypeList(data).then(res => {
					const { content } = res.data
					this.projectList = content
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
