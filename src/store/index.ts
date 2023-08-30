import { api } from '@/lib/api'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface CategoryProps {
  id?: number
  name?: string
  path?: string
}

export interface ProductsProps {
  id: number
  sku: string
  path: string
  name: string
  image: string
  price: number
  specialPrice?: number
  filter: {
    gender?: string
    color?: string
  }[]
}

interface FiltersProps {
  gender?: string
  color?: string
}

interface ProductsState {
  categories: CategoryProps[]
  products: ProductsProps[]
  filters: FiltersProps[]
  isLoanding: boolean
  activeCategory: CategoryProps
  // pageActive: ProductsProps[]
  loadCategories: () => Promise<void>
  loadFilters: (path: string | string[]) => Promise<void>
  loadProducts: (path: string | string[]) => Promise<void>
  // loadPageActive: (product: ProductsProps) => void
  loadActiveCategory: (path: string | string[]) => Promise<void>
}

export const useStore = create<ProductsState>((set, get) => {
  return {
    categories: [],
    products: [],
    filters: [],
    isLoanding: true,
    activeCategory: [],
    // pageActive: [],
    loadCategories: async () => {
      set({ isLoanding: true })
      const { data } = await api.get('list')
      set({
        categories: data.items,
        isLoanding: false,
      })
    },
    loadFilters: async (path: string | string[]) => {
      set({ isLoanding: true })
      const { categories } = get()
      const categorie = categories.filter((category) => category.path === path)
      const { data } = await api.get(`${categorie[0].id}`)
      set({
        filters: data.filters,
        isLoanding: false,
      })
    },
    loadProducts: async (path: string | string[]) => {
      set({ isLoanding: true })
      const { categories } = get()
      const categorie = categories.filter((category) => category.path === path)
      const { data } = await api.get(`${categorie[0].id}`)
      set({
        products: data.items,
        isLoanding: false,
      })
    },
    /* loadPageActive: (product: ProductsProps) => {
      set({ isLoanding: true })
      const { products } = get()
      set({
        pageActive: ,
        isLoanding: false,
      })
    }, */
    loadActiveCategory: async (path: string | string[]) => {
      set({ isLoanding: true })
      const { categories } = get()

      const categorie = categories.filter((category) => category.path === path)
      set({
        activeCategory: categorie[0],
        isLoanding: false,
      })
    },
  }
})
