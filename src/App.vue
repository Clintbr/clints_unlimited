<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<style>
:root {
  /* Farbpalette  */
  --color-anthrazit: #111827;
  --color-offwhite: #F9FAFB;
  --color-gradient-start: #6366F1;
  --color-gradient-end: #3B82F6;
  --color-highlight: #FACC15;
  --color-mint: #10B981;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-600: #4B5563;
  --color-gray-800: #1F2937;

  /* Typografie */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  background-color: var(--color-offwhite);
  color: var(--color-anthrazit);
  line-height: 1.6;
  font-size: 16px;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Utility Classes */
.gradient-text {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.gradient-bg {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section {
  padding: 5rem 0;
}

.text-center {
  text-align: center;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: inherit;
  gap: 0.5rem;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  background: transparent;
  color: var(--color-anthrazit);
  border: 2px solid var(--color-anthrazit);
}

.btn-secondary:hover {
  background: var(--color-anthrazit);
  color: white;
  transform: translateY(-2px);
}

/* Card Styles */
.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--color-gray-200);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>