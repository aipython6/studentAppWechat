import request from '@/utils/request.js'

export function getTopAndSecondProjec() {
	return request({
		url: 'api/study/getTopAndSecondProjec',
		method: 'GET',
	})
}

export function getSecondProjectByName(data) {
	return request({
		url: 'api/study/getSecondProjectByName',
		method: 'GET',
		data: data
	})
}

// 点击某个课程跳转到其课程下所有的课本类型列表
export function getBookTypeList(data) {
		return request({
			url: 'api/study/getBookTypeList',
			method: 'GET',
			data: data
		})
}

// 根据btid获取所有的课本列表
export function getBookList(data) {
		return request({
			url: 'api/study/getBookList',
			method: 'GET',
			data: data
		})
}

// 根据bid查询对应的书本信息
export function getBookInfoBybid(data) {
	return request({
		url: 'api/study/getBookInfoBybid',
		method: 'GET',
		data: data
	})
}

// 获取书本下所有的1级章节和2级章节列表
export function getBookChapterList(data) {
	return request({
		url: 'api/study/getBookChapterList',
		method: 'GET',
		data: data
	})
}

// 根据bid获取对应的2级章节内容
export function getChapterConentList(data) {
	return request({
		url: 'api/study/getChapterConentList',
		method: 'GET',
		data: data
	})
}