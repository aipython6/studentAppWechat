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
		@confirm="logout()"
		@cancel="cancelModal"
		@close="cancelModal" />
	</view>
</template>

<script>
	import userinfo from '../../components/myComponents/home/userinfo.vue'
	import menuList from '../../components/myComponents/home/menuList.vue'
	import { logout } from '@/api/auth/auth'
	import { getOpenid } from '@/utils/auth.js'
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
			logout() {
				logout({ openid: getOpenid() }).then(async (res) => {
					this.show = false
					await this.$store.dispatch('logout')
					const page = getCurrentPages().pop()
					page.onLoad()
				})
			},
			cancelModal() {
				this.show = false
			}
		}
	}
</script>