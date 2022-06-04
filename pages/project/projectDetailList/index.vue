<template>
	<!-- 点击某个课程后，列出其所有的课本详细信息 -->
	<view class="container">
		<u-search
		placeholder="根据课本名称搜索"
		clearabled
		shape="square"
		:show-action="true"
		actionText="搜索"
		:animation="true"
		v-model="bookName" 
		@search="search" />
		<uni-section :title="projectName" type="line" padding />
		<view v-for="item,index in bookList" :key="item.id">
			<bookListItem :bookItem="item" />
			<u-divider />
		</view>
	</view>
</template>

<script>
	import bookListItem from './components/bookListItem.vue'
	import { getBookList } from '@/api/project/project.js'
	export default {
		components: { bookListItem },
		data() {
			return {
				projectName: '',
				bookName: '',
				bookList: [],
				tempList: []
			}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.name
			})
			this.projectName = obj.name
			this.getBookList({ btid: obj.btid })
		},
		methods: {
			search(value) {
				if (value) {
					this.bookList = this.bookList.filter(item => item.name.indexOf(value) !== -1)
				} else {
					this.bookList = this.tempList
				}
			},
			getBookList(data) {
				getBookList(data).then(res => {
					const { content } = res.data
					this.bookList = content
					this.tempList = content
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx 15rpx 55rpx 15rpx;
	}
</style>
