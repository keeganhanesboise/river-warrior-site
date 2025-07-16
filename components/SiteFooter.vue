<script setup lang="ts">
const currentYear = new Date().getFullYear();

interface FooterLink {
  name: string;
  url: string;
}

interface FooterSocialIcon {
  name: string;
  url: string;
  icon: string;
}

const siteLinks: FooterLink[] = [
  { name: 'Home', url: '/' },
  { name: 'Impact', url: '/impact' },
  { name: 'Crew', url: '/crew' },
  { name: 'Press', url: '/press' }
];

const socialLinks: FooterSocialIcon[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/riverwarrior2024/',
    icon: '/images/instagram_logo.svg'
  }
];
</script>

<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <picture>
          <source
            srcset="/images/rw_paddle_icon_white.webp"
            type="image/webp" />
          <img
            alt="River Warrior Paddle Icon"
            class="footer-logo"
            loading="lazy"
            src="/images/rw_paddle_icon_white.png" />
        </picture>
      </div>

      <div class="footer-section links">
        <h3>Navigation</h3>
        <ul>
          <li v-for="link in siteLinks" :key="link.name">
            <NuxtLink :to="link.url">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h3>Contact</h3>
        <a class="email-link" href="mailto:annrosedocumentary2024@gmail.com">
          annrosedocumentary2024@gmail.com
        </a>
        <div class="social-links">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            class="social-link"
            :href="social.url"
            rel="noopener noreferrer"
            target="_blank">
            <picture v-if="social.icon.endsWith('.svg') === false">
              <source
                :srcset="social.icon.replace(/\.(png|jpg|jpeg|JPG)$/, '.webp')"
                type="image/webp" />
              <img
                alt="Documentary Instagram Page"
                class="social-icon"
                loading="lazy"
                :src="social.icon" />
            </picture>
            <img
              v-else
              alt="Documentary Instagram Page"
              class="social-icon"
              loading="lazy"
              :src="social.icon" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        © {{ currentYear }} River Warrior Documentary. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #1e3a2f;
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-content {
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 0 auto 3rem;
}

.footer-section {
  text-align: center;
}

.footer-logo {
  width: 80px;
  height: auto;
}

.footer-section h3 {
  color: #a8d4bc;
  font-size: 1.25rem;
  margin: 0 0 1rem;
}

.links ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.links a {
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #a8d4bc;
}

.email-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #a8d4bc;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
}

.social-link {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
}

.social-link:hover {
  color: #a8d4bc;
  background-color: #a8d4bc;
}

.social-icon {
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition: filter 0.3s ease;
}

.social-link:hover .social-icon {
  filter: brightness(0) invert(0.2);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0;
}

@media (min-width: 640px) {
  .links a {
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .links ul {
    justify-content: normal;
    flex-direction: column;
  }

  .footer-content {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    text-align: left;
  }

  .footer-section {
    text-align: left;
  }

  .brand {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .social-links {
    justify-content: flex-start;
  }
}
</style>
