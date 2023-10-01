<template>
  <v-card class="mx-6" variant="flat" width="480px">
    <v-card-item>
      <div>
        <div class="mb-1 d-flex justify-space-between w-100">
          <div class="text-capitalize text-blue-grey text-caption">
            {{ cardProperties.title }}
          </div>
          <div>
            <v-icon
              size="large"
              color="indigo-lighten-1"
              icon="mdi-package-variant-closed"
            ></v-icon>
          </div>
        </div>
        <div class="text-h5 text-blue-grey-darken-3 mb-1">
          {{ cardProperties.currencySymbol }}{{ formatNumber(cardProperties.figure) }}
        </div>
      </div>
    </v-card-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-chip class="ma-2" color="teal-accent-4" label size="small">
        <v-icon start size="x-small" icon="mdi-plus"></v-icon>
        {{ cardProperties.percentage }}
      </v-chip>
      <span class="text-caption text-blue-grey">From last month</span>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { formatNumber } from '@/utilities'

defineProps({
  cardProperties: {
    type: Object,
    default: () => {
      return {
        title: '',
        figure: 0,
        percentage: '0%',
        currencySymbol: ''
      }
    },
    required: true
  },
  loading: Boolean
})
</script>
