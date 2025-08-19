<template>
  <section>
    <div class="video-container-primary">
      <div class="content-wrapper">
        <div class="text-content">
          <h1 class="trailer-header">WATCH THE TRAILER</h1>
          <p class="logline">
            After enduring a four-year drought, an off-grid farmer embarks on a
            kayaking journey from her hometown creek in Appalachia all the way
            to the Gulf—seeking to reconnect with and redefine her relationship
            to water.
          </p>
        </div>
        <div class="video-container-secondary">
          <iframe
            allowfullscreen
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/_8XWKv6V8fo"
            title="River Warrior Trailer" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-container-primary {
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
}

.content-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.text-content {
  text-align: center;
  color: white;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.trailer-header {
  margin: 0;
  color: var(--color-accent);
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
}

.logline {
  line-height: 1.6;
  margin: 0;
}

.video-container-secondary {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.video-container-secondary::before {
  content: '';
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

@media (min-width: 769px) {
  .video-container-primary {
    padding: 8rem 3rem;
  }

  .video-container-secondary {
    width: 75%;
  }

  .text-content {
    margin-bottom: 2.5rem;
    width: 75%;
  }
}
</style>
