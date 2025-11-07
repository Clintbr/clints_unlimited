<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <GradientText class="text-h4 text-center mb-8">
          {{ $t('skills.title') }}
        </GradientText>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="category in skills" :key="category.name" cols="12" md="6" lg="4">
        <AnimatedCard>
          <template #header>
            <div class="d-flex align-center mb-4">
              <v-icon :icon="category.icon" color="accent" class="mr-3" />
              <h3 class="text-h6">{{ $t(`skills.categories.${category.name}`) }}</h3>
            </div>
          </template>

          <div class="skill-items">
            <div v-for="skill in category.items" :key="skill.name" class="skill-item">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ $t(`skills.levels.${skill.level}`) }}</span>
              </div>
              <v-progress-linear
                  :model-value="skill.levelValue"
                  color="accent"
                  height="8"
                  rounded
              />
            </div>
          </div>
        </AnimatedCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import AnimatedCard from '@/components/ui/AnimatedCard.vue'
import GradientText from '@/components/ui/GradientText.vue'

const skills = ref([
  {
    name: 'frontend',
    icon: 'mdi-monitor',
    items: [
      { name: 'Vue.js', level: 'expert', levelValue: 90 },
      { name: 'React', level: 'advanced', levelValue: 80 },
      { name: 'TypeScript', level: 'advanced', levelValue: 85 },
      { name: 'CSS/SCSS', level: 'expert', levelValue: 95 }
    ]
  },
  {
    name: 'backend',
    icon: 'mdi-server',
    items: [
      { name: 'Node.js', level: 'advanced', levelValue: 85 },
      { name: 'Python', level: 'intermediate', levelValue: 70 },
      { name: 'PostgreSQL', level: 'advanced', levelValue: 80 },
      { name: 'REST APIs', level: 'expert', levelValue: 90 }
    ]
  },
  {
    name: 'tools',
    icon: 'mdi-tools',
    items: [
      { name: 'Docker', level: 'advanced', levelValue: 80 },
      { name: 'AWS', level: 'intermediate', levelValue: 75 },
      { name: 'Git', level: 'expert', levelValue: 95 },
      { name: 'CI/CD', level: 'advanced', levelValue: 85 }
    ]
  }
])
</script>

<style scoped>
.skill-item {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: rgba(var(--v-theme-primary), var(--v-high-emphasis-opacity));
}

.skill-level {
  font-size: 0.875rem;
  color: rgba(var(--v-theme-primary), var(--v-medium-emphasis-opacity));
}
</style>