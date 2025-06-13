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
];
</script>

<template>
  <main>
    <section class="hero">
      <img alt="" class="hero-image" src="/images/water_quality.jpg" />
      <MainNavigation />
      <h1 class="hero-title">Impact</h1>
    </section>

    <section class="water-quality-section">
      <div class="water-quality-container">
        <div class="water-quality-content">
          <h2 class="water-quality-title">Water Quality Testing</h2>
          <p class="water-quality-description">
            The term Water awareness sounds so obvious, and I think that's why I
            never spent much time dwelling on it, But seeing Ann's passion for
            Water quality and her devotion to making people aware of what that
            term actually means, made me realize I couldn't even put the term in
            a solid definition. This trip on the river and seeing first hand all
            the contributions to our declining water quality made me SEE what
            water awareness is, instead of just hearing the words. I hope this
            film will also bring the reality of the term "water awareness" into
            people's lives by SEEING what we saw.
          </p>
          <a
            class="water-quality-link"
            href="https://www.amazon.com/dp/B0CX58SCG6?ref=cm_sw_r_apin_dp_90TK2QMSBD8ZM7FGM9FQ_1&ref_=cm_sw_r_apin_dp_90TK2QMSBD8ZM7FGM9FQ_1&social_share=cm_sw_r_apin_dp_90TK2QMSBD8ZM7FGM9FQ_1&titleSource=avft-a&previewDoh=1&previewDohDeal=1"
            rel="noopener noreferrer"
            target="_blank">
            Explore Ann's Testing Tool →
          </a>
        </div>
        <img
          alt="Ann conducting water quality testing"
          class="water-quality-image"
          src="/images/ann_water_quality_testing.jpg" />
      </div>
    </section>

    <section class="impact-section">
      <div class="impact-container">
        <div
          v-for="(item, index) in impactItems"
          :key="index"
          class="impact-item">
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

.water-quality-section {
  background-color: #1e3a2f;
  padding: 4rem 2rem;
  color: white;
}

.water-quality-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.water-quality-content {
  text-align: left;
}

.water-quality-title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: white;
}

.water-quality-description {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  color: rgba(255, 255, 255, 0.9);
}

.water-quality-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.water-quality-link {
  display: inline-block;
  font-size: 1.125rem;
  color: #a8d4bc;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 2px solid #a8d4bc;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.water-quality-link:hover {
  background-color: #a8d4bc;
  color: #1e3a2f;
}

@media (min-width: 768px) {
  .water-quality-section {
    padding: 6rem 2rem;
  }

  .water-quality-container {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .water-quality-image {
    height: 500px;
  }
}
</style>
