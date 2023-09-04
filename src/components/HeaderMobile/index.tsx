'use client'

import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../assets/webjump.png'
import {
  HeaderMobileContainer,
  NavButtonMobile,
  NavMenuContent,
  NavMenuLink,
  NavMenuMobile,
  NavMobileHeaderContainer,
  NavMobileLink,
} from './styles'
import { Menu, ShoppingCart } from 'lucide-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { openSansExtraBold } from '../styles/fontStyles'
import { useStore } from '@/store'
import { useEffect } from 'react'

export default function HeaderMobile() {
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
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <NavButtonMobile>
              <Menu size={30} color="#000" />
            </NavButtonMobile>
          </DropdownMenu.Trigger>
          <NavMenuMobile>
            <NavMenuContent className="content">
              <NavMenuLink className={`${openSansExtraBold.className} item`}>
                <Link href={'/'}>Página Inicial</Link>
              </NavMenuLink>
              {categories &&
                categories.map((category) => {
                  return (
                    <>
                      <NavMenuLink
                        className={`${openSansExtraBold.className} item`}
                        key={category.id}
                      >
                        <Link
                          as={`/categorias/${category.path}`}
                          href={{
                            pathname: `${category.path}`,
                          }}
                        >
                          {category.name}
                        </Link>
                      </NavMenuLink>
                    </>
                  )
                })}

              <NavMenuLink className={`${openSansExtraBold.className} item`}>
                <Link href={'/contato'}>Contato</Link>
              </NavMenuLink>
            </NavMenuContent>
          </NavMenuMobile>
        </DropdownMenu.Root>

        <div>
          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
        </div>
        <div>
          <ShoppingCart size={30} fill="#000" color="#000" />
        </div>
      </NavMobileHeaderContainer>
    </HeaderMobileContainer>
  )
}
