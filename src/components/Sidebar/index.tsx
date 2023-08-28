'use client'

import Link from 'next/link'
import { SidebarContainer } from './styles'
import { Dot } from 'lucide-react'
import { useStore } from '@/store'
import { useEffect } from 'react'

export default function Sidebar() {
  const { loadCategories, categories } = useStore()
  useEffect(() => {
    loadCategories()
  }, [])
  return (
    <SidebarContainer>
      <nav>
        <Link href={'/'}>
          <Dot />
          Página Inicial
        </Link>
        {categories &&
          categories.map((category) => {
            return (
              <Link
                key={category.id}
                as={`/categorias/${category.path}`}
                href={{
                  pathname: `/categorias/${category.path}`,
                  query: {
                    categoryId: category.id,
                  },
                }}
              >
                <Dot />
                {category.name}
              </Link>
            )
          })}
        <Link href={'/contato'}>
          <Dot />
          Contato
        </Link>
      </nav>
    </SidebarContainer>
  )
}
