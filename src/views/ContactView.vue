<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-text">{{ $t('contact.hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('contact.hero.subtitle') }}</p>
          <p class="hero-description">{{ $t('contact.hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-container card">
            <h2>{{ $t('contact.form.title') }}</h2>
            <p class="form-description">{{ $t('contact.form.description') }}</p>

            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">{{ $t('contact.form.fields.name') }} *</label>
                  <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      required
                      :placeholder="$t('contact.form.placeholders.name')"
                  >
                </div>
                <div class="form-group">
                  <label for="email">{{ $t('contact.form.fields.email') }} *</label>
                  <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      required
                      :placeholder="$t('contact.form.placeholders.email')"
                  >
                </div>
              </div>

              <div class="form-group">
                <label for="subject">{{ $t('contact.form.fields.subject') }} *</label>
                <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    :placeholder="$t('contact.form.placeholders.subject')"
                >
              </div>

              <div class="form-group">
                <label for="budget">{{ $t('contact.form.fields.budget') }}</label>
                <select id="budget" v-model="form.budget">
                  <option value="">{{ $t('contact.form.placeholders.budget') }}</option>
                  <option value="under-5k">Under 5.000€</option>
                  <option value="5k-15k">5.000€ - 15.000€</option>
                  <option value="15k-30k">15.000€ - 30.000€</option>
                  <option value="30k-plus">30.000€+</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">{{ $t('contact.form.fields.message') }} *</label>
                <textarea
                    id="message"
                    v-model="form.message"
                    rows="6"
                    required
                    :placeholder="$t('contact.form.placeholders.message')"
                ></textarea>
              </div>

              <button
                  type="submit"
                  class="btn btn-primary submit-btn"
                  :disabled="loading"
              >
                <span v-if="loading" class="loading-spinner"></span>
                {{ loading ? $t('contact.form.sending') : $t('contact.form.submit') }}
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card card">
              <h3>{{ $t('contact.info.title') }}</h3>
              <p class="info-description">{{ $t('contact.info.description') }}</p>

              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">📧</div>
                  <div class="method-content">
                    <h4>{{ $t('contact.info.email.title') }}</h4>
                    <a href="mailto:hello@devportfolio.com">hello@devportfolio.com</a>
                    <p>{{ $t('contact.info.email.description') }}</p>
                  </div>
                </div>

                  <div class="contact-method">
                    <div class="method-icon">📞</div>
                    <div class="method-content">
                      <h4>{{ $t('contact.info.tel.title') }}</h4>
                      +49 178 2103854
                      <p>{{ $t('contact.info.tel.description') }}</p>
                    </div>
                  </div>

                <!--<div class="contact-method">
                  <div class="method-icon">💼</div>
                  <div class="method-content">
                    <h4>{{ $t('contact.info.linkedin.title') }}</h4>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn Profile</a>
                    <p>{{ $t('contact.info.linkedin.description') }}</p>
                  </div>
                </div> -->

                <div class="contact-method">
                  <div class="method-icon">🐙</div>
                  <div class="method-content">
                    <h4>{{ $t('contact.info.github.title') }}</h4>
                    <a href="https://github.com/yourusername" target="_blank">GitHub Profile</a>
                    <p>{{ $t('contact.info.github.description') }}</p>
                  </div>
                </div>

                <div class="contact-method">
                  <div class="method-icon">📅</div>
                  <div class="method-content">
                    <h4>{{ $t('contact.info.calendar.title') }}</h4>
                    <a href="https://calendly.com/yourname" target="_blank">{{ $t('contact.info.calendar.link') }}</a>
                    <p>{{ $t('contact.info.calendar.description') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ Section -->
            <div class="faq-card card">
              <h3>{{ $t('contact.faq.title') }}</h3>
              <div class="faq-list">
                <div v-for="faq in faqs" :key="faq.id" class="faq-item">
                  <button class="faq-question" @click="toggleFaq(faq.id)">
                    <span>{{ $t(`contact.faq.questions.${faq.id}.question`) }}</span>
                    <span class="faq-icon">{{ activeFaq === faq.id ? '−' : '+' }}</span>
                  </button>
                  <div v-if="activeFaq === faq.id" class="faq-answer">
                    <p>{{ $t(`contact.faq.questions.${faq.id}.answer`) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loading = ref(false)
const activeFaq = ref(null)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  budget: '',
  message: ''
})

const faqs = ref([
  { id: 'response_time' },
  { id: 'project_start' },
  { id: 'technologies' },
  { id: 'pricing' }
])

const toggleFaq = (id) => {
  activeFaq.value = activeFaq.value === id ? null : id
}

const submitForm = async () => {
  loading.value = true

  // Simuliere Formularabschickung
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Hier würde normalerweise die API-Integration stehen
  console.log('Form submitted:', form)

  // Formular zurücksetzen
  Object.keys(form).forEach(key => {
    form[key] = ''
  })

  loading.value = false

  // Erfolgsmeldung anzeigen
  alert('Thank you for your message! I will get back to you soon.')
}
</script>

<style scoped>
.contact-hero {
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-form-container {
  padding: 2.5rem;
}

.contact-form-container h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-anthrazit);
}

.form-description {
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* Form Styles */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: var(--color-anthrazit);
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 2px solid;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
  color: black;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-gradient-start);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  margin-top: 1rem;
  position: relative;
  min-height: 50px;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card,
.faq-card {
  padding: 2rem;
}

.info-card h3,
.faq-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.info-description {
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  padding: 0.5rem;
  background: var(--color-gray-100);
  border-radius: 8px;
  min-width: 50px;
  text-align: center;
}

.method-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-anthrazit);
}

.method-content a {
  color: var(--color-gradient-start);
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
}

.method-content a:hover {
  text-decoration: underline;
}

.method-content p {
  color: var(--color-gray-600);
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

/* FAQ Styles */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-item {
  border: 1px solid var(--color-gray-200);
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1rem 1.5rem;
  background: white;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: var(--color-gray-100);
}

.faq-icon {
  font-size: 1.25rem;
  font-weight: 300;
  color: var(--color-gradient-start);
}

.faq-answer {
  padding: 0 1.5rem 1rem;
  background: white;
}

.faq-answer p {
  color: var(--color-gray-600);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-form-container,
  .info-card,
  .faq-card {
    padding: 1.5rem;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .method-icon {
    align-self: center;
  }
}
</style>