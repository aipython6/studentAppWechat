<template>
	<view class="container">
		<uni-section title="个人基本信息" type="line" padding color="#000000"></uni-section>
		<view class="userinfo">
			<view class="avatar">
				<u-avatar :src="userinfo.avatar" size="80" class="avatar" @tap='upload' shape="square" />
			</view>
			<view class="baseinfo">
				<view class="line1">
					<text>姓名: {{ userinfo.username }}</text>
					<text>性别: {{ userinfo.gender }}</text>
					<text>年龄: {{ userinfo.age }}</text>
				</view>
				<text>学校: {{ userinfo.school }}</text>
				<text>专业: {{ userinfo.professional }}</text>
				<text>邮箱: {{ userinfo.email }}</text>
			</view>
		</view>
		<u-divider :dashed="true"></u-divider>
	</view>
</template>

<script>
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
		methods: {
			upload () {
				console.log('upload');
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
			.baseinfo {
				color: #8F8F94;
				height: 100px;
				margin-left: 35rpx;
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
	}
</style>
