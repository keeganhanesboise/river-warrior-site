<script setup>
useHead({
  title: 'River Warrior Documentary',
  meta: [
    // Standard meta description
    {
      name: 'description',
      content:
        'Watch the trailer for River Warrior – a documentary about an off-grid Appalachian farmer who kayaked 1,895 miles to the Gulf to raise awareness for clean water.'
    },

    // Open Graph tags
    { property: 'og:title', content: 'River Warrior – Journey by Water' },
    {
      property: 'og:description',
      content:
        'Follow Ann Rose on a 1,895-mile solo river journey from Appalachia to the Gulf of Mexico to raise awareness about the hidden crisis in America’s waterways.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://riverwarrior.netlify.app/' },
    {
      property: 'og:image',
      content: 'https://riverwarrior.netlify.app/images/hero-video-fallback.jpg'
    },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'River Warrior – Journey by Water' },
    {
      name: 'twitter:description',
      content:
        'An inspiring river documentary about one woman’s paddle-powered mission to protect America’s water. Watch the trailer now.'
    },
    {
      name: 'twitter:image',
      content: 'https://riverwarrior.netlify.app/images/hero-video-fallback.jpg'
    }
  ]
});
</script>

<template>
  <main>
    <section>
      <HeroVideo />
      <Trailer />
      <ScrollingStory />
      <ImpactCallout />
      <SiteFooter />
    </section>
  </main>
</template>
