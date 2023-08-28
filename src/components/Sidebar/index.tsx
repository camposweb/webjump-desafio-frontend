'use client'

import Link from 'next/link'
import { SidebarContainer } from './styles'
import { Dot } from 'lucide-react'

export default function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <Link href={'/'}>
          <Dot />
          Página Inicial
        </Link>
        {/* {categories &&
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
          })} */}
        <Link href={'/contato'}>
          <Dot />
          Contato
        </Link>
      </nav>
    </SidebarContainer>
  )
}
