import './globals.css'
import Hero from './hero/page'
import Dashboard from './dashboard/page'
import SaberMais from './sabermais/page'
import Cards from './cards/page'

export default function Home() {
  return (
    <main>
      <div>
      <Hero />
        <Dashboard />
        <SaberMais />
        <Cards />
      </div>
    </main>
  )
}
