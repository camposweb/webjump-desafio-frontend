'use client'

import { styled } from 'styled-components'

export const SidebarContainer = styled.aside`
  //width: 16.313rem;
  display: flex;
  background: ${({ theme }) => theme.colors.sidebar};
  //flex-direction: column;
  padding: 1.438rem 1.125rem;

  nav {
    display: flex;
    flex-direction: column;
    width: 16.313rem;

    a {
      display: flex;
      text-decoration: none;
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`
