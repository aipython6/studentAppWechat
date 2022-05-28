<template>
	<!-- 显示书本的组件 -->
	<view class="main">
		<u-cell-group>
			<u-cell v-for="item, index in projectList" size="large" :key="item.btid" :title="item.name + '(共'+ item.num + '本)'" isLink @click="toBookListDetail(item.name, item.btid)" />
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
			toBookListDetail(name, btid) {
				uni.navigateTo({
					url: `./index?name=${name}&btid=${btid}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main {

	}
</style>
