<template>
  <section>
    <div class="video-container-primary">
      <div class="content-wrapper">
        <div class="text-content">
          <h1 class="title">WATCH THE TRAILER</h1>
          <p class="logline">
            An inspiring agricultural adventure documentary about an
            Appalachian, off-grid farmer who is going full force into her next
            adventure - kayaking from her neighborhood creek all the way to the
            Gulf of Mexico
          </p>
        </div>
        <div class="video-container-secondary">
          <iframe
            allowfullscreen
            loading="lazy"
            src="https://www.youtube.com/embed/zjwntAmkrN0"
            title="River Warrior Trailer" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-container-primary {
  background-color: #1e3a2f;
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
  margin-bottom: 3rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-size: 2.5rem;
  margin: 0 0 1.5rem 0;
  letter-spacing: 0.05em;
  font-weight: normal;
}

.logline {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
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

@media (min-width: 640px) {
  .video-container-primary {
    padding: 8rem 3rem;
  }

  .title {
    font-size: 3.5rem;
  }

  .logline {
    font-size: 1.5rem;
  }

  .text-content {
    margin-bottom: 4rem;
  }
}
</style>
