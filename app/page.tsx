import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full justify-between font-mono text-sm">
        <h1>Estudos de Jamstack com Next.js</h1>
        <Link href="/protegido">Área Protegida</Link>
      </div>
    </main>
  )
}
