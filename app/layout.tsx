import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Navbar from './navbar/page'
import Hero from './hero/page'

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
        <Hero />
        <hr />
        {children}
        <hr />
        Copyright &copy; 2023 Instituto Infnet
      </body>
    </html>
  )
}
