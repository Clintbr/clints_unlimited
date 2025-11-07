<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <router-link to="/" class="logo">
          <div class="logo-icon">{ }</div>
          <span class="logo-text">Clints Unlimited</span>
        </router-link>

        <div class="nav-center">
          <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="nav-link"
          >
            {{ $t(`navigation.${item.name}`) }}
          </router-link>
        </div>

        <div class="nav-actions">
          <LanguageSwitcher />
          <button class="theme-toggle" @click="toggleTheme">
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue'

const isDark = ref(false)

const navigation = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'career', path: '/career' },
  { name: 'contact', path: '/contact' }
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.style.backgroundColor = '#0F172A'
    document.body.style.color = '#F9FAFB'
  } else {
    document.body.style.backgroundColor = '#F9FAFB'
    document.body.style.color = '#111827'
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDark.value = true
    document.body.style.backgroundColor = '#0F172A'
    document.body.style.color = '#F9FAFB'
  }
})
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-gray-200);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-anthrazit);
  gap: 0.5rem;
}

.logo-icon {
  color: var(--color-gradient-start);
  font-weight: bold;
}

.nav-center {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  text-decoration: none;
  color: var(--color-gray-600);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--color-gradient-start);
  background: var(--color-gray-100);
}

.nav-link.router-link-active {
  color: var(--color-gradient-start);
  background: var(--color-gray-100);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle {
  background: var(--color-gray-100);
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--color-gray-200);
}

@media (max-width: 768px) {
  .nav-center {
    display: none;
  }

  .nav {
    gap: 1rem;
  }
}
</style>