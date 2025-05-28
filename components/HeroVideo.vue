<template>
  <section class="hero-section">
    <video
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      poster="/videos/kayaking-on-lake-sample-poster.jpg"
      preload="auto">
      <source
        src="/videos/kayaking-on-lake-sample-footage.webm"
        type="video/webm" />
      <source
        src="/videos/kayaking-on-lake-sample-footage.mp4"
        type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="overlay" />

    <div class="hero-content">
      <div class="logo-container">
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

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
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
}
</style>
