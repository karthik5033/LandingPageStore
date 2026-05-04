'use client';

export default function LumenFooter() {
  return (
    <footer className="w-full bg-transparent text-white relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
        
        <div className="max-w-sm">
          <span className="text-3xl text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            LUMEN
          </span>
          <p className="text-[10px] text-[#d97706] font-bold tracking-[0.3em] uppercase mt-4 mb-6">
            The Essence of Coffee
          </p>
          <p className="text-white/50 text-xs font-light leading-relaxed">
            Where craft meets brilliance. Sustainably sourced, meticulously roasted, and perfectly extracted.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[9px] text-white/40 uppercase tracking-[0.3em] mb-6 font-bold">Offerings</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-medium tracking-widest text-white/70">
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Reserve Collection</a></li>
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Subscriptions</a></li>
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Brew Gear</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] text-white/40 uppercase tracking-[0.3em] mb-6 font-bold">Atelier</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-medium tracking-widest text-white/70">
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Roastery</a></li>
              <li><a href="#" className="hover:text-[#d97706] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-white/30 uppercase font-semibold max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} LUMEN ROASTERS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
