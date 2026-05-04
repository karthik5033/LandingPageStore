'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import VelvetNavbar from '@/components/velvet/Navbar';
import VelvetFeatures from '@/components/velvet/Features';
import VelvetProducts from '@/components/velvet/Products';
import VelvetProcess from '@/components/velvet/Process';
import VelvetFooter from '@/components/velvet/Footer';

export default function Template22() {
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
      className="relative font-sans bg-[#0a0806] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <VelvetNavbar />

      <motion.div
        className="fixed top-0 left-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #d4af37, #c89f53)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/velvet-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806]/90 via-transparent to-[#0a0806]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#d4af37] selection:text-black">
        
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
                className="block text-[10px] tracking-[0.5em] uppercase mb-8 text-[#d4af37]"
              >
                The Master Roasters
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.95] mb-8 font-normal text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4.5rem, 10vw, 8.5rem)',
                }}
              >
                Liquid <span className="italic text-[#d4af37]">Velvet.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-sm md:text-base font-light tracking-widest text-white/70 max-w-lg leading-relaxed uppercase"
              >
                Experience coffee elevated to an art form. Small batches. Precision roasted. Perfectly extracted.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <VelvetProcess />
        
        <VelvetFeatures />
        
        <VelvetProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center border-t border-[#d4af37]/10 bg-[#0a0806]/20 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase mb-6 block">
              Join the Society
            </span>
            <h2
              className="text-white mb-12 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
              }}
            >
              Taste the <br />
              <span className="italic text-[#d4af37]">Difference.</span>
            </h2>
            
            <button className="px-14 py-5 border border-[#d4af37] text-white text-[10px] tracking-[0.3em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500 relative overflow-hidden group">
              <span className="relative z-10">Shop the Roast</span>
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </motion.div>
        </section>

      </main>

      <VelvetFooter />
    </div>
  );
}
