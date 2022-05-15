<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="设置个人信息" clickable link @click="toSetting"></uni-list-item>
			<uni-list-item title="学习记录" clickable link @click="toStudyRecord"></uni-list-item>
			<uni-list-item title="课程收藏" clickable link @click="toProjectCollected"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export	default {
		name: 'menuList',
		methods: {
			toSetting() {
				uni.navigateTo({
					url: `../../pages/home/userinfo/userinfo`,
				})
			},
			toStudyRecord() {
				uni.navigateTo({
					url: '../../pages/home/studyRecord/studyRecord'
				})
			},
			toProjectCollected() {
				uni.navigateTo({
					url: '../../pages/home/projectCollected/projectCollected'
				})
			}
		}
	}
</script>

<style>
</style>
