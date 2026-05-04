'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import AuroraNavbar from '@/components/aurora/Navbar';
import AuroraFeatures from '@/components/aurora/Features';
import AuroraProducts from '@/components/aurora/Products';
import AuroraProcess from '@/components/aurora/Process';
import AuroraFooter from '@/components/aurora/Footer';

export default function Template11() {
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

  return (
    <div
      ref={containerRef}
      className="relative font-sans bg-[#030303]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <AuroraNavbar />

      <motion.div
        className="fixed top-0 left-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #facc15, #f59e0b)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template11-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-yellow-400 selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-7xl relative z-20 mt-20">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block text-[10px] md:text-[12px] font-bold tracking-[0.6em] uppercase mb-10 text-yellow-400"
            >
              The Fresh Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="leading-none font-light mb-10 uppercase"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(4rem, 16vw, 14rem)',
                letterSpacing: '0.05em'
              }}
            >
              AURORA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1.2 }}
              className="text-xs md:text-sm font-light tracking-[0.5em] uppercase text-gray-300 max-w-xl mx-auto"
            >
              The Citrus Dawn.
            </motion.p>
          </div>

          
        </section>

        <AuroraProcess />
        
        <AuroraFeatures />
        
        <AuroraProducts />

        {/* CTA SECTION */}
        <section className="py-32 flex items-center justify-center px-6 border-t border-yellow-500/10 bg-black/40 backdrop-blur-md">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-light leading-tight mb-16 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                }}
              >
                Capture The <br />
                <span className="italic text-yellow-300">Glow.</span>
              </h2>
              
              <button className="mt-8 px-14 py-6 border border-yellow-400/50 text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-yellow-400 hover:text-black transition-colors duration-500 rounded-full">
                Shop The Dawn
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <AuroraFooter />
    </div>
  );
}
