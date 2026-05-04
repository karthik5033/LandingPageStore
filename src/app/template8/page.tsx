'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import MonolithNavbar from '@/components/monolith/Navbar';
import MonolithFeatures from '@/components/monolith/Features';
import MonolithProducts from '@/components/monolith/Products';
import MonolithProcess from '@/components/monolith/Process';
import MonolithFooter from '@/components/monolith/Footer';

export default function Template8() {
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
      className="relative font-sans bg-black"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <MonolithNavbar />

      {/* Brutalist scroll indicator */}
      <motion.div
        className="fixed top-0 right-0 w-2 h-full origin-top z-[60] mix-blend-difference"
        style={{
          scaleY,
          backgroundColor: '#ffffff'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template8-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-white selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-7xl relative z-20 mt-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block text-[12px] font-black tracking-[0.6em] uppercase mb-12 text-gray-400"
            >
              The Architecture Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none font-black mb-16 uppercase tracking-tighter"
              style={{
                fontSize: 'clamp(5rem, 15vw, 14rem)',
              }}
            >
              MONOLITH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-gray-500 max-w-xl mx-auto"
            >
              Defining Space. Defying Gravity.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-20 left-12 text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-6 text-white"
          >
            Scroll
            <motion.div
              className="w-16 h-[2px] bg-white/20 relative overflow-hidden"
            >
                <motion.div 
                    className="w-full h-full bg-white absolute top-0 left-0 origin-left"
                    animate={{ scaleX: [0, 1, 0], x: ['0%', '0%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                />
            </motion.div>
          </motion.div>
        </section>

        <MonolithProcess />
        
        <MonolithFeatures />
        
        <MonolithProducts />

        {/* CTA SECTION */}
        <section className="min-h-screen flex items-center justify-center px-6 py-40 border-t-2 border-white/20 bg-black/60 backdrop-blur-md">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-black leading-none mb-16 text-white tracking-tighter uppercase"
                style={{
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                }}
              >
                Construct <br />
                <span className="text-gray-700">Reality.</span>
              </h2>
              
              <button className="mt-8 px-16 py-8 bg-white text-black text-[12px] font-black uppercase tracking-[0.5em] hover:bg-gray-300 transition-colors">
                Initiate Project
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <MonolithFooter />
    </div>
  );
}
