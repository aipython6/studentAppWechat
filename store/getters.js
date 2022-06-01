const getters = {
	user: state => state.user.user,
	hasLogin: state => state.user.hasLogin,
	sessionKey: state => state.user.sessionKey,
	start_tiem: state => state.user.start_tiem,
	end_tiem: state => state.user.end_tiem,
	study_time: state => state.user.study_time,
	exercise_time: state => state.user.exercise_time
}
export default getters