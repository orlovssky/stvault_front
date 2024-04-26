<template>
  <table class="table">
    <tbody>
      <tr
        v-for="({ key, value }, index) in rows"
        :key="index"
        class="table__row"
      >
        <td class="table__key">{{ key }}</td>
        <td class="table__value">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface Props {
  rows: { key: string; value: string }[];
}

const { rows } = defineProps<Props>();
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/data-card/table.scss";
</style>
