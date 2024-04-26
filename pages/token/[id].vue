<template>
  <BaseLoaderCircular v-if="pending" />

  <div v-else-if="token?.data?.id" class="token">
    <TokenOverview
      class="token__item"
      :name="token.data.name"
      :symbol="token.data.symbol"
      :icon="token.data.icon"
    />

    <TokenStatCards
      class="token__item"
      :price="token.data.markets[0].price"
      :totalSupply="token.data.totalSupply"
      :currency="token.data.markets[0].baseCurrency"
      :lastTickTime="token.data.markets[0].lastTickTime"
      :exchangeId="token.data.markets[0].exchangeId"
    />

    <TokenPriceCard
      class="token__item token__item--outlined token__item--full-row"
      :exchangeId="token.data.markets[0].exchangeId"
    />

    <TokenDataCard
      class="token__item token__item--outlined"
      title="Legal Info"
      :data="[
        {
          key: 'Issuer',
          value: token.data.issuer.name,
        },
        {
          key: 'Industry',
          value: token.data.issuer.industry,
        },
        {
          key: 'Founding year',
          value: token.data.issuer.foundingYear.toString(),
        },
        {
          key: 'Total supply',
          value: formatNumber(token.data.totalSupply),
        },
      ]"
    />

    <TokenDataCard
      class="token__item token__item--outlined"
      title="Token Data"
      :data="[
        { key: 'Blockchain', value: token.data.chain },
        {
          key: 'SC address',
          value: token.data.address,
        },
        {
          key: 'Market cap',
          value: formatCurrency(
            token.data.markets[0].price * token.data.totalSupply,
            token.data.markets[0].baseCurrency
          ),
        },
        {
          key: 'Last tx',
          value: formatDate(token.data.markets[0].lastTickTime),
        },
      ]"
    />
  </div>

  <template v-else>No data found.</template>
</template>

<script setup lang="ts">
import {
  formatNumber,
  formatCurrency,
} from "~/utilities/helpers/format-data/number";
import { formatDate } from "~/utilities/helpers/format-data/date";

interface TokenResponse {
  status: number;
  data: {
    id: string;
    name: string;
    symbol: string;
    icon: string;
    totalSupply: number;
    chain: string;
    address: string;
    issuer: {
      name: string;
      description: string;
      url: string;
      industry: string;
      foundingYear: number;
    };
    markets: {
      id: string;
      baseCurrency: string;
      price: number;
      lastTickTime: number;
      exchangeId: string;
    }[];
  };
}

const { id } = useRoute().params;
const { data: token, pending } = useFetch<TokenResponse>(
  `https://api.stvault.io/token/${id}`,
  {
    server: false,
  }
);
</script>

<style scoped lang="scss">
@use "/assets/scss/pages/token/id.scss";
</style>
