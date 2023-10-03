<template>
  <v-container class="w-full">
    <div class="d-flex justify-space-evenly w-full">
      <StatisticsCard
        v-for="data in statisticsData"
        :key="`statistics-card-${data.title}`"
        :card-properties="data"
      />
    </div>
    <div class="mt-10">
      <v-card :elevation="0" class="pa-10 mx-6">
        <div class="d-flex justify-space-between">
          <p class="text-h6">Sales Trend</p>
          <v-chip-group v-model="state.selection" column variant="outlined" color="indigo">
            <v-chip label>Daily</v-chip>
            <v-chip label>Weekly</v-chip>
            <v-chip label>Monthly</v-chip>
            <v-chip label>Annually</v-chip>
          </v-chip-group>
        </div>
        <BarChart v-model="state.chartData"
      /></v-card>
    </div>
  </v-container>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import StatisticsCard from '@/components/StatisticsCard.vue'
import BarChart from '@/Components/BarChart.vue'
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
const state = reactive({
  selection: 2,
  chartData: {
    labels: [],
    data: []
  }
})
</script>
<style scoped></style>
