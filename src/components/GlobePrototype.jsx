import { useState, useMemo } from 'react'
import { MapPin, Star, X, Compass } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
      { city: 'Cape Town', hotel: "Table Mountain View", price: 130, rating: 4.6 },
      { city: 'Marrakesh', hotel: 'Riad of Palms', price: 110, rating: 4.5 },
      { city: 'Nairobi', hotel: 'Savanna Grand', price: 125, rating: 4.4 },
    ],
  },
}

export default function GlobePrototype() {
  const [active, setActive] = useState(null)
  const [hover, setHover] = useState(null)

  const hotspots = useMemo(() => ([
    { id: 'europe', x: 62, y: 32, label: 'Europe' },
    { id: 'asia', x: 74, y: 38, label: 'Asia' },
    { id: 'americas', x: 28, y: 38, label: 'Americas' },
    { id: 'africa', x: 58, y: 50, label: 'Africa' },
  ]), [])

  return (
    <div className="relative w-full">
      <div className="relative mx-auto aspect-square w-full max-w-[520px]">
        <motion.div
          className="absolute inset-0 rounded-full border border-white/10 overflow-hidden"
          style={{
            background:
              'radial-gradient(120%_80% at 30% 25%, rgba(34,211,238,0.25), transparent 70%), radial-gradient(100%_80% at 75% 70%, rgba(168,85,247,0.22), transparent 70%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), rgba(2,6,23,1))',
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.35), 0 30px 80px rgba(0,0,0,0.35)'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        >
          {/* longitudinal lines */}
          <div className="absolute inset-0 opacity-25">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-[180%] w-[1px] bg-white/20"
                style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
              />
            ))}
            {[...Array(4)].map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-1/2 top-1/2 h-[1px] w-[180%] bg-white/20"
                style={{ transform: `translate(-50%, -50%) rotate(${i * 20}deg)`, opacity: 0.15 }}
              />
            ))}
          </div>

          {/* hotspots */}
          {hotspots.map(h => (
            <button
              key={h.id}
              onMouseEnter={() => setHover(h.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setActive(h.id)}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
            >
              <span className="absolute -inset-3 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-colors" />
              <motion.span
                className="relative z-10 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_0_4px_rgba(34,211,238,0.25)]"
                animate={{ scale: hover === h.id ? 1.2 : 1, y: hover === h.id ? -1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-slate-900/80 px-2 py-1 text-xs text-white/90 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                {h.label}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/20" />
      </div>

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
                    <span className="text-white font-semibold">${'{'}c.price{'}'}/night</span>
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
