import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export function useI18nComposable() {
    const { locale, t } = useI18n()
    const currentLocale = ref(locale.value)

    const locales = [
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' }
    ]

    const switchLanguage = (lang) => {
        locale.value = lang
        currentLocale.value = lang
        localStorage.setItem('preferred-language', lang)
    }

    onMounted(() => {
        const savedLang = localStorage.getItem('preferred-language')
        const browserLang = navigator.language.split('-')[0]

        if (savedLang) {
            switchLanguage(savedLang)
        } else if (['de', 'en', 'fr'].includes(browserLang)) {
            switchLanguage(browserLang)
        }
    })

    return {
        currentLocale,
        locales,
        switchLanguage,
        t
    }
}