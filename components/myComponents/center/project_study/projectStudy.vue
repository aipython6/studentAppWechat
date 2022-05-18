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
		<view>
			<u-modal
			:show="show"
			title="提示"
			:content='content'
			:closeOnClickOverlay="true"
			:showCancelButton="true"
			@confirm="login"
			@cancel="show = false"
			/>
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
				if (!(this.hasLogin)) {
					this.login()
				} else {
					uni.navigateTo({
						url: '../../pages/home/projectCollected/projectCollected'
					})
				}
			},
			// 用户未授权时,则先授权，而后才能查看课程信息
			login() {
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
									url: '../../pages/home/projectCollected/projectCollected'
								})
							}
						})
					}
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
