<template>
	<!-- 显示书本的组件 -->
	<view class="main">
		<u-cell-group>
			<u-cell v-for="item, index in projectList" size="large" :key="item.id" :title="item.projectName + '(共'+ item.num + '本)'" isLink @click="toBookListDetail(item.projectName)" />
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		name: 'bookBox',
		props: {
			projectList: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		methods: {
			toBookListDetail(projectName) {
				uni.navigateTo({
					url: `./index?projectName=${projectName}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {

	}
</style>
