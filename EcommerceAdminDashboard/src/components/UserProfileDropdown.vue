<template>
  <div class="text-center">
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <img
          src="https://randomuser.me/api/portraits/women/85.jpg"
          alt="user-profile"
          v-bind="props"
          class=""
          style="height: 40px; width: 40px; border-radius: 100%; cursor: pointer; padding: 4px"
        />
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
export default {
  data: () => ({
    items: [{ title: 'Profile' }, { title: 'Log out' }]
  })
}
</script>
