<script setup lang="ts">
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/images/press-hero.webp' },
    { rel: 'preload', as: 'image', href: '/images/press-hero.jpg' }
  ],
  title: 'Press & Media – River Warrior Documentary',
  meta: [
    // Standard meta description
    {
      name: 'description',
      content:
        'Explore press coverage, download high-resolution stills, and access media resources for River Warrior — the documentary journey from Appalachia to the Gulf.'
    },

    // Open Graph tags
    {
      property: 'og:title',
      content: 'Press & Media – River Warrior Documentary'
    },
    {
      property: 'og:description',
      content:
        'Browse press articles, download official stills, and access the media kit for River Warrior — a documentary highlighting water quality from Appalachia to the Gulf.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://riverwarriordocumentary.com/press' },
    {
      property: 'og:image',
      content: 'https://riverwarriordocumentary.com/images/press-hero.jpg'
    },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Press & Media – River Warrior Documentary'
    },
    {
      name: 'twitter:description',
      content:
        'Access press resources for River Warrior — a film following a solo water quality journey across 1,895 miles of rivers. Download stills and read media coverage.'
    },
    {
      name: 'twitter:image',
      content: 'https://riverwarriordocumentary.com/images/press-hero.jpg'
    }
  ]
});

const pressItems = [
  {
    title: 'REI Podcast Interview',
    source: 'REI CO-OP Studios',
    url: 'https://pod.link/1183017174/episode/M2FmYzI1N2EtZTgxMS00MTZmLTgyODUtOTViMDdhOTc2MTQ4'
  },
  {
    title: 'Farmer completes 2000 mile paddle from carolina to the gulf',
    source: 'Blue Ridge Outdoors',
    url: 'https://www.blueridgeoutdoors.com/magazine/december-2024/farmer-completes-2000-mile-paddle-from-carolina-to-the-gulf/'
  },
  {
    title: 'Rose Completes Paddle',
    source: 'App Voices',
    url: 'https://appvoices.org/2024/11/01/rose-completes-paddle/ '
  },
  {
    title: 'North Carolina \'River Warrior\' paddles to the Gulf Coast from her farm in Lansing, NC',
    source: 'WFAE',
    url: 'https://www.wfae.org/energy-environment/2025-08-15/north-carolina-river-warrior-paddles-to-the-gulf-coast-from-her-farm-in-lansing-nc?utm_campaign=linkinbio&utm_medium=referral&utm_source=later-linkinbio'
  },
  {
    title: "Ann Rose, the 'River Warrior'",
    source: 'Ashe Post & Times',
    url: 'https://www.ashepostandtimes.com/community/ann-rose-the-river-warrior/article_f63b6bee-578a-11ef-9adf-57ead202cb1a.html?fbclid=PAQ0xDSwKjgh5leHRuA2FlbQIxMQABp7YY_b5qRAmH-ggaB0qSElA2o2H4NiNDkcdNLJTJxs7miZ8-BrG8VAed1VM1_aem_7ixEHbmR1H6MNlX2Lut4qQ'
  },
  {
    title: 'Ann Rose Send Off',
    source: 'New River Conservancy',
    url: 'https://newriverconservancy.org/event/ann-rose-send-off/'
  }
];

const stills = [
  '/images/press1.jpg',
  '/images/press2.jpg',
  '/images/press3.jpg',
  '/images/press4.jpg',
  '/images/press5.jpg',
  '/images/press6.jpg',
  '/images/press7.jpg',
  '/images/press8.jpg',
  '/images/press9.jpg'
];

const showAllPress = ref(false);
const showAllStills = ref(false);
const isMobile = ref(false);
const selectedImage = ref('');
const isLightboxOpen = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});

const displayedPressItems = computed(() => {
  if (!isMobile.value) return pressItems;
  return showAllPress.value ? pressItems : pressItems.slice(0, 3);
});

const displayedStills = computed(() => {
  if (!isMobile.value) return stills;
  return showAllStills.value ? stills : stills.slice(0, 3);
});

const togglePress = () => {
  showAllPress.value = !showAllPress.value;
};

const toggleStills = () => {
  showAllStills.value = !showAllStills.value;
};

const openLightbox = (imageSrc: string) => {
  // Extract base filename without extension and add '-original.jpg' to get the high quality version
  selectedImage.value =
    imageSrc.replace(/\.(webp|jpe?g|png)$/i, '') + '-original.jpg';
  isLightboxOpen.value = true;
};

const closeLightbox = () => {
  isLightboxOpen.value = false;
};
</script>

<template>
  <main>
    <section class="hero">
      <picture>
        <source srcset="/images/press-hero.webp" type="image/webp" />
        <img
          alt=""
          class="hero-image"
          height="1080"
          loading="eager"
          src="/images/press-hero.jpg"
          width="1920" />
      </picture>
      <MainNavigation />
      <h1 class="hero-title">Press</h1>
    </section>

    <section class="press-links">
      <div class="press-container">
        <h2 class="section-title">In the News</h2>
        <div class="press-cards">
          <a
            v-for="(item, index) in displayedPressItems"
            :key="index"
            class="press-card"
            :href="item.url"
            rel="noopener noreferrer"
            target="_blank">
            <h3 class="press-title">{{ item.title }}</h3>
            <p class="press-source">{{ item.source }}</p>
          </a>
        </div>
        <button
          v-if="pressItems.length > 3"
          class="show-more-btn mobile-only"
          @click="togglePress">
          {{ showAllPress ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </section>

    <section class="doc-stills">
      <div class="stills-container">
        <h2 class="section-title">Stills from the Documentary</h2>
        <div class="stills-grid">
          <div
            v-for="(still, index) in displayedStills"
            :key="index"
            aria-label="Open lightbox for still image"
            class="still-wrapper"
            role="button"
            tabindex="0"
            @click="openLightbox(still)"
            @keydown.enter="openLightbox(still)">
            <picture v-if="still.match(/\.(jpe?g|png|JPG)$/)">
              <source
                :srcset="still.replace(/\.(jpe?g|png|JPG)$/, '.webp')"
                type="image/webp" />
              <img
                alt=""
                loading="lazy"
                :src="still"
                style="
                  width: 100%;
                  aspect-ratio: 16/9;
                  object-fit: cover;
                  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                " />
            </picture>
            <img
              v-else
              alt=""
              loading="lazy"
              :src="still"
              style="
                width: 100%;
                aspect-ratio: 16/9;
                object-fit: cover;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              " />
          </div>
        </div>
        <button
          v-if="stills.length > 3"
          class="show-more-btn mobile-only"
          @click="toggleStills">
          {{ showAllStills ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </section>

    <ImageLightbox
      :image-src="selectedImage"
      :is-open="isLightboxOpen"
      @close="closeLightbox" />

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
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.press-links {
  padding: 4rem 2rem;
  background-color: var(--color-bg);
}

.press-container,
.stills-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.press-list li a {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.press-list li a:hover {
  color: var(--color-green);
}

.still img {
  width: 100%;
  object-fit: cover;
  box-shadow: var(--shadow);
}

.press-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.press-card {
  text-decoration: none;
  color: inherit;
  display: block;
  background: white;
  cursor: pointer;
  padding: 2rem;
  box-shadow: var(--shadow-xs);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.press-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.press-title {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.press-source {
  font-size: 1rem;
  color: var(--color-green);
  opacity: 0.8;
}

@media (min-width: 768px) {
  .press-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .press-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.doc-stills {
  background-color: white;
  padding: 4rem 2rem;
}

.stills-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stills-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
}

.still-wrapper {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.still-wrapper:hover {
  transform: scale(1.02);
}

.stills-grid img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  box-shadow: var(--shadow);
}

@media (min-width: 600px) {
  .stills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .stills-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.show-more-btn {
  display: none;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.show-more-btn:hover {
  background-color: var(--color-green);
}

@media (max-width: 767px) {
  .mobile-only {
    display: block;
  }
}
</style>
