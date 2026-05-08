'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-[#4a90d9]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-sm">
            <span className="block font-bold text-6xl tracking-wide text-white mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              FORGE
            </span>
            <p className="text-white/50 text-sm font-medium leading-relaxed">
              Not manufactured. Forged. Industrial-grade energy for athletes who train like machines and refuse to quit.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-8">Arsenal</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">All Alloys</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Gear</a></li>
                <li><a href="#collection" className="hover:text-white transition-colors duration-300">Subscriptions</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#4a90d9] mb-8">Network</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} FORGE ENERGY. BUILT DIFFERENT.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#4a90d9] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#4a90d9] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
