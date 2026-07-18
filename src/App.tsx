import Nav from './components/Nav'
import Hero from './components/Hero'
import ExploreGallery from './components/ExploreGallery'
import PopularArea from './components/PopularArea'
import MarketPerformance from './components/MarketPerformance'
import MarketInsight from './components/MarketInsight'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Nav />
      <main>
        <Hero />
        <ExploreGallery />
        <PopularArea />
        <MarketPerformance />
        <MarketInsight />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
