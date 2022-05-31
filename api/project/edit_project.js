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

// 用户进入到学习页面,添加一条记录到课程学习关系表
export function setStudyProjectRecord(data) {
	return request({
		url: 'api/student/setStudyProjectRecord',
		method: 'POST',
		data: data
	})
}

// 从课程学习关系表获取一条记录
export function getStudyProjectRecord(data) {
	return request({
		url: 'api/student/getStudyProjectRecord',
		method: 'GET',
		data: data
	})
}

export function updateStudyProjectRecord(data) {
	return request({
		url: 'api/student/updateStudyProjectRecord',
		method: 'POST',
		data: data
	})
}

export function getStudyProjectList(data) {
	return request({
		url: 'api/student/getStudyProjectList',
		method: 'GET',
		data: data
	})
}

// 根据id删除一条学习记录表中的数据
export function deleteStudyProject(data) {
	return request({
		url: 'api/student/deleteStudyProject',
		method: 'GET',
		data: data
	})
}

export function getStudentNumFromStudyProject() {
	return request({
		url: 'api/student/getStudentNumFromStudyProject',
		method: 'GET',
	})
}

export function getTodayStudyProject() {
	return request({
		url: 'api/student/getTodayStudyProject',
		method: 'GET',
	})
}