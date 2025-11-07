<template>
  <v-container class="hero-container">
    <v-row align="center" class="fill-height">
      <v-col cols="12" md="6">
        <div class="hero-content">
          <GradientText class="text-h3 text-md-h2 font-weight-bold mb-4">
            {{ $t('hero.title') }}
          </GradientText>

          <p class="text-h6 text-md-h5 mb-6 text-primary">
            {{ $t('hero.subtitle') }}
          </p>

          <p class="text-body-1 mb-8">
            {{ $t('hero.description') }}
          </p>

          <div class="hero-actions">
            <v-btn
                size="x-large"
                color="accent"
                class="mr-4 mb-2"
                @click="$router.push('/contact')"
            >
              {{ $t('hero.cta.primary') }}
            </v-btn>

            <v-btn
                size="x-large"
                variant="outlined"
                color="primary"
                @click="$router.push('/portfolio')"
            >
              {{ $t('hero.cta.secondary') }}
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <div class="hero-visual">
          <v-avatar size="300" class="profile-image">
            <v-img src="@/assets/images/profile.jpg" />
          </v-avatar>
          <div class="floating-elements">
            <div v-for="(tech, i) in floatingTech" :key="tech" class="floating-tech" :style="getFloatingStyle(i)">
              {{ tech }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import GradientText from '@/components/ui/GradientText.vue'

const floatingTech = ref(['Vue.js', 'TypeScript', 'Node.js', 'AWS', 'UI/UX', 'DevOps'])

const getFloatingStyle = (index) => {
  const positions = [
    { top: '10%', left: '20%' },
    { top: '60%', left: '10%' },
    { top: '30%', right: '15%' },
    { top: '70%', right: '25%' },
    { top: '20%', left: '50%' },
    { top: '80%', left: '60%' }
  ]

  return {
    ...positions[index % positions.length],
    animationDelay: `${index * 0.5}s`
  }
}
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 600px;
}

.profile-image {
  border: 4px solid;
  border-image: var(--gradient-primary) 1;
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
}

.floating-tech {
  position: absolute;
  background: var(--gradient-primary);
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 600;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>