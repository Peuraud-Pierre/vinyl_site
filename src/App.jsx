import { useState } from 'react'
import { stops, tracks } from './data.js'
import { useScrollStop } from './useScrollStop.js'
import Halos from './components/Halos.jsx'
import FollowDisc from './components/FollowDisc.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Platine from './components/Platine.jsx'
import Personnaliser from './components/Personnaliser.jsx'
import Bibliotheque from './components/Bibliotheque.jsx'
import Telecharger from './components/Telecharger.jsx'
import Footer from './components/Footer.jsx'
import MiniPlayer from './components/MiniPlayer.jsx'

export default function App() {
  const { stop, y, progress } = useScrollStop()
  const [playing, setPlaying] = useState(true)
  const [texture, setTexture] = useState('black')
  const current = stops[stop]

  return (
    <div className="relative min-h-screen overflow-x-clip font-sans">
      <Halos />
      <FollowDisc stop={current} texture={texture} rotation={Math.round(y * 0.25)} playing={playing} />

      <div className="relative z-2 mx-auto max-w-[1180px] px-5 pt-6">
        <Nav />
        <main>
          <Hero />
          <Platine />
          <Personnaliser texture={texture} onChange={setTexture} />
          <Bibliotheque />
          <Telecharger />
        </main>
        <Footer />
      </div>

      <MiniPlayer
        track={tracks[stop]}
        color={current.color}
        progress={progress}
        playing={playing}
        onToggle={() => setPlaying((p) => !p)}
      />
    </div>
  )
}
