<template>
  <section class="hero-section">
    <video
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      poster="/videos/hero-video-poster.jpg"
      preload="auto"
      webkit-playsinline>
      <source src="/videos/hero-video.webm" type="video/webm" />
      <source src="/videos/hero-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
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
