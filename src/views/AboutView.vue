<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero section">
      <div class="container">
        <div class="about-hero-content">
          <div class="about-image">
            <div class="image-placeholder">
              <span class="image-icon">👨‍💻</span>
            </div>
          </div>
          <div class="about-intro">
            <h1 class="gradient-text">{{ $t('about.hero.title') }}</h1>
            <p class="about-subtitle">{{ $t('about.hero.subtitle') }}</p>
            <p class="about-description">{{ $t('about.hero.description') }}</p>
            <div class="about-stats">
              <div class="stat">
                <div class="stat-number">50+</div>
                <div class="stat-label">{{ $t('about.stats.projects') }}</div>
              </div>
              <div class="stat">
                <div class="stat-number">3+</div>
                <div class="stat-label">{{ $t('about.stats.experience') }}</div>
              </div>
              <div class="stat">
                <div class="stat-number">30+</div>
                <div class="stat-label">{{ $t('about.stats.clients') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="philosophy section">
      <div class="container">
        <h2 class="section-title">{{ $t('about.philosophy.title') }}</h2>
        <div class="philosophy-grid">
          <div v-for="principle in principles" :key="principle.id" class="principle-card card">
            <div class="principle-icon">{{ principle.icon }}</div>
            <h3>{{ $t(`about.philosophy.principles.${principle.id}.title`) }}</h3>
            <p>{{ $t(`about.philosophy.principles.${principle.id}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Journey Section -->
    <section class="journey section">
      <div class="container">
        <h2 class="section-title">{{ $t('about.journey.title') }}</h2>
        <div class="timeline">
          <div v-for="milestone in milestones" :key="milestone.year" class="timeline-item">
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content card">
              <h3>{{ $t(`about.journey.milestones.${milestone.id}.title`) }}</h3>
              <p>{{ $t(`about.journey.milestones.${milestone.id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values section">
      <div class="container">
        <h2 class="section-title">{{ $t('about.values.title') }}</h2>
        <div class="values-grid">
          <div v-for="value in values" :key="value.id" class="value-item card">
            <h3>{{ $t(`about.values.list.${value.id}.title`) }}</h3>
            <p>{{ $t(`about.values.list.${value.id}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="about-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('about.cta.title') }}</h2>
          <p>{{ $t('about.cta.description') }}</p>
          <button class="btn btn-primary" @click="$router.push('/contact')">
            {{ $t('about.cta.button') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const principles = ref([
  { id: 'quality', icon: '🎯' },
  { id: 'simplicity', icon: '✨' },
  { id: 'innovation', icon: '🚀' },
  { id: 'collaboration', icon: '🤝' }
])

const milestones = ref([
  { id: 'start', year: '2022' },
  { id: 'growth', year: '2023' },
  { id: 'specialization', year: '2024' },
  { id: 'present', year: '2025' }
])

const values = ref([
  { id: 'excellence' },
  { id: 'transparency' },
  { id: 'innovation' },
  { id: 'reliability' }
])
</script>

<style scoped>
.about-hero {
  padding: 6rem 0 4rem;
}

.about-hero-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.image-icon {
  font-size: 6rem;
}

.about-intro h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.about-subtitle {
  font-size: 1.5rem;
  color: var(--color-gradient-start);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: 1.2rem;
  color: var(--color-gray-600);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.about-stats {
  display: flex;
  gap: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-gradient-start);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-gray-600);
  font-weight: 500;
}

/* Philosophy Section */
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.principle-card {
  text-align: center;
  padding: 2.5rem 2rem;
}

.principle-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.principle-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.principle-card p {
  color: var(--color-gray-600);
  line-height: 1.6;
}

/* Journey Section */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-gradient-start), var(--color-gradient-end));
}

.timeline-item {
  display: flex;
  margin-bottom: 3rem;
  margin-left: 3rem;
  position: relative;
}

.timeline-year {
  width: 60px;
  font-weight: 700;
  color: var(--color-gradient-start);
  font-size: 1.1rem;
  padding-top: 0.5rem;
}

.timeline-content {
  flex: 1;
  margin-left: 2rem;
  padding: 1.5rem;
}

.timeline-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-anthrazit);
}

.timeline-content p {
  color: var(--color-gray-600);
  line-height: 1.6;
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.value-item {
  padding: 2rem;
  text-align: center;
}

.value-item h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.value-item p {
  color: var(--color-gray-600);
  line-height: 1.6;
}

/* CTA Section */
.about-cta {
  background: linear-gradient(135deg, var(--color-offwhite) 0%, var(--color-gray-100) 100%);
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.cta-content p {
  font-size: 1.2rem;
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .about-hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .image-placeholder {
    width: 200px;
    height: 200px;
  }

  .image-icon {
    font-size: 4rem;
  }

  .about-intro h1 {
    font-size: 2.5rem;
  }

  .about-stats {
    justify-content: center;
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-year {
    width: 40px;
  }

  .timeline-content {
    margin-left: 1.5rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>