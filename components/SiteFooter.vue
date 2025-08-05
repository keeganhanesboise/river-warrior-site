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
        <h3>Join the Journey</h3>

        <form
          class="contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
          name="contact">
          <input name="form-name" type="hidden" value="contact" />
          <p class="hidden">
            <label for="bot-field">
              Don't fill this out if you're human:
              <input id="bot-field" name="bot-field" />
            </label>
          </p>
          <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input
              id="name"
              class="form-input"
              name="name"
              placeholder="Your Name"
              required
              type="text" />
          </div>

          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input
              id="email"
              class="form-input"
              name="email"
              placeholder="Your Email"
              required
              type="email" />
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              class="form-textarea"
              name="message"
              placeholder="Your Message"
              required
              rows="4" />
          </div>

          <button class="submit-button" type="submit">Send Message</button>
        </form>

        <div class="contact-info">
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
                  :srcset="
                    social.icon.replace(/\.(png|jpg|jpeg|JPG)$/, '.webp')
                  "
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
  background-color: var(--color-primary);
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
  color: var(--color-accent);
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
  color: var(--color-accent);
}

.contact-form {
  margin-bottom: 2rem;
}

.hidden {
  display: none;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius, 4px);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  background-color: rgba(255, 255, 255, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: #1e3a2f;
  border: 2px solid transparent;
  border-radius: var(--radius, 4px);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #1e3a2f;
  color: #a8d4bc;
  border: 2px solid #a8d4bc;
  transform: translateY(-1px);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-message {
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: var(--radius, 4px);
  font-size: 0.9rem;
  background-color: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.submit-message.error {
  background-color: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
}

.contact-info {
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
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
  border-radius: var(--radius-round);
  background-color: transparent;
}

.social-link:hover {
  color: var(--color-accent);
  background-color: var(--color-accent);
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
