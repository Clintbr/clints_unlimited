<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2024 DevPortfolio. {{ $t('footer.description') }}</p>
        <p class="footer-rights">{{ $t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-anthrazit);
  color: white;
  padding: 3rem 0;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-content p {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.footer-rights {
  color: var(--color-gray-200);
  font-size: 0.875rem;
}
</style>