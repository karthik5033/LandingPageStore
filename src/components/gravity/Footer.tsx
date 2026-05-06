'use client';
import Link from 'next/link';

export default function GravityFooter() {
  return (
    <footer className="w-full bg-transparent text-[#fdfbf7] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-3xl tracking-widest uppercase text-[#fdfbf7] font-bold" style={{ fontFamily: "'Oswald', sans-serif" }}>
            GRAVITY
          </span>
          <p className="text-[10px] text-[#b87333] font-bold tracking-widest uppercase mt-4 mb-6">
            The Force of Coffee
          </p>
          <p className="text-[#fdfbf7]/50 text-[11px] font-medium leading-relaxed uppercase tracking-wider">
            High velocity. Maximum impact. We engineer coffee for those who demand absolute power from their morning ritual.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[10px] text-[#fdfbf7]/40 uppercase tracking-widest mb-6 font-bold">Arsenal</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-bold tracking-widest text-[#fdfbf7]/80 uppercase">
              <li><a href="#" className="hover:text-[#b87333] transition-colors duration-300">Dark Roasts</a></li>
              <li><a href="#" className="hover:text-[#b87333] transition-colors duration-300">Espresso</a></li>
              <li><a href="#collection" className="hover:text-[#b87333] transition-colors duration-300">Equipment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-[#fdfbf7]/40 uppercase tracking-widest mb-6 font-bold">Command</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-bold tracking-widest text-[#fdfbf7]/80 uppercase">
              <li><a href="#" className="hover:text-[#b87333] transition-colors duration-300">Operations</a></li>
              <li><a href="#" className="hover:text-[#b87333] transition-colors duration-300">Intel</a></li>
              <li><a href="#" className="hover:text-[#b87333] transition-colors duration-300">Comms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#fdfbf7]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-widest text-[#fdfbf7]/40 uppercase font-bold max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} GRAVITY COFFEE CO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#fdfbf7] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
