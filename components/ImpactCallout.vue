<template>
  <section class="impact-callout-section">
    <div class="impact-callout-container">
      <div class="impact-callout-image-wrapper">
        <NuxtImg
          alt="Ann conducting water quality testing"
          class="impact-callout-image"
          src="/images/ann_water_quality_testing.jpg" />
      </div>
      <div class="impact-callout-content">
        <h2 class="impact-callout-title">Why Water Quality Matters</h2>
        <p class="impact-callout-description">
          Ann's journey down nearly 2,000 miles of river wasn't just an
          adventure—it was a mission to reveal the hidden crisis in our
          waterways. With every paddle stroke, she tested the water, uncovering
          pollution and ecological threats that too often go unseen. Her story
          is a call to move from passive awareness to urgent action for the
          rivers that sustain us all.
        </p>
        <NuxtLink class="impact-callout-btn" to="/impact">
          Discover the Impact →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.impact-callout-section {
  background-color: #f5f5f0;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
}

.impact-callout-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(30, 58, 47, 0.07);
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
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(30, 58, 47, 0.13);
}

.impact-callout-content {
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.impact-callout-title {
  color: #1e3a2f;
  margin-bottom: 1.25rem;
}

.impact-callout-description {
  color: #1e3a2f;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.impact-callout-btn {
  display: inline-block;
  background-color: #6b3b2a;
  color: #f5f5f0;
  padding: 0.85rem 2.2rem;
  border-radius: 6px;
  border: solid #6b3b2a;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;
  box-shadow: 0 2px 8px rgba(30, 58, 47, 0.08);
}

.impact-callout-btn:hover {
  background-color: #f5f5f0;
  color: #6b3b2a;
}

@media (min-width: 900px) {
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
