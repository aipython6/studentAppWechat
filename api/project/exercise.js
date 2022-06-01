import request from '@/utils/request.js'

export function deleteStudyRecord(data) {
	return request({
		url: 'api/student/deleteStudyRecord',
		method: 'GET',
		data: data
	})
}

export function setExerciseRecord(data) {
	return request({
		url: 'api/student/setExerciseRecord',
		method: 'POST',
		data: data
	})
}
export function getExerciseRecord(data) {
	return request({
		url: 'api/student/getExerciseRecord',
		method: 'GET',
		data: data
	})
}

export function updateExerciseRecord(data) {
	return request({
		url: 'api/student/updateExerciseRecord',
		method: 'POST',
		data: data
	})
}

export function getStudentNumFromExerciseProject() {
	return request({
		url: 'api/student/getStudentNumFromExerciseProject',
		method: 'GET',
	})
}