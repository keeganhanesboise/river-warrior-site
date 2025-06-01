<script setup lang="ts">
const impactItems = [
  {
    icon: '/images/alligator_logo.png',
    title: 'Impact 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '/'
  },
  {
    icon: '/images/alligator_logo.png',
    title: 'Impact 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '/'
  },
  {
    icon: '/images/alligator_logo.png',
    title: 'Impact 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    link: '/'
  }
]
</script>

<template>
  <main>
    <section class="hero">
      <img alt="" class="hero-image" src="/images/water_quality.jpg" />
      <MainNavigation />
      <h1 class="hero-title">Impact</h1>
    </section>

    <section class="impact-section">
      <div class="impact-container">
        <div v-for="(item, index) in impactItems" :key="index" class="impact-item">
          <div class="icon-container">
            <img alt="" class="impact-icon" :src="item.icon" />
          </div>
          <div class="impact-content">
            <h2 class="impact-title">{{ item.title }}</h2>
            <p class="impact-description">{{ item.description }}</p>
            <a class="impact-link" :href="item.link">Learn more →</a>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-title {
  position: relative;
  z-index: 2;
  color: white;
  font-size: 3.5rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.impact-section {
  background-color: #f5f5f0;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 75vh;
}

.impact-container {
  max-width: 700px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 2rem;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.impact-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  gap: 1.5rem;
}

.icon-container {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.impact-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.impact-content {
  color: #1e3a2f;
  width: 100%;
}

.impact-title {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: #1e3a2f;
  text-align: center;
}

.impact-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

.impact-link {
  display: block;
  font-size: 1rem;
  color: #1e3a2f;
  text-decoration: underline;
  text-align: center;
  transition: color 0.3s ease;
}

@media (min-width: 768px) {
  .impact-item {
    flex-direction: row;
    text-align: left;
    gap: 2rem;
  }

  .impact-title {
    text-align: left;
  }

  .impact-description {
    text-align: justify;
  }

  .impact-link {
    text-align: left;
  }

  .icon-container {
    width: 100px;
    height: 100px;
  }
}
.impact-link:hover {
  color: #a8d4bc;
}
</style>