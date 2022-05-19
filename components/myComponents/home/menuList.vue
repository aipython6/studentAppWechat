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
	import { mapGetters } from 'vuex'
	export	default {
		name: 'menuList',
		computed: {
			...mapGetters(['user', 'hasLogin'])
		},
		methods: {
			// 用户未授权时,则先授权，而后才能查看课程信息
			login(url) {
				const that = this
				let postForm = {}
				uni.getUserProfile({
					desc: '此操作将会获取你的个人信息',
					success: res => {
						const { nickName, avatarUrl } = res.userInfo
						postForm.nickName = nickName
						postForm.avatarUrl = avatarUrl
						uni.login({
							success: res1 => {
								const { code } = res1
								postForm.code = code
								this.$store.dispatch('login', postForm).then(result => {
									// 登录成功后,立即获取用户信息
									this.$store.dispatch('GetInfo', result.openid).then(result1 => {})
								})
								uni.navigateTo({
									url: url
								})
							}
						})
					}
				})
			},
			toSetting() {
				const url = `../../pages/home/userinfo/userinfo`
				if (!this.hasLogin) {
					this.login(url)
				} else {
					uni.navigateTo({
						url: url,
					})
				}
			},
			toStudyRecord() {
				const url = '../../pages/home/studyRecord/studyRecord'
				if (!this.hasLogin) {
					this.login(url)
				} else {
					uni.navigateTo({
						url: url
					})
				}
			},
			toProjectCollected() {
				const url = '../../pages/home/projectCollected/projectCollected'
				if (!this.hasLogin) {
					this.login(url)
				} else {
					uni.navigateTo({
						url: url
					})
				}
			}
		}
	}
</script>

<style>
</style>
