<template>
  <div class="search">
    <BaseInput
      ref="inputRef"
      class="search__input"
      placeholder="Type to search"
      :start-icon="IconSearch"
      v-model:model-value="q"
      @enter="handleSearch"
    />
    <BaseButton variant="light" class="search__button" @click="handleSearch">
      Search
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import IconSearch from "~/assets/icons/tabler/search.svg";

const { search, setSearch } = useHeaderSearch();
const { push, getRoutes } = useRouter();
const route = useRoute();

const q = defineModel<string>();

interface Ref {
  blur: () => void;
}

watch(search, (newValue) => {
  if (newValue === "") {
    q.value = "";
  }
});

const inputRef = ref<Ref>();

// const handleEnter = () => {
//   inputRef.value?.blur();
// };

const handleSearch = () => {
  if (typeof q.value === "string") {
    setSearch(q.value);
  }

  if (route.name === "token-id") {
    push({ name: "index" });
  }
};
</script>

<style scoped lang="scss">
@use "/assets/scss/components/layout/default/search.scss";
</style>
