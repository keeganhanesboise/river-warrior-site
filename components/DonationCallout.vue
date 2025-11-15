<template>
  <section class="donation-section">
    <div class="donation-container">
      <div class="donation-content">
        <div class="donation-image-wrapper">
          <img
            alt="Donation callout"
            class="donation-image rounded-lg shadow-sm"
            loading="lazy"
            src="/images/donation_callout.png" />
        </div>
        <div class="donation-text">
          <h2 class="donation-title section-title">Donate to this project</h2>
          <p>
            River Warrior is a fiscally sponsored project of Film Independent, a
            non-profit independent media arts organization. Film Independent
            will receive grants for the charitable purposes of River Warrior,
            provide oversight to ensure that grant funds are used in accordance
            with grant agreements, and provide reports as required by the
            grantor. Contributions for the charitable purposes of River Warrior
            must be made payable to Film Independent and are tax-deductible to
            the extent permitted by law. Please contact Cassia at
            <a href="mailto:annrosedocumentary2024@gmail.com">
              annrosedocumentary2024@gmail.com
            </a>
            for further information on our fiscal sponsorship through Film
            Independent.
          </p>
          <a
            class="donation-btn"
            href="https://my.filmindependent.org/RiverWarrior"
            rel="noopener noreferrer"
            target="_blank">
            Make a donation →
          </a>
        </div>
        <div class="donation-widget">
          <iframe
            height="auto"
            loading="lazy"
            src="https://www.filmindependent.org/sponsored-projects/river-warrior/"
            style="border: none"
            title="Film Independent Donation"
            width="100%" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.donation-section {
  display: flex;
  justify-content: center;
  background-color: #f5f5f0;
  padding: 0 2rem 4rem;
}

.donation-container {
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: white;
  padding: 2rem 1.5rem;
}

.donation-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  align-items: center;
}

.donation-image-wrapper {
  width: 100%;
  max-width: 480px;
  flex-shrink: 0;
  display: block;
}

.donation-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.donation-text {
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.donation-title {
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.donation-text p {
  color: var(--color-primary);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.donation-btn {
  display: inline-block;
  background-color: var(--color-btn);
  color: var(--color-light);
  padding: 0.85rem 2.2rem;
  border: solid var(--color-btn);
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s;
  box-shadow: var(--shadow-xs);
}

.donation-btn:hover {
  background-color: var(--color-btn-hover);
  color: var(--color-btn);
}

.donation-widget {
  display: none;
  width: 100%;
  height: 100%;
}

.donation-widget iframe {
  background-color: #f5f5f0;
  width: 100%;
  min-height: 400px;
}

@media (min-width: 900px) {
  .donation-section {
    padding: 0 2rem 10rem;
  }

  .donation-container {
    gap: 0;
    padding: 3.5rem 3rem;
  }

  .donation-content {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }

  .donation-image-wrapper {
    display: none;
  }

  .donation-title {
    text-align: left;
    margin-bottom: 1.5rem;
  }

  .donation-text {
    flex: 1;
    max-width: 500px;
    text-align: left;
    margin: 0;
  }

  .donation-widget {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  .donation-widget iframe {
    min-height: 535px;
  }
}
</style>
