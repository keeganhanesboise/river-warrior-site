<template>
  <section class="gofundme-section">
    <!-- Mobile: Just the widget -->
    <div class="gofundme-mobile">
      <iframe
        height="auto"
        loading="lazy"
        src="https://www.gofundme.com/f/fuel-anns-offgrid-adventure-and-documentary/widget/medium"
        style="border: none; max-width: 446px"
        title="GoFundMe Campaign"
        width="100%" />
    </div>

    <!-- Desktop: Text + Large widget -->
    <div class="gofundme-desktop">
      <div class="gofundme-text">
        <p>
          Ann has successfully completed her 3-month, 2,000 mile journey to the
          Gulf of Mexico. We could not be more proud of what Ann and our team
          were able to accomplish during the production phase of this epic
          adventure, and now the fun really begins as we get to edit the
          documentary together. We have created this GoFundMe page as an effort
          to fundraise additional funds to carry us through our post-production
          phase and on into the festival circuits, distribution, and BEYOND!!!
          Any amount you can give would be greatly appreciated and will go
          directly to the final stages of our filmmaking process!
        </p>
        <p class="signature">
          Thank you! - Cassia Sherrill, Producer of River Warrior
        </p>
      </div>
      <div class="gofundme-widget">
        <iframe
          height="auto"
          loading="lazy"
          src="https://www.gofundme.com/f/fuel-anns-offgrid-adventure-and-documentary/widget/large"
          style="border: none; max-width: 446px; min-height: 535px"
          title="GoFundMe Campaign"
          width="100%" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gofundme-section {
  display: flex;
  justify-content: center;
  background-color: #f5f5f0;
  padding: 0 2rem 4rem;
}

/* Mobile layout */
.gofundme-mobile {
  display: flex;
  width: 100%;
  max-width: 500px;
  justify-content: center;
}

.gofundme-mobile iframe {
  background-color: #f5f5f0;
  width: 100%;
  min-height: 200px;
}

@media (max-width: 378px) {
  .gofundme-mobile iframe {
    min-height: 250px;
  }
}

/* Desktop layout */
.gofundme-desktop {
  display: none;
  width: 100%;
  max-width: 1100px;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  background: white;
  padding: 3.5rem 3rem;
}

.gofundme-text {
  flex: 1;
  text-align: left;
  max-width: 500px;
}

.gofundme-text p {
  color: var(--color-primary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.signature {
  font-weight: 600;
  margin-top: 2rem;
}

.gofundme-widget {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.gofundme-widget iframe {
  background-color: #f5f5f0;
  width: 100%;
}

@media (min-width: 900px) {
  .gofundme-section {
    padding: 0 2rem 10rem;
  }

  .gofundme-mobile {
    display: none;
  }

  .gofundme-desktop {
    display: flex;
  }
}
</style>
