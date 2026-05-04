'use client';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Sparkles, Coffee, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';

export default function GalleryPage() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
      `}</style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-5' : 'bg-black border-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-light tracking-[0.3em] text-lg uppercase text-white hover:text-gray-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>Atelier</Link>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/#features" className="hover:text-white transition-colors duration-300">The Engine</Link>
          </div>
          <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 inline-block">
            Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 container mx-auto px-6 pt-48 pb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-gray-400 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Archive
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complete <span className="italic text-gray-400">Collection</span>
          </h1>
        </motion.div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
        <div className="flex flex-col gap-32">
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              {/* Category Header */}
              <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-light tracking-[0.3em] uppercase text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.name}
                  </h3>
                  <p className="text-gray-400 font-light text-base md:text-lg max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
              </div>
              
              {/* Template Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.templates.map((t) => (
                  <Link 
                    key={t.id}
                    href={t.href} 
                    className="group relative flex items-center justify-between p-5 md:p-6 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500"
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon Circle */}
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:${t.accent} group-hover:border-white/30 transition-all duration-500`}>
                        <t.icon size={16} strokeWidth={1.5} />
                      </div>
                      
                      {/* Text */}
                      <div>
                        <h4 className="font-light text-xl md:text-2xl tracking-[0.15em] uppercase text-gray-300 group-hover:text-white transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {t.name}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500 font-light mt-2 tracking-wider">{t.description}</p>
                      </div>
                    </div>
                    
                    {/* Trailing Actions */}
                    <div className="flex flex-col items-end gap-4">
                      <span className="font-mono text-[10px] md:text-xs text-gray-600 tracking-widest group-hover:text-gray-400 transition-colors">NO. {t.id}</span>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Download option not available now... but coming soon!');
                          }}
                          className="hidden sm:block px-4 py-2 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-white hover:border-white/30 rounded transition-all"
                        >
                          Download
                        </button>
                        <ArrowRight size={16} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* COMING SOON INDICATOR */}
          <div className="mt-16 flex flex-col items-center justify-center py-20 px-6 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.02] hover:border-white/20 transition-all duration-500">
            <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-4 text-center">Expanding The Archive</span>
            <h4 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-300 uppercase text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Exhibits <span className="italic text-gray-500">Coming Soon.</span>
            </h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-auto py-12 text-center text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase">
        <p>© {new Date().getFullYear()} ATELIER STUDIOS. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
