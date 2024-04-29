<template>
  <div class="cards">
    <TokenStatCardsSingleCard
      color="green"
      title="Price"
      :value="formatCurrency(price, currency)"
      :addition-text="priceChange.price"
      :addition-icon="priceChange.icon"
    />

    <TokenStatCardsSingleCard
      color="blue"
      title="Market cap"
      :value="formatCurrency(price * totalSupply, currency)"
      :addition-icon="IconDollar"
    />

    <TokenStatCardsSingleCard
      color="orange"
      title="Total Supply"
      :value="formatNumber(totalSupply)"
      :addition-icon="IconCoins"
    />

    <TokenStatCardsSingleCard
      color="purple"
      title="Last tx"
      :value="formatDate(lastTickTime)"
      :addition-icon="IconCalendar"
    />
  </div>
</template>

<script setup lang="ts">
import IconDollar from "~/assets/icons/tabler/dollar.svg";
import IconUp from "~/assets/icons/tabler/arrow-up.svg";
import IconDown from "~/assets/icons/tabler/arrow-down.svg";
import IconCoins from "~/assets/icons/iconoir/coins.svg";
import IconCalendar from "~/assets/icons/solar/calendar.svg";
import { type DefineComponent } from "vue";
import {
  formatNumber,
  formatCurrency,
} from "~/utilities/helpers/format-data/number";
import { formatDate } from "~/utilities/helpers/format-data/date";

interface Props {
  price: number;
  totalSupply: number;
  currency: string;
  lastTickTime: number;
  exchangeId: string;
}

interface ChartResponse {
  status: number;
  data: {
    price: number;
    time: number;
  }[];
}

const { price, totalSupply, currency, lastTickTime, exchangeId } =
  defineProps<Props>();

const { id } = useRoute().params;
const { data: chart } = await useFetch<ChartResponse>(
  "https://api.stvault.io/chart",
  {
    query: {
      tokenId: id,
      exchangeId,
      granularity: "d1",
    },
  }
);

const isYesterday = (unix: number) => {
  const date = new Date(unix * 1000);
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};

const priceChange = shallowRef<{
  price: string | undefined;
  icon: DefineComponent | undefined;
}>({
  price: undefined,
  icon: undefined,
});

if (chart.value) {
  for (const { time } of chart.value.data) {
    if (isYesterday(time)) {
      const priceChangeCalculated =
        ((price - chart.value?.data[0].price) / price) * 100.0;

      if (priceChangeCalculated) {
        const sign = priceChangeCalculated > 0 ? "+" : "";

        priceChange.value = {
          price: `${sign}${priceChangeCalculated.toFixed(2)}`,
          icon: priceChangeCalculated > 0 ? IconUp : IconDown,
        };
      }
    }
  }
}
</script>

<style scoped lang="scss">
@use "/assets/scss/components/token/stat-cards/index.scss";
</style>
