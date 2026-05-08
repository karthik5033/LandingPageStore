'use client';
import Link from 'next/link';

export default function ZenithFooter() {
  return (
    <footer className="w-full bg-transparent text-[#f2f0eb] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-2xl tracking-[0.3em] uppercase text-[#f2f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            ZENITH
          </span>
          <p className="text-[8px] text-[#f2f0eb]/50 font-light tracking-[0.5em] uppercase mt-4 mb-6">
            The Pinnacle of Pour
          </p>
          <p className="text-[#f2f0eb]/60 text-[10px] font-light leading-relaxed tracking-wide">
            Where geometry and flavor intersect. A relentless pursuit of the perfect concentric pour.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[8px] text-[#f2f0eb]/50 uppercase tracking-[0.4em] mb-6 font-light">Explore</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#f2f0eb]/80">
              <li><a href="#" className="hover:text-[#f2f0eb] transition-colors duration-300">The Reserve</a></li>
              <li><a href="#" className="hover:text-[#f2f0eb] transition-colors duration-300">Equipage</a></li>
              <li><a href="#" className="hover:text-[#f2f0eb] transition-colors duration-300">Masterclass</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[8px] text-[#f2f0eb]/50 uppercase tracking-[0.4em] mb-6 font-light">Connect</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#f2f0eb]/80">
              <li><a href="#" className="hover:text-[#f2f0eb] transition-colors duration-300">Manifesto</a></li>
              <li><a href="/gallery" className="hover:text-[#f2f0eb] transition-colors duration-300">Gallery</a></li>
              <li><a href="#" className="hover:text-[#f2f0eb] transition-colors duration-300">Inquiries</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#f2f0eb]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] tracking-[0.4em] text-[#f2f0eb]/40 uppercase font-light max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} ZENITH ROASTERS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#f2f0eb] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#f2f0eb] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
