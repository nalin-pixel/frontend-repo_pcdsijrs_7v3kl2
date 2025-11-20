import { CreditCard, Bitcoin, Wallet, Banknote, QrCode, BadgeDollarSign } from 'lucide-react'

const payments = [
  { name: 'UPI / GPay', icon: QrCode },
  { name: 'Credit & Debit Cards', icon: CreditCard },
  { name: 'Amex', icon: BadgeDollarSign },
  { name: 'Skrill', icon: Wallet },
  { name: 'Neteller', icon: Wallet },
  { name: 'Crypto', icon: Bitcoin },
]

export default function Payments() {
  return (
    <section id="payments" className="relative py-16 md:py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(56,189,248,0.15),transparent),radial-gradient(600px_300px_at_90%_60%,rgba(168,85,247,0.12),transparent)]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">All the ways to pay</h2>
          <p className="mt-3 text-slate-300/90">From UPI to crypto to cards—we support it all for effortless global bookings.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {payments.map(({ name, icon: Icon }) => (
            <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 border border-white/10 flex items-center justify-center">
                  <Icon className="text-cyan-300" size={24} />
                </div>
                <p className="text-white font-medium">{name}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-slate-400 text-sm">
          And more options at checkout, including regional wallets.
        </div>
      </div>
    </section>
  )
}
