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
  <div id="main-div">
    <RouterView />
  </div>
</template>
<style>
#main-div {
  position: fixed;
  left: 260px;
  top: 48px;
  width: calc(100vw-266px);
  height: calc(100vh-40px);
  overflow: scroll;
  background-color: transparent;
}
</style>
