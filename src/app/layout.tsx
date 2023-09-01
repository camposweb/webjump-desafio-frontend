import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StyledComponentsRegistry from '@/lib/registry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webjump',
  description: 'E-Commerce Webjump',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
