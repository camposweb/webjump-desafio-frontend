'use client'

import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  //max-width: 90rem;
  display: flex;
  flex-direction: column;
  //height: 150px;
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
  display: flex;
  padding: 1.875rem 6.25rem;
  align-items: center;
  justify-content: space-between;

  svg {
    display: flex;
    visibility: hidden;
  }

  @media (max-width: 768px) {
    svg {
      display: flex;
      justify-content: start;
      gap: 5rem;
      visibility: visible;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
`

export const HeaderNav = styled.div`
  display: flex;
  //padding: 1.875rem 6.25rem;
  //padding: 1.875rem 0;
  align-items: center;

  @media (max-width: 768px) {
    visibility: hidden;
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

  @media (max-width: 768px) {
    //display: block;
    visibility: hidden;
  }
`
