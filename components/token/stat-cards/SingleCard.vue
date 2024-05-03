<template>
  <div
    class="card"
    :class="{
      'card--green': props.color === 'green',
      'card--blue': props.color === 'blue',
      'card--orange': props.color === 'orange',
      'card--purple': props.color === 'purple',
    }"
  >
    <div class="card__title">{{ props.title }}</div>
    <div class="card__content">
      <div class="card__value">{{ props.value }}</div>
      <div
        class="card__addition"
        :class="{
          'card__addition--green': props.additionColor === 'green',
          'card__addition--red': props.additionColor === 'red',
        }"
      >
        <span v-if="additionText">
          {{ props.additionText }}
        </span>

        <component
          :is="props.additionIcon"
          class="card__addition-icon"
          :class="{
            'card__addition-icon--large': !Boolean(props.additionText),
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type DefineComponent } from "vue";

interface Props {
  title: string;
  value: string | number;
  color?: "green" | "blue" | "orange" | "purple";
  additionText?: string;
  additionIcon?: DefineComponent;
  additionColor?: "green" | "red";
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/stat-cards/single-card.scss";
</style>
