import { api } from '@/lib/api'
import { create } from 'zustand'

export interface CategoryProps {
  id: number
  name: string
  path: string
}

interface ProductsState {
  categories: CategoryProps[]
  products: null
  isLoanding: boolean

  loadCategories: () => Promise<void>
}

export const useStore = create<ProductsState>((set, get) => {
  return {
    categories: [],
    products: null,
    isLoanding: true,
    loadCategories: async () => {
      set({ isLoanding: true })
      const { data } = await api.get('list')
      set({
        categories: data.items,
        isLoanding: false,
      })
    },
  }
})
