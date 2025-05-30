<script setup lang="ts">
interface NavLink {
  name: string;
  url: string;
}

const route = useRoute();
const isHomePage = computed(() => route.path === '/');

const allLinks: NavLink[] = [
  { name: 'HOME', url: '/' },
  { name: 'IMPACT', url: '/impact' },
  { name: 'CREW', url: '/crew' },
  { name: 'PRESS', url: '/#press' },
  { name: 'CONNECT', url: '/#connect' }
];

const links = computed(() => {
  const currentPath = route.path;
  return allLinks.filter((link) => {
    // Don't show the current page in navigation
    return link.url !== currentPath;
  });
});
</script>

<template>
  <nav class="navigation">
    <ul>
      <li
        v-for="(link, index) in links"
        :key="link.name"
        :class="{ 'fade-in': isHomePage }"
        :style="
          isHomePage ? { animationDelay: `${index * 200 + 1000}ms` } : {}
        ">
        <NuxtLink class="nav-link" :to="link.url">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation {
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 1rem;
  z-index: 10;
}

.navigation ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  padding: 0.5rem 0.75rem;
  position: relative;
  display: inline-block;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.75rem;
  right: 0.75rem;
  width: calc(100% - 1.5rem);
  height: 2px;
  background-color: white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 640px) {
  .navigation ul {
    gap: 3rem;
  }
}
</style>
