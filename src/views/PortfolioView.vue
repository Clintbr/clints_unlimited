<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="portfolio-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-text">{{ $t('portfolio.hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('portfolio.hero.subtitle') }}</p>
          <p class="hero-description">{{ $t('portfolio.hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filters section">
      <div class="container">
        <div class="filter-container">
          <button
              v-for="filter in filters"
              :key="filter"
              class="filter-btn"
              :class="{ active: activeFilter === filter }"
              @click="setFilter(filter)"
          >
            {{ $t(`portfolio.filters.${filter}`) }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects section">
      <div class="container">
        <div class="projects-grid">
          <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="project-card card"
          >
            <div class="project-image">
              <div class="image-placeholder">
                <span class="project-icon">{{ project.icon }}</span>
              </div>
              <div class="project-overlay">
                <div class="project-actions">
                  <button class="action-btn" @click="viewProject(project)">
                    <span>👁️</span>
                    {{ $t('portfolio.actions.view') }}
                  </button>
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="action-btn">
                    <span>🚀</span>
                    {{ $t('portfolio.actions.demo') }}
                  </a>
                </div>
              </div>
            </div>

            <div class="project-content">
              <div class="project-header">
                <h3>{{ $t(`portfolio.projects.${project.id}.title`) }}</h3>
                <div class="project-category">{{ $t(`portfolio.categories.${project.category}`) }}</div>
              </div>

              <p class="project-description">
                {{ $t(`portfolio.projects.${project.id}.description`) }}
              </p>

              <div class="project-tech">
                <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="project-features">
                <h4>{{ $t('portfolio.features') }}</h4>
                <ul>
                  <li v-for="feature in project.features" :key="feature">
                    {{ $t(`portfolio.projects.${project.id}.features.${feature}`) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="portfolio-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('portfolio.cta.title') }}</h2>
          <p>{{ $t('portfolio.cta.description') }}</p>
          <button class="btn btn-primary" @click="$router.push('/contact')">
            {{ $t('portfolio.cta.button') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filters = ['all', 'web', 'mobile', 'fullstack', 'opensource']

const projects = ref([
  {
    id: 'ecommerce',
    category: 'web',
    icon: '🛒',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['cart', 'payments', 'admin', 'responsive'],
    demoUrl: 'https://demo.example.com'
  },
  {
    id: 'saas',
    category: 'fullstack',
    icon: '📊',
    technologies: ['React', 'Python', 'PostgreSQL', 'AWS'],
    features: ['dashboard', 'reports', 'multi_tenant', 'api'],
    demoUrl: 'https://saas.demo.com'
  },
  {
    id: 'mobile_app',
    category: 'mobile',
    icon: '📱',
    technologies: ['React Native', 'Firebase', 'Redux', 'iOS/Android'],
    features: ['offline', 'notifications', 'maps', 'social'],
    demoUrl: null
  },
  {
    id: 'dashboard',
    category: 'web',
    icon: '🎛️',
    technologies: ['Vue.js', 'TypeScript', 'D3.js', 'Express'],
    features: ['realtime', 'charts', 'export', 'customizable'],
    demoUrl: 'https://dashboard.demo.com'
  },
  {
    id: 'api_platform',
    category: 'fullstack',
    icon: '🔗',
    technologies: ['Node.js', 'GraphQL', 'Docker', 'Redis'],
    features: ['graphql', 'caching', 'docs', 'monitoring'],
    demoUrl: null
  },
  {
    id: 'ui_library',
    category: 'opensource',
    icon: '🎨',
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Jest'],
    features: ['components', 'theming', 'a11y', 'testing'],
    demoUrl: 'https://github.com/username/ui-library'
  }
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === activeFilter.value)
})

const setFilter = (filter) => {
  activeFilter.value = filter
}

const viewProject = (project) => {
  // Hier könnte man ein Modal oder eine Detailseite öffnen
  console.log('View project:', project)
}
</script>

<style scoped>
.portfolio-hero {
  padding: 6rem 0 4rem;
  text-align: center;
  background: linear-gradient(135deg, var(--color-offwhite) 0%, var(--color-gray-100) 100%);
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-gradient-start);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--color-gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Filter Section */
.filters {
  padding: 2rem 0;
  background: white;
  border-bottom: 1px solid var(--color-gray-200);
}

.filter-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--color-gray-300);
  background: white;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  color: var(--color-gray-600);
}

.filter-btn:hover {
  border-color: var(--color-gradient-start);
  color: var(--color-gradient-start);
  transform: translateY(-2px);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  border-color: transparent;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.project-card {
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon {
  font-size: 4rem;
  opacity: 0.8;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: none;
  border-radius: 6px;
  color: var(--color-anthrazit);
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--color-gradient-start);
  color: white;
  transform: translateY(-2px);
}

.project-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: between;
  align-items: start;
  margin-bottom: 1rem;
}

.project-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-anthrazit);
  margin: 0;
  flex: 1;
}

.project-category {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-description {
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-features h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-anthrazit);
}

.project-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-features li {
  padding: 0.25rem 0;
  color: var(--color-gray-600);
  position: relative;
  padding-left: 1rem;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-mint);
  font-weight: bold;
}

/* CTA Section */
.portfolio-cta {
  background: linear-gradient(135deg, var(--color-anthrazit) 0%, var(--color-gray-800) 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .filter-container {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .project-actions {
    flex-direction: column;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>