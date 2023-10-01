<template>
  <v-card width="98%" class="mx-10 my-10">
    <v-card-title>
      <p class="my-2">Products</p>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        density="compact"
        variant="outlined"
        clearable
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
  </v-card>
</template>
<script lang="ts">
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          align: 'start',
          key: 'name',
          sortable: false,
          title: 'Name'
        },
        { key: 'desciption', title: 'Description' },
        { key: 'price', title: '$ Price', sortable: true },
        { key: 'stockLevel', title: 'Stock Level', sortable: true }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 24
        },
        {
          name: 'Ice cream sandwich',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 24
        },
        {
          name: 'Eclair',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 24
        },
        {
          name: 'Cupcake',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 10
        },
        {
          name: 'Gingerbread',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 21
        },
        {
          name: 'Jelly bean',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 24
        },
        {
          name: 'Lollipop',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 23
        },
        {
          name: 'Honeycomb',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 24
        },
        {
          name: 'Donut',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 23
        },
        {
          name: 'KitKat',
          desciption: 'Lorem ipsum',
          price: 6.0,
          stockLevel: 0
        }
      ]
    }
  }
}
</script>
