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
			return {
				// userinfo : { id: 1, username: '董潇潇', gender: '女', age: 21, avatar: 'https://cdn.uviewui.com/uview/album/1.jpg', email: 'dxx20010515@pku.edu.cn', school: '北京大学', professional: '软件工程' }
			}
		},
		computed: {
			...mapGetters(['user'])
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
