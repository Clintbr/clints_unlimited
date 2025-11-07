<template>
  <div class="career">
    <!-- Hero Section -->
    <section class="career-hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="gradient-text">{{ $t('I_career.hero.title') }}</h1>
          <p class="hero-subtitle">{{ $t('I_career.hero.subtitle') }}</p>
          <p class="hero-description">{{ $t('I_career.hero.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="positions section">
      <div class="container">
        <h2 class="section-title">{{ $t('I_career.positions.title') }}</h2>
        <div class="positions-grid">
          <div
              v-for="position in positions"
              :key="position.id"
              class="position-card card"
          >
            <div class="position-header">
              <div class="position-badge" :class="position.type">
                {{ $t(`I_career.positions.types.${position.type}`) }}
              </div>
              <div class="position-meta">
                <span class="location">📍 {{ position.location }}</span>
                <span class="duration">⏱️ {{ position.duration }}</span>
              </div>
            </div>

            <h3>{{ $t(`I_career.positions.list.${position.id}.title`) }}</h3>
            <p class="position-description">
              {{ $t(`I_career.positions.list.${position.id}.description`) }}
            </p>

            <div class="position-tech">
              <span
                  v-for="tech in position.technologies"
                  :key="tech"
                  class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <div class="position-features">
              <h4>{{ $t('I_career.positions.features') }}</h4>
              <ul>
                <li v-for="feature in position.features" :key="feature">
                  {{ $t(`I_career.positions.list.${position.id}.features.${feature}`) }}
                </li>
              </ul>
            </div>

            <div class="position-actions">
              <button class="btn btn-primary" @click="openApplicationModal(position)">
                {{ $t('I_career.positions.apply') }}
              </button>
              <button class="btn btn-secondary" @click="viewPositionDetails(position.id)">
                {{ $t('I_career.positions.details') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Modal -->
    <div v-if="showApplicationModal" class="modal-overlay" @click="closeApplicationModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ $t('I_career.application.title') }}</h2>
          <button class="modal-close" @click="closeApplicationModal">×</button>
        </div>

        <form @submit.prevent="submitApplication" class="application-form">
          <div class="form-section">
            <h3>{{ $t('I_career.application.personal.title') }}</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">{{ $t('I_career.application.personal.firstName') }} *</label>
                <input
                    id="firstName"
                    v-model="application.firstName"
                    type="text"
                    required
                >
              </div>
              <div class="form-group">
                <label for="lastName">{{ $t('I_career.application.personal.lastName') }} *</label>
                <input
                    id="lastName"
                    v-model="application.lastName"
                    type="text"
                    required
                >
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="email">{{ $t('I_career.application.personal.email') }} *</label>
                <input
                    id="email"
                    v-model="application.email"
                    type="email"
                    required
                >
              </div>
              <div class="form-group">
                <label for="phone">{{ $t('I_career.application.personal.phone') }}</label>
                <input
                    id="phone"
                    v-model="application.phone"
                    type="tel"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="linkedin">{{ $t('I_career.application.personal.linkedin') }}</label>
              <input
                  id="linkedin"
                  v-model="application.linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
              >
            </div>
          </div>

          <div class="form-section">
            <h3>{{ $t('I_career.application.position.title') }}</h3>
            <div class="form-group">
              <label for="position">{{ $t('I_career.application.position.applyingFor') }} *</label>
              <input
                  id="position"
                  :value="selectedPosition ? $t(`I_career.positions.list.${selectedPosition.id}.title`) : ''"
                  type="text"
                  disabled
                  class="disabled-input"
              >
            </div>

            <div class="form-group">
              <label for="coverLetter">{{ $t('I_career.application.position.coverLetter') }} *</label>
              <textarea
                  id="coverLetter"
                  v-model="application.coverLetter"
                  rows="5"
                  required
                  :placeholder="$t('I_career.application.position.coverLetterPlaceholder')"
              ></textarea>
            </div>
          </div>

          <div class="form-section">
            <h3>{{ $t('I_career.application.documents.title') }}</h3>
            <div class="documents-upload">
              <div class="upload-group">
                <label for="resume">{{ $t('I_career.application.documents.resume') }} *</label>
                <div class="file-upload">
                  <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      @change="handleFileUpload($event, 'resume')"
                      required
                  >
                  <label for="resume" class="file-upload-label">
                    <span class="upload-icon">📄</span>
                    <span class="upload-text">
                      {{ application.documents.resume ? application.documents.resume.name : $t('I_career.application.documents.chooseFile') }}
                    </span>
                  </label>
                </div>
              </div>

              <div class="upload-group">
                <label for="portfolio">{{ $t('I_career.application.documents.portfolio') }}</label>
                <div class="file-upload">
                  <input
                      id="portfolio"
                      type="file"
                      accept=".pdf,.zip,.rar"
                      @change="handleFileUpload($event, 'portfolio')"
                  >
                  <label for="portfolio" class="file-upload-label">
                    <span class="upload-icon">🎨</span>
                    <span class="upload-text">
                      {{ application.documents.portfolio ? application.documents.portfolio.name : $t('I_career.application.documents.chooseFile') }}
                    </span>
                  </label>
                </div>
              </div>

              <div class="upload-group">
                <label for="otherDocuments">{{ $t('I_career.application.documents.other') }}</label>
                <div class="file-upload">
                  <input
                      id="otherDocuments"
                      type="file"
                      multiple
                      @change="handleFileUpload($event, 'otherDocuments')"
                  >
                  <label for="otherDocuments" class="file-upload-label">
                    <span class="upload-icon">📎</span>
                    <span class="upload-text">
                      {{ application.documents.otherDocuments.length > 0
                        ? `${application.documents.otherDocuments.length} files selected`
                        : $t('I_career.application.documents.chooseMultiple') }}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="form-section">
            <div class="form-group checkbox-group">
              <input
                  id="privacy"
                  v-model="application.privacyAccepted"
                  type="checkbox"
                  required
              >
              <label for="privacy">
                {{ $t('I_career.application.privacy') }}
              </label>
            </div>
          </div>

          <div class="form-actions">
            <button
                type="submit"
                class="btn btn-primary submit-btn"
                :disabled="loading || !application.privacyAccepted"
            >
              <span v-if="loading" class="loading-spinner"></span>
              {{ loading ? $t('I_career.application.sending') : $t('I_career.application.submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
      <div class="modal-content success-modal" @click.stop>
        <div class="success-icon">✅</div>
        <h2>{{ $t('I_career.application.success.title') }}</h2>
        <p>{{ $t('I_career.application.success.message') }}</p>
        <button class="btn btn-primary" @click="closeSuccessModal">
          {{ $t('I_career.application.success.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com'

const loading = ref(false)
const showApplicationModal = ref(false)
const showSuccessModal = ref(false)
const selectedPosition = ref(null)

const positions = ref([
  {
    id: 'frontend',
    type: 'fulltime',
    location: 'Remote',
    duration: 'Full-time',
    technologies: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: ['development', 'testing', 'collaboration', 'optimization']
  },
  {
    id: 'fullstack',
    type: 'parttime',
    location: 'Hybrid',
    duration: '6+ Months',
    technologies: ['Node.js', 'Vue.js', 'PostgreSQL', 'AWS'],
    features: ['architecture', 'api', 'deployment', 'scalability']
  },
  {
    id: 'consultant',
    type: 'contract',
    location: 'Remote',
    duration: 'Project-based',
    technologies: ['Architecture', 'Code Review', 'Mentoring'],
    features: ['review', 'strategy', 'training', 'bestpractices']
  }
])

const application = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  linkedin: '',
  coverLetter: '',
  position: '',
  documents: {
    resume: null,
    portfolio: null,
    otherDocuments: []
  },
  privacyAccepted: false
})

const openApplicationModal = (position) => {
  selectedPosition.value = position
  application.position = position.id
  showApplicationModal.value = true
}

const closeApplicationModal = () => {
  showApplicationModal.value = false
  resetApplicationForm()
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
}

const resetApplicationForm = () => {
  Object.assign(application, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    coverLetter: '',
    position: '',
    documents: {
      resume: null,
      portfolio: null,
      otherDocuments: []
    },
    privacyAccepted: false
  })
}

const handleFileUpload = (event, documentType) => {
  const files = event.target.files
  if (documentType === 'otherDocuments') {
    application.documents.otherDocuments = Array.from(files)
  } else {
    application.documents[documentType] = files[0]
  }
}

const submitApplication = async () => {
  loading.value = true

  try {
    // EmailJS Konfiguration
    const templateParams = {
      to_email: 'nguenaclintbryan@gmail.com',
      from_name: `${application.firstName} ${application.lastName}`,
      from_email: application.email,
      phone: application.phone,
      linkedin: application.linkedin,
      position: selectedPosition.value ? $t(`I_career.positions.list.${selectedPosition.value.id}.title`) : '',
      cover_letter: application.coverLetter,
      timestamp: new Date().toLocaleString()
    }

    // Sende Email via EmailJS
    await emailjs.send(
        'YOUR_SERVICE_ID', // Ersetze mit deinem EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Ersetze mit deinem EmailJS Template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Ersetze mit deinem EmailJS Public Key
    )

    // Hier könntest du auch die Dokumente als Anhänge senden
    // Das erfordert eine erweiterte EmailJS Konfiguration oder Backend

    // Erfolgsmodal anzeigen
    showApplicationModal.value = false
    showSuccessModal.value = true
    resetApplicationForm()

  } catch (error) {
    console.error('Error sending application:', error)
    alert('There was an error submitting your application. Please try again.')
  } finally {
    loading.value = false
  }
}

const viewPositionDetails = (positionId) => {
  // Hier könnte man zu einer Detailseite navigieren
  console.log('View position details:', positionId)
}
</script>

<style scoped>
/* Hero Section bleibt gleich wie vorher */
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

/* Positions Grid */
.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.position-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.position-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
}

.position-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
}

.position-badge.fulltime {
  background: var(--color-mint);
}

.position-badge.contract {
  background: var(--color-gradient-start);
}

.position-badge.parttime {
  background: var(--color-highlight);
  color: var(--color-anthrazit);
}

.position-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-gray-600);
}

.position-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.position-description {
  color: var(--color-gray-600);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.position-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.position-features h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-anthrazit);
}

.position-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.position-features li {
  padding: 0.25rem 0;
  color: var(--color-gray-600);
  position: relative;
  padding-left: 1rem;
}

.position-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-mint);
  font-weight: bold;
}

.position-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.modal-header h2 {
  margin: 0;
  color: var(--color-anthrazit);
}

.modal-close {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--color-gray-600);
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--color-anthrazit);
}

/* Application Form */
.application-form {
  padding: 0 2rem 2rem;
}

.form-section {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-gray-200);
}

.form-section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
}

.form-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-anthrazit);
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
.form-group textarea,
.form-group select {
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--color-gradient-start);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.disabled-input {
  background: var(--color-gray-100) !important;
  color: var(--color-gray-600) !important;
  cursor: not-allowed;
}

/* File Upload */
.file-upload {
  position: relative;
}

.file-upload input[type="file"] {
  position: absolute;
  left: -9999px;
}

.file-upload-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px dashed var(--color-gray-300);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--color-gray-100);
}

.file-upload-label:hover {
  border-color: var(--color-gradient-start);
  background: var(--color-gray-200);
}

.upload-icon {
  font-size: 1.25rem;
}

.upload-text {
  color: var(--color-gray-600);
  font-weight: 500;
}

/* Checkbox */
.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
}

.checkbox-group input[type="checkbox"] {
  width: 18px;
  height: 18px;
}

.checkbox-group label {
  margin: 0;
  font-weight: 400;
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.submit-btn {
  min-width: 150px;
  min-height: 50px;
  position: relative;
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

/* Success Modal */
.success-modal {
  text-align: center;
  padding: 3rem 2rem;
  max-width: 500px;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.success-modal h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-anthrazit);
}

.success-modal p {
  color: var(--color-gray-600);
  margin-bottom: 2rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .positions-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .position-actions {
    flex-direction: column;
  }

  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .application-form {
    padding: 0 1rem 1rem;
  }

  .modal-header {
    padding: 1rem 1rem 0.5rem;
  }
}
</style>