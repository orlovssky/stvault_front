<template>
  <button
    class="button"
    :class="{
      'button--primary': props.variant === 'primary',
      'button--light': props.variant === 'light',
      'button--ghost': props.variant === 'ghost',
      'button--outlined': props.variant === 'outlined',
      'button--xs': props.size === 'xs',
      'button--sm': props.size === 'sm',
      'button--md': props.size === 'md',
      'button--lg': props.size === 'lg',
      'button--xl': props.size === 'xl',
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { Props } from "~/typings/base/button";

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
});
</script>

<style scoped lang="scss">
@use "/assets/scss/components/base/button/index.scss";
</style>
