<template>
  <v-card width="98%" class="mx-10 my-10" :elevation="0">
    <v-card-title class="">
      <p>List of All Products</p>

      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        density="compact"
        variant="outlined"
        clearable
        class="float-right w-25"
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="HEADERS" :items="items" :search="search" items-per-page="10">
      <template v-slot:item.status="{ item }">
        <v-chip
          :color="item.stockLevel > 0 ? 'teal' : 'red'"
          variant="tonal"
          label
          compact
          class="ma-1 text-capitalize"
          :rounded="false"
          size="small"
        >
          {{ item.stockLevel > 0 ? 'available' : 'unavailable' }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>
<script lang="ts" setup>
// Imports
import { reactive, ref, computed } from 'vue'
import { useMainStore } from '@/stores/mainStore'
const mainStore = useMainStore()
// Constants
const HEADERS = reactive([
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Name'
  },
  { key: 'description', title: 'Description' },
  { key: 'price', title: '$ Price', sortable: true },
  { key: 'stockLevel', title: 'Stock Level', sortable: true },
  { key: 'status', title: 'Status', sortable: true, value: 'status' }
])
// States
const search = ref('')
const items = computed(() => {
  return mainStore.getAllProducts
})
</script>
