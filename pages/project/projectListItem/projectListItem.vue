<template>
	<!-- 课程列表每个学习列表的组件 -->
	<view class="container">
		<uni-section :title="parentType" type="line" padding></uni-section>
		<view class="item">
			<view v-for="(item,index) in childrenList" :key="item.id">
					<boxItem :text="item.childrenName" :bgColor="item.bgColor" />
			</view>
		</view>
	</view>
</template>

<script>
	import boxItem from './boxItem.vue'
	export default {
		name: 'projectListItem',
		components: { boxItem },
		props: {
			// 课程大类
			parentType: {
				type: String,
				default: () => {
					return ''
				}
			},
			// 大类下各个课程小类
			childrenList: {
				type: Array,
				default: () => {
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.item {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
		}
	}
</style>
