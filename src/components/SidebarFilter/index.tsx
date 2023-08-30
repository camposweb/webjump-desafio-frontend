'use client'

import { openSansBold, openSansRegular } from '@/components/styles/fontStyles'
import {
  FilterButton,
  FilterButtonList,
  FilterContentContainer,
  FilterList,
  FilterNameType,
  SidebarFilterContainer,
} from '../../styles/pages/sidebarFilter'

import { Dot } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store'

export default function SidebarFilter() {
  const router = useRouter()
  const { categories, filters } = useStore((store) => {
    return {
      categories: store.categories,
      filters: store.filters,
    }
  })
  return (
    <SidebarFilterContainer>
      <FilterContentContainer>
        <h1 className={openSansBold.className}>filtre por</h1>
        {categories && (
          <FilterNameType className={openSansBold.className}>
            categorias
          </FilterNameType>
        )}
        <FilterList className={openSansRegular.className}>
          {categories &&
            categories.map((category) => {
              return (
                <>
                  <li key={category.id}>
                    <button
                      onClick={() =>
                        router.push(`/categorias/${category.path}`)
                      }
                    >
                      <Dot color="#626262" />
                      {category.name}
                    </button>
                  </li>
                </>
              )
            })}
        </FilterList>
        <FilterNameType className={openSansBold.className}>
          cores
        </FilterNameType>

        <FilterButtonList>
          <li>
            <FilterButton variant="Azul" />
          </li>
          <li>
            <FilterButton variant="Vermelho" />
          </li>
          <li>
            <FilterButton variant="Laranja" />
          </li>
        </FilterButtonList>
        {filters &&
          filters.map((filter) => {
            return (
              <>
                <FilterNameType className={openSansBold.className}>
                  {`${filter.color}es` || filter.gender}
                </FilterNameType>
              </>
            )
          })}
        {/* <FilterNameType className={openSansBold.className}>
          gênero
        </FilterNameType>
        <FilterList className={openSansRegular.className}>
          <li>
            <button onClick={() => router.push('#')}>
              <Dot color="#626262" />
              Caminhada
            </button>
          </li>
          <li>
            <button onClick={() => router.push('#')}>
              <Dot color="#626262" />
              Casual
            </button>
          </li>
          <li>
            <button onClick={() => router.push('#')}>
              <Dot color="#626262" />
              Social
            </button>
          </li>
        </FilterList> */}
      </FilterContentContainer>
    </SidebarFilterContainer>
  )
}
