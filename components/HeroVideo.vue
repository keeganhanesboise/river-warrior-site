<template>
  <section class="hero-section">
    <video
      autoplay
      class="hero-video"
      loop
      muted
      playsinline
      poster="/videos/hero-poster.jpg"
      preload="auto">
      <source src="/videos/kayaking-on-lake.webm" type="video/webm" />
      <source
        src="/videos/coverr-friends-kayaking-on-lake-in-mexico-8711-1080p.mp4"
        type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div class="overlay" />

    <div class="hero-content">
      <div class="hero-text">
        <h1>
          Ann Rose
          <br />
          River Warrior
        </h1>
        <p>
          “An inspiring agricultural documentary about and Appalachian, off-grid
          farmer who is going full force into her next adventure - kayaking from
          her neighborhood creek all the way to the Gulf of Mexico.”
        </p>
        <div class="call-to-action-container">
          <button>Watch Trailer</button>
          <button>Explore The Journey</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 0;
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

.call-to-action-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
}

.hero-text {
  max-width: 600px;
}

.hero-text button {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  color: black;
  font-weight: 600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
