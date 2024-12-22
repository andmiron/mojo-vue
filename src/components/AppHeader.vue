<template>
  <n-layout-header
    bordered
    class="flex flex-row items-center justify-around p-5 fixed top-0 left-0 w-full z-10 h-20"
  >
    <n-space>
      <n-menu :options="menuOptions" mode="horizontal" class="flex flex-1 text-xl" />
    </n-space>
  </n-layout-header>
  <ThemeToggle />
</template>

<script setup>
import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { NH1 } from 'naive-ui'
import ThemeToggle from '@/components/ThemeToggle.vue'

function renderMenuItem(routeName, routeKey, menuItemChildren) {
  return {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: routeName,
          },
        },
        { default: () => menuItemChildren },
      ),
    key: routeKey,
  }
}

const menuOptions = [
  renderMenuItem(
    'home',
    'home',
    h(NH1, { prefix: 'bar', class: 'm-0' }, () => 'Mojo'),
  ),
  renderMenuItem('login', 'login', 'Login'),
  renderMenuItem('signup', 'signup', 'Signup'),
]
</script>
