<template>
  <v-card class="animated-card" elevation="2">
    <slot name="header" />
    <slot />
  </v-card>
</template>

<style scoped>
.animated-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}
</style>