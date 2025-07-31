<script setup lang="ts">
interface StorySection {
  title: string;
  text: string;
  textMobile: string;
  image?: string;
  video?: string;
}

const sections: StorySection[] = [
  {
    title: 'Journey by Water',
    text:
      '<em>River Warrior</em> is the story of one woman’s journey into the heart of America’s' +
      ' water sheds—1,895 miles powered by nothing but a paddle, peddles, determination,' +
      ' and the belief that water is worth fighting for. In July 2024, Ann Rose launched ' +
      'her kayak into a creek near her farm and began her journey from the Appalachian ' +
      'Mountains to the Gulf of Mexico. Along the way, she passed through the living ' +
      'veins of the country—rivers that nourish towns, farms, and ecosystems, but are ' +
      'too often neglected or threatened. This journey wasn’t just about endurance—it was ' +
      'about honoring the rivers and raising awareness for the need to protect them.',
    textMobile:
      '<em>River Warrior</em> follows one woman’s 1,895-mile journey through America’s ' +
      'watersheds—powered by a paddle, pedals, and a fierce belief that water is worth ' +
      'fighting for. In July 2024, Ann Rose launched her kayak near her Appalachian farm ' +
      'and traveled to the Gulf of Mexico. Along the way, she moved through rivers that ' +
      'sustain towns, farms, and ecosystems—yet are often neglected. Her mission: to honor ' +
      'these waters and raise awareness about the urgent need to protect them.',
    image: '/images/kayak_splash.jpg'
  },
  {
    title: 'Appalachia to the Gulf',
    text:
      'Beginning in the highland headwaters of Lansing, NC, Ann followed the current ' +
      'south—paddling through rapids, lock/dam systems, barges, industrial zones, and ' +
      'backwater bayous, across four major rivers and countless tributaries.<br>' +
      'Her journey began on the ancient <strong>New River</strong>, winding through the resilient ' +
      'Appalachians. On the <strong>Kanawha River</strong>, coal mining’s damage was stark and hard to ignore. ' +
      'The <strong>Ohio River</strong> carried her west, bearing both commerce and pollution. At last, she ' +
      'reached the mighty <strong>Mississippi River</strong>—vast, complex, and deeply symbolic of our ' +
      'nation’s troubled relationship with water.<br>' +
      'Ann’s journey ended successfully on September 27, 2024—just as Hurricane Helene hit her hometown. ' +
      'She went from river warrior to relief worker overnight. After months of paddling the veins of our ' +
      'interconnected water systems, nature struck home with devastating force—making her mission for ' +
      'climate awareness and water protection more urgent than ever.',
    textMobile:
      'Beginning in the highland headwaters of Lansing, NC, Ann followed the current ' +
      'south—paddling through rapids, lock/dam systems, barges, industrial zones, and ' +
      'backwater bayous, across four major rivers and countless tributaries.<br>' +
      'Her journey began on the ancient <strong>New River</strong>, winding through the resilient ' +
      'Appalachians. On the <strong>Kanawha River</strong>, coal mining’s damage was stark and hard to ignore. ' +
      'The <strong>Ohio River</strong> carried her west, bearing both commerce and pollution. At last, she ' +
      'reached the mighty <strong>Mississippi River</strong>—vast, complex, and deeply symbolic of our ' +
      'nation’s troubled relationship with water.<br>' +
      'Ann’s journey ended successfully on September 27, 2024—just as Hurricane Helene hit her hometown. ' +
      'She went from river warrior to relief worker overnight. After months of paddling the veins of our ' +
      'interconnected water systems, nature struck home with devastating force—making her mission for ' +
      'climate awareness and water protection more urgent than ever.',
    video: '/videos/map-animation.mp4'
  },
  {
    title: 'Meet the River Warrior',
    text:
      'Ann Rose is not your typical adventurer. A self-taught, off-grid farmer in the ' +
      'mountains of Appalachia, she lives with deep intention on Rose Mountain Farm—a ' +
      'homestead she built by hand, rooted in self-reliance and reverence for the land. ' +
      'As a farmer, she deeply understands that clean, accessible water is the foundation ' +
      'of life. It waters her crops, sustains her animals, and connects her farm to everything ' +
      'downstream. That understanding fueled her decision to take to the river—not just for ' +
      'personal discovery, but to speak on behalf of the watersheds that are too often overlooked. ' +
      "<em>River Warrior</em> introduces audiences to a woman who doesn't just talk about change—she " +
      'lives it, paddles it, and fights for it.',
    textMobile:
      'Ann Rose is no ordinary adventurer. A self-taught, off-grid farmer in Appalachia, she built ' +
      'Rose Mountain Farm by hand, grounded in self-reliance and reverence for the land. She knows ' +
      'water is life—it feeds her crops, her animals, and everything downstream. That truth led her ' +
      'to the river, not just for discovery, but to speak for the overlooked watersheds. River Warrior ' +
      'introduces a woman who doesn’t just talk about change—she lives it, paddles it, and fights for it.',
    image: '/images/ann_portrait.jpg'
  }
];

const textRefs = ref<(HTMLElement | null)[]>([]);
const currentSection = ref(0);

const updateSectionOnScroll = () => {
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

let ticking = false;
function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateSectionOnScroll();
      ticking = false;
    });
    ticking = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  updateSectionOnScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
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
            <p class="section-text" v-html="section.text" />
          </div>
        </div>
        <div class="image-container">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="image-wrapper"
            :class="{ active: currentSection === index }">
            <picture
              v-if="section.image && section.image.match(/\.(jpe?g|png|JPG)$/)">
              <source
                :srcset="section.image.replace(/\.(jpe?g|png|JPG)$/, '.webp')"
                type="image/webp" />
              <img
                :alt="section.title"
                class="section-image"
                loading="lazy"
                :src="section.image" />
            </picture>
            <img
              v-else-if="section.image"
              :alt="section.title"
              class="section-image"
              loading="lazy"
              :src="section.image" />
            <video
              v-if="section.video"
              autoplay
              class="section-image"
              loop
              muted
              playsinline
              :src="section.video" />
          </div>
        </div>
      </div>

      <!-- Mobile View -->
      <div class="mobile-view">
        <div class="mobile-sections">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="mobile-section">
            <div class="mobile-content">
              <h2 class="section-title">{{ section.title }}</h2>
              <p class="section-text" v-html="section.textMobile" />
              <div class="mobile-image">
                <picture
                  v-if="
                    section.image && section.image.match(/\.(jpe?g|png|JPG)$/)
                  ">
                  <source
                    :srcset="
                      section.image.replace(/\.(jpe?g|png|JPG)$/, '.webp')
                    "
                    type="image/webp" />
                  <img
                    :alt="section.title"
                    class="section-image"
                    loading="lazy"
                    :src="section.image" />
                </picture>
                <img
                  v-else-if="section.image"
                  :alt="section.title"
                  class="section-image"
                  loading="lazy"
                  :src="section.image" />
                <video
                  v-if="section.video"
                  autoplay
                  class="section-image"
                  loop
                  muted
                  playsinline
                  :src="section.video" />
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
  background-color: var(--color-bg);
  min-height: 200vh;
  padding: 5rem 2rem 0;
  position: relative;
}

.content-wrapper {
  max-width: 1100px;
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
  padding: 2rem 0;
}

.section-title {
  font-size: 2.5rem;
  margin: 0;
  color: var(--color-primary);
  position: relative;
  padding-bottom: 1rem;
}

.section-text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  color: var(--color-primary);
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
  max-height: 70vh;
  object-fit: cover;
  border-radius: var(--radius);
  aspect-ratio: 3/4;
  height: auto;
}

/* Mobile Styles */
.mobile-view {
  display: none;
}

@media (min-width: 640px) {
  #story-section {
    padding: 5rem 3rem 0;
  }
}

@media (max-width: 768px) {
  #story-section {
    padding: 0;
  }

  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: block;
    position: relative;
    padding-top: 3.5rem;
  }

  .mobile-sections {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: static;
    height: auto;
    align-items: stretch;
    justify-content: flex-start;
    overflow: visible;
  }

  .mobile-section {
    position: static;
    width: 100%;
    opacity: 1;
    visibility: visible;
    transition: none;
    pointer-events: auto;
    margin-bottom: 2rem;
  }

  .mobile-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    padding: 0 2rem;
    overflow-y: auto;
  }

  .section-title {
    font-size: 2rem;
    text-align: center;
    color: var(--color-primary);
  }

  .section-text {
    font-size: 0.95rem;
    max-width: 500px;
    overflow: auto;
    text-align: center;
    margin-bottom: 1.5rem;
    overflow-wrap: break-word;
    color: var(--color-primary);
  }

  .mobile-image {
    max-width: 350px;
    margin: 0 auto;
  }

  .mobile-image img {
    width: 100%;
    height: 100%;
  }

  .mobile-image video {
    width: 100%;
    height: 100%;
  }
}
</style>
