<template>
	<!-- 课程学习的章节内容的组件 -->
	<view class="container">
		<uni-section :title="'共(' + obj.num + ')章'" type="line" padding color="#2d1add" />
			<view style="font-size: 12px; color: #e71111; margin-left: 15rpx;">Note: 点击二级标题即可开始学习</view>
			<view class="first" v-for="item, index in obj.list" :key="index">
				<view class="second">({{index+1}})---{{ item.label }}</view>
				<view class="third" v-for="subitem, subindex in item.children" :key="subindex">
					<view class="fourth" @tap="toStudyPage(subitem.id, subitem.label)">{{ subitem.label}}</view>
				</view>
				<u-divider></u-divider>
			</view>
	</view>
	
</template>

<script>
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
		methods: {
			// 跳转到最终学习的页面
			toStudyPage(id, secondName) {
				uni.navigateTo({
					url: `./studyPage?bid=${id}&name=${secondName}`
				})
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
