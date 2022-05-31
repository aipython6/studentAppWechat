import request from '@/utils/request.js'

export function setExerciseRecord() {
	return request({
		url: 'api/student/setExerciseRecord',
		method: 'GET',
	})
}
export function getExerciseRecord() {
	return request({
		url: 'api/student/getExerciseRecord',
		method: 'GET',
	})
}

export function updateExerciseRecord() {
	return request({
		url: 'api/student/updateExerciseRecord',
		method: 'GET',
	})
}