<template>
  <n-config-provider :theme="theme">
    <n-layout class="h-screen flex flex-col">
      <n-layout-content class="pt-20 pb-10 h-screen overflow-auto">
        <AppHeader />
        <n-message-provider>
          <router-view />
        </n-message-provider>
        <AppFooter />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import useTheme from './composables/useTheme.js'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const { theme } = useTheme()
</script>
