'use client'

import CardProduct from '@/components/Card'
import SidebarFilter from '@/components/SidebarFilter'
import { openSansBold, openSansRegular } from '@/components/styles/fontStyles'
import { CategoryProps, ProductsProps, useStore } from '@/store'
import {
  BarOrderContainer,
  Breadcrumb,
  FilterListView,
  FilterPrice,
  ProductContainer,
  ProductContentContainer,
  ProductGridList,
  ProductInfoContainer,
  ProductNameCategory,
  Separator,
} from '@/styles/pages/product'
import { ChevronRight, Grip, List } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Products() {
  const params = useParams()
  const {
    loadCategories,
    loadFilters,
    loadActiveCategory,
    activeCategory,
    loadProducts,
    categories,
    activePage,
    products,
    setFilterGender,
    setActivePage,
    setFilterPrice,
    clearFilter,
  } = useStore((store) => {
    return {
      loadCategories: store.loadCategories,
      loadFilters: store.loadFilters,
      loadActiveCategory: store.loadActiveCategory,
      activeCategory: store.activeCategory,
      activePage: store.activePage,
      loadProducts: store.loadProducts,
      categories: store.categories,
      products: store.products,
      setFilterGender: store.setFilterGender,
      setActivePage: store.setActivePage,
      setFilterPrice: store.setFilterPrice,
      clearFilter: store.clearFilter,
    }
  })

  // const catPath = categories.

  useEffect(() => {
    setFilterGender('')

    if (params.path) {
      loadActiveCategory(params.path)
      // loadCategories()
      const cat = categories.map((category) => category.path)
      // const result = cat.filter((c) => c. === params.path)
      /* console.log(params.path)
      console.log(activeCategory.id) */
      // console.log(result)
      loadActiveCategory(params.path)
      loadProducts(params.path)
      loadFilters(params.path)
    }
  }, [params.path])

  /* useEffect(() => {
    setActivePage(products)
  }, [products, setActivePage]) */

  useEffect(() => {
    if (activeCategory) {
      document.title = `Categoria ${activeCategory.name} - Webjump`
    }
  }, [activeCategory])

  const SortByPrice = activePage.map(
    (page) => (page.price && page.specialPrice) || page.price,
  )
  const p = activePage.map((product) => product)
  // const list = activePage.sort((a, b) => (a.price > b.price ? 1 : -1))
  /* const list = activePage.sort((a, b) =>
    b.price || b.specialPrice > a.price ? 1 : -1,
  )
  console.log(list) */
  /*  console.log(p)
  const pr = ([] as ProductsProps[])
    .concat(activePage)
    .sort((productA: ProductsProps, productB: ProductsProps) => {
      if (productA.specialPrice && productB.specialPrice) {
        if (productA.specialPrice > productB.specialPrice) {
          return 1
        } else {
          return -1
        }
      }
    }) */
  /* console.log(
    activePage.map((page) => (page.price && page.specialPrice) || page.price),
  ) */
  /*  console.log(
    SortByPrice.sort((a: ProductsProps[], b: ProductsProps[]) => {
      return a - b
    }),
  ) */
  /*  const price = sor
  console.log(
    SortByPrice.sort(function (a, b) {
      return b - a
    }),
  ) */

  return (
    <ProductContainer>
      <Breadcrumb className={openSansRegular.className}>
        <ul>
          <li>
            <Link href={'/'}>Página Inicial</Link>
          </li>
          <li>
            <ChevronRight size={20} color="#ACACAC" />
          </li>
          {activeCategory && (
            <li>
              <Link
                href={`/categorias/${activeCategory.path}`}
                className="linkcolor"
              >
                {activeCategory.name}
              </Link>
            </li>
          )}
        </ul>
      </Breadcrumb>
      <ProductContentContainer>
        <SidebarFilter />
        <ProductInfoContainer>
          <ProductNameCategory className={openSansRegular.className}>
            {activeCategory && activeCategory.name}
          </ProductNameCategory>
          <Separator />
          <BarOrderContainer>
            <FilterListView>
              <button>
                <Grip size={20} color="#ED1A39" />
              </button>
              <button>
                <List size={20} color="#00A8A9" />
              </button>
            </FilterListView>
            <FilterPrice>
              <form>
                <label htmlFor="price" className={openSansBold.className}>
                  ordenar por
                </label>
                <select id="price" className={openSansBold.className}>
                  <option value="Padrão" onClick={() => clearFilter()}>
                    Padrão
                  </option>
                  <option
                    value="PriceAsc"
                    onClick={() => setFilterPrice('PriceAsc')}
                  >
                    Menor preço
                  </option>
                  <option
                    value="PriceDesc"
                    onClick={() => setFilterPrice('PriceDesc')}
                  >
                    Maior preço
                  </option>
                </select>
              </form>
            </FilterPrice>
          </BarOrderContainer>
          <ProductGridList>
            {activePage &&
              activePage.map((product) => {
                return <CardProduct key={product.id} cards={product} />
              })}
          </ProductGridList>
        </ProductInfoContainer>
      </ProductContentContainer>
    </ProductContainer>
  )
}
