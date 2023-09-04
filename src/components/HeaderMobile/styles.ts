import { styled } from 'styled-components'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const HeaderMobileContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const NavMobileHeaderContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    justify-content: space-between;
    padding: 1.875rem 0.938rem;
  }
`

export const NavButtonMobile = styled(DropdownMenu.Trigger)`
  @media (max-width: 768px) {
    //visibility: visible;
    all: unset;
    display: flex;
    width: 30px;
    height: 30px;
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`
export const NavMenuMobile = styled(DropdownMenu.Portal)`
  @media (max-width: 768px) {
  }
`

export const NavMenuContent = styled(DropdownMenu.Content)`
  display: none;
  @media (max-width: 768px) {
    //width: 100vw;
    //width: 100vw;
    //height: 100vh;
    //flex-direction: column;
    display: flex;
    //margin-top: -5.5rem;
    //gap: 1rem;
    //justify-content: center;
    //padding: 1.875rem 0.938rem;
    background: ${({ theme }) => theme.colors.red};
  }
`

export const NavMenuLink = styled(DropdownMenu.Item)`
  @media (max-width: 768px) {
    //all: unset;
    //width: 100%;
    //display: flex;
    //flex-direction: column;
    //gap: 1rem;
    //margin-top: 1rem;
    //justify-content: center;
    //justify-items: center;
    //text-align: center;
    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-size: 1rem;
    }
  }
`

export const NavMobileLink = styled.a`
  @media (max-width: 768px) {
    /* display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    background: ${({ theme }) => theme.colors.banner};
    a {
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-size: 1rem;
    }
  } */
  }
`
