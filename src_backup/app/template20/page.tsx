'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import CremaNavbar from '@/components/crema/Navbar';
import CremaFeatures from '@/components/crema/Features';
import CremaProducts from '@/components/crema/Products';
import CremaProcess from '@/components/crema/Process';
import CremaFooter from '@/components/crema/Footer';

export default function Template20() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative font-sans bg-[#0a0807] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <CremaNavbar />

      <motion.div
        className="fixed top-0 left-0 w-[2px] h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#d4a373'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/crema-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Elegant Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0807]/90 via-[#0a0807]/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-[#0a0807]/80 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#d4a373] selection:text-[#0a0807]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl relative z-20 pt-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] font-bold tracking-[0.5em] uppercase mb-8 text-[#d4a373]"
              >
                Coffee Series / Vol. II
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-light mb-10 tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Liquid <br />
                <span className="italic text-[#d4a373]">Velvet.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="w-24 h-[1px] bg-[#d4a373]/50 mb-10"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="text-lg md:text-xl font-light tracking-wide text-white/70 max-w-lg leading-relaxed"
              >
                Experience coffee in its purest, most decadent form. Cold extracted, nitro infused, and unapologetically smooth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#d4a373] uppercase mb-6 block">
                00. / The Origin
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                A devotion to <br />
                <span className="italic text-[#d4a373]">the pour.</span>
              </h2>
              <div className="border-l border-[#d4a373]/30 pl-8">
                <p className="text-white/60 text-lg font-light leading-loose mb-12">
                  We believe coffee should be savored like a fine wine. By replacing heat with time, our 24-hour slow drip extraction method captures the most elusive aromatic compounds while leaving bitter tannins behind. The result is a profoundly smooth, naturally sweet essence that redefines the morning ritual.
                </p>
                <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-[#d4a373] transition-colors duration-300 flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-white group-hover:bg-[#d4a373] transition-colors" />
                  Discover Our Method
                </button>
              </div>
            </div>
          </div>
        </section>

        <CremaFeatures />
        
        <CremaProcess />
        
        <CremaProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,163,115,0.08)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2
                className="font-light leading-tight mb-12 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                }}
              >
                Pour the <br />
                <span className="italic text-[#d4a373]">Extraordinary.</span>
              </h2>
              
              <button className="px-12 py-5 bg-transparent border border-[#d4a373] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#d4a373] hover:text-black transition-all duration-500">
                Shop the Reserve
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <CremaFooter />
    </div>
  );
}
