// 授权用到的相关方法
import request from '@/utils/request.js'

export function login(data) {
	return request({
		url: 'auth/login',
		method: 'POST',
		data
	})
}