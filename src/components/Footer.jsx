export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold">Ruphea</p>
          <p className="text-slate-400 text-sm">International hotel booking • Coming soon</p>
        </div>
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Ruphea. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
