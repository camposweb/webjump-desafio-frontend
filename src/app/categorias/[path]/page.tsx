'use client'

import CardProduct from '@/components/Card'
import SidebarFilter from '@/components/SidebarFilter'
import { openSansBold, openSansRegular } from '@/components/styles/fontStyles'
import { ProductsProps, useStore } from '@/store'
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
    }
  })

  useEffect(() => {
    setFilterGender('')
    if (params.path) {
      loadActiveCategory(params.path)
      loadProducts(params.path)
      loadFilters(params.path)
    }
  }, [params.path])

  useEffect(() => {
    setActivePage(products)
  }, [products, setActivePage])

  useEffect(() => {
    if (activeCategory) {
      document.title = `Categoria ${activeCategory.name} - Webjump`
    }
  }, [activeCategory])

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
                  <option value="">Selecione</option>
                  <option value="">Menor preço</option>
                  <option value="">Maior preço</option>
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
