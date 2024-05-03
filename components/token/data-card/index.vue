<template>
  <div>
    <div class="title">
      <span class="title__title"> {{ title }}</span>
      <hr class="title__line" />
    </div>

    <TokenDataCardTable :rows="data" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  data: { key: string; value: string }[];
}

const { title, data } = defineProps<Props>();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/data-card/index.scss";
</style>
