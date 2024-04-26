<template>
  <div class="not-found">
    <IIllustrationsNotFound class="not-found__image" />

    <template v-if="search">
      <div class="not-found__title">No results found for "{{ search }}"</div>
      <div class="not-found__subtitle">
        Try shortening or rephrasing your search
      </div>
      <BaseButton class="not-found__button" @click="setSearch('')">
        Reset Search
      </BaseButton>
    </template>

    <div v-else class="not-found__title">No results found</div>
  </div>
</template>

<script setup lang="ts">
const { search, setSearch } = useHeaderSearch();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/layout/default/search-not-found.scss";
</style>
