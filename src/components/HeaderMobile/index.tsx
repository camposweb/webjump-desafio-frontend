'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../assets/webjump.png'
import {
  HeaderMobileContainer,
  MenuMobile,
  NavMobileHeaderContainer,
} from './styles'
import { ShoppingCart } from 'lucide-react'
import { openSansExtraBold } from '../styles/fontStyles'
import { useStore } from '@/store'
import { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'

export default function HeaderMobile() {
  const [isOpen, setOpen] = useState(false)
  const { loadCategories, categories } = useStore((store) => {
    return {
      loadCategories: store.loadCategories,
      categories: store.categories,
    }
  })

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  return (
    <HeaderMobileContainer>
      <NavMobileHeaderContainer>
        <div>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              if (toggled) {
                setOpen(true)
              } else {
                setOpen(false)
              }
            }}
          />
        </div>
        <div>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
        </div>
        <div>
          <ShoppingCart size={30} fill="#000" color="#000" />
        </div>
      </NavMobileHeaderContainer>
      <MenuMobile
        className={isOpen ? `${openSansExtraBold.className} view` : ''}
      >
        <nav>
          <ul>
            <li>
              <Link href={'/'}>Página inicial</Link>
            </li>
            {categories &&
              categories.map((category) => {
                return (
                  <li key={category.id}>
                    <Link href={`/categorias/${category.path}`}>
                      {category.name}
                    </Link>
                  </li>
                )
              })}
            <li>
              <Link href={'/contato'}>Contato</Link>
            </li>
          </ul>
        </nav>
      </MenuMobile>
    </HeaderMobileContainer>
  )
}
