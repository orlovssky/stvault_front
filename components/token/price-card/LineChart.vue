<template>
  <div>
    <Line ref="input" :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { baseLocale } from "~/utilities/constants/locale";

import {
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  type ChartData,
} from "chart.js";
import { Line, type ChartProps } from "vue-chartjs";

interface Props {
  data: {
    price: number;
    time: number;
  }[];
}
const props = defineProps<Props>();

const input = ref(null);

const formatDate = (value: number) => {
  const date = new Date(value);

  return new Intl.DateTimeFormat(baseLocale, {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

const chartData = computed(() => {
  const items = props.data.slice();
  items.sort((a, b) => a.time - b.time);

  return items;
});

const data = ref<ChartData<"line">>({
  labels: chartData.value.map(({ time }) => formatDate(time * 1000)),
  datasets: [
    {
      data: chartData.value.map(({ price }) => price),
      tension: 0.5,
      borderColor: "#4F46E5",
      pointBackgroundColor: "transparent",
      pointBorderWidth: 0,
      pointHoverBackgroundColor: "#4F46E5",
      pointHoverRadius: 8,
      pointHoverBorderColor: "white",
      pointHoverBorderWidth: 3,
      backgroundColor: "rgba(238, 242, 255, 0.5)",
      fill: true,
    },
  ],
});

const options: ChartProps<"line">["options"] = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    tooltip: {
      displayColors: false,
      padding: 12,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#E4E4E7",
      titleColor: "#18181B",
      titleAlign: "center",
      bodyColor: "#18181B",
      bodyAlign: "center",
    },
  },
};
Chart.defaults.font = {
  family: "Plus Jakarta Sans",
  size: 10,
  style: "normal",
  weight: 500,
  lineHeight: 1.2,
};

watch(props, (newProps) => {
  const items = newProps.data.slice();
  items.sort((a, b) => a.time - b.time);

  data.value = {
    labels: items.map(({ time }) => formatDate(time * 1000)),
    datasets: [
      {
        data: items.map(({ price }) => price),
        tension: 0.5,
        borderColor: "#4F46E5",
        pointBackgroundColor: "transparent",
        pointBorderWidth: 0,
        pointHoverBackgroundColor: "#4F46E5",
        pointHoverRadius: 8,
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 3,
        backgroundColor: "rgba(238, 242, 255, 0.5)",
        fill: true,
      },
    ],
  };
});

Chart.register(
  CategoryScale,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
);
</script>
