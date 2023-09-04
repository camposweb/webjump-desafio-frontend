'use client'

import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  height: 11rem;
  background: ${({ theme }) => theme.colors.red};

  @media (max-width: 768px) {
    //background: ${({ theme }) => theme.colors.beige};
  }
`
