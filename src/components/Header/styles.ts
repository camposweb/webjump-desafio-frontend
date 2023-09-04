'use client'

import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  //max-width: 90rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  //height: 150px;
  @media (max-width: 768px) {
    //padding: 0 0.938rem;
  }
`

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  height: 1.938rem;
  justify-content: end;
  align-items: center;
  justify-items: center;
  padding: 0.438rem 6.25rem;
  background: ${({ theme }) => theme.colors.login};

  @media (max-width: 768px) {
    padding: 0.2rem 0;
    justify-content: center;
  }

  @media (max-width: 926px) {
    padding: 0.2rem 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }
`
export const LoginLink = styled.nav`
  span {
    color: ${({ theme }) => theme.colors.white};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.875rem;
  }
`

export const HeaderMain = styled.div`
  width: 100%;
  display: flex;
  padding: 1.875rem 6.25rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 926px) {
    padding: 1.875rem 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 1.875rem 1.25rem;
  }
`

export const HeaderNav = styled.div`
  display: flex;
  //padding: 1.875rem 6.25rem;
  //padding: 1.875rem 0;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

export const HeaderNavLink = styled.nav`
  width: 100%;
  display: flex;
  padding: 1.25rem 6.25rem;

  background: ${({ theme }) => theme.colors.red};
  gap: 4.688rem;
  //padding: 1.875rem 6.25rem;
  //align-items: center;
  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1.875rem 0.938rem;
  }

  @media (max-width: 926px) {
    padding: 1.875rem 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 1.875rem 1.25rem;
  }
`

export const FormContainer = styled.form`
  display: flex;
  height: 2.75rem;
  //padding: 2.75rem 0;

  input {
    width: 25.875rem;
  }

  button {
    padding: 0.75rem 1.563rem;
    border: 0;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      cursor: pointer;
    }
  }
`
