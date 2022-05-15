<template>
	<!-- 个人信息设置页面 -->
	<view class="container">
		<uni-section title="个人信息设置" type="line" padding></uni-section>
		<view class="userinfo">
			<u--form
					labelPosition="left"
					:model="model1"
					:rules="rules"
					ref="form1"
			>
				<u-form-item
						label="姓名"
						prop="model1.infoForm.username"
						borderBottom
						ref="username"
				>
					<u--input v-model="model1.infoForm.username" border="none"></u--input>
				</u-form-item>
				<u-form-item
						label="性别"
						prop="model1.infoForm.gender"
						borderBottom
						@click="showSex = true; hideKeyboard()"
						ref="gender"
				>
					<u--input
							v-model="model1.infoForm.gender"
							disabled
							disabledColor="#ffffff"
							placeholder="请选择性别"
							border="none"
					></u--input>
					<u-icon
							slot="right"
							name="arrow-right"
					></u-icon>
				</u-form-item>
				<u-form-item
						label="邮箱"
						prop="model1.infoForm.email"
						borderBottom
						ref="email"
				>
					<u--input v-model="model1.infoForm.email" border="none"></u--input>
				</u-form-item>
				<u-form-item
						label="年龄"
						prop="model1.infoForm.age"
						borderBottom
						ref="age"
				>
					<u--input v-model="model1.infoForm.age" border="none"></u--input>
				</u-form-item>
				<u-form-item
						label="生日"
						prop="model1.infoForm.birthday"
						borderBottom
						@click="showBirthday = true; hideKeyboard()"
						ref="birthday"
				>
					<u--input
							v-model="model1.infoForm.birthday"
							disabled
							disabledColor="#ffffff"
							placeholder="请选择生日"
							border="none"
					></u--input>
					<u-icon
							slot="right"
							name="arrow-right"
					></u-icon>
				</u-form-item>
				<u-form-item
						label="学校"
						prop="model1.infoForm.school"
						borderBottom
						ref="school"
				>
					<u--input v-model="model1.infoForm.school" border="none"></u--input>
				</u-form-item>
				<u-form-item
						label="专业"
						prop="model1.infoForm.professional"
						borderBottom
						ref="professional"
				>
					<u--input v-model="model1.infoForm.professional" border="none"></u--input>
				</u-form-item>
				<view class="btns">
					<u-button type="error" text="重置" @click="reset" />
					<u-button type="primary" text="提交" @click="submit" />
				</view>
			</u--form>
			<!-- 性别选择 -->
			<u-action-sheet
							:show="showSex"
							:actions="actions"
							title="请选择性别"
							@close="showSex = false"
							@select="sexSelect"
				/>
				<!-- 生日选择 -->
					<u-datetime-picker
					:minDate="1606352522"
					:maxDate="1786778555000"
					:show="showBirthday"
					@close="showBirthday = false"
					@cancel="showBirthday = false"
					@confirm="birthdaySelect"
					mode="date" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showSex: false,
				actions: [{ name: '男'},{name: '女'}],
				showBirthday: false,
				model1: {
					infoForm: {
						username: '',
						age: undefined,
						gender: '',
						birthday: '',
						school: '',
						professional: '',
						email: '',
						avatar: ''
					}
				},
				rules: {
					'infoForm.username': { type: 'string', required: true, message: '请填写姓名', trigger: ['blur', 'change'] },
					'infoForm.gender': { type: 'string', required: true, message: '请选择性别', trigger: ['blur', 'change'] },
					'infoForm.age': { type: 'string', required: true, message: '请输入年龄', trigger: ['blur', 'change'] },
					'infoForm.email': { type: 'email', required: true, message: '请输入邮箱', trigger: ['blur', 'change'] },
					'infoForm.birthday': { type: 'string', required: true, message: '请选择生日', trigger: ['change'] },
					'infoForm.school': { type: 'string', required: true, message: '请选择生日', trigger: ['blur', 'change'] },
					'infoForm.professional': { type: 'string', required: true, message: '请选择生日', trigger: ['blur', 'change'] },
				},
			}
		},
		methods: {
			sexSelect(e) {
						this.model1.infoForm.gender = e.name
						this.$refs.form1.validateField('infoForm.gender')
					},
				hideKeyboard(e) {
					// console.log(e);
				},
				birthdaySelect(e) {
					const timeFormat = uni.$u.timeFormat
					this.model1.infoForm.birthday = timeFormat(e.value, 'yyyy-mm-dd')
					this.showBirthday = false
				},
				reset() {
					this.model1.infoForm = {
						username: '',
						age: undefined,
						gender: '',
						birthday: '',
						school: '',
						professional: '',
						email: '',
						avatar: ''
					}
				},
				submit() {
					const data = this.model1.infoForm
					const that = this
					uni.request({
						url: 'http://localhost:3000/student/infoAdd',
						method: 'POST',
						data: data
					})
				}
				
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 0 10rpx;
		
		.btns {
			margin: 10rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
