<template>
  <v-dialog v-model="dialog" persistent width="500px">
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
              <v-text-field label="Name*" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Description*" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field label="Price*" type="number" required variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Initial Stock Level*"
                type="number"
                required
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-file-input
                label="Upload products image"
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
        <v-btn color="grey-darken-4 text-capitalize" variant="tonal" @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="teal-accent-4 text-capitalize" variant="flat" @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
