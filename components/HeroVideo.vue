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
      <nav class="navigation">
        <ul>
          <li><a class="nav-link" href="#">IMPACT</a></li>
          <li><a class="nav-link" href="#">CREW</a></li>
          <li><a class="nav-link" href="#">PRESS</a></li>
          <li><a class="nav-link" href="#">CONNECT</a></li>
        </ul>
      </nav>
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

.navigation {
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1rem;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 0.75rem;
  position: relative;
  display: inline-block;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.75rem;
  right: 0.75rem;
  width: calc(100% - 1.5rem);
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

@media (min-width: 640px) {
  .navigation ul {
    gap: 3rem;
  }
}
</style>
