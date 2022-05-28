<template>
	<!-- 点击课本学习后跳转到对应的学习页面 -->
	<view class="container">
		<uni-section :title="bookObj.bookName" type="line" padding />
		<bookInfo :bookItem="bookItem" />
		<u-gap height="20" bgColor="#fff" :marginBottom="10" />
		<u-tabs :list="tabs" :current="current" lineColor="#f56c6c" @change="change"></u-tabs>
		<view>
			<chapterContent :obj="chapterContentObj" v-if="current===0" />
			<exerciseContent v-else-if="current===1" />
		</view>
	</view>
</template>

<script>
	import { getBookInfoBybid, getBookChapterList } from '@/api/project/project.js'
	import bookInfo from './components/bookInfo.vue'
	import chapterContent from './components/chapterContent.vue'
	import exerciseContent from './components/exerciseContent.vue'
	export default {
		components: { bookInfo, chapterContent, exerciseContent },
		data() {
			return {
				current: 0,
				bookObj: { bookName: '', bid: '' },
				tabs: [{ name: '课程学习' }, { name: '练习题' }],
				bookItem: {},
				// 章节内容
				chapterContentObj: { list: [], num: '', pname: '' },
				// 练习题内容
				exerciseContentList: []
			}
		},
		onLoad(obj) {
			this.bookObj.bookName = obj.name
			this.bookObj.bid = obj.bid
			uni.setNavigationBarTitle({
				title: obj.name
			})
			this.getBookInfoBybid({ bid: obj.bid })
			
			this.getBookChapterList({ bid: obj.bid })
		},
		methods: {
			change(obj) {
				this.current = obj.index === 0 ? 0 : 1
			},
			getBookInfoBybid(data) {
				getBookInfoBybid(data).then(res => {
					const { content } = res.data
					this.bookItem = content
				})
			},
			getBookChapterList(data) {
				getBookChapterList(data).then(res => {
					const { content } = res.data
					// console.log(content);
					this.chapterContentObj.list = content.children
					this.chapterContentObj.pname = content.label
					// 1级章节数量
					this.chapterContentObj.num = content.children.length
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx 15 rpx 50rpx 15rpx;
	}
</style>
