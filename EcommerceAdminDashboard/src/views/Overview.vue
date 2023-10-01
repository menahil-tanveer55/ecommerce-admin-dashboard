<template>
  <v-container class="w-full">
    <div class="d-flex justify-space-evenly w-full">
      <StatisticsCard
        v-for="data in statisticsData"
        :key="`statistics-card-${data.title}`"
        :card-properties="data"
      />
    </div>
  </v-container>
</template>
<script setup lang="ts">
import StatisticsCard from '@/components/StatisticsCard.vue'
const statisticsData = [
  {
    title: 'total sales',
    figure: 2576911356,
    percentage: '2.4%',
    currencySymbol: '$'
  },
  {
    title: 'total Orders',
    figure: 76549953,
    percentage: '2.4%'
  }
]
</script>
<style scoped></style>
