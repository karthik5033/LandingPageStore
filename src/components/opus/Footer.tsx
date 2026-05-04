'use client';

export default function OpusFooter() {
  return (
    <footer className="w-full bg-transparent text-[#f5f5f0] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-2xl font-light tracking-[0.3em] uppercase text-[#f5f5f0]" style={{ fontFamily: "'Playfair Display', serif" }}>
            OPUS
          </span>
          <p className="text-[8px] text-[#a3a3a3] font-light tracking-[0.4em] uppercase mt-4 mb-6">
            The Perfect Pour
          </p>
          <p className="text-[#a3a3a3]/70 text-[10px] font-light leading-relaxed tracking-wide">
            Redefining the standard of milk and espresso. Crafted with absolute precision for the uncompromising palate.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[8px] text-[#a3a3a3] uppercase tracking-[0.4em] mb-6 font-light">Curations</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#f5f5f0]/80">
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">The Blends</a></li>
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">Single Origin</a></li>
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">Merchandise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[8px] text-[#a3a3a3] uppercase tracking-[0.4em] mb-6 font-light">Information</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#f5f5f0]/80">
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">Locations</a></li>
              <li><a href="#" className="hover:text-[#a3a3a3] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#f5f5f0]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] tracking-[0.4em] text-[#a3a3a3]/60 uppercase font-light max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} OPUS STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#f5f5f0] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#f5f5f0] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
