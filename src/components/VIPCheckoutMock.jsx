import { useState } from 'react'
import { CreditCard, ShieldCheck, CheckCircle2, XCircle, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VIPCheckoutMock() {
  const [stage, setStage] = useState('idle') // idle -> processing -> success
  const [method, setMethod] = useState('card')

  const pay = () => {
    setStage('processing')
    setTimeout(() => setStage('success'), 1200)
  }

  return (
    <section className="relative py-16 md:py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_10%_10%,rgba(34,211,238,0.12),transparent),radial-gradient(600px_300px_at_90%_90%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">VIP Card Checkout</h2>
          <p className="mt-3 text-slate-300">Purchase the VIP Card for $1000. Earn 10% cashback on every trip and receive 2 free tickets instantly.</p>
          <ul className="mt-6 space-y-2 text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-300" size={18}/> Priority support and upgrades</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-300" size={18}/> 10% cashback on all bookings</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-300" size={18}/> 2 complimentary flight tickets</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-300" size={18}/> Lounge access perks</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="text-white font-semibold">Total</div>
            <div className="text-white text-2xl font-bold">$1000</div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            <button onClick={() => setMethod('card')} className={`rounded-xl border px-3 py-2 ${method==='card' ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/10 bg-white/5'}`}>Card</button>
            <button onClick={() => setMethod('upi')} className={`rounded-xl border px-3 py-2 ${method==='upi' ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/10 bg-white/5'}`}>UPI</button>
            <button onClick={() => setMethod('crypto')} className={`rounded-xl border px-3 py-2 ${method==='crypto' ? 'border-cyan-400/60 bg-cyan-400/10' : 'border-white/10 bg-white/5'}`}>Crypto</button>
          </div>

          <div className="mt-4 grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Name on card" className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none" />
              <input placeholder="Card number" className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="MM/YY" className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none" />
              <input placeholder="CVC" className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 outline-none" />
            </div>
          </div>

          <button onClick={pay} className="mt-4 w-full rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-slate-950 font-semibold py-3 flex items-center justify-center gap-2">
            <CreditCard size={18} /> Pay $1000
          </button>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={14} /> Secured by encrypted payment gateway
          </div>

          <AnimatePresence>
            {stage === 'processing' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                <Loader2 className="mx-auto animate-spin" />
                <p className="mt-2 text-slate-300">Processing payment...</p>
              </motion.div>
            )}
            {stage === 'success' && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-3 text-center text-emerald-300">
                <CheckCircle2 className="mx-auto" />
                <p className="mt-1">Payment successful! VIP activated.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
