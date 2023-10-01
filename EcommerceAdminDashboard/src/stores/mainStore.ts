import { defineStore } from 'pinia'
import { SAMPLE_PRODUCTS } from '@/constants'

interface IProduct {
  name: string
  price: number
  stockLevel: number
  description: string
  image: string
}
interface IMainStoreState {
  currentTab: string
  allProducts: IProduct[]
}
export const useMainStore = defineStore({
  id: 'main',
  state: (): IMainStoreState => ({
    currentTab: 'overview',
    allProducts: SAMPLE_PRODUCTS
  }),
  getters: {
    getCurrentTab: (state) => state.currentTab,
    getAllProducts: (state) => state.allProducts
  },
  actions: {
    addProduct(product: IProduct) {
      this.allProducts.unshift(product)
    }
  }
})
