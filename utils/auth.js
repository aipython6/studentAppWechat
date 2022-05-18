const sessionKey = 'sessionKey'
const openid = 'openid'
const sid = 'sid'
const hasLogin = 'hasLogin'

// 设置sessionkey
export function setToken(sessionKey) {
	uni.setStorageSync(sessionKey, sessionKey)
}
// 取得sessionkey
export function getToken() {
	return uni.getStorageSync(sessionKey)
}
// 删除sessionkey
export function removeToken() {
	uni.removeStorageSync(sessionKey)
}
// 设置openid
export function setOpenid(openid) {
	uni.setStorageSync(openid, openid)
}
// 取得openid
export function getOpenid() {
	return uni.getStorageSync(openid)
}

// 删除openid
export function removeOpenid() {
	uni.removeStorageSync(openid)
}

// 设置学生id
export function setSid(sid) {
	uni.setStorageSync(sid, sid)
}
// 取得学生id
export function getSid() {
	return uni.getStorageSync(sid)
}
// 删除学生id
export function removeSid() {
	uni.removeStorageSync(sid)
}

// 设置登录状态
export function setHasLogin(hasLogin) {
	uni.setStorageSync(hasLogin, hasLogin)
}

// 获取登录状态
export function getHasLogin() {
	return uni.getStorageSync(hasLogin)
}
// 删除登录状态
export function removeHasLogin() {
	uni.removeStorageSync(hasLogin)
}