import { useState } from 'react'
import { Mail, User, Phone, Crown } from 'lucide-react'

export default function Register() {
  const [tier, setTier] = useState('standard')

  return (
    <section id="register" className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_350px_at_20%_0%,rgba(56,189,248,0.12),transparent),radial-gradient(700px_350px_at_80%_100%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Reserve your spot</h2>
          <p className="mt-3 text-slate-300">We’re not launching yet. Join the waitlist to get early access, exclusive offers, and a chance to secure the VIP Card.</p>
          <blockquote className="mt-6 text-slate-300 italic border-l-2 border-white/20 pl-4">
            "The customer who comes to us goes away after completing the trip — yes, this is true, because we try to give our best to you all."
          </blockquote>
        </div>

        <form className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-lg overflow-hidden">
          {/* payment gateway like animation */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl animate-pulse" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="text-slate-300 text-sm">Full Name</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 focus-within:border-cyan-400/50 transition-colors">
                <User size={18} className="text-slate-400" />
                <input required placeholder="Alex Traveler" className="w-full bg-transparent outline-none text-white placeholder:text-slate-500" />
              </div>
            </div>

            <div className="group">
              <label className="text-slate-300 text-sm">Email</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 focus-within:border-cyan-400/50 transition-colors">
                <Mail size={18} className="text-slate-400" />
                <input type="email" required placeholder="you@domain.com" className="w-full bg-transparent outline-none text-white placeholder:text-slate-500" />
              </div>
            </div>

            <div className="group">
              <label className="text-slate-300 text-sm">Phone</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 focus-within:border-cyan-400/50 transition-colors">
                <Phone size={18} className="text-slate-400" />
                <input required placeholder="+1 555 000 000" className="w-full bg-transparent outline-none text-white placeholder:text-slate-500" />
              </div>
            </div>

            <div className="group">
              <label className="text-slate-300 text-sm">Membership</label>
              <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 focus-within:border-cyan-400/50 transition-colors">
                <Crown size={18} className="text-slate-400" />
                <select value={tier} onChange={(e) => setTier(e.target.value)} className="w-full bg-transparent outline-none text-white/90">
                  <option value="standard" className="bg-slate-900">Standard (free)</option>
                  <option value="vip" className="bg-slate-900">VIP Card — $1000</option>
                </select>
              </div>
              <p className="mt-2 text-xs text-slate-400">VIPs earn 10% cashback on every purchase + 2 free tickets.</p>
            </div>
          </div>

          <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold py-3 shadow-[0_10px_30px_rgba(34,211,238,0.35)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transition-shadow">
            Join Waitlist
          </button>
          <p className="mt-3 text-center text-xs text-slate-400">We’ll email you when we launch. No spam.</p>
        </form>
      </div>
    </section>
  )
}
