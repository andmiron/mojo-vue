<template>
  <n-message-provider>
    <n-flex
      vertical
      class="max-w-md w-full space-y-8 p-8 rounded-2xl shadow-auth-form h-full justify-self-center"
    >
      <n-h2 class="self-center"> Create a new account </n-h2>

      <n-form ref="formRef" :model="formData" :rules="rules" :size="'large'">
        <n-form-item label="Email" path="email" required>
          <n-input v-model:value="formData.email" placeholder="Input email" autofocus clearable />
        </n-form-item>

        <n-form-item label="Password" path="password" required>
          <n-input
            type="password"
            v-model:value="formData.password"
            placeholder="Input Password"
            show-password-on="click"
            :minlength="8"
          />
        </n-form-item>

        <n-form-item label="Confirm password" path="passwordConfirm" required>
          <n-input
            type="password"
            v-model:value="formData.passwordConfirm"
            placeholder="Confirm password"
            show-password-on="click"
            :minlength="8"
          />
        </n-form-item>
      </n-form>
      <n-button type="primary" block @click="handleSignup" class="rounded-xl"> Signup </n-button>
      <n-p class="self-center">
        Already have an account?
        <router-link to="login">
          <n-text type="success" class="hover:text-green-700">Log in</n-text>
        </router-link>
      </n-p>
    </n-flex>
  </n-message-provider>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useMessage } from 'naive-ui'

const message = useMessage()
const formRef = ref(null)

const formData = ref({
  email: '',
  password: '',
  passwordConfirm: '',
})

const rules = {
  email: {
    required: true,
    trigger: 'blur',
    validator(rule, value) {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? new Error('Please enter a valid email address')
        : true
    },
  },
  password: {
    required: true,
    trigger: 'blur',
    validator(rule, value) {
      return value.length < 8 ? new Error('Must be at least 8 characters') : true
    },
  },
  passwordConfirm: {
    required: true,
    trigger: 'blur',
    validator(rule, value) {
      return value !== formData.value.password ? new Error('Passwords must match') : true
    },
  },
}

async function handleSignup(e) {
  e.preventDefault()
}
</script>
