'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import {
  FormContainer,
  HeaderContainer,
  HeaderMain,
  HeaderNav,
  HeaderNavLink,
  LoginContainer,
  LoginLink,
} from './styles'
import Image from 'next/image'
import logoImg from '../../assets/webjump.png'
import { openSansBold, openSansExtraBold } from '../styles/fontStyles'
import { Menu, ShoppingCart } from 'lucide-react'
import { useStore } from '@/store'
import { useEffect } from 'react'
import HeaderMobile from '../HeaderMobile'

export default function Header() {
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
    <HeaderContainer>
      <LoginContainer className={openSansBold.className}>
        <LoginLink>
          <Link href={'#'}>Acesse sua conta</Link>
          <span> ou </span>
          <Link href={'#'}>Cadastre-se</Link>
        </LoginLink>
      </LoginContainer>
      <HeaderMobile />
      <HeaderMain>
        <Link href={'/'}>
          <Image src={logoImg} alt="" />
        </Link>
        <FormContainer>
          <input type="text" />
          <button type="submit" className={openSansExtraBold.className}>
            Buscar
          </button>
        </FormContainer>
      </HeaderMain>
      <HeaderNav>
        <HeaderNavLink className={openSansExtraBold.className}>
          <Link href={'/'}>Página Inicial</Link>
          {categories &&
            categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  as={`/categorias/${category.path}`}
                  href={{
                    pathname: `${category.path}`,
                  }}
                >
                  {category.name}
                </Link>
              )
            })}
          <Link href={'/contato'}>Contato</Link>
        </HeaderNavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
