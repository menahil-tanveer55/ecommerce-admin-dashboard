<template>
  <Bar id="sales-chart" :options="chartOptions" :data="chartData" />
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs'
import { PropType } from 'vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
// Interfaces
interface ISalesData {
  data: number[]
  labels: string[]
}
export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    salesData: {
      type: Object as PropType<ISalesData>,
      required: true
    }
  },
  data() {
    return {
      selection: 2,
      chartData: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Sales 2022',
            backgroundColor: '#E8EAF6',
            borderColor: '#3F51B5',
            borderWidth: 1,
            data: [65, 59, 100, 120, 200, 300, 10, 0, 8, 11, 13, 130]
          },
          {
            label: 'Sales 2023',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 70, 120, 50, 100, 310, 10, 5, 20, 30]
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
