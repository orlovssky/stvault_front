<template>
  <component :is="icon" class="icon" :class="{ 'icon--filled': !noFill }" />
</template>

<script setup lang="ts">
import type { DefineComponent } from "vue";

interface Props {
  icon: DefineComponent;
  noFill?: boolean;
}

const { icon, noFill } = withDefaults(defineProps<Props>(), {
  noFill: false,
});
</script>

<style scoped lang="scss">
@use "/assets/scss/components/base/icon.scss";
</style>
