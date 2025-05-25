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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}
.video-container-secondary {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
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
