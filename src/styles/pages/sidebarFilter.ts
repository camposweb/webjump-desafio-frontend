'use client'

import { css, styled } from 'styled-components'

export const SidebarFilterContainer = styled.aside`
  width: 16.313rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 0.063rem solid ${({ theme }) => theme.colors.sidebar};

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
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
  display: flex;
  font-size: 1.125rem;
  text-transform: uppercase;
  padding-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.productPrice};
`

export const FilterList = styled.ul`
  width: 100%;
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

      &.buttonGender {
        //width: 3rem;
        //height: 1.5rem;
        margin-top: 0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors.red};
        text-transform: uppercase;
        padding: 0.5rem 1rem;
        //flex-direction: column;
        background: transparent;
        border: 0.063rem solid ${({ theme }) => theme.colors.red};
      }
    }
  }
`

export const FilterButtonList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.2rem;
  padding-bottom: 2.063rem;

  li {
    display: flex;
    flex-direction: column;
  }
`

interface VariantProps {
  variant: string | undefined
}

export const FilterButton = styled.button<VariantProps>`
  width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 0;
  ${({ theme, variant }) =>
    variant === 'Preta' &&
    css`
      background: ${({ theme }) => theme.colors.black};
    `};
  ${({ theme, variant }) =>
    variant === 'Azul' &&
    css`
      background: ${({ theme }) => theme.colors.blue};
    `};
  ${({ theme, variant }) =>
    variant === 'Amarela' &&
    css`
      background: ${({ theme }) => theme.colors.yellow};
    `};
  ${({ theme, variant }) =>
    variant === 'Laranja' &&
    css`
      background: ${({ theme }) => theme.colors.orange};
    `};
  ${({ theme, variant }) =>
    variant === 'Rosa' &&
    css`
      background: ${({ theme }) => theme.colors.redRose};
    `};
  ${({ theme, variant }) =>
    variant === 'Cinza' &&
    css`
      background: ${({ theme }) => theme.colors.brown};
    `};
  ${({ theme, variant }) =>
    variant === 'Bege' &&
    css`
      background: ${({ theme }) => theme.colors.beige};
    `};
`

export const ClearFilterButton = styled.button`
  //width: 3rem;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.red};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  //flex-direction: column;
  background: transparent;
  border: 0.063rem solid ${({ theme }) => theme.colors.red};
`
