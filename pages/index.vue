<script setup>
useHead({
  title: 'River Warrior Documentary | Official Site',
  meta: [
    // Standard meta description
    {
      name: 'description',
      content:
        'River Warrior Documentary follows Ann Rose on her 1,895-mile solo kayak journey from Appalachia to the Gulf of Mexico. Watch the trailer for this inspiring documentary about water quality and environmental activism.'
    },
    {
      name: 'keywords',
      content:
        'River Warrior, River Warrior Documentary, Ann Rose, kayak journey, water quality, environmental documentary, Gulf of Mexico, Appalachian rivers, clean water activism'
    },
    {
      rel: 'canonical',
      href: 'https://riverwarriordocumentary.com/'
    },

    // Open Graph tags
    {
      property: 'og:title',
      content: "River Warrior Documentary | Ann Rose's Epic River Journey"
    },
    {
      property: 'og:description',
      content:
        'Follow Ann Rose on a 1,895-mile solo river journey from Appalachia to the Gulf of Mexico to raise awareness about the hidden crisis in America’s waterways.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://riverwarriordocumentary.com/' },
    {
      property: 'og:image',
      content: 'https://riverwarriordocumentary.com/images/hero-video-fallback.jpg'
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
      content: 'https://riverwarriordocumentary.com/images/hero-video-fallback.jpg'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Movie',
        name: 'River Warrior Documentary',
        description:
          'A documentary following Ann Rose on her 1,895-mile solo kayak journey from Appalachia to the Gulf of Mexico to raise awareness about water quality and environmental activism.',
        director: {
          '@type': 'Person',
          name: 'Cassia Sherrill'
        },
        actor: {
          '@type': 'Person',
          name: 'Ann Rose'
        },
        genre: ['Documentary', 'Environmental', 'Adventure'],
        url: 'https://riverwarriordocumentary.com/',
        image:
          'https://riverwarriordocumentary.com/images/hero-video-fallback.jpg',
        dateCreated: '2024',
        inLanguage: 'en-US',
        keywords:
          'River Warrior, documentary, environmental activism, kayak journey, water quality, Ann Rose'
      })
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
      <DonationCallout />
      <SiteFooter />
    </section>
  </main>
</template>
