'use client'
import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      blue: string
      banner: string
      red: string | null
      redLight: string
      redRose: string
      orange: string
      yellow: string
      beige: string
      brown: string
      login: string
      sidebar: string
      productName: string
      productPrice: string
      ProductDiscountPrice: string
    }
    variant: string | undefined
  }
}
