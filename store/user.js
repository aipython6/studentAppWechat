import Vue from 'vue'
import Vuex from 'vuex'
import { login, getInfo } from '@/api/auth/auth.js'
import { setToken, setOpenid, setSid, setHasLogin, removeHasLogin, removeSid, removeToken, removeOpenid } from '@/utils/auth.js'
Vue.use(Vuex)

const user = {
	state: {
		forcedLogin: false,
		hasLogin: false,
		user: {},
		sessionKey: ''
	},
	
	mutations: {
		SET_SESSIONKEY: (state, sessionKey) => {
			state.sessionKey = sessionKey
		},
		SET_OPENID: (state, openid) => {
			state.openid = openid
		},
		SET_USER: (state, user) => {
			state.user = user
		},
		SET_HASLOGIN: (state, hasLogin) => {
			state.hasLogin = hasLogin
		}
	},
	actions: {
		login({ commit }, userInfo) {
			return new Promise((resolve, reject) => {
				login(userInfo).then(res => {
					const { content } = res.data
					if (res.data.code === 200) {
						setToken(content.sessionKey)
						setOpenid(content.openid)
						setHasLogin('true')
						commit('SET_SESSIONKEY', content.sessionKey)
						commit('SET_OPENID', content.openid)
						commit('SET_HASLOGIN', true)
					}
					resolve(content)
				})
			})
		},
		
		// 根据openid拉取用户信息
		GetInfo({ commit }, openid) {
			return new Promise((resolve, reject) => {
				getInfo({ openid: openid }).then(res => {
					setUserInfo(res, commit)
					setSid(res.user.sid)
					resolve(res)
				})
			})
		}
	}
}

export const logout = (commit) => {
	commit('SET_SESSIONKEY', '')
	commit('SET_HASLOGIN', false)
	removeOpenid()
	removeToken()
	removeHasLogin()
}

export const setUserInfo = (res, commit) => {
	commit('SET_USER', res.user)
}

export default user