'use client';

export default function RitualFooter() {
  return (
    <footer className="w-full bg-transparent text-[#fdfbf7] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-3xl tracking-[0.2em] uppercase text-[#fdfbf7]" style={{ fontFamily: "'Playfair Display', serif" }}>
            RITUAL
          </span>
          <p className="text-[10px] text-[#e8c490] tracking-[0.2em] uppercase mt-4 mb-6" style={{ fontFamily: "'Lora', serif" }}>
            Your Daily Sanctuary
          </p>
          <p className="text-[#fdfbf7]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Dedicated to the quiet moments. We roast coffee that comforts, grounds, and inspires the start of your day.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[10px] text-[#fdfbf7]/40 uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "'Lora', serif" }}>Shop</h4>
            <ul className="flex flex-col gap-4 text-xs font-light text-[#fdfbf7]/80" style={{ fontFamily: "'Lora', serif" }}>
              <li><a href="#offerings" className="hover:text-[#e8c490] transition-colors duration-300">Fresh Roasts</a></li>
              <li><a href="#offerings" className="hover:text-[#e8c490] transition-colors duration-300">Ceramics</a></li>
              <li><a href="#offerings" className="hover:text-[#e8c490] transition-colors duration-300">Brew Gear</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-[#fdfbf7]/40 uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "'Lora', serif" }}>Connect</h4>
            <ul className="flex flex-col gap-4 text-xs font-light text-[#fdfbf7]/80" style={{ fontFamily: "'Lora', serif" }}>
              <li><a href="#origin" className="hover:text-[#e8c490] transition-colors duration-300">Our Story</a></li>
              <li><a href="#hero" className="hover:text-[#e8c490] transition-colors duration-300">The Cafe</a></li>
              <li><a href="/gallery" className="hover:text-[#e8c490] transition-colors duration-300">Gallery</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#fdfbf7]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] text-[#fdfbf7]/40 uppercase font-light max-w-7xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
        <p>&copy; {new Date().getFullYear()} RITUAL ROASTERS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
