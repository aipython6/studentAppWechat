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
				<view v-if="collectedList.length === 0">你还没有收藏课程哦~</view>
				<view v-else v-for="(item,index) in collectedList" :key="item.bid">
					<collectedItem
					:bid="item.bid"
					:pid="index+1"
					:bookItem="item"
						@cancel="cancel" />
				</view>
			</view>
		</view>
		<u-modal
		:show="show"
		:closeOnClickOverlay="true"
		:showCancelButton="true"
		title="是否取消收藏课程?"
		@confirm="deleteCcollectedRecord"
		@cancel="cancelModal"
		@close="cancelModal" />
	</view>
</template>

<script>
	import collectedItem from './collectedItem.vue'
	import { getCollectedBooks, collectBook } from '@/api/project/edit_project.js'
	export default {
		components: { collectedItem },
		data() {
			return {
				show: false,
				collectedList:[],
				tempList: [],
				bid: ''
			}
		},
		onLoad() {
			this.getCollectedBooks()
		},
		methods: {
			search(value) {
				if (value) {
					this.collectedList = this.collectedList.filter(item => item.name.indexOf(value) !== -1)
				} else {
					this.collectedList = this.tempList
				}
			},
				getCollectedBooks() {
					getCollectedBooks().then(res => {
						const { content } = res.data
						this.collectedList = content
						this.tempList = content
					})
				},
				cancel({ bid, show }) {
					this.bid = bid
					this.show = show
				},
				deleteCcollectedRecord() {
					collectBook({ bid: this.bid, isCollect: true }).then(res => {
						this.show = false
						this.getCollectedBooks()
					})
				},
				cancelModal() {
					this.show = false
				}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx;
	}
</style>
