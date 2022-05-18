const getters = {
	user: state => state.user.user,
	hasLogin: state => state.user.hasLogin,
	sessionKey: state => state.user.sessionKey
}
export default getters