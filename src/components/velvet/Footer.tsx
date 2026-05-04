'use client';

export default function VelvetFooter() {
  return (
    <footer className="w-full bg-[#050403]/90 backdrop-blur-md text-white relative z-20 py-16 px-8 md:px-16 border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        
        <div className="max-w-sm">
          <span className="text-3xl text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Velvet
          </span>
          <p className="text-[10px] text-[#d4af37] tracking-[0.3em] uppercase mt-4 mb-6">
            The Master Roasters
          </p>
          <p className="text-white/50 text-xs font-light leading-relaxed">
            Elevating the daily ritual. We roast small batches of the world's finest coffees, delivered fresh to your door.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[9px] text-white/40 uppercase tracking-[0.3em] mb-6">Explore</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-light tracking-widest text-white/70">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Single Origin</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Blends</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Equipment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] text-white/40 uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-light tracking-widest text-white/70">
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Wholesale</a></li>
              <li><a href="#" className="hover:text-[#d4af37] transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-white/30 uppercase font-light max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} VELVET COFFEE ROASTERS.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
