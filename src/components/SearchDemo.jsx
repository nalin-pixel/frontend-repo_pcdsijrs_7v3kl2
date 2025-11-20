import { useState } from 'react'
import { Search, MapPin, Building, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const suggestions = [
  'Paris, France',
  'Tokyo, Japan',
  'New York, USA',
  'Dubai, UAE',
  'Singapore',
  'Sydney, Australia',
]

const mockResults = [
  { id: 1, city: 'Paris', name: 'Hôtel Lumière', price: 189 },
  { id: 2, city: 'Tokyo', name: 'Shibuya Skyline Inn', price: 210 },
  { id: 3, city: 'New York', name: 'Hudson Central', price: 220 },
]

export default function SearchDemo() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const onSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      const filtered = mockResults.filter(r =>
        r.city.toLowerCase().includes(query.toLowerCase()) ||
        r.name.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
      setLoading(false)
    }, 600)
  }

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_80%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(700px_350px_at_20%_100%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Search the world</h2>
          <p className="mt-2 text-slate-300">Hotels, private stays, executive rentals — one unified search.</p>
        </div>

        <form onSubmit={onSearch} className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <Search className="text-cyan-300 ml-2" size={20} />
            <input
              className="w-full bg-transparent px-3 py-3 outline-none text-white placeholder:text-slate-500"
              placeholder="Try: Tokyo, Paris, New York..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="rounded-xl bg-cyan-500 text-slate-900 font-semibold px-4 py-2">Search</button>
          </div>
        </form>

        <div className="mt-3 flex justify-center gap-2 text-xs text-slate-400">
          {suggestions.map(s => (
            <button
              key={s}
              onClick={() => setQuery(s.split(',')[0])}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
            >
              {s}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-8 flex items-center justify-center gap-3 text-slate-300">
              <Loader2 className="animate-spin" /> Searching live rates...
            </motion.div>
          )}
        </AnimatePresence>

        {!loading && results.length > 0 && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map(r => (
              <div key={r.id} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-white font-medium"><Building size={18} className="text-cyan-300" />{r.name}</div>
                <div className="mt-1 text-sm text-slate-400 flex items-center gap-1"><MapPin size={16} />{r.city}</div>
                <div className="mt-2 text-white font-semibold">${'{'}r.price{'}'}/night</div>
                <button className="mt-3 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10">View details</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
