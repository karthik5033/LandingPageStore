'use client';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function PulseFooter() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#0a0604]/60 backdrop-blur-md pt-16 pb-10 px-6 mb-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <span className="block text-2xl font-normal uppercase tracking-[0.3em] text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              PULSE
            </span>
            <p className="text-white/50 text-xs font-light leading-relaxed tracking-wide">
              Elevated organic vitality. Masterfully crafted for the modern aesthete who demands uncompromising performance.
            </p>
            <div className="flex gap-6 mt-8 text-white/40">
              <Instagram size={16} className="hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
              <Twitter size={16} className="hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
              <Linkedin size={16} className="hover:text-[#c8922a] cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          
          <div className="flex gap-20">
            <div>
              <h5 className="text-[9px] font-medium tracking-[0.3em] uppercase text-[#c8922a] mb-8">Discover</h5>
              <ul className="flex flex-col gap-4 text-[11px] font-light text-white/60 tracking-widest uppercase">
                <li><a href="#origin" className="hover:text-white transition-colors duration-300">The Origin</a></li>
                <li><a href="#features" className="hover:text-white transition-colors duration-300">The Architecture</a></li>
                <li><a href="#products" className="hover:text-white transition-colors duration-300">The Collection</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[9px] font-medium tracking-[0.3em] uppercase text-[#c8922a] mb-8">Atelier</h5>
              <ul className="flex flex-col gap-4 text-[11px] font-light text-white/60 tracking-widest uppercase">
                <li><a href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Concierge</a></li>
                <li><a href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[9px] text-white/40 font-light uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} PULSE ATELIER. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
