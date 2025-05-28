<script setup lang="ts">
interface StorySection {
  title: string;
  text: string;
  image: string;
}

const sections: StorySection[] = [
  {
    title: 'A Journey by Water',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/kayak_splash.jpg'
  },
  {
    title: 'From Appalachia to the Gulf',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/journey_map.jpg'
  },
  {
    title: 'Meet the Woman Behind the Paddle',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/images/ann_portrait.jpg'
  }
];

const textRefs = ref<(HTMLElement | null)[]>([]);
const currentSection = ref(0);

const checkScroll = () => {
  const windowHeight = window.innerHeight;

  textRefs.value.forEach((element, index) => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;

    if (Math.abs(elementCenter - windowHeight / 2) < windowHeight / 4) {
      currentSection.value = index;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <section class="story-section">
    <div class="content-wrapper">
      <div class="text-container">
        <div
          v-for="(section, index) in sections"
          :key="index"
          :ref="(el) => (textRefs[index] = el as HTMLElement | null)"
          class="text-section">
          <h2 class="section-title">{{ section.title }}</h2>
          <p class="section-text">{{ section.text }}</p>
        </div>
      </div>
      <div class="image-container">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="image-wrapper"
          :class="{ active: currentSection === index }">
          <img
            :alt="section.title"
            class="section-image"
            :src="section.image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  background-color: #2e4e3f;
  min-height: 200vh;
  padding: 5rem 2rem;
  position: relative;
}

.story-section::before {
  display: none;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;
}

.text-container {
  position: relative;
}

.text-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section-title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: #90c4a7;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 25%;
  height: 2px;
  background-color: #90c4a7;
}

.section-text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  color: #ffffff;
  opacity: 0.9;
}

.image-container {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

.image-wrapper {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper.active {
  opacity: 1;
}

.section-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: cover;
}

@media (min-width: 640px) {
  .story-section {
    padding: 8rem 3rem;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .image-container {
    display: none;
  }

  .text-section {
    min-height: auto;
  }

  .story-section {
    min-height: auto;
  }
}
</style>
