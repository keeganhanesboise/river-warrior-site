<template>
  <main>
    <section class="hero">
      <img alt="" class="hero-image" src="/images/water_quality.jpg" />
      <MainNavigation />
      <h1 class="hero-title">Impact</h1>
    </section>

    <section class="impact-container"/>

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
  font-size: 3.5rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.impact-container {
  padding: 4rem 2rem;
  background-color: #f5f5f0;
  min-height: 100vh;
}
</style>