<template>
  <section class="hero-section">
    <video
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

    <div class="overlay" />
    <div class="bottom-gradient" />

    <MainNavigation />

    <div class="hero-content">
      <div class="logo-container fade-in">
        <h1 class="sr-only">River Warrior Documentary</h1>
        <img id="logo" alt="" src="/images/logo_white.png" />
      </div>
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

.hero-video-fallback {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
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
</style>
