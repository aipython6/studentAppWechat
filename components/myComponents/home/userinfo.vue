<template>
	<view class="container">
		<uni-section title="个人基本信息" type="line" padding color="#000000"></uni-section>
		<view class="userinfo">
			<view class="avatar">
				<u-avatar :src="defaultAvatar" size="80" class="avatar" shape="square" v-if="!hasLogin" />
				<u-avatar :src="userinfo.avatarUrl" size="80" class="avatar" shape="square" v-else />
			</view>
			<view class="base" v-if="hasLogin">
				<view class="baseinfo" v-if="user.isFull">
					<view class="line1">
						<text>姓名: {{ userinfo.username }}</text>
						<text>性别: {{ userinfo.gender }}</text>
						<text>年龄: {{ userinfo.age }}</text>
					</view>
					<text>学校: {{ userinfo.school }}</text>
					<text>专业: {{ userinfo.professional }}</text>
					<text>邮箱: {{ userinfo.email }}</text>
				</view>
				<view v-else @tap='goUserinfo(openid)'>
					<!-- <u-badge :isDot="true" type="success">点击完善个人信息</u-badge> -->
					<text>点击完善个人信息</text>
				</view>
			</view>
			<view v-else>
				<view class="no-login" @tap='login'>你还未登录,请点击授权登录</view>
			</view>
		</view>
		<u-divider :dashed="true"></u-divider>
	</view>
</template>

<script>
	import { login } from '@/api/auth/auth.js'
	import { getOpenid } from '@/utils/auth.js'
	import { mapGetters } from 'vuex'
	export default {
		name: 'userinfo',
		props: {
			userinfo: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		data() {
			return {
				defaultAvatar: 'https://cdn.uviewui.com/uview/album/1.jpg'
			}
		},
		computed: {
			openid: () => {
				return getOpenid()
			},
			...mapGetters(['user', 'hasLogin'])
		},
		methods: {
			goUserinfo(openid) {
				uni.navigateTo({
					url: `../../pages/home/userinfo/userinfo?openid = ${openid}`
				})
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
		.userinfo {
			height: 100px;
			padding: 0 20rpx;
			color: #123;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			.base {
				margin-left: 35rpx;
				.baseinfo {
					color: #8F8F94;
					height: 100px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.line1 {
						width: 230px;
						display: flex;
						justify-content: space-between
					}
				}
			}
			.no-login {
				margin-left: 35rpx;
			}
		}
	}
</style>
