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
      'button--round': props.round,
    }"
  >
    <component :is="icon" class="button__icon" />
  </button>
</template>

<script setup lang="ts">
import type { DefineComponent } from "vue";
import type { Props as ButtonProps } from "~/typings/base/button";

interface Props extends ButtonProps {
  icon: DefineComponent;
  round?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "sm",
  round: false,
});
</script>

<style scoped lang="scss">
@use "/assets/scss/components/base/button/icon.scss";
</style>
