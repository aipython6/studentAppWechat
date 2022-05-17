const tokenKey = 'studentApp'

export function getToken() {
	return uni.getStorageSync({key: tokenKey})
}

export function setToken(token) {
	return uni.setStorageSync(tokenKey, token)
}

