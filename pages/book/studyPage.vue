<template>
		<!-- 最终学习的页面 -->
	<view class="container">
		<view class="chapter">{{ chapter }}</view>
		<block v-for="item, index in chapterContentList">
			<view class="box">
				<image :src="item.url" mode="widthFix" @click="previewImage(item.ccid)" />
			</view>
		</block>
	</view>
</template>

<script>
	import { getChapterConentList } from '@/api/project/project.js'
	export default {
		data() {
			return {
				chapterContentList: [],
				chapter: ''
			}
		},
		onLoad(obj) {
			uni.setNavigationBarTitle({
				title: obj.name
			})
			this.getChapterConentList({ bid: obj.bid, type: 0 })
			this.chapter = obj.name
		},
		methods: {
			getChapterConentList(data) {
				getChapterConentList(data).then(res => {
					const { content } = res.data
					this.chapterContentList = content
				})
			},
			previewImage(index) {
				let imgList = this.chapterContentList.map(e => e.url)
				uni.previewImage({
					current: index,
					urls: imgList
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.chapter {
			padding: 25rpx;
			height: 30rpx;
			font-size: 18px;
			color: #2b0c7c;
			background-color: #ededed;
		}
	}
</style>
