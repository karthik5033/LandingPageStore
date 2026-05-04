'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ExtractNavbar from '@/components/extract/Navbar';
import ExtractFeatures from '@/components/extract/Features';
import ExtractProducts from '@/components/extract/Products';
import ExtractProcess from '@/components/extract/Process';
import ExtractFooter from '@/components/extract/Footer';

export default function Template28() {
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
      className="relative font-sans bg-[#0c0a08] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3 { font-family: 'Outfit', sans-serif; }
      `}</style>

      <ExtractNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#cfa052'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/extract-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a08]/90 via-transparent to-[#0c0a08]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-[#ffffff] selection:bg-[#cfa052] selection:text-[#0c0a08]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-[100dvh] relative flex items-center justify-center text-center px-8 md:px-16">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl mx-auto relative z-20 mt-12"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[11px] tracking-[0.5em] font-bold uppercase mb-8 text-[#cfa052]"
              >
                9 Bars of Pressure
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.9] mb-8 font-bold text-[#ffffff] tracking-tight"
                style={{
                  fontSize: 'clamp(4rem, 11vw, 9rem)',
                }}
              >
                The Perfect <br/>
                <span className="font-light text-[#cfa052] italic">Yield.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#ffffff]/70 max-w-lg mx-auto leading-relaxed uppercase"
              >
                Absolute precision in every drop. The science of extraction refined to an art form.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <ExtractProcess />
        <ExtractFeatures />
        <ExtractProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] tracking-[0.4em] font-bold text-[#cfa052] uppercase mb-6 block">
              Start Brewing
            </span>
            <h2
              className="text-[#ffffff] mb-12 leading-tight font-bold tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Dial In <br />
              <span className="font-light text-[#cfa052] italic">Perfection.</span>
            </h2>
            
            <button className="px-14 py-5 bg-[#cfa052] text-[#0c0a08] text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#ffffff] transition-all duration-300 rounded-lg shadow-[0_0_40px_rgba(207,160,82,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
              Equip Your Bar
            </button>
          </motion.div>
        </section>

      </main>

      <ExtractFooter />
    </div>
  );
}
