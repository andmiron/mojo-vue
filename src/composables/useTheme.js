import { computed } from 'vue'
import { useThemeStore } from '@/stores/themeStore.js'
import { darkTheme, lightTheme } from 'naive-ui'

const useTheme = () => {
  const themeStore = useThemeStore()
  const isThemeDark = computed(() => themeStore.isDark)
  const theme = computed(() => (isThemeDark.value ? darkTheme : lightTheme))

  const toggleTheme = themeStore.toggleTheme

  return {
    theme,
    isThemeDark,
    toggleTheme,
  }
}

export default useTheme
