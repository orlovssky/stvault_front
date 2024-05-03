<template>
  <BaseLoaderCircular v-if="pending" />

  <template
    v-else-if="tokens && Array.isArray(tokens.data) && tokens.data.length"
  >
    <h1 class="title">Tokenized Assets</h1>

    <div class="table">
      <table class="table__table">
        <thead class="table__head">
          <tr class="table__head-row">
            <th class="table__head-cell">Token</th>
            <th class="table__head-cell">Price</th>
            <th class="table__head-cell">Market Cap</th>
            <th class="table__head-cell">Blockchain</th>
            <th class="table__head-cell">Issuer</th>
          </tr>
        </thead>

        <tbody class="table__body">
          <tr
            v-for="token in tokens.data"
            :key="token.id"
            class="table__body-row"
            @click="handleRowClick(token.id)"
          >
            <td class="table__body-cell overview">
              <NuxtImg
                v-if="Boolean(token.icon)"
                :src="token.icon"
                class="overview__icon"
              />
              <div
                class="overview__text"
                :style="!Boolean(token.icon) ? 'margin-left: 32px' : ''"
              >
                <div class="overview__name">{{ token.name }}</div>
                <div class="overview__symbol">{{ token.symbol }}</div>
              </div>
            </td>
            <td class="table__body-cell">
              {{ formatCurrency(token.priceUSD, "USD") }}
            </td>
            <td class="table__body-cell">
              {{ formatCurrency(token.priceUSD * token.totalSupply, "USD") }}
            </td>
            <td class="table__body-cell">
              {{ token.chain.charAt(0).toUpperCase() + token.chain.slice(1) }}
            </td>

            <td class="table__body-cell">{{ token.issuer.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <template v-else>
    <LayoutDefaultSearchNotFound />
  </template>
</template>

<script setup lang="ts">
import { formatCurrency } from "~/utilities/helpers/format-data/number";

interface TokensResponse {
  status: number;
  data: {
    id: string;
    name: string;
    icon: string;
    symbol: string;
    chain: string;
    priceUSD: number;
    totalSupply: number;
    issuer: {
      name: string;
    };
  }[];
}

const { push } = useRouter();
const { search } = useHeaderSearch();

const { data: tokens, pending } = await useAsyncData(
  () => {
    let endpoint = "https://api.stvault.io/tokens";

    if (search.value) {
      endpoint += `/search?title=${encodeURIComponent(search.value)}`;
    }

    return $fetch<TokensResponse>(endpoint);
  },
  {
    watch: [search],
  }
);

const handleRowClick = (id: string) => {
  push({ name: "token-id", params: { id } });
};
</script>

<style scoped lang="scss">
@use "/assets/scss/pages/index.scss";
</style>
