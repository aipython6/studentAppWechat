<template>
	<!-- 点击课本学习后跳转到对应的学习页面 -->
	<view class="container">
		<uni-section :title="bookObj.bookName" type="line" padding />
		<bookInfo :bookItem="bookItem" :isCollect="isCollect" @collect="collect" />
		<u-gap height="20" bgColor="#fff" :marginBottom="10" />
		<u-tabs :list="tabs" :current="current" lineColor="#f56c6c" @change="change"></u-tabs>
		<view>
			<chapterContent :obj="chapterContentObj" v-if="current===0" />
			<exerciseContent :obj="chapterContentObj" v-else-if="current===1" />
		</view>
	</view>
</template>

<script>
	import { getBookInfoBybid, getBookChapterList } from '@/api/project/project.js'
	import { collectBook, getCollectOneBook } from '@/api/project/edit_project.js'
	import { mapGetters } from 'vuex'
	import bookInfo from './components/bookInfo.vue'
	import chapterContent from './components/chapterContent.vue'
	import exerciseContent from './components/exerciseContent.vue'
	export default {
		components: { bookInfo, chapterContent, exerciseContent },
		data() {
			return {
				current: 0,
				bookObj: { bookName: '', bid: '' },
				tabs: [{ name: '课程学习' }, { name: '练习题' }],
				bookItem: {},
				// 章节内容
				chapterContentObj: { list: [], num: '', pname: '', pid: '' },
				// 练习题内容
				exerciseContentList: { list: [], num: '', pname: '', pid: '' },
				// 是否收藏了改课程
				isCollect: false
			}
		},
		computed: {
			...mapGetters(['user', 'hasLogin'])
		},
		onLoad(obj) {
			this.bookObj.bookName = obj.name
			this.bookObj.bid = obj.bid
			uni.setNavigationBarTitle({
				title: obj.name
			})
			// 课本信息
			this.getBookInfoBybid({ bid: obj.bid })
			// 课本章节列表
			this.getBookChapterList({ bid: obj.bid })
			// 查询课程是否收藏
			this.getCollectOneBook({ bid: obj.bid })
		},
		methods: {
			change(obj) {
				this.current = obj.index === 0 ? 0 : 1
			},
			getBookInfoBybid(data) {
				getBookInfoBybid(data).then(res => {
					const { content } = res.data
					this.bookItem = content
				})
			},
			getBookChapterList(data) {
				getBookChapterList(data).then(res => {
					const { content } = res.data
					this.chapterContentObj.list = content.children
					this.chapterContentObj.pname = content.label
					this.chapterContentObj.pid = content.id
					// 1级章节数量
					this.chapterContentObj.num = content.children.length
				})
			},
			// 课本收藏的相关方法
			login(temp) {
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
										collectBook(temp).then(res => {
											that.getCollectOneBook({ bid: temp.bid })
										})
									})
								})
							}
						})
					}
				})
			},
			getCollectOneBook(data) {
				getCollectOneBook(data).then(res => {
					const { isCollect } = res.data
					this.isCollect = isCollect
				})
			},
			collect(temp) {
				if (!this.hasLogin) {
					this.login(temp)
				} else {
					collectBook(temp).then(res => {
						this.getCollectOneBook({ bid: temp.bid })
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 15rpx 15 rpx 50rpx 15rpx;
	}
</style>
