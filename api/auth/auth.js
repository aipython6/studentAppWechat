// 授权用到的相关方法
import request from '@/utils/request.js'

export function login(data) {
	return request({
		url: 'auth/login',
		method: 'POST',
		data
	})
}

export function getInfo(data) {
	return request({
		url: 'auth/getinfo',
		method: 'GET',
		data
	})
}

// put请求：根据openid来查找对应的students更新数据即可
export function editUserinfo(data) {
	return request({
		url: 'auth/editUserinfo',
		method: 'PUT',
		data
	})
} 