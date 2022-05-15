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
		<uni-section :title="projectName" type="line" padding></uni-section>
		<view v-for="item,index in bookList" :key="item.id">
			<bookListItem :bookItem="item" />
			<u-divider></u-divider>
		</view>
	</view>
</template>

<script>
	import bookListItem from './components/bookListItem.vue'
	export default {
		components: { bookListItem },
		data() {
			return {
				projectName: '',
				bookName: '',
				bookList: [
					{ id: 1, src: 'https://cdn.uviewui.com/uview/album/1.jpg', bookName: '常微分方程', author: '同济大学编', publishedName: '清华大学出版社', clickNum: 1520 }, 
					{ id: 2, src: 'https://cdn.uviewui.com/uview/album/1.jpg', bookName: '常微分方程', author: '同济大学编', publishedName: '清华大学出版社', clickNum: 1520 },
					{ id: 3, src: 'https://cdn.uviewui.com/uview/album/1.jpg', bookName: '常微分方程', author: '同济大学编', publishedName: '清华大学出版社', clickNum: 1520 },
					]
			}
		},
		onLoad(obj) {
			this.projectName = obj.projectName
		},
		methods: {
			search() {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx 15rpx 55rpx 15rpx;
	}
</style>
