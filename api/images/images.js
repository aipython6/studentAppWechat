import request from '@/utils/request.js'

export function all_images(data) {
	return request({
		url: 'api/wx/website/getImages',
		method: 'GET',
		data: data
	})
}