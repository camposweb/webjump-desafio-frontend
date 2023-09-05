import { styled } from 'styled-components'

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

export const MenuMobile = styled.div`
  @media (max-width: 768px) {
    &.view {
      display: flex;
    }
    display: none;
    width: 100%;
    //display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.red};
    ul {
      gap: 1rem;
      display: flex;
      align-items: center;
      padding: 1.875rem 0.938rem;
      justify-content: center;
      flex-direction: column;
      li {
        list-style: none;

        a {
          text-decoration: none;
          text-align: center;
          justify-content: center;
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`
