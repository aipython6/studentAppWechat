<template>
	<!-- 课程学习的章节内容的组件 -->
	<view class="container">
		<uni-section :title="'共(' + obj.num + ')章'" type="line" padding color="#2d1add" />
			<view style="font-size: 12px; color: #e71111; margin-left: 15rpx;">Note: 点击二级标题即可开始学习</view>
			<view class="first" v-for="item, index in obj.list" :key="index">
				<view class="second">({{index+1}})---{{ item.label }}</view>
				<view class="third" v-for="subitem, subindex in item.children" :key="subindex">
					<view class="fourth" @tap="toStudyPage(subitem.id, subitem.label, obj.pid)">{{ subitem.label}}</view>
				</view>
				<u-divider />
			</view>
	</view>
	
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'chapterContent',
		props: {
			obj: {
				type: Object,
				default: () => {
					return {}
				}
			}
		},
		computed: {
			...mapGetters(['hasLogin'])
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
			// 跳转到最终学习的页面
			toStudyPage(id, secondName,pid) {
				const url =  `./studyPage?bid=${id}&name=${secondName}&pid=${pid}`
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

<style lang="scss" scoped>
	.container {
		.first {
			margin: 45rpx 0;
			.second {
					margin-left: 20rpx;
					color: #4e3e3e;
					font-weight: bold;
			}
			.third {
				margin: 30rpx 0;
			}
			.fourth {
					margin-left: 50rpx;
					color: #886868;
			}
		}
	}
</style>
