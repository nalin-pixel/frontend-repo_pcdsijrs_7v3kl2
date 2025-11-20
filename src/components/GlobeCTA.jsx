import { Globe2 } from 'lucide-react'
import GlobePrototype from './GlobePrototype'

export default function GlobeCTA() {
  return (
    <section id="globe" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_50%_0%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Clickable 3D World Map</h2>
          <p className="mt-3 text-slate-300">Pan across the globe to discover trending hotels, private properties, and executive stays. Click any region to preview top options.</p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 backdrop-blur">
            <Globe2 size={20} className="text-cyan-300"/>
            Prototype: interactive map — tap hotspots to see curated stays and sample rates.
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
          <GlobePrototype />
        </div>
      </div>
    </section>
  )
}
