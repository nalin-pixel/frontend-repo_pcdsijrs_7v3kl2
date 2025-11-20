import Hero from './components/Hero'
import Payments from './components/Payments'
import Perks from './components/Perks'
import GlobeCTA from './components/GlobeCTA'
import SearchDemo from './components/SearchDemo'
import VIPCheckoutMock from './components/VIPCheckoutMock'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero with Spline 3D card */}
      <Hero />

      {/* Benefits and offers */}
      <Perks />

      {/* Global search demo */}
      <SearchDemo />

      {/* Payment methods showcase */}
      <Payments />

      {/* 3D Globe CTA section with prototype */}
      <GlobeCTA />

      {/* VIP checkout mock */}
      <VIPCheckoutMock />

      {/* Registration / waitlist */}
      <Register />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
