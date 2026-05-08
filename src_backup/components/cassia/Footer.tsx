'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-xl py-20 border-t border-[#d2691e]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-light text-2xl tracking-[0.2em] text-white uppercase mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>CASSIA</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-loose">
              Elevating the culinary experience. We source the finest, purest spices for those who appreciate the subtle nuances of exceptional flavour.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d2691e] mb-8">Explore</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><a href="#collection" className="hover:text-white transition-colors duration-300">Shop Collection</a></li>
                <li><a href="#origin" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#d2691e] mb-8">Connect</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] text-white/40 font-light tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} CASSIA SPICES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#d2691e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#d2691e] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}