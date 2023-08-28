import {
  CardProducPriceContainer,
  CardProductButton,
  CardProductContainer,
  CardProductDiscountPrice,
  CardProductImg,
  CardProductName,
  CardProductPrice,
} from '../../styles/pages/card'

import Image from 'next/image'
import {
  openSansExtraBold,
  openSansRegular,
} from '@/components/styles/fontStyles'

interface GetItems {
  id: number
  sku?: string
  path?: string
  name: string
  image: string
  price: number
  specialPrice?: number
}

interface CardProps {
  cards: GetItems
}

export default function CardProduct({ cards }: CardProps) {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cards.price)
  const priceSpecial = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(cards.specialPrice))

  return (
    <CardProductContainer>
      <CardProductImg>
        <Image src={`/${cards.image}`} width={196} height={196} alt="" />
      </CardProductImg>
      <CardProductName className={openSansRegular.className}>
        {cards.name}
      </CardProductName>
      <CardProducPriceContainer>
        {cards.specialPrice ? (
          <>
            <CardProductDiscountPrice className={openSansRegular.className}>
              {price}
            </CardProductDiscountPrice>
            <CardProductPrice className={openSansExtraBold.className}>
              {priceSpecial}
            </CardProductPrice>
          </>
        ) : (
          <CardProductPrice className={openSansExtraBold.className}>
            {price}
          </CardProductPrice>
        )}
      </CardProducPriceContainer>
      <CardProductButton className={openSansExtraBold.className}>
        comprar
      </CardProductButton>
    </CardProductContainer>
  )
}
