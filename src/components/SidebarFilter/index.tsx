'use client'

import { openSansBold, openSansRegular } from '@/components/styles/fontStyles'
import {
  ClearFilterButton,
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
  const {
    categories,
    filters,
    products,
    activePage,
    setFilterGender,
    setFilterColor,
    clearFilter,
  } = useStore((store) => {
    return {
      categories: store.categories,
      filters: store.filters,
      products: store.products,
      activePage: store.activePage,
      setFilterGender: store.setFilterGender,
      setFilterColor: store.setFilterColor,
      clearFilter: store.clearFilter,
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
        {filters &&
          filters.map((filter) => {
            return (
              <>
                <FilterNameType className={openSansBold.className}>
                  {filter.color || filter.gender}
                </FilterNameType>
                {filter.gender && (
                  <>
                    <FilterList className={openSansRegular.className}>
                      <li>
                        <button
                          onClick={() => setFilterGender('Masculina')}
                          title="Masculina"
                        >
                          <Dot color="#626262" />
                          Masculina
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setFilterGender('Feminina')}
                          title="Feminina"
                        >
                          <Dot color="#626262" />
                          Feminina
                        </button>
                      </li>
                      <li>
                        <ClearFilterButton
                          className={`${openSansBold.className} buttonGender`}
                          onClick={() => clearFilter()}
                        >
                          limpar filtro
                        </ClearFilterButton>
                      </li>
                    </FilterList>
                  </>
                )}
                {filter.color && (
                  <>
                    <FilterButtonList>
                      <li>
                        <FilterButton
                          variant="Preta"
                          onClick={() => setFilterColor('Preta')}
                          title="Preta"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Azul"
                          onClick={() => setFilterColor('Azul')}
                          title="Azul"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Amarela"
                          onClick={() => setFilterColor('Amarela')}
                          title="Amarela"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Laranja"
                          onClick={() => setFilterColor('Laranja')}
                          title="Laranja"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Rosa"
                          onClick={() => setFilterColor('Rosa')}
                          title="Rosa"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Cinza"
                          onClick={() => setFilterColor('Cinza')}
                          title="Cinza"
                        />
                      </li>
                      <li>
                        <FilterButton
                          variant="Bege"
                          onClick={() => setFilterColor('Bege')}
                          title="Bege"
                        />
                      </li>
                      <li>
                        <ClearFilterButton
                          className={openSansBold.className}
                          onClick={() => clearFilter()}
                        >
                          limpar filtro
                        </ClearFilterButton>
                      </li>
                    </FilterButtonList>
                  </>
                )}
              </>
            )
          })}
      </FilterContentContainer>
    </SidebarFilterContainer>
  )
}
