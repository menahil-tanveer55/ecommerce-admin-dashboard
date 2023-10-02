<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        elevation="1"
        permanent
        location="left"
        class="bg-white mt-12"
        color="blue-grey-darken-4"
      >
        <v-list nav>
          <v-list-item
            v-for="tab in TABS"
            :key="tab.value"
            :prepend-icon="tab.icon"
            :title="tab.title"
            :value="tab.value"
            :active="activeTab === tab.value"
            @click="selectTab(tab)"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
<script lang="ts" setup>
// Imports
import router from '@/router'
import { useMainStore } from '@/stores/mainStore'
import { ref } from 'vue'
// Local Interfaces
interface ITab {
  icon: string
  title: string
  value: string
}
// Store
const mainStore = useMainStore()
// States
const drawer = ref<boolean>(true)
const activeTab = ref<string>(mainStore.getCurrentTab)
// Constants
const TABS: ITab[] = [
  {
    icon: 'mdi-view-dashboard-outline',
    title: 'Overview',
    value: 'overview'
  },
  {
    icon: 'mdi-poll',
    title: 'Inventory',
    value: 'inventory'
  }
]
// Methods
const selectTab = (tab: ITab) => {
  activeTab.value = tab.value
  mainStore.setCurrentTab(tab.value)
  router.push({ name: tab.title })
}
</script>
