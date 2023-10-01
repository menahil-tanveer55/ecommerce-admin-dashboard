<template>
  <v-card class="mx-8" max-width="448">
    <v-layout>
      <v-app-bar color="blue-grey-darken-4" density="compact" :elevation="0">
        <v-app-bar-title>Dashboard</v-app-bar-title>
        <template v-slot:append>
          <div class="d-flex flex-row align-center justify-space-evenly">
            <v-btn icon="mdi-bell-outline"></v-btn>
            <UserProfileDropdown />
            <v-btn icon="mdi-cog-outline"></v-btn>
          </div>
        </template>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>
<script lang="ts" setup>
import UserProfileDropdown from './UserProfileDropdown.vue'
</script>
