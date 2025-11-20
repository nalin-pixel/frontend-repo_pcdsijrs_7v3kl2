export default function Perks() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(500px_250px_at_80%_70%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* New customer */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white text-xl font-semibold">Welcome Offer</h3>
            <p className="mt-2 text-slate-300">New to Ruphea? Get <span className="text-cyan-300 font-semibold">60% off</span> your first trip and enjoy <span className="text-cyan-300 font-semibold">1 free ticket</span>.</p>
          </div>

          {/* VIP */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white text-xl font-semibold">Ruphea VIP Card</h3>
            <p className="mt-2 text-slate-300">Unlock elite benefits for $1000: <span className="text-cyan-300 font-semibold">10% cashback</span> on every purchase, <span className="text-cyan-300 font-semibold">2 free tickets</span>, and more.</p>
          </div>

          {/* Loyalty */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-white text-xl font-semibold">Fly Often, Lounge More</h3>
            <p className="mt-2 text-slate-300">Book <span className="text-cyan-300 font-semibold">3 trips in a year</span> and enjoy complimentary airport lounge access for <span className="text-cyan-300 font-semibold">1.5 months</span>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
