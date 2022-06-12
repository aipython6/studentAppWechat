<template>
	<!-- 个人中心 -->
	<view class="container">
		<userinfo :userinfo="user" />
		<menuList />
		<view style="margin-top: 15rpx; padding: 0 25rpx;" v-if="hasLogin">
			<button @click="showModal" type="warn">注销账户</button>
		</view>
		<u-modal
		:show="show"
		:closeOnClickOverlay="true"
		:showCancelButton="true"
		title="注销账户后将删除所有学习信息,是否继续?"
		@confirm="logout(user.openid)"
		@cancel="cancelModal"
		@close="cancelModal" />
	</view>
</template>

<script>
	import userinfo from '../../components/myComponents/home/userinfo.vue'
	import menuList from '../../components/myComponents/home/menuList.vue'
	import { logout } from '@/api/auth/auth'
	import { mapGetters } from 'vuex'
	export default {
		components: { userinfo, menuList },
		data() {
			return {
				show: false
			}
		},
		computed: {
			...mapGetters(['user', 'hasLogin'])
		},
		methods: {
			showModal() {
				this.show = true
			},
			logout(openid) {
				logout({ openid: openid }).then(res => {})
			},
			cancelModal() {
				this.show = false
			}
		}
	}
</script>