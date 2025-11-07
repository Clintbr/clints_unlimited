import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                colors: {
                    primary: '#111827',
                    secondary: '#F9FAFB',
                    accent: '#6366F1',
                    accent2: '#3B82F6',
                    highlight: '#FACC15',
                    success: '#10B981',
                    background: '#FFFFFF',
                    surface: '#F9FAFB'
                }
            },
            dark: {
                colors: {
                    primary: '#F9FAFB',
                    secondary: '#111827',
                    accent: '#6366F1',
                    accent2: '#3B82F6',
                    highlight: '#FACC15',
                    success: '#10B981',
                    background: '#0F172A',
                    surface: '#1E293B'
                }
            }
        }
    }
})