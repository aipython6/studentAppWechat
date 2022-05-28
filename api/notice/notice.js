import request from '@/utils/request.js'

export function get_nocice(data) {
	return request({
		url: 'api/wx/website/getNotice',
		method: 'GET',
		data: data
	})
}