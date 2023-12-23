import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './navbar/page'
import Hero from './hero/page'
import Analytics from './dashboard/page'
import Newsletter from './sabermais/page'
import Cards from './cards/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto Next-JS',
  description: 'Creado por Mauricio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="m-3">
        <Navbar />
        {children}
        <Footer />
        Copyright &copy; 2023 Instituto Infnet
      </body>
    </html>
  )
}
