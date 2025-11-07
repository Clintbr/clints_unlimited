<template>
  <div class="career">
    <!-- Hero Section -->
    <section class="career-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-text">{{ $t('career.hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('career.hero.subtitle') }}</p>
          <p class="hero-description">{{ $t('career.hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Why Work With Me -->
    <section class="benefits section">
      <div class="container">
        <h2 class="section-title">{{ $t('career.benefits.title') }}</h2>
        <div class="benefits-grid">
          <div v-for="benefit in benefits" :key="benefit.id" class="benefit-card card">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h3>{{ $t(`career.benefits.list.${benefit.id}.title`) }}</h3>
            <p>{{ $t(`career.benefits.list.${benefit.id}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaboration Models -->
    <section class="models section">
      <div class="container">
        <h2 class="section-title">{{ $t('career.models.title') }}</h2>
        <div class="models-grid">
          <div v-for="model in collaborationModels" :key="model.id" class="model-card card">
            <div class="model-header">
              <div class="model-icon">{{ model.icon }}</div>
              <h3>{{ $t(`career.models.list.${model.id}.title`) }}</h3>
              <div class="model-badge">{{ $t(`career.models.list.${model.id}.badge`) }}</div>
            </div>
            <p class="model-description">{{ $t(`career.models.list.${model.id}.description`) }}</p>
            <ul class="model-features">
              <li v-for="feature in model.features" :key="feature">
                {{ $t(`career.models.list.${model.id}.features.${feature}`) }}
              </li>
            </ul>
            <div class="model-footer">
              <span class="model-price">{{ $t(`career.models.list.${model.id}.price`) }}</span>

              <button v-if="model.id !== 'freelance'" class="btn btn-primary" @click="apply()">
                {{ $t('career.models.apply') }}
              </button>
              <button v-else class="btn btn-primary" @click="contactAboutModel(model.id)">
                {{ $t('career.models.contact') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process section">
      <div class="container">
        <h2 class="section-title">{{ $t('career.process.title') }}</h2>
        <br>
        <div class="process-steps">
          <div v-for="step in processSteps" :key="step.id" class="process-step">
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <h3>{{ $t(`career.process.steps.${step.id}.title`) }}</h3>
              <p>{{ $t(`career.process.steps.${step.id}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies & Stack -->
    <section class="tech-stack section">
      <div class="container">
        <h2 class="section-title">{{ $t('career.techstack.title') }}</h2>
        <div class="tech-categories">
          <div v-for="category in techCategories" :key="category.name" class="tech-category card">
            <h3>{{ $t(`career.techstack.categories.${category.name}`) }}</h3>
            <div class="tech-items">
              <div v-for="tech in category.technologies" :key="tech" class="tech-item">
                <span class="tech-name">{{ tech }}</span>
                <div class="tech-level">
                  <div class="level-dots">
                    <span
                        v-for="n in 5"
                        :key="n"
                        class="dot"
                        :class="{ active: n <= getTechLevel(tech) }"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials section">
      <div class="container">
        <h2 class="section-title">{{ $t('career.testimonials.title') }}</h2>
        <div class="testimonials-grid">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card card">
            <div class="testimonial-content">
              <p>"{{ $t(`career.testimonials.list.${testimonial.id}.quote`) }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div class="author-info">
                <strong>{{ $t(`career.testimonials.list.${testimonial.id}.name`) }}</strong>
                <span>{{ $t(`career.testimonials.list.${testimonial.id}.position`) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="career-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ $t('career.cta.title') }}</h2>
          <p>{{ $t('career.cta.description') }}</p>
          <div class="cta-actions">
            <button class="btn btn-primary" @click="$router.push('/contact')">
              {{ $t('career.cta.primary') }}
            </button>
            <button class="btn btn-secondary">
              Clints Unlimited
              <!--{{ $t('career.cta.secondary') }} -->
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from "@/router/index.js";

const benefits = ref([
  { id: 'quality', icon: '🎯' },
  { id: 'communication', icon: '💬' },
  { id: 'reliability', icon: '⏰' },
  { id: 'innovation', icon: '🚀' }
])

const collaborationModels = ref([
  {
    id: 'freelance',
    icon: '💼',
    features: ['scope', 'timeline', 'support', 'revisions']
  },
  {
    id: 'contract',
    icon: '📝',
    features: ['duration', 'availability', 'team', 'flexibility']
  },
  {
    id: 'consulting',
    icon: '💡',
    features: ['strategy', 'architecture', 'review', 'mentoring']
  }
])

const processSteps = ref([
  { id: 'discovery', number: '01' },
  { id: 'planning', number: '02' },
  { id: 'development', number: '03' },
  { id: 'delivery', number: '04' }
])

const techCategories = ref([
  {
    name: 'frontend',
    technologies: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vuetify']
  },
  {
    name: 'backend',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    name: 'tools',
    technologies: ['Git', 'Docker', 'AWS', 'Vite', 'Jest']
  }
])

const testimonials = ref([
  { id: 'client1', avatar: '👨‍💼' },
  { id: 'client2', avatar: '👩‍💻' },
  { id: 'client3', avatar: '🧑‍💼' }
])

const getTechLevel = (tech) => {
  const levels = {
    'Vue.js': 5, 'React': 4, 'TypeScript': 5, 'Tailwind CSS': 5, 'Vuetify': 4,
    'Node.js': 5, 'Python': 3, 'PostgreSQL': 4, 'MongoDB': 4, 'Redis': 3,
    'Git': 5, 'Docker': 4, 'AWS': 3, 'Vite': 5, 'Jest': 4
  }
  return levels[tech] || 3
}

const apply = () => {router.push('/apply')}

const contactAboutModel = (modelId) => {
  // Hier könnte man zum Contact-Formular mit vorausgefülltem Betreff navigieren
  router.push(`/contact?subject=collaboration-${modelId}`)
  console.log('Contact about model:', modelId)
  // Oder: router.push(`/contact?subject=collaboration-${modelId}`)
}

const downloadCV = () => {
  // Simuliere CV-Download
  alert('CV up & download functionality would be implemented here')
  // In der Praxis: window.open('/cv.pdf', '_blank')
}
</script>

<style scoped>
.career-hero {
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

/* Benefits Section */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.benefit-card {
  text-align: center;
  padding: 2.5rem 2rem;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.benefit-card h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.benefit-card p {
  color: var(--color-gray-600);
  line-height: 1.6;
}

/* Collaboration Models */
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.model-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.model-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.model-icon {
  font-size: 2rem;
}

.model-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-anthrazit);
  flex: 1;
  margin: 0;
}

.model-badge {
  background: var(--color-gradient-start);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.model-description {
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.model-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.model-features li {
  padding: 0.5rem 0;
  color: var(--color-gray-600);
  position: relative;
  padding-left: 1.5rem;
}

.model-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-mint);
  font-weight: bold;
}

.model-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.model-price {
  font-weight: 600;
  color: var(--color-anthrazit);
  font-size: 1.1rem;
}

/* Process Section */
.process-steps {
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 25px;
  top: 60px;
  bottom: -3rem;
  width: 2px;
  background: var(--color-gray-300);
}

.step-number {
  background: linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end));
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.step-content {
  flex: 1;
  padding-top: 0.5rem;
}

.step-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-anthrazit);
}

.step-content p {
  color: var(--color-gray-600);
  line-height: 1.6;
}

/* Tech Stack */
.tech-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tech-category {
  padding: 2rem;
}

.tech-category h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-gradient-start);
  text-align: center;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-gray-200);
}

.tech-item:last-child {
  border-bottom: none;
}

.tech-name {
  font-weight: 500;
  color: var(--color-anthrazit);
}

.tech-level {
  display: flex;
  align-items: center;
}

.level-dots {
  display: flex;
  gap: 0.25rem;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gray-300);
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--color-gradient-start);
  transform: scale(1.2);
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  padding: 2rem;
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.testimonial-content p {
  font-style: italic;
  color: var(--color-gray-600);
  line-height: 1.6;
  margin: 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  font-size: 2rem;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  color: var(--color-anthrazit);
  font-weight: 600;
}

.author-info span {
  color: var(--color-gray-600);
  font-size: 0.875rem;
}

/* CTA Section */
.career-cta {
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

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .process-step {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .process-step:not(:last-child)::after {
    display: none;
  }

  .model-footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .tech-item {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>