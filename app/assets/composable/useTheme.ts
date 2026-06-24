//useTheme.ts
export const useTheme = () => {
    const isDark = useState('isDarkMode', () => false)

    const toggleTheme = () => {
        isDark.value = !isDark.value

        if (isDark.value) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark').matches

        if (savedTheme == 'dark' || !savedTheme && prefersDark) {
            isDark.value = true
            document.documentElement.classList.add("dark");
        }
    }

    return {
        isDark,
        toggleTheme,
        initTheme
    }
}