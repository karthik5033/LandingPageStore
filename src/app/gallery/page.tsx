'use client';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';
import TemplateCard from '@/components/gallery/TemplateCard';

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
      
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale"
        >
          <source src="/newv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-5' : 'bg-transparent border-transparent py-8'}`}>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.templates.map((t) => (
                  <TemplateCard
                    key={t.id}
                    id={t.id}
                    name={t.name}
                    description={t.description}
                    href={t.href}
                    accentHex={t.accentHex}
                    heroHeadline={t.heroHeadline}
                    icon={t.icon}
                    folder={t.folder}
                    ext={t.ext}
                    prefix={t.prefix}
                    frameCount={t.frameCount}
                  />
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
