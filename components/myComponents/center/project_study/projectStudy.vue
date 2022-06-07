<template>
	<!-- 课程学习下各个图标的组件 -->
	<view class="container">
		<view @tap="toProjectList">
			<u--image :src="item[0].src" width="60px" height="60px" shape="square" />
			<text>{{ item[0].value }}</text>
		</view>
		<view @tap="toProjectCollected">
			<u--image :src="item[1].src" width="60px" height="60px" shape="square" />
			<text>{{ item[1].value }}</text>
		</view>
		<view @tap="toStudyRecord">
			<u--image :src="item[2].src" width="60px" height="60px" shape="square" />
			<text>{{ item[2].value }}</text>
		</view>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { login } from '@/api/auth/auth.js'
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
		computed: {
			...mapGetters(['user', 'hasLogin'])
		},
		data() {
			return {
				show: false,
				content: '您还未登录,请授权登录'
			}
		},
				
		methods: {
			toProjectList() {
				uni.navigateTo({
					url: '../../pages/project/index'
				})
			},
			// 跳转到课本收藏列表
			toProjectCollected() {
				const url = '../../pages/home/projectCollected/projectCollected'
				if (!(this.hasLogin)) {
					this.login(url)
				} else {
					uni.navigateTo({
						url: url
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
