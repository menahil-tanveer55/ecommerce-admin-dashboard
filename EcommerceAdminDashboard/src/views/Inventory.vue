<template>
  <v-container class="d-flex flex-column w-full justify-center p-4" style="width: 100vw">
    <p class="text-h5 px-10 text-grey-darken-3">Inventory Management</p>
    <div class="d-flex justify-end">
      <AddProductModal />
    </div>
    <ProductTable />
  </v-container>
</template>
<script setup lang="ts">
import ProductTable from '@/components/ProductTable.vue'
import AddProductModal from '@/components/AddProductModal.vue'
</script>
