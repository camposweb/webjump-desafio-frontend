'use client'

import { css, styled } from 'styled-components'

export const SidebarFilterContainer = styled.aside`
  width: 16.313rem;
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 0.063rem solid ${({ theme }) => theme.colors.sidebar};
`

export const FilterContentContainer = styled.div`
  width: 16.313rem;
  display: flex;
  flex-direction: column;
  padding: 0.875rem 1.125rem;

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.redRose};
  }
`

export const FilterNameType = styled.strong`
  //display: flex;
  font-size: 1.125rem;
  text-transform: uppercase;
  padding-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.productPrice};
`

export const FilterList = styled.ul`
  //width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.productName};
  padding-bottom: 2.5rem;

  li {
    button {
      display: flex;
      align-items: center;
      font-size: 1rem;
      cursor: pointer;
      border: 0;
      background: transparent;
      color: ${({ theme }) => theme.colors.productName};
    }
  }
`

export const FilterButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 0.2rem;
  padding-bottom: 2.063rem;
`

interface VariantProps {
  variant: string | undefined
}

export const FilterButton = styled.button<VariantProps>`
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  border: 0;
  ${({ theme, variant }) =>
    variant === 'Azul' &&
    css`
      background: ${({ theme }) => theme.colors.blue};
    `};
  ${({ theme, variant }) =>
    variant === 'Vermelho' &&
    css`
      background: ${({ theme }) => theme.colors.redLight};
    `};
  ${({ theme, variant }) =>
    variant === 'Laranja' &&
    css`
      background: ${({ theme }) => theme.colors.orange};
    `};
`
