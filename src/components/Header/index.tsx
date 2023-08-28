'use client'

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
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <HeaderContainer>
      <LoginContainer className={openSansBold.className}>
        <LoginLink>
          <Link href={'#'}>Acesse sua conta</Link>
          <span> ou </span>
          <Link href={'#'}>Cadastre-se</Link>
        </LoginLink>
      </LoginContainer>
      <HeaderMain>
        <div>
          <Menu color="#000" />

          <Link href={'/'}>
            <Image src={logoImg} alt="" />
          </Link>
        </div>
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
          {/* {categories &&
            categories.map((category: CategoryProps) => {
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
                  {category.name}
                </Link>
              )
            })} */}
          <Link href={'/contato'}>Contato</Link>
        </HeaderNavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
