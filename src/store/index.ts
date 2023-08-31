import { api } from '@/lib/api'
import { create } from 'zustand'

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
  activePage: ProductsProps[]
  filterGender: string
  isLoanding: boolean
  activeCategory: CategoryProps
  pageActive: ProductsProps[]
  loadCategories: () => Promise<void>
  loadFilters: (path: string | string[]) => Promise<void>
  loadProducts: (path: string | string[]) => Promise<void>
  setActivePage: (product: ProductsProps[]) => void
  loadActiveCategory: (path: string | string[]) => Promise<void>
  setFilterGender: (gender: string) => void
  setFilterColor: (color: string) => void
  clearFilter: () => void
}

export const useStore = create<ProductsState>((set, get) => {
  return {
    categories: [],
    products: [],
    filters: [],
    activePage: [],
    filterGender: '',
    isLoanding: true,
    activeCategory: [],
    pageActive: [],
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
        pageActive: data.items,
        activePage: data.items,
        isLoanding: false,
      })
    },
    setActivePage: (product: ProductsProps[]) => {
      set({ isLoanding: true })
      set({
        pageActive: product,
        isLoanding: false,
      })
    },
    loadActiveCategory: async (path: string | string[]) => {
      set({ isLoanding: true })
      const { categories } = get()

      const categorie = categories.filter((category) => category.path === path)
      set({
        activeCategory: categorie[0],
        isLoanding: false,
      })
    },
    setFilterGender: (gender: string) => {
      set({ isLoanding: true })
      const { filterGender, activePage, products } = get()
      if (gender !== '') {
        const filter = products.filter(
          (product) => product.filter[0].gender === gender,
        )
        set({
          activePage: filter,
          isLoanding: false,
        })
      }
    },
    setFilterColor: (color: string) => {
      set({ isLoanding: true })
      const { products } = get()
      if (color !== '') {
        const filter = products.filter(
          (product) => product.filter[0].color === color,
        )
        set({
          activePage: filter,
          isLoanding: false,
        })
      }
    },
    clearFilter: () => {
      set({ isLoanding: true })
      const { products } = get()
      set({
        activePage: products,
        isLoanding: false,
      })
    },
  }
})
