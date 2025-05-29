<script setup lang="ts">
interface CrewMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const crewMembers: CrewMember[] = [
  {
    name: 'Haley Mellon',
    title: 'Director & Producer',
    bio: 'Haley is a North Carolina-based filmmaker who currently works in the commercial space in Charlotte, NC. This feature film will serve as her directing debut on her own documentary. Haley loves to tell the stories of hard-to-find people and give their vivid stories a platform to promote independent thinking and individuality. She hopes to change the mindset of the world through truth, grit, and humor.',
    image: '/images/haley_mellon_headshot.png'
  },
  {
    name: 'Cassia Sherrill',
    title: 'Executive Producer',
    bio: "Cassia is an up-and-coming feature film producer/director located in Los Angeles, who has worked on many award-winning projects on a variety of different levels. Her passions for film stem from her love of story, and she truly believes in the power of a good story having the ability to change the world. When signing on to this documentary, it was Ann Rose's story, grit, and determination that intrigued and compelled her.",
    image: '/images/cassia_sherrill_headshot.png'
  },
  {
    name: 'Savannah Dodd',
    title: 'Producer & Editor',
    bio:
      'Savannah is an Audio/Video Producer with a rich cultural blend of Sri Lankan, Australian, and American roots, currently based in Los Angeles, California. Her journey in the world of media production has been as diverse and colorful as her heritage.\n' +
      'From captivating documentaries to creating tantalizing viral food content, her portfolio reflects an unwavering passion for every facet of audio and video production. Immersed in different cultures during her formative years, Savannah developed an early affinity for the arts, igniting a lifelong dedication to the craft of entertainment.\n' +
      'Armed with both a BFA and MFA in Film & Television Production from the prestigious Savannah College of Art & Design, her education and experiences have not only honed technical skills but also imbued her with an adventurous spirit and innate storytelling prowess.\n' +
      'Over the past decade, Savannah has had the honor of crafting compelling long-form and short-form videos for renowned organizations such as Marriott International, Oceana, First Media, and Big Picture Ranch. Her work has not only captivated audiences but has also left a lasting impact, showcasing her ability to marry creativity with technical excellence.\n' +
      "Beyond the confines of the studio and editing suite, she can often be found embarking on outdoor adventures with her husband, indulging in their shared passions for hiking, scuba diving, and exploring the breathtaking landscapes of Southern California's national parks.",
    image: '/images/savannah_dodd_headshot.png'
  },
  {
    name: 'Caroline Renfro',
    title: 'Producer',
    bio: "Caroline Renfro is an actor and emcee originally from Charlotte, NC. Formerly a personality for Radio Disney, the Charlotte Bobcats and the New York Knicks, Caroline spent over fifteen years traveling the country as a spokesperson and host. In 2015, Caroline had the honor of debuting the role of the Pilot in the regional premiere of 'Grounded', earning Creative Loafing Charlotte's Best Actor and Theatreperson of The Year accolades for her work. She has directed and coached young emcees and performers in schools, community productions and national tours. Caroline moved to Ashe County in 2021, where she works with Swiss-American bluegrass phenoms the Kruger Brothers and serves on the executive board of Lost Province Center for Cultural Arts. Having spent most of her time in film in front of the camera, Caroline is thrilled to put her leadership skills to work behind the camera to help bring this project to you!",
    image: '/images/caroline_renfro_headshot.png'
  }
];
</script>

<template>
  <main>
    <section class="hero">
      <img alt="" class="hero-image" src="/images/camera_crew.jpg" />
      <MainNavigation />
      <h1 class="hero-title">The Crew</h1>
    </section>

    <section class="crew-members">
      <div class="member-container">
        <div v-for="(member, index) in crewMembers" :key="index" class="member">
          <div class="headshot-container">
            <img alt="" class="headshot" :src="member.image" />
          </div>
          <div class="member-info">
            <h2 class="member-name">{{ member.name }}</h2>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-bio">{{ member.bio }}</p>
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
  font-size: 3.5rem;
  text-align: center;
  margin: 0;
  padding: 0 1rem;
}

.crew-members {
  padding: 4rem 2rem;
  background-color: #f5f5f0;
  min-height: 100vh;
}

.member-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.member {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.headshot-container {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  max-width: 350px;
  margin: 0 auto;
}

.headshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  color: #1e3a2f;
  text-align: center;
}

.member-name {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  color: #1e3a2f;
}

.member-title {
  font-size: 1.25rem;
  margin: 0 0 1.5rem 0;
  color: #1e3a2f;
  opacity: 0.9;
}

.member-bio {
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3.5rem;
  }

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
  }

  .member:nth-child(even) .member-info {
    text-align: right;
  }

  .member-name {
    font-size: 2.5rem;
  }
}
</style>
