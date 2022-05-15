<template>
	<!-- 课程学习下各个图标的组件 -->
	<view class="container">
		<view @tap="toProjectList">
			<u-avatar size="55" :src="item[0].src"></u-avatar>
			<u--text :text="item[0].value"></u--text>
		</view>
		<view>
			<u-avatar size="55" :src="item[1].src"></u-avatar>
			<u--text :text="item[1].value"></u--text>
		</view>
		<view @tap="toProjectCollected">
			<u-avatar size="55" :src="item[2].src"></u-avatar>
			<u--text :text="item[2].value"></u--text>
		</view>
		<view @tap="toStudyRecord">
			<u-avatar size="55" :src="item[3].src"></u-avatar>
			<u--text :text="item[3].value"></u--text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'projectStudy',
		props: {
			item: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			toProjectList() {
				uni.navigateTo({
					url: '../../pages/project/index'
				})
			},
			toProjectCollected() {
				uni.navigateTo({
					url: '../../pages/home/projectCollected/projectCollected'
				})
			},
			toStudyRecord() {
				uni.navigateTo({
					url: '../../pages/home/studyRecord/studyRecord'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		display: flex;
		justify-content: space-around;
	}
</style>
