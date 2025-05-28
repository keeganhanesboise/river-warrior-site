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
const isMobile = ref(false);

const updateMobileState = () => {
  isMobile.value = window.innerWidth <= 768;
};

const checkScroll = () => {
  const windowHeight = window.innerHeight;
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const storySection = document.querySelector('#story-section');
    if (!storySection) return;

    const rect = storySection.getBoundingClientRect();
    const progress = -rect.top / (rect.height - windowHeight);
    const sectionCount = sections.length;

    // Calculate which section should be visible based on scroll progress
    const targetSection = Math.floor(progress * sectionCount);

    if (
      targetSection >= 0 &&
      targetSection < sections.length &&
      targetSection !== currentSection.value
    ) {
      currentSection.value = targetSection;
    }
  } else {
    textRefs.value.forEach((element, index) => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      if (Math.abs(elementCenter - windowHeight / 2) < windowHeight / 4) {
        currentSection.value = index;
      }
    });
  }
};

onMounted(() => {
  updateMobileState();
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', updateMobileState);
  checkScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
  window.removeEventListener('resize', updateMobileState);
});
</script>

<template>
  <section id="story-section">
    <div class="content-wrapper">
      <!-- Desktop View -->
      <div class="desktop-view">
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
            <img alt="" class="section-image" :src="section.image" />
          </div>
        </div>
      </div>

      <!-- Mobile View -->
      <div class="mobile-view">
        <div class="sticky-container">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="mobile-section"
            :class="{ active: currentSection === index }">
            <div class="mobile-content">
              <h2 class="section-title">{{ section.title }}</h2>
              <p class="section-text">{{ section.text }}</p>
              <div class="mobile-image">
                <img alt="" class="section-image" :src="section.image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#story-section {
  background-color: #1e3a2f;
  min-height: 200vh;
  padding: 5rem 2rem;
  position: relative;
}

.content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
}

/* Desktop Styles */
.desktop-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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
  color: #a8d4bc;
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
  background-color: #a8d4bc;
}

.section-text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  color: #ffffff;
  opacity: 1;
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
  border-radius: 8px;
}

/* Mobile Styles */
.mobile-view {
  display: none;
}

@media (min-width: 640px) {
  #story-section {
    padding: 8rem 3rem;
  }
}

@media (max-width: 768px) {
  #story-section {
    min-height: 300vh;
    padding: 0;
  }

  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: block;
    min-height: 300vh;
    position: relative;
  }

  .sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .mobile-section {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-out;
    pointer-events: none;
  }

  .mobile-section.active {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .mobile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 2rem;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
  }

  .section-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .section-text {
    font-size: 1.125rem;
    max-width: 600px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .mobile-image {
    width: 100%;
    max-width: 500px;
    height: 40vh;
  }

  .mobile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
