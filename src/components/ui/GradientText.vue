<template>
  <span class="gradient-text">
    <slot />
  </span>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #6366F1 0%, #3B82F6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>