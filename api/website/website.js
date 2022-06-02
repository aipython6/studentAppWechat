import request from '@/utils/request.js'

export function all_website(data) {
	return request({
		url: 'api/wx/website/getAllLinks',
		method: 'GET',
		data: data
	})
}

export function all_website_byName(data) {
	return request({
		url: 'api/wx/website/allLinksByName',
		method: 'GET',
		data: data
	})
}

export function all_region_website() {
	return request({
		url: 'api/wx/website/allRegionWebsite',
		method: 'GET'
	})
}

export function updateClickNum(data) {
	return request({
		url: 'api/wx/website/updateClickNum',
		method: 'POST',
		data: data
	})
}