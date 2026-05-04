'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-[#ff3300]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-sm">
            <span className="block font-bold text-6xl tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Teko', sans-serif" }}>
              APEX
            </span>
            <p className="text-white/50 text-sm font-medium leading-relaxed">
              Apex isn't a drink. It's an unfair advantage. Pure kinetic fruit energy engineered for those who refuse to lose.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#ff3300] mb-8">Hardware</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">The Arsenal</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Merch</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Subscriptions</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#ff3300] mb-8">Network</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} APEX ENERGY. NO SURRENDER.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#ff3300] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ff3300] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
