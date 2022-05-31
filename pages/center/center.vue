<template>
	<!-- 学习中心 -->
	<view class="container">
		<view class="header">
			<u-swiper
				:list="swiperList"
				keyName="image"
				showTitle
				:autoplay="true"
				circular
				indicator
				ndicatorMode="line"
				previousMargin="30"
				nextMargin="30"
				radius="5"
				bgColor="#ffffff"
				height="160"
				easingFunction="easeInOutCubic"
			></u-swiper>
		</view>
		
		<view class="project">
			<uni-section title="课程目录" type="line" padding />
			<projectStudy :item="projectList" />
		</view>
		<view class="study">
			<uni-section title="大家都在学" type="line" padding></uni-section>
				<view class="study-list">
					<view>
						<view><u--text :text="'当前已有'+ num +'位'" size="16" type="primary"></u--text></view>
						<view><u--text text="同学学习了课程" size="16" type="primary"></u--text></view>
					</view>
					<view>
						<view><u--text text="当前已有5523位" size="16" type="error"></u--text></view>
						<view><u--text text="同学在做题" size="16" type="error"></u--text></view>
					</view>
				</view>
		</view>
		<uni-section title="今日战果" type="line" padding />
			<view v-if="!hasLogin">
				<text @tap="login">你还未登录,点击登录查看今日学习战果</text>
			</view>
			<view v-else>
				<view v-if="todayStudyList.length === 0">你今日还未学习课程~</view>
				<view class="result-list" v-for="item,index in todayStudyList" :key='index' v-else>
					<boxItem :text="item.name" :bgColor="item.bgColor" :sid="item.sid" @gotoProjectList="gotoProjectList" />
				</view>
			</view>
	</view>
</template>

<script>
	import boxItem from '../project/projectListItem/boxItem.vue'
	import projectStudy from '../../components/myComponents/center/project_study/projectStudy.vue'
	import { all_images } from '@/api/images/images.js'
	import { getStudentNumFromStudyProject, getTodayStudyProject } from '@/api/project/edit_project.js'
	import { mapGetters } from 'vuex'
	export default {
		components: { projectStudy, boxItem },
		data() {
			return {
				swiperList: [],
				projectList: [],
				num: '',
				todayStudyList: []
			}
		},
		onShow() {
			this.getTodayStudyProject()
		},
		onLoad() {
			this.allImages()
			this.allProjects()
			this.getStudentNumFromStudyProject()
			this.getTodayStudyProject()
		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		methods: {
			allImages() {
				all_images({ type: 0 }).then(res => {
					const { content } = res.data
					this.swiperList = content
				})
			},
			allProjects() {
				let id = 0
				all_images({ type: 1 }).then(res => {
					const { content } = res.data
					this.projectList = content.map(e => {
						id++
						return {
							id: id, src: e.image, value: e.title
						}
					})
				})
			},
			// 从课程学习关系表中获取已学习的学生数量
			getStudentNumFromStudyProject() {
				getStudentNumFromStudyProject().then(res => {
					const { num } = res.data
					this.num = num
				})
			},
			
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
									this.$store.dispatch('GetInfo', result.openid).then(result1 => {
										that.getTodayStudyProject()
									})
								})
							}
						})
					}
				})
			},
			// 获取今日学习战果
			getTodayStudyProject() {
				getTodayStudyProject().then(res => {
					const { content } = res.data
					this.todayStudyList = content
				})	
			},
			// 点击课程跳转
			gotoProjectList({ name, sid }) {
				uni.navigateTo({
					url: `../project/projectDetailList/bookList?name=${name}&sid=${sid}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 0 10rpx 50rpx 10rpx;
		.project {
			.project-list {
				.item {
					display: flex;
				}
			}
		}
		.study {
			.study-list {
				margin: 0 15rpx;
				display: flex;
				justify-content: space-between;
			}
		}
		.result-list {
			margin: 0 15rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
