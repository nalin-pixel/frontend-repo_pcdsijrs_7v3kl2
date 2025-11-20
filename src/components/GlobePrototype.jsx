import { useState, useMemo } from 'react'
import { MapPin, Star, X, Compass } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Sample data for regions — reused by the holographic map
const sampleData = {
  europe: {
    region: 'Europe',
    cities: [
      { city: 'Paris', hotel: 'Hôtel Lumière', price: 189, rating: 4.7 },
      { city: 'Rome', hotel: 'Roma Executive Suites', price: 149, rating: 4.6 },
      { city: 'Barcelona', hotel: 'Mar Azul Boutique', price: 129, rating: 4.5 },
    ],
  },
  asia: {
    region: 'Asia',
    cities: [
      { city: 'Tokyo', hotel: 'Shibuya Skyline Inn', price: 210, rating: 4.8 },
      { city: 'Bali', hotel: 'Ubud Forest Villas', price: 120, rating: 4.7 },
      { city: 'Dubai', hotel: 'Marina Luxe Hotel', price: 240, rating: 4.6 },
    ],
  },
  americas: {
    region: 'Americas',
    cities: [
      { city: 'New York', hotel: 'Hudson Central', price: 220, rating: 4.6 },
      { city: 'Rio', hotel: 'Copacabana Breeze', price: 140, rating: 4.4 },
      { city: 'Cancún', hotel: 'Riviera Azul Resort', price: 160, rating: 4.5 },
    ],
  },
  africa: {
    region: 'Africa',
    cities: [
      { city: 'Cape Town', hotel: 'Table Mountain View', price: 130, rating: 4.6 },
      { city: 'Marrakesh', hotel: 'Riad of Palms', price: 110, rating: 4.5 },
      { city: 'Nairobi', hotel: 'Savanna Grand', price: 125, rating: 4.4 },
    ],
  },
}

// Holographic, futuristic worldwide map
export default function GlobePrototype() {
  const [active, setActive] = useState(null)
  const [hover, setHover] = useState(null)

  // Hotspot coordinates are roughly placed over an equirectangular projection grid
  const hotspots = useMemo(() => ([
    { id: 'europe', x: 58, y: 34, label: 'Europe' },
    { id: 'asia', x: 75, y: 38, label: 'Asia' },
    { id: 'americas', x: 28, y: 40, label: 'Americas' },
    { id: 'africa', x: 55, y: 52, label: 'Africa' },
  ]), [])

  return (
    <div className="relative w-full">
      {/* Holographic panel */}
      <div className="relative mx-auto aspect-[16/10] w-full max-w-[720px] overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-slate-950/60 to-purple-950/40 p-0 shadow-[0_0_40px_rgba(34,211,238,0.12),inset_0_0_60px_rgba(99,102,241,0.12)]">
        {/* Scanlines */}
        <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-screen" style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(56,189,248,0.15) 0px, rgba(56,189,248,0.15) 1px, transparent 1px, transparent 4px)'
        }} />

        {/* Animated grid */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          animate={{ backgroundPositionX: [0, 40, 0], backgroundPositionY: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
            backgroundSize: '40px 40px, 40px 40px'
          }}
        />

        {/* World curvature glow */}
        <div className="absolute -left-1/3 top-0 h-[160%] w-[160%] rounded-[50%] opacity-40 blur-3xl" style={{
          background:
            'radial-gradient(closest-side, rgba(56,189,248,0.18), transparent 60%), radial-gradient(closest-side, rgba(168,85,247,0.18), transparent 60%)'
        }} />

        {/* Orbiting rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 h-[60%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
            style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.25))', rotate: i === 1 ? 22 : i === 2 ? -18 : 0 }}
            animate={{ opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* Subtle world meridians and latitudes (curved highlights) */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div key={`mer-${i}`} className="absolute left-1/2 top-1/2 h-[130%] w-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent" style={{ transform: `rotate(${i * 22.5}deg)` }} />
          ))}
          {[...Array(4)].map((_, i) => (
            <div key={`lat-${i}`} className="absolute left-1/2 top-1/2 h-[1px] w-[160%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-fuchsia-300/25 to-transparent" style={{ transform: `rotate(${i * 12 - 24}deg)` }} />
          ))}
        </div>

        {/* Hotspot constellation layer */}
        {hotspots.map((h) => (
          <button
            key={h.id}
            onMouseEnter={() => setHover(h.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setActive(h.id)}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${h.x}%`, top: `${h.y}%` }}
          >
            {/* glow */}
            <motion.span
              className="absolute -inset-6 rounded-full"
              animate={{ boxShadow: hover === h.id ? '0 0 24px rgba(34,211,238,0.35)' : '0 0 12px rgba(34,211,238,0.18)' }}
            />
            {/* core */}
            <motion.span
              className="relative z-10 block h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_4px_rgba(34,211,238,0.25)]"
              animate={{ scale: hover === h.id ? 1.25 : 1, y: hover === h.id ? -1 : 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 18 }}
            />
            {/* label */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-slate-900/70 px-2 py-1 text-xs text-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
              {h.label}
            </span>
          </button>
        ))}

        {/* Sweeping holographic scan */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={{ x: '-30%' }}
          animate={{ x: ['-30%', '130%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
        >
          <div className="h-full w-[30%] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md" />
        </motion.div>

        {/* Glass highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{
          background:
            'linear-gradient( to bottom right, rgba(255,255,255,0.06), rgba(255,255,255,0.00) 40% )'
        }} />
      </div>

      {/* Details drawer */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Compass size={18} className="text-cyan-300" />
                <p className="font-semibold">Top stays in {sampleData[active].region}</p>
              </div>
              <button className="rounded-lg border border-white/10 bg-white/5 p-1 hover:bg-white/10" onClick={() => setActive(null)}>
                <X size={16} />
              </button>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleData[active].cities.map((c, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 hover:bg-slate-900/80 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{c.city}</p>
                      <p className="text-sm text-slate-400">{c.hotel}</p>
                    </div>
                    <div className="flex items-center gap-1 text-cyan-300">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm text-white/90">{c.rating}</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-slate-400">from</span>
                    <span className="text-white font-semibold">${c.price}/night</span>
                  </div>
                  <button className="mt-3 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">
                    <MapPin size={16} className="text-cyan-300" />
                    View map
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
