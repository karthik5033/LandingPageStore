'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import LumenNavbar from '@/components/lumen/Navbar';
import LumenFeatures from '@/components/lumen/Features';
import LumenProducts from '@/components/lumen/Products';
import LumenProcess from '@/components/lumen/Process';
import LumenFooter from '@/components/lumen/Footer';

export default function Template23() {
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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative font-sans bg-[#0a0602] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <LumenNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 md:w-1.5 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #f59e0b, #d97706)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/lumen-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Overlays to integrate video */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0602]/90 via-transparent to-[#0a0602]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#d97706] selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-[100dvh] relative flex items-center px-8 md:px-16">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-3xl relative z-20 mt-12"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] tracking-[0.5em] font-bold uppercase mb-8 text-[#d97706]"
              >
                The Essence of Coffee
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.95] mb-8 font-normal text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4.5rem, 10vw, 8.5rem)',
                }}
              >
                Golden <span className="italic text-[#d97706]">Hour.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-sm md:text-base font-medium tracking-[0.2em] text-white/80 max-w-lg leading-relaxed uppercase"
              >
                Awaken your senses with the purest, most radiant extraction. Every drop is a masterpiece.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <LumenProcess />
        <LumenFeatures />
        <LumenProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center border-t border-[#d97706]/10 bg-[#0a0602]/40 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] font-bold text-[#d97706] uppercase mb-6 block">
              Experience Lumen
            </span>
            <h2
              className="text-white mb-12 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              }}
            >
              Pour <span className="italic text-[#d97706]">Brilliance.</span>
            </h2>
            
            <button className="px-14 py-5 border border-[#d97706] text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#d97706] hover:text-[#0a0602] transition-all duration-500 relative overflow-hidden group">
              <span className="relative z-10">Shop the Collection</span>
              <div className="absolute inset-0 bg-[#d97706] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </motion.div>
        </section>

      </main>

      <LumenFooter />
    </div>
  );
}
