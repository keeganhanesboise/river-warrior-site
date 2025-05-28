<template>
  <section>
    <h1 class="sr-only">Watch Trailer</h1>
    <div class="video-container-primary">
      <div class="video-container-secondary">
        <iframe
          allowfullscreen
          loading="lazy"
          src="https://www.youtube.com/embed/zjwntAmkrN0"
          title="River Warrior Trailer" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-container-primary {
  background-color: #2e4e3f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
}

@media (min-width: 640px) {
  .video-container-primary {
    padding: 8rem 3rem;
  }
}

.video-container-secondary {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.video-container-secondary::before {
  content: "";
  display: block;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.video-container-secondary iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
