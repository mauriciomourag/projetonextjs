import './globals.css'
import Hero from './hero/page'
import Analytics from './analytics/page'
import Newsletter from './newsletter/page'
import Cards from './cards/page'

export default function Home() {
  return (
    <main>
      <div>
      <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
      </div>
    </main>
  )
}
