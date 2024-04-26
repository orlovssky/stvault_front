<template>
  <div>
    <header class="header">
      <h3 class="header__title">Price</h3>

      <div class="buttons">
        <BaseButton
          :variant="granularity === 'h1' ? 'primary' : 'ghost'"
          size="xs"
          class="buttons__item"
          @click="granularity = 'h1'"
        >
          1 h
        </BaseButton>

        <BaseButton
          :variant="granularity === 'd1' ? 'primary' : 'ghost'"
          size="xs"
          class="buttons__item"
          @click="granularity = 'd1'"
        >
          1 d
        </BaseButton>
      </div>

      <div></div>
    </header>

    <TokenPriceCardLineChart v-if="chart" class="chart" :data="chart.data" />
  </div>
</template>

<script setup lang="ts">
import IconQuestion from "~/assets/icons/iconoir/question.svg";

interface Props {
  exchangeId: string;
}

interface ChartResponse {
  status: number;
  data: {
    price: number;
    time: number;
  }[];
}

const props = defineProps<Props>();
const granularity = ref<"h1" | "d1">("d1");

const { id } = useRoute().params;

const { data: chart } = useAsyncData<ChartResponse>(
  () =>
    $fetch("https://api.stvault.io/chart", {
      query: {
        tokenId: id,
        exchangeId: props.exchangeId,
        granularity: granularity.value,
      },
    }),
  {
    server: false,
    watch: [granularity],
  }
);
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/price-card/index.scss";
</style>
