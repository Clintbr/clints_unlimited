<template>
  <v-btn
      icon
      variant="text"
      color="primary"
      @click="theme.toggleTheme"
      class="theme-toggle"
      :title="$t('theme.toggle')"
  >
    <v-icon v-if="theme.currentTheme === 'dark'">mdi-weather-sunny</v-icon>
    <v-icon v-else>mdi-weather-night</v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'

const theme = useTheme()
</script>

<style scoped>
.theme-toggle {
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  transform: rotate(15deg);
}
</style>