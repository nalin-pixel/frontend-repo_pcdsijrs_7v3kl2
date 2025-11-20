import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Global hotel search • Coming soon
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-white to-slate-200 bg-clip-text text-transparent">
            Ruphea — International Hotel Booking, reimagined
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Explore every corner of the world, discover hotels, private stays, and executive rentals on an interactive 3D globe. Seamless payments, exclusive VIP rewards, and launch perks—all in one elegant experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#register" className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 font-semibold shadow-[0_10px_30px_rgba(34,211,238,0.35)] hover:shadow-[0_12px_40px_rgba(34,211,238,0.45)] transition-shadow">
              Get Early Access
            </a>
            <a href="#globe" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition-colors">
              Preview the 3D Globe
            </a>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-slate-400">
            New to Ruphea? Enjoy 60% off your first trip + 1 free ticket. VIPs get 2 free tickets and lounge access perks.
          </p>
        </div>

        {/* Spline hero: 3D credit card fintech theme */}
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-3xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-lg">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* top gradient overlay to match brand */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
