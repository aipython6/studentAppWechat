<template>
	<view class="container">
		<view class="header">
			<u--text prefixIcon="baidu" type="primary" text="图片文字识别工具" size="20"></u--text>
			<u--text prefixIcon="plus" type="primary" text="(请点击下方按钮上传图片)"></u--text>
		</view>
		<u-upload
				:fileList="fileList"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="1"
			></u-upload>
			<view class="text">
				<u--text value="识别的内容"></u--text>
				<u--textarea v-model="words" placeholder="识别到的内容" :autoHeight="true" />
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
						url: 'http://localhost:8090/api/tool/upload',
						filePath: url,
						name: 'file',
						success: (res) => {
							const { words } = JSON.parse(res.data)
							that.words = words
						}
					});
				},
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 10px;
		.header {
			margin-bottom: 15px;
		}
	}
</style>
