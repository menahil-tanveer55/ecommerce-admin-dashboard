<template>
  <v-dialog v-model="state.dialog" persistent width="500px">
    <template v-slot:activator="{ props }">
      <v-btn color="indigo-darken-1" variant="flat" v-bind="props">
        <v-icon start size="x-small" icon="mdi-plus"></v-icon> Product
      </v-btn>
    </template>
    <v-card width="500px">
      <v-card-title>
        <span class="text-h5">Product Details</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Name*"
                required
                variant="outlined"
                v-model="state.product.name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Description*"
                required
                variant="outlined"
                v-model="state.product.description"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Price*"
                type="number"
                required
                variant="outlined"
                v-model="state.product.price"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Initial Stock Level*"
                type="number"
                required
                variant="outlined"
                v-model="state.product.stockLevel"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                label="Upload product image*"
                v-model="selectedImage"
                accept="image/*"
                @change="uploadImage"
                variant="outlined"
              ></v-file-input>

              <v-img
                v-if="imageUrl"
                :src="imageUrl"
                max-width="400"
                max-height="400"
                contain
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="grey-darken-4 text-capitalize" variant="tonal" @click="state.dialog = false">
          Cancel
        </v-btn>
        <v-btn color="teal-accent-4 text-capitalize" variant="flat" @click="saveProduct()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useMainStore } from '@/stores/mainStore'

// Store
const mainStore = useMainStore()
// Refs
const selectedImage = ref(null)
const imageUrl = ref(null)
// State
const state = reactive({
  dialog: false,
  product: {
    name: '',
    description: '',
    price: null,
    stockLevel: null,
    image: null
  }
})
// Methods
function uploadImage(event) {
  const file = event.target.files[0] // Get the selected file
  if (!file) return
  // Use FileReader to read the selected image file
  const reader = new FileReader()
  reader.onload = (e) => {
    // Update imageUrl and selectedImage with the selected image data
    imageUrl.value = e.target.result
    selectedImage.value = file
    state.product.image = e.target.result
  }
  reader.readAsDataURL(file)
}

function saveProduct() {
  mainStore.addProduct(state.product)
  state.dialog = false
}
</script>
