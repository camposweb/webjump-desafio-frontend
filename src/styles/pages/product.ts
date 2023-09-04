'use client'

import { styled } from 'styled-components'

export const ProductContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.75rem 6.25rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.75rem 0.938rem;
    //background: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: 1024px) {
    padding: 1.875rem 1.25rem;
  }
`

export const Breadcrumb = styled.div`
  width: 100%;
  display: flex;
  ul {
    display: flex;
    flex-direction: row;

    list-style: none;
    li {
      display: flex;
      a {
        font-size: 0.875rem;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.blue};

        &.linkcolor {
          color: ${({ theme }) => theme.colors.red};
        }
      }
    }
  }

  @media (max-width: 768px) {
    //background: ${({ theme }) => theme.colors.brown};
  }
`

export const ProductContentContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.438rem;
  justify-content: space-between;
  gap: 1.563rem;

  @media (max-width: 768px) {
    //padding: 0 0.938rem;
    flex-direction: column;
  }
`

export const ProductInfoContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProductNameCategory = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.redRose};
`

export const Separator = styled.hr`
  width: 100%;
  display: flex;
  margin: 0.75rem 0;
  border: 1px solid ${({ theme }) => theme.colors.sidebar};
`

export const BarOrderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FilterListView = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  button {
    width: 1.25rem;
    height: 1.25rem;
    display: flex;

    border: 0;
    background: transparent;
    cursor: pointer;
  }
`

export const FilterPrice = styled.div`
  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    label {
      font-size: 0.688rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.ProductDiscountPrice};
    }
    select {
      width: 13.5rem;
      display: flex;
      padding: 0.25rem 0.875rem;
      border-radius: 0.313rem;
      font-size: 0.875rem;
      border: 1px solid ${({ theme }) => theme.colors.sidebar};
      background: transparent;
    }
  }
`

export const ProductGridList = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: 2.813rem;
  grid-template-columns: repeat(auto-fill, minmax(13.25rem, 1fr));
  grid-gap: 2.5rem 0.5rem;
`
