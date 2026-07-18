import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ExploreGallery from './components/ExploreGallery'
import PopularArea from './components/PopularArea'
import MarketPerformance from './components/MarketPerformance'
import MarketInsight from './components/MarketInsight'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ConsultationModal from './components/ConsultationModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg-base">
      <Nav onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <ExploreGallery />
        <PopularArea />
        <MarketPerformance />
        <MarketInsight />
        <FAQ />
      </main>
      <Footer />
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
