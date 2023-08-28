import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      blue: string
      banner: string
      red: string
      redLight: string
      redRose: string
      orange: string
      login: string
      sidebar: string
      productName: string
      productPrice: string
      ProductDiscountPrice: string
    }
    variant: string | undefined
  }
}
