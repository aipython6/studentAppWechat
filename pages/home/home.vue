<template>
	<!-- 个人中心 -->
	<view class="container">
		<userinfo :userinfo="user" />
		<menuList />
	</view>
</template>

<script>
	import userinfo from '../../components/myComponents/home/userinfo.vue'
	import menuList from '../../components/myComponents/home/menuList.vue'
	import { mapGetters } from 'vuex'
	export default {
		components: { userinfo, menuList },
		data() {
			return {}
		},
		computed: {
			...mapGetters(['user'])
		},
	}
</script>