import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		forcedLogin: false,
		hasLogin: false,
		username: '',
		openID: '',
		token: ''
	},
	mutations: {
		login(state, user) {
			state.username = user.username || ''
			state.hasLogin = true
			state.openID = user.openID || ''
			state.token = user.token || ''
		},
		logout(state) {
			state.username = ''
			state.hasLogin = false
			state.openID = ''
			state.token = ''
		}
	}
})

export default store

