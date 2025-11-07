import { ref, onMounted } from 'vue'

export function useTheme() {
    const currentTheme = ref('dark')

    const toggleTheme = () => {
        currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
        localStorage.setItem('preferred-theme', currentTheme.value)
    }

    onMounted(() => {
        const savedTheme = localStorage.getItem('preferred-theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (savedTheme) {
            currentTheme.value = savedTheme
        } else if (systemPrefersDark) {
            currentTheme.value = 'dark'
        }
    })

    return {
        currentTheme,
        toggleTheme
    }
}