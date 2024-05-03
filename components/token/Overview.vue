<template>
  <div class="overview">
    <NuxtImg v-if="Boolean(icon)" :src="icon" class="overview__icon" />
    <div class="overview__text">
      <div class="overview__name">{{ name }}</div>
      <div class="overview__symbol">{{ symbol }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon?: string;
  name: string;
  symbol: string;
}

const { icon } = defineProps<Props>();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/overview.scss";
</style>
