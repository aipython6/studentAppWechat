const sessionKey_ = 'sessionKey'
const openid_ = 'openid'
const sid_ = 'sid'
const hasLogin_ = 'hasLogin'

// 设置sessionkey
export function setToken(sessionKey) {
	uni.setStorageSync(sessionKey_, sessionKey)
}
// 取得sessionkey
export function getToken() {
	return uni.getStorageSync(sessionKey_)
}
// 删除sessionkey
export function removeToken() {
	uni.removeStorageSync(sessionKey_)
}
// 设置openid
export function setOpenid(openid) {
	uni.setStorageSync(openid_, openid)
}
// 取得openid
export function getOpenid() {
	return uni.getStorageSync(openid_)
}

// 删除openid
export function removeOpenid() {
	uni.removeStorageSync(openid_)
}

// 设置学生id
export function setSid(sid) {
	uni.setStorageSync(sid_, sid)
}
// 取得学生id
export function getSid() {
	return uni.getStorageSync(sid_)
}
// 删除学生id
export function removeSid() {
	uni.removeStorageSync(sid_)
}

// 设置登录状态
export function setHasLogin(hasLogin) {
	uni.setStorageSync(hasLogin_, hasLogin)
}

// 获取登录状态
export function getHasLogin() {
	return uni.getStorageSync(hasLogin_)
}
// 删除登录状态
export function removeHasLogin() {
	uni.removeStorageSync(hasLogin_)
}