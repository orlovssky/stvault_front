<template>
  <NuxtLink to="/" class="logo-link" @click="setSearch('')">
    <!-- <ILogoSimple class="logo-link__icon" no-fill /> -->
    <!-- <span class="logo-link__name">STO</span> -->
    <ILogoFull class="logo-link__icon" no-fill />
  </NuxtLink>
</template>

<script setup lang="ts">
const { setSearch } = useHeaderSearch();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/layout/default/logo-link.scss";
</style>
