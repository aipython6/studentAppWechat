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
		<uni-section title="课程列表" type="line" padding></uni-section>
		<bookBox :projectList="projectList" />
	</view>
</template>

<script>
	import bookBox from './components/bookBox.vue'
	export default {
		components: { bookBox },
		data() {
			return {
				bookName: '',
				projectList: [{ id: 1, projectName: '常微分方程', num: 5 }, { id: 2, projectName: '抽象代数', num: 3 }, { id: 3, projectName: '高等代数', num: 12 }, { id: 4, projectName: '高等数学', num: 100 }]
			}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.projectName
			})
		},
		methods: {
			search() {
				
			}
		}
	}
</script>

<style>
	.container {
		margin: 15rpx 15rpx 55rpx 15rpx;
	}
</style>
