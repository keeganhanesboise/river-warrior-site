<script setup>
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

onMounted(() => {
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', setVh);
  window.removeEventListener('orientationchange', setVh);
});

function restartVideo() {
  const video = document.querySelector('.hero-video');
  if (video && !hasRestarted.value) {
    hasRestarted.value = true;
    isRestarting.value = true;
    videoLoading.value = true;
    if (video) {
      video.load();
      // Force play after a short delay
      setTimeout(() => {
        video.play().catch(() => {});
      }, 100);
    }
  }
}

function handlePageShow(event) {
  if (event.persisted) {
    // Reset the restart flag for new navigation
    hasRestarted.value = false;
    restartVideo();
  }
}

function handleVisibilityChange() {
  if (!document.hidden) {
    restartVideo();
  }
}

const videoError = ref(false);
const videoLoading = ref(true);
const hasRestarted = ref(false);
const isRestarting = ref(false);

function handleVideoError() {
  // Only show fallback if the video truly failed to load after a small delay
  setTimeout(() => {
    const video = document.querySelector('.hero-video');
    if (video && video.readyState === 0) {
      videoError.value = true;
    }
  }, 2000); // 2-second delay to avoid brief network hiccups
}

function handleVideoPlay() {
  videoLoading.value = false;
  isRestarting.value = false;
}

function handleVideoLoadStart() {
  videoLoading.value = true;
}

onMounted(() => {
  setVh();
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);

  const video = document.querySelector('.hero-video');
  if (video) {
    video.addEventListener('error', handleVideoError);
    video.addEventListener('stalled', handleVideoError);
    video.addEventListener('play', handleVideoPlay);
    video.addEventListener('loadstart', handleVideoLoadStart);
    
    // Check if video is already in a failed state on mount (common after navigation)
    if (video.readyState === 0) {
      // Give it a moment to try loading, then check again
      setTimeout(() => {
        if (video.readyState === 0) {
          videoError.value = true;
        }
      }, 1000);
    }
  }

  window.addEventListener('pageshow', handlePageShow);
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', setVh);
  window.removeEventListener('orientationchange', setVh);

  const video = document.querySelector('.hero-video');
  if (video) {
    video.removeEventListener('error', handleVideoError);
    video.removeEventListener('stalled', handleVideoError);
    video.removeEventListener('play', handleVideoPlay);
    video.removeEventListener('loadstart', handleVideoLoadStart);
  }

  window.removeEventListener('pageshow', handlePageShow);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});
</script>

<template>
  <section class="hero-section">
    <!-- Background poster that shows while video loads or restarts -->
    <img
      v-if="(videoLoading || isRestarting) && !videoError"
      alt=""
      class="hero-video-poster"
      src="/videos/hero-video-poster.jpg"
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      " />

    <video
      v-if="!videoError"
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      poster="/videos/hero-video-poster.jpg"
      preload="auto">
      <source src="/videos/hero-video.webm" type="video/webm" />
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <img
      v-else
      alt="Hero video fallback"
      class="hero-video-fallback"
      src="/videos/hero-video-poster.jpg"
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
      " />

    <div class="overlay" />
    <div class="bottom-gradient" />

    <MainNavigation />

    <div class="hero-content">
      <div class="logo-container fade-in">
        <h1 class="sr-only">River Warrior Documentary</h1>
        <NuxtImg id="logo" alt="" src="/images/logo_white.png" />
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

<!--suppress CssUnresolvedCustomProperty -->
<style scoped>
#logo {
  width: 100%;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

@media (max-width: 768px) {
  .hero-section {
    height: calc(var(--vh, 1vh) * 100);
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
  background: linear-gradient(to bottom, rgba(30, 58, 47, 0) 0%, #1e3a2f 100%);
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
  bottom: 2rem;
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
}

.scroll-text {
  font-size: 0.875rem;
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
</style>
