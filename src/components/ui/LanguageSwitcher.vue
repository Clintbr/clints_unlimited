<template>
  <div class="language-switcher">
    <button
        v-for="locale in locales"
        :key="locale.code"
        class="language-btn"
        :class="{ active: currentLocale === locale.code }"
        @click="switchLanguage(locale.code)"
        :title="locale.name"
    >
      {{ locale.flag }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const locales = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
]

const currentLocale = locale

const switchLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('preferred-language', lang)
}
</script>

<style scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 8px;
  border: 1px solid var(--color-gray-200);
}

.language-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.language-btn:hover {
  background: var(--color-gray-100);
}

.language-btn.active {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  color: white;
}
</style>