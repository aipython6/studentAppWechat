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
	import { mapState } from 'vuex'
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
		computed: mapState(['token', 'hasLogin']),
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
				if (!this.hasLogin) {
					this.login()
				} else {
					uni.navigateTo({
						url: '../../pages/home/projectCollected/projectCollected'
					})
				}
			},
			// 用户未登录时,则先进行登录
			login() {
				const that = this
				let postForm = {}
				uni.getUserProfile({
					desc: '将会获取你的个人信息',
					success: res => {
						const { nickName, avatarUrl } = res.userInfo
						postForm.nickName = nickName
						postForm.avatarUrl = avatarUrl
						uni.login({
							success: res1 => {
								const { code } = res1
								postForm.code = code
								login(postForm).then(result => {})
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
