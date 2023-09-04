'use client'

import { styled } from 'styled-components'

export const CardProductContainer = styled.div`
  width: 13.25rem;
  display: flex;
  flex-direction: column;
`

export const CardProductImg = styled.div`
  display: flex;
  width: 13.125rem;
  height: 13.125rem;
  align-items: center;
  justify-content: center;
  border: 0.063rem solid ${({ theme }) => theme.colors.sidebar};

  @media (max-width: 768px) {
    img {
      padding: 1rem 0.5rem;
    }
  }
`

export const CardProductName = styled.span`
  display: flex;
  margin-top: 0.625rem;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.productName};
`

export const CardProducPriceContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const CardProductDiscountPrice = styled.strong`
  text-transform: uppercase;
  text-decoration: line-through;
  font-size: 0.938rem;
  color: ${({ theme }) => theme.colors.ProductDiscountPrice};
`

export const CardProductPrice = styled.strong`
  text-transform: uppercase;
  font-size: 1.313rem;
  color: ${({ theme }) => theme.colors.productPrice};
`

export const CardProductButton = styled.button`
  display: flex;
  margin-top: 0.625rem;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.125rem;
  border: 0;
  border-radius: 0.313rem;
  padding: 0.5rem 3.75rem;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`
