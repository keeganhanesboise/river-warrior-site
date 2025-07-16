<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  imageSrc: string;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const handleClickOutside = (event: MouseEvent) => {
  if ((event.target as HTMLElement).classList.contains('lightbox-overlay')) {
    emit('close');
  }
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div
    v-if="isOpen"
    aria-label="Image lightbox"
    aria-modal="true"
    class="lightbox-overlay"
    role="button"
    tabindex="0"
    @click="handleClickOutside"
    @keydown.enter="emit('close')">
    <button
      aria-label="Close lightbox"
      class="close-button"
      @click="emit('close')">
      x
    </button>
    <div class="lightbox-content">
      <img
        alt=""
        loading="eager"
        :src="imageSrc"
        style="
          width: 100%;
          max-width: 1920px;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
        " />
    </div>
  </div>
</template>

<style scoped>
.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
  cursor: default;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 4px;
}

.close-button {
  position: fixed;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.close-button:focus {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
