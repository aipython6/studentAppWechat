import Vue from 'vue'
import Vuex from 'vuex'
import { login, getInfo } from '@/api/auth/auth.js'
import { getToken, getOpenid, getSid, getHasLogin, setToken, setOpenid, setSid, setHasLogin, removeHasLogin, removeSid, removeToken, removeOpenid } from '@/utils/auth.js'
Vue.use(Vuex)

const user = {
	state: {
		forcedLogin: false,
		hasLogin: false,
		user: {},
		sessionKey: '',
		// 记录4个时间（1.进入学习页面的时间;2.退出学习页面的时间;3.该课本学习的总时间;4.做题时间）
		start_time: '',
		end_time: '',
		study_time: '',
		exercise_time: ''
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
						setHasLogin(true)
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
					const { content } = res.data
					setUserInfo(content, commit)
					setSid(content.sid)
					resolve(content)
				})
			})
		},
		
		// 用户注销
		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit('SET_SESSIONKEY', '')
				commit('SET_HASLOGIN', false)
				removeOpenid()
				removeToken()
				removeHasLogin()
				resolve()
			})
		}
	}
}



export const setUserInfo = (res, commit) => {
	commit('SET_USER', res)
}

export default user