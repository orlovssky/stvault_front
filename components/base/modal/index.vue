<template>
  <div v-if="props.isOpen" class="modal">
    <div class="modal__wrapper" @click.self="emit('close')">
      <div class="modal__container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  isOpen: boolean;
}
interface Emits {
  (e: "close"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/base/modal/index.scss";
</style>
