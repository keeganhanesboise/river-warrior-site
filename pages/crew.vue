<script setup lang="ts">
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/images/camera_crew.webp' },
    { rel: 'preload', as: 'image', href: '/images/camera_crew.jpg' },
    { rel: 'preload', as: 'image', href: '/images/haley_mellon_headshot.jpg' },
    {
      rel: 'preload',
      as: 'image',
      href: '/images/cassia_sherrill_headshot.jpg'
    },
    { rel: 'preload', as: 'image', href: '/images/savannah_dodd_headshot.jpg' },
    {
      rel: 'preload',
      as: 'image',
      href: '/images/caroline_renfro_headshot.jpg'
    }
  ],
  title: 'Meet the Crew – River Warrior Documentary',
  meta: [
    // Standard meta description
    {
      name: 'description',
      content:
        'Meet the filmmakers behind River Warrior — the storytellers, documentarians, and visionaries who followed Ann Rose’s journey from Appalachia to the Gulf.'
    },

    // Open Graph tags
    {
      property: 'og:title',
      content: 'Meet the Crew – River Warrior Documentary'
    },
    {
      property: 'og:description',
      content:
        'Go behind the scenes with the River Warrior crew. Learn about the filmmakers who captured Ann Rose’s 1,895-mile river journey to raise awareness for clean water.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://riverwarriordocumentary.com/crew' },
    {
      property: 'og:image',
      content: 'https://riverwarriordocumentary.com/images/camera_crew.jpg'
    },

    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:title',
      content: 'Meet the Crew – River Warrior Documentary'
    },
    {
      name: 'twitter:description',
      content:
        'Meet the River Warrior documentary team — filmmakers, cinematographers, and field crew who brought Ann Rose’s journey to the screen.'
    },
    {
      name: 'twitter:image',
      content: 'https://riverwarriordocumentary.com/images/camera_crew.jpg'
    }
  ]
});

interface CrewMember {
  name: string;
  title: string;
  bio: string;
  bioMobile: string;
  image: string;
}

const crewMembers: CrewMember[] = [
  {
    name: 'Haley Mellon',
    title: 'Director & Producer',
    bio:
      '\tHaley Mellon is a documentarian based out of North Carolina. She grew up in Hickory, NC before she moved to Wilmington, NC to get her Film Studies degree. She now resides in Ashe County where she is working on multiple documentary projects that highlight the Appalachian lifestyle. Haley also works in the television and film industry in Charlotte year-round, working on everything from local commercials to big-budget features. \n' +
      '\tShe moved to the Appalachian mountains specifically to make a documentary. As she immersed herself in the culture that some of her ancestors came from, she fell in love with the area and decided to stay. When River Warrior came along, everything fell into place in the most divine way. Not only has River Warrior been the most thrilling and passionate project of her life, it led to some of the strongest and most rewarding new friendships. \n' +
      "\tRiver Warrior is keeping her busy along with some other documentary projects, such as: 1. A pilot episode that highlights traditional Appalachian arts (working alongside RW Producer Caroline Renfro) and 2. A mini documentary called Everyone's Uncle Bill about a behavioral psychologist with Alzheimer's, who helped to develop the H.A.M. program that sent the first chimp to the moon. Haley loves to highlight stories like these that inspire people to protect their individuality and bring hope into people's lives. She looks forward to all of her upcoming projects and can't wait for the world to be touched by the River Warrior story as much as she is.",
    bioMobile:
      'Haley Mellon is a North Carolina-based documentarian focused on Appalachian life. After earning her Film Studies degree in Wilmington, she moved to Ashe County to create a documentary and fell in love with the region. When River Warrior came along, everything aligned. It became her most passionate project—building lasting friendships and fueling new creative work. Haley is also developing a series on Appalachian arts and Everyone’s Uncle Bill, a mini-doc about a behavioral psychologist who helped launch the first chimp to space.',
    image: '/images/haley_mellon_headshot.jpg'
  },
  {
    name: 'Cassia Sherrill',
    title: 'Executive Producer',
    bio:
      '\tCassia Sherrill is a Los Angeles-based filmmaker, producer, and creative storyteller committed to the idea that stories have the power to change the world. Rooted in the belief that film can illuminate injustice, inspire action, and foster empathy, she brings a deep sense of purpose to every project she touches—whether on set, in the edit bay, or behind the scenes coordinating complex logistics. With a steady hand and a visionary spirit, she leads with both strategic clarity and creative heart, ensuring her films not only get made—but that they resonate.\n' +
      '\tHer career spans across genres and formats, including work on major studio sets like Netflix, where she supported the Transportation Department with budget tracking, equipment scheduling, and office operations. Her background also includes creative marketing leadership as the Social Media Manager at Milk Jar Cookies, where she directed content creation, calendar planning, and brand engagement—merging visual storytelling with community-building.\n' +
      '\tCassia earned her BA in Cinema-Television from Regent University, graduating cum laude and serving as a student leader and Resident Assistant. Her industry education was deepened through the Los Angeles Film Studies Center, where she studied film while working in Hollywood. Over the years, she has held titles ranging from producer and writer to director’s assistant, AD, and PA on both student films and industry-level productions. These experiences have given her a holistic understanding of filmmaking—on the ground and in development.\n' +
      '\tWhat unites all of Cassia’s work is her unwavering belief that stories matter. She is especially drawn to narratives that uplift unheard voices, advocate for justice, and stir collective transformation. For Cassia, film is not just entertainment—it is a tool for awakening, healing, and change.\n',
    bioMobile:
      'Cassia Sherrill is a Los Angeles-based filmmaker and producer driven by the belief that stories can transform the world. With experience on Netflix sets and in creative marketing, she blends logistics with vision. A Regent University alum, Cassia has worn many hats—producer, writer, AD, and more—developing a deep, holistic view of filmmaking. Passionate about justice, empathy, and impact, she gravitates toward narratives that uplift unheard voices and use film as a tool for change and healing.',
    image: '/images/cassia_sherrill_headshot.jpg'
  },
  {
    name: 'Savannah Dodd',
    title: 'Producer & Story Editor',
    bio:
      '\tSavannah Dodd is a seasoned Post-Production Supervisor and Creative Impact Producer with over 10 years of experience in documentary filmmaking, immersive media, and mission-driven content. Her expertise lies in guiding projects from development through final delivery, with a focus on environmental and social impact storytelling.\n' +
      '\tOriginally from Sri Lanka and Australia, Savannah is now based in Beverly Hills, California, where she champions nonfiction storytelling that educates, inspires, and sparks change. She currently leads post-production and impact strategy for the feature documentary River Warrior, where she oversees editorial workflows, coordinates international production logistics, and drives outreach efforts to align the film with grassroots and institutional partners.\n' +
      '\tSavannah holds an MFA in Film & Television and specializes in global post-production management and workflows through cloud-based platforms. Additionally her background in production includes extensive research and development, international field coordination, and the implementation of high-performing social media strategies with measurable ROI and audience growth exceeding 30 million viewers. Her work spans both nonprofit and corporate sectors, working with organizations such as Marriott International, First Media, The Ocean Exchange, Big Picture Ranch, and Immotion. She is deeply involved in independent film strategy, supporting the launch and creative development of early-stage projects through campaign planning, budget structuring, and team coordination, while bringing a unique ability to merge creative storytelling with strategic execution to deliver content that is both visually compelling and purpose-driven.\n',
    bioMobile:
      'Savannah Dodd is a Post-Production Supervisor and Creative Impact Producer with 10+ years in documentary and mission-driven media. Based in Beverly Hills, she leads post and impact strategy for River Warrior, aligning editorial, logistics, and outreach. Originally from Sri Lanka and Australia, Savannah holds an MFA in Film & TV and specializes in global workflows. Her work spans nonprofits and brands, merging storytelling with strategy to create visually compelling, purpose-driven content that informs, inspires, and drives real-world change.',
    image: '/images/savannah_dodd_headshot.jpg'
  },
  {
    name: 'Caroline Renfro',
    title: 'Producer',
    bio:
      "\tCaroline Renfro is an actor and emcee originally from Charlotte, NC. Formerly a personality for Radio Disney, the Charlotte Bobcats and the New York Knicks, Caroline spent over fifteen years traveling the country as a spokesperson and host. In 2015 Caroline had the honor of debuting the role of the Pilot in the Southeast regional premiere of 'Grounded', earning Creative Loafing Charlotte's Best Actor and Theatreperson of The Year accolades for her work. She has also directed and coached emerging emcees and performers in schools, community productions and national tours. \n" +
      '\tCaroline moved to Ashe County in 2021. Caroline previously worked as Business manager for international bluegrass sensations the Kruger Brothers and served as Chair/CEO of Lost Province Center for the Cultural Arts and spearheaded their community relief efforts in the wake of Hurricane Helene. She is currently producing a pilot for a television series about art in Appalachia and will be opening a recording studio, Buddy Holler, in Lansing, NC this summer. She believes passionately in the arts and arts education and is thrilled to be a part of River Warrior, a project and cause close to her heart.',
    bioMobile:
      'Caroline Renfro is an actor, emcee, and producer from Charlotte, NC, with over 15 years of national hosting experience. A celebrated stage performer, she earned Best Actor and Theatreperson of the Year for her role in Grounded. Now based in Ashe County, she’s produced community relief efforts, managed the Kruger Brothers, and leads arts advocacy through Lost Province Center. Caroline is producing a TV pilot on Appalachian art and launching a recording studio—while proudly supporting River Warrior.',
    image: '/images/caroline_renfro_headshot.jpg'
  }
];
</script>

<template>
  <main>
    <section class="hero">
      <picture>
        <source srcset="/images/camera_crew.webp" type="image/webp" />
        <img
          alt=""
          class="hero-image"
          height="1080"
          loading="eager"
          src="/images/camera_crew.jpg"
          width="1920" />
      </picture>
      <MainNavigation />
      <h1 class="hero-title">Crew</h1>
    </section>

    <section class="crew-members">
      <div class="member-container">
        <div v-for="(member, index) in crewMembers" :key="index" class="member">
          <div class="headshot-container">
            <img
              :alt="member.name + ' headshot'"
              class="headshot"
              height="350"
              loading="eager"
              :src="member.image"
              width="350" />
          </div>
          <div class="member-info">
            <h2 class="member-name">{{ member.name }}</h2>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-bio">{{ member.bio }}</p>
            <p class="member-bio-mobile">{{ member.bioMobile }}</p>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>

<style scoped>
.hero {
  position: relative;
  height: 60vh;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-title {
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.crew-members {
  padding: 4rem 2rem;
  background-color: var(--color-bg);
  min-height: 100vh;
}

.member-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.member {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.headshot-container {
  aspect-ratio: 1;
  overflow: hidden;
  max-width: 350px;
  margin: 0 auto;
}

.headshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  color: var(--color-primary);
  text-align: center;
  max-width: 350px;
  justify-self: center;
}

.member-name {
  margin: 0;
  color: var(--color-primary);
}

.member-title {
  margin: 0 0 1.5rem 0;
  color: var(--color-primary);
  opacity: 0.9;
}

.member-bio-mobile {
  display: none;
}

.member-bio {
  display: block;
  text-align: justify;
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .member-bio {
    display: none;
  }

  .member-bio-mobile {
    display: block;
    text-align: center;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
  }
}

@media (min-width: 768px) {
  .crew-members {
    padding: 4rem 2rem;
  }

  .member-container {
    gap: 8rem;
  }

  .member {
    grid-template-columns: 350px 1fr;
    gap: 3rem;
    align-items: start;
  }

  .member:nth-child(even) {
    direction: rtl;
  }

  .member:nth-child(even) > * {
    direction: ltr;
  }

  .headshot-container {
    max-width: none;
    margin: 0;
  }

  .member-info {
    text-align: left;
    max-width: none;
    justify-self: center;
  }

  .member:nth-child(even) .member-info {
    text-align: right;
  }
}
</style>
