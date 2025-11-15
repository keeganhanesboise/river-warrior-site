<template>
  <section class="impact-callout-section bg-light">
    <div
      class="impact-callout-container container rounded-xl shadow-md bg-white">
      <div class="impact-callout-image-wrapper">
        <picture>
          <source
            srcset="/images/ann_water_quality_testing.webp"
            type="image/webp" />
          <img
            alt="Ann conducting water quality testing"
            class="impact-callout-image rounded-lg shadow-sm"
            loading="eager"
            src="/images/ann_water_quality_testing.jpg" />
        </picture>
      </div>
      <div class="impact-callout-content">
        <h2 class="impact-callout-title section-title">
          Mission Behind the Miles
        </h2>
        <p class="impact-callout-description text-primary">
          Ann's journey through nearly 2,000 miles of river wasn't just an
          adventure—it was a mission to reveal the crisis in our waterways.
          Testing the water as she paddled, she uncovered pollution, decay, and
          ecological threats hiding in plain sight. Her story is a call to each
          of us to move from passive awareness to urgent action in protecting
          the rivers that sustain us.
        </p>
        <NuxtLink
          class="impact-callout-btn bg-btn text-light rounded shadow-xs"
          to="/impact">
          Discover the Impact →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact-callout-section {
  padding: 2rem 2rem 4rem;
  display: flex;
  justify-content: center;
}

.impact-callout-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  padding: 2.5rem 1.5rem;
}

.impact-callout-image-wrapper {
  width: 100%;
  max-width: 480px;
  flex-shrink: 0;
}

.impact-callout-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.impact-callout-content {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.impact-callout-description {
  line-height: 1.7;
  margin-bottom: 2rem;
}

.impact-callout-btn {
  display: inline-block;
  background-color: var(--color-green);
  color: var(--color-light);
  padding: 0.85rem 2.2rem;
  border: solid var(--color-green);
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;
  box-shadow: var(--shadow-xs);
}

.impact-callout-btn:hover {
  background-color: var(--color-btn-hover);
  color: var(--color-green);
}

.impact-callout-title {
  margin-top: 0;
}

@media (min-width: 900px) {
  .impact-callout-title {
    margin-top: 0;
    text-align: left;
  }

  .impact-callout-section {
    padding: 0 2rem 10rem;
  }
  .impact-callout-container {
    flex-direction: row;
    gap: 3.5rem;
    padding: 3.5rem 3rem;
  }
  .impact-callout-image-wrapper {
    max-width: 420px;
  }
  .impact-callout-image {
    height: 340px;
  }
  .impact-callout-content {
    text-align: left;
    max-width: 600px;
  }
}
</style>
