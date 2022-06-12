<template>
	<view class="container">
		<view class="header">
			<text>1.图片文字识别工具</text>
			<text>(请点击下方按钮上传图片)</text>
		</view>
		<u-upload
				:fileList="fileList"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
			></u-upload>
			<view style="color: #2979FF;">识别到的内容</view>
			<view class="text">
				<view>{{ words }}</view>
				<view class="btn"><button @click="clear" type="primary" size="mini" v-if="words">清空内容</button></view>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [],
				words: ''
			}
		},
		methods: {
			deletePic(event) {
					this.fileList = []
				},
				// 新增图片
				async afterRead(event) {
					const url = event.file[0].url
					this.fileList.push({url: url })
					this.uploadFilePromise(url)
				},
				uploadFilePromise(url) {
					const that = this
					let a = uni.uploadFile({
						// url: 'http://localhost:8090/api/tool/upload',
						url: 'https://www.and2ui.cn:8090/api/tool/upload',
						filePath: url,
						name: 'file',
						success: (res) => {
							const { words } = JSON.parse(res.data)
							that.words = words
						}
					});
				},
				clear() {
					this.words = ''
				}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 10px;
		.header {
			color: #f1005a;
			margin-bottom: 15px;
		}
		.text {
			margin: 20rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.btn {
				margin-top: 20rpx;
			}
		}
	}
</style>
