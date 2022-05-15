<template>
	<view class="container">
		<view class="header">
			<u--text prefixIcon="baidu" type="primary" text="图片文字识别工具" size="20"></u--text>
			<u--text prefixIcon="plus" type="primary" text="(请点击下方按钮上传图片)"></u--text>
		</view>
		<u-upload
				:fileList="fileList1"
				@afterRead="afterRead"
				@delete="deletePic"
				name="1"
				multiple
				:maxCount="10"
			></u-upload>
			<view class="text">
				<u--text value="识别的内容"></u--text>
				<u--textarea v-model="value1" placeholder="识别到的内容" ></u--textarea>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fileList1: [],
				value1: ''
			}
		},
		methods: {
			deletePic(event) {
				this[`fileList${event.name}`].splice(event.index, 1)
				},
				// 新增图片
				async afterRead(event) {
					// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
					let lists = [].concat(event.file)
					let fileListLen = this[`fileList${event.name}`].length
					lists.map((item) => {
						this[`fileList${event.name}`].push({
							...item,
							status: 'uploading',
							message: '上传中'
						})
					})
					for (let i = 0; i < lists.length; i++) {
						const result = await this.uploadFilePromise(lists[i].url)
						let item = this[`fileList${event.name}`][fileListLen]
						this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
							status: 'success',
							message: '',
							url: result
						}))
						fileListLen++
					}
				},
				uploadFilePromise(url) {
					return new Promise((resolve, reject) => {
						let a = uni.uploadFile({
							url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
							filePath: url,
							name: 'file',
							formData: {
								user: 'test'
							},
							success: (res) => {
								setTimeout(() => {
									resolve(res.data.data)
								}, 1000)
							}
						});
					})
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
