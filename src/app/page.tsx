'use client'

import Sidebar from '@/components/Sidebar'
import { openSansRegular } from '@/components/styles/fontStyles'
import { HomeContainer, HomeContentInfo } from '@/components/styles/stylesIndex'
import { useStore } from '@/store'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  const { loadCategories } = useStore((store) => {
    return {
      loadCategories: store.loadCategories,
    }
  })
  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  useEffect(() => {
    document.title = `Página Inicial - Webjump`
  }, [])

  return (
    <>
      <HomeContainer className={openSansRegular.className}>
        <Sidebar />
        <HomeContentInfo>
          <div></div>
          <section>
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>
        </HomeContentInfo>
      </HomeContainer>
    </>
  )
}
