import request from '@/utils/request.js'
// 该文件下的访问是对课程收藏和课程学习的数据库修改方法

// 1
export function getCollectOneBook(data) {
	return request({
		url: 'api/student/getCollectOneBook',
		method: 'GET',
		data: data
	})
}

//2.收藏和取消收藏课程
export function collectBook(data) {
	return request({
		url: 'api/student/collectBook',
		method: 'POST',
		data: data
	})
}

// 3.获取openid下已收藏的课本列表
export function getCollectedBooks() {
	return request({
		url: 'api/student/getCollectedBooks',
		method: 'GET',
	})
}