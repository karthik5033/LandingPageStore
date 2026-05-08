'use client';
import { motion } from 'framer-motion';

const links = {
  Discover: ['Our Mission', 'Origin Partners', 'The Craft', 'Press'],
  Shop: ['Dark Collection', 'Milk Collection', 'Gift Sets', 'Subscriptions'],
  Contact: ['hello@velvet.co', 'Paris, France', 'Instagram', 'Newsletter']
};

export default function ChocolateFooter() {
  return (
    <footer className="relative z-20 border-t border-[#2a1500]/60">
      {/* Footer content */}
      <div className="px-6 md:px-40 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-[#c8922a] rounded-full shadow-[0_0_8px_#c8922a]" />
              <span className="text-xl font-black tracking-[0.3em] text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                VELVET
              </span>
            </div>
            <p className="text-[#5a4030] text-sm leading-relaxed mb-8 max-w-xs">
              Premium bean-to-bar chocolate, crafted with obsessive precision and singular vision since 2026.
            </p>
            <div className="text-[10px] font-mono tracking-widest text-[#3a2010] uppercase">
              EST. 2026 — PARIS
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#7a5535] mb-6">{title}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-[#5a4030] text-sm hover:text-[#c8922a] transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a0800]/80 px-6 md:px-40 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-mono tracking-widest text-[#3a2010] uppercase">
          © 2026 Velvet Chocolate Co. All Rites Reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-mono tracking-widest text-[#3a2010] uppercase">
          <a href="#" className="hover:text-[#c8922a] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#c8922a] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#c8922a] transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
