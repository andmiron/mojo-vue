<template>
  <n-message-provider>
    <n-flex
      vertical
      class="max-w-md w-full space-y-8 p-8 rounded-2xl shadow-auth-form h-full justify-self-center"
    >
      <n-h2 class="self-center"> Login to your account </n-h2>

      <n-form ref="formRef" :model="formData" :rules="rules" :size="'large'">
        <n-form-item label="Email" path="email" required>
          <n-input
            v-model:value="formData.email"
            placeholder="Enter your email"
            autocomplete="email"
            autofocus
            clearable
          />
        </n-form-item>

        <n-form-item label="Password" path="password" required>
          <n-input
            type="password"
            v-model:value="formData.password"
            placeholder="Enter your password"
            show-password-on="click"
            autocomplete="current-password"
            :minlength="6"
          />
        </n-form-item>
      </n-form>
      <n-button type="primary" block @click="$emit('login')" class="rounded-xl"> Login </n-button>
      <n-p class="self-center">
        Do not have an account?
        <router-link to="signup">
          <n-text type="success" class="hover:text-green-700"> Sign up </n-text>
        </router-link>
      </n-p>
    </n-flex>
  </n-message-provider>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const formRef = ref(null)
const formData = ref({
  email: '',
  password: '',
})

const rules = {
  email: {
    required: true,
    message: 'Please provide a valid email',
    trigger: 'input',
  },
  password: {
    required: true,
    message: 'Please provide a password',
    trigger: 'input',
  },
}
</script>
