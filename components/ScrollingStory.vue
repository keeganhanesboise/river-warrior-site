<script setup lang="ts">
interface StorySection {
  title: string;
  text: string;
  image: string;
}

const sections: StorySection[] = [
  {
    title: 'A Journey by Water',
    text:
      '<em>River Warrior</em> is the story of one woman’s journey into the heart of America’s' +
      ' water sheds—1,895 miles powered by nothing but a paddle, peddles, determination,' +
      ' and the belief that water is worth fighting for. In July 2024, Ann Rose launched ' +
      'her kayak into a creek near her farm and began her journey from the Appalachian ' +
      'Mountains to the Gulf of Mexico. Along the way, she passed through the living ' +
      'veins of the country—rivers that nourish towns, farms, and ecosystems, but are ' +
      'too often neglected or threatened. This journey wasn’t just about endurance—it was ' +
      'about honoring the rivers and raising awareness for the need to protect them.',
    image: '/images/kayak_splash.jpg'
  },
  {
    title: 'From Appalachia to the Gulf',
    text:
      'Beginning in the highland headwaters of Lansing, North Carolina, Ann followed ' +
      'the current south—paddling through rapids, lock and dam systems, barges, industrial ' +
      'zones, and backwater bayous, across four major rivers and countless tributaries. She' +
      ' traveled in rhythm with the water, learning from it, battling it, and listening to ' +
      'what it had to say.',
    image: '/images/journey_map.jpg'
  },
  {
    title: 'From Appalachia to the Gulf',
    text:
      'Her journey began on the <strong>New River</strong>, one of the oldest rivers in the world, winding ' +
      'through the Appalachian Mountains with ancient strength and resilience. From there, ' +
      'she entered the <strong>Kanawha River</strong>, where the damage from coal mining and industry became ' +
      'impossible to ignore. The <strong>Ohio River</strong> carried her further west, its wide, working ' +
      'waters reflecting both the legacy of commerce and the burden of pollution. Finally, ' +
      'she reached the <strong>Mississippi River</strong>, a force of nature as vast as it is complex—dangerous ' +
      'and deeply symbolic of our national relationship with water.',
    image: '/images/journey_map.jpg'
  },
  {
    title: 'From Appalachia to the Gulf',
    text:
      'Ann’s journey ended on September 27th, 2024—just as Hurricane Helene ravaged her ' +
      'hometown, forcing her to turn from river warrior to relief worker to help rebuild ' +
      'what was lost. The contrast was stark but telling: while Ann had spent months tracing ' +
      'the veins of our interconnected water systems, nature struck home with devastating ' +
      'force—only deepening the urgency of her mission to raise awareness and protect ' +
      'the waters that sustain us.',
    image: '/images/journey_map.jpg'
  },
  {
    title: 'Meet the Woman Behind the Paddle',
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
            <p class="section-text" v-html="section.text" />
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
              <p class="section-text" v-html="section.text" />
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
  background-color: #f5f5f0;
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
  padding: 2rem 0;
}

.section-title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  color: #1e3a2f;
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
  background-color: #1e3a2f;
}

.section-text {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  color: #1e3a2f;
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
    padding: 5rem 3rem;
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
    padding: 1rem;
    overflow-y: auto;
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
    font-size: 0.95rem;
    max-width: 500px;
    max-height: 35vh;
    overflow: auto;
    text-align: center;
    margin-bottom: 1rem;
    overflow-wrap: break-word;
  }

  .mobile-image {
    max-width: 350px;
    height: 35vh;
    margin: 0 auto;
  }

  .mobile-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
