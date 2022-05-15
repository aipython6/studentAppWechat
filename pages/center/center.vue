<template>
	<!-- 学习中心 -->
	<view class="container">
		<view class="header">
			<u-swiper
				:list="list2"
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
			<uni-section title="课程目录" type="line" padding></uni-section>
			<projectStudy :item="projectList" />
		</view>
		<view class="study">
			<uni-section title="大家都在学" type="line" padding></uni-section>
				<view class="study-list">
					<view><u--text text="当前共有15523" size="18" type="primary"></u--text></view>
					<view><u--text text="位同学在学习" size="18" type="primary"></u--text></view>
				</view>
		</view>
		<uni-section title="今日战果" type="line" padding></uni-section>
			<view class="result-list"></view>
	</view>
</template>

<script>
	import projectStudy from '../../components/myComponents/center/project_study/projectStudy.vue'
	export default {
		components: { projectStudy },
		data() {
			return {
				list2: [
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png', title: '昨夜星辰昨夜风，画楼西畔桂堂东'},
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png', title: '身无彩凤双飞翼，心有灵犀一点通' },
					{ image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png', title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳' }
				],
				// projectList: [
				// 	{ id: 1, src: 'http://localhost:3000/images/projects/课程目录.png', value: '课程目录' },
				// 	{ id: 2, src: 'http://localhost:3000/images/projects/热门课程.png', value: '热门课程' },
				// 	{ id: 3, src: 'http://localhost:3000/images/projects/课程收藏.png', value: '课程收藏' },
				// 	{ id: 4, src: 'http://localhost:3000/images/projects/最近学习.png', value: '最近学习' }
				// 	]
				projectList: [
					{ id: 1, src: 'https://cdn.uviewui.com/uview/album/1.jpg', value: '课程目录' },
					{ id: 2, src: 'https://cdn.uviewui.com/uview/album/1.jpg', value: '热门课程' },
					{ id: 3, src: 'https://cdn.uviewui.com/uview/album/1.jpg', value: '课程收藏' },
					{ id: 4, src: 'https://cdn.uviewui.com/uview/album/1.jpg', value: '最近学习' }
					]
			}
		},
		methods: {

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
	}
</style>
