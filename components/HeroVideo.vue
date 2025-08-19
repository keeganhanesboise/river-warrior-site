<script setup>
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/images/logo_white.webp' },
    { rel: 'preload', as: 'image', href: '/images/logo_white.png' },
    { rel: 'preload', as: 'image', href: '/videos/hero-video-poster.webp' },
    { rel: 'preload', as: 'image', href: '/videos/hero-video-poster.jpg' },
    {
      rel: 'preload',
      as: 'image',
      href: '/videos/hero-video-mobile-poster.webp'
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/videos/hero-video-mobile-poster.jpg'
    }
  ]
});

const heroVideo = ref(null);
const videoFallback = ref(false);
const isMobile = ref(false);
const poster = ref('');

function canUseWebP() {
  try {
    const elem = document.createElement('canvas');
    return (
      !!(elem.getContext && elem.getContext('2d')) &&
      elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
    );
  } catch {
    return false;
  }
}

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 767px)').matches;
  const videoEl = heroVideo.value;

  const webpSupported = canUseWebP();

  poster.value = isMobile.value
    ? (webpSupported
      ? '/videos/hero-video-mobile-poster.webp'
      : '/videos/hero-video-mobile-poster.jpg')
    : (webpSupported
      ? '/videos/hero-video-poster.webp'
      : '/videos/hero-video-poster.jpg');

  videoEl.poster = poster.value;

  const sources = isMobile.value
    ? [{ src: '/videos/hero-video-mobile.mp4', type: 'video/mp4' }]
    : [
      { src: '/videos/hero-video.mp4', type: 'video/mp4' },
      { src: '/videos/hero-video.webm', type: 'video/webm' }
    ];

  // Clear existing sources
  while (videoEl.firstChild) {
    videoEl.removeChild(videoEl.firstChild);
  }

  // Inject new sources
  sources.forEach(({ src, type }) => {
    const source = document.createElement('source');
    source.src = src;
    source.type = type;
    videoEl.appendChild(source);
  });

  // Safari quirks fix
  videoEl.muted = true;

  // Only seek/play once the video can play
  videoEl.addEventListener('loadedmetadata', () => {
    if (videoEl.duration > 12) {
      videoEl.currentTime = 12;
    }
  });

  videoEl.addEventListener('canplay', () => {
    videoEl.play().catch(() => {
      videoFallback.value = true;
    });
  });

  // Robust fallback handling
  ['error', 'stalled', 'abort'].forEach(evt => {
    videoEl.addEventListener(evt, () => {
      videoFallback.value = true;
    });
  });

  videoEl.load();
});
</script>

<template>
  <section class="hero-section">
    <div v-if="videoFallback" class="hero-image-fallback" />

    <video
      v-else
      ref="heroVideo"
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      :poster="poster"
      preload="metadata">
      <!-- Sources will be injected via JS -->
      Your browser does not support the video tag.
    </video>
    <div class="overlay" />
    <div class="bottom-gradient" />
    <MainNavigation />
    <div class="hero-content">
      <div class="logo-container fade-in">
        <h1 class="sr-only">River Warrior Documentary</h1>
        <picture>
          <source srcset="/images/logo_white.webp" type="image/webp" />
          <img
            id="logo"
            alt=""
            fetchpriority="high"
            loading="eager"
            src="/images/logo_white.png"
            style="width: 100%" />
        </picture>
      </div>
    </div>
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll to explore</span>
      <svg
        class="scroll-arrow"
        fill="none"
        height="24"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        width="24">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </section>
</template>

<style scoped>
#logo {
  width: 100%;
}

.hero-image-fallback {
  background-image: url('/images/hero-video-fallback.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

@supports (height: 100svh) {
  .hero-section {
    height: 100svh;
  }
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  background: linear-gradient(
    to bottom,
    rgba(30, 58, 47, 0) 0%,
    var(--color-primary) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 0 1rem;
}

.logo-container {
  max-width: 800px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 500ms;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scroll-indicator {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: white;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 1.5s;
  bottom: calc(env(safe-area-inset-bottom, 0px) + 3rem);
}

.scroll-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

.scroll-arrow {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (min-width: 640px) {
  .scroll-text {
    font-size: 0.85rem;
  }
}
</style>
