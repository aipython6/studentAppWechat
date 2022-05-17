import { getToken } from '@/utils/auth'
import store from '@/store/index'
function request(obj) {
	return new Promise((resolve, reject) => {
		const baseURL = getApp().globalData.baseURL
		const method = obj.method || 'GET'
		const url = baseURL + obj.url
		const data = obj.data
		const token = getToken()
		const header = { 'authorization': token, 'openid': store.state.openID }
		uni.request({
			url: url,
			method: method,
			data: data,
			header: header,
			success: (res)=> {
				if (res.data.code === 401 || res.data.code === 403) {
					uni.reLaunch({
						// 回到首页
						url: '/pages/exam/exam',
					})
				} else if (res.data.code === 200) {
					uni.showToast({
						title: res.data.msg,
						duration: 2000
					})
					resolve(res)
				}
			},
			fail: (err) => {
				uni.showToast({
					title: '接口请求失败',
					duration: 2000
				})
			}
		})
	})
}
export default request