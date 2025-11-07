<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">{{ $t('hero.title') }}</span>
          </h1>
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          <p class="hero-description">{{ $t('hero.description') }}</p>
          <div class="hero-actions">
            <button class="btn btn-primary" @click="$router.push('/contact')">
              {{ $t('hero.cta.primary') }}
            </button>
            <button class="btn btn-secondary" @click="$router.push('/portfolio')">
              {{ $t('hero.cta.secondary') }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills">
      <div class="container">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <div class="skills-grid">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category card">
            <h3>{{ $t(`skills.categories.${category.name}`) }}</h3>
            <div class="skill-items">
              <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span>{{ $t(`skills.technologies.${skill.name}`) }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services">
      <div class="container">
        <h2 class="section-title">{{ $t('services.title') }}</h2>
        <div class="services-grid">
          <div v-for="service in services" :key="service.name" class="service-card card">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ $t(`services.${service.name}`) }}</h3>
            <p>{{ $t(`services.${service.name}_desc`) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    name: 'frontend',
    skills: [
      { name: 'vuejs', level: 90 },
      { name: 'react', level: 80 },
      { name: 'typescript', level: 85 },
      { name: 'css', level: 95 }
    ]
  },
  {
    name: 'backend',
    skills: [
      { name: 'nodejs', level: 85 },
      { name: 'python', level: 70 },
      { name: 'postgresql', level: 80 },
      { name: 'rest', level: 90 }
    ]
  },
  {
    name: 'tools',
    skills: [
      { name: 'docker', level: 80 },
      { name: 'aws', level: 75 },
      { name: 'git', level: 95 },
      { name: 'cicd', level: 85 }
    ]
  }
])

const services = ref([
  { name: 'webdev', icon: '🚀' },
  { name: 'consulting', icon: '💡' },
  { name: 'mvp', icon: '⚡' },
  { name: 'codereview', icon: '🔍' }
])
</script>

<style scoped>
.hero {
  padding: 8rem 0;
  background: linear-gradient(135deg, var(--color-offwhite) 0%, var(--color-gray-100) 100%);
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-gradient-start);
  font-weight: 600;
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--color-gray-600);
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Skills Section */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-anthrazit);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-gradient-start);
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-header {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-header span:first-child {
  font-weight: 600;
  color: var(--color-anthrazit);
}

.skill-level {
  font-size: 0.875rem;
  color: var(--color-gray-600);
}

.skill-bar {
  background: var(--color-gray-200);
  border-radius: 10px;
  height: 8px;
  overflow: hidden;
}

.skill-progress {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
}

/* Services Section */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.service-card p {
  color: var(--color-gray-600);
  line-height: 1.6;
  flex: 1;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
  }

  .skills-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>