<template>
  <section class="hero-container">
    <div class="overlay" />
    <div class="hero-content">
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
      <button>Watch Trailer</button>
      <button>Explore The Journey</button>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/images/hero.avif');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-container .overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.hero-container .hero-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
  color: white;
  padding: 1rem;
}
</style>
