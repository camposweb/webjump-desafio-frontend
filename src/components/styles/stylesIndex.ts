'use client'

import { styled } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  padding: 1.5rem 6.25rem;

  justify-content: space-between;
  gap: 1.563rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.938rem;
    flex-direction: column;
  }
  @media (max-width: 926px) {
    padding: 1.5rem 1.25rem;
  }
`

export const HomeContentInfo = styled.div`
  div {
    width: 100%;
    //width: 59.625rem;
    height: 17.563rem;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.banner};
    @media (max-width: 768px) {
      height: 5.375rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    margin-top: 0.938rem;
    gap: 0.375rem;

    h1 {
      font-size: 1.625rem;
      color: ${({ theme }) => theme.colors.black};
    }

    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`
