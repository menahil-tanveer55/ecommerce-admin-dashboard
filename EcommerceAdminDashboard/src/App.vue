<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <Header></Header>
  <div class="mt-8">
    <SideBar></SideBar>
  </div>
  <RouterView />
</template>
