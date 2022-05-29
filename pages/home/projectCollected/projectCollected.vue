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
				<view v-for="(item,index) in collectedList" :key="item.bid">
					<collectedItem
					:bid="item.bid"
					:pid="index+1"
					:avatar="item.coverImg"
					:publshedName="item.publishedName"
					:projectName="item.name"
					:collctedTime="item.create_time"
					:clickNum="item.clickNum"
					:studyStatus="item.status" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import collectedItem from './collectedItem.vue'
	import { getCollectedBooks } from '@/api/project/edit_project.js'
	export default {
		components: { collectedItem },
		data() {
			return {
				show: false,
				collectedList:[]
			}
		},
		onLoad() {
			this.getCollectedBooks()
		},
		methods: {
				getCollectedBooks() {
					getCollectedBooks().then(res => {
						const { content } = res.data
						this.collectedList = content
					})
				}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx;
	}
</style>
