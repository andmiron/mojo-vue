<template>
  <n-button @click="toggleTheme" size="large" circle class="absolute top-5 right-5 z-20">
    {{ isThemeDark ? '🌙' : '☀️' }}
  </n-button>
</template>

<script setup>
import useTheme from '../composables/useTheme.js'
const { toggleTheme, isThemeDark } = useTheme()
</script>
