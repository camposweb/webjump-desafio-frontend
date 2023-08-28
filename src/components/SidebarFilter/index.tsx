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
import { useRouter } from 'next/router'
import { Dot } from 'lucide-react'

export default function SidebarFilter() {
  const router = useRouter()
  return (
    <SidebarFilterContainer>
      <FilterContentContainer>
        <h1 className={openSansBold.className}>filtre por</h1>
        <FilterNameType className={openSansBold.className}>
          categorias
        </FilterNameType>
        <FilterList className={openSansRegular.className}>
          {/* {categories &&
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
            })} */}
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
        <FilterNameType className={openSansBold.className}>tipo</FilterNameType>
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
        </FilterList>
      </FilterContentContainer>
    </SidebarFilterContainer>
  )
}
