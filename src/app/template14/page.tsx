'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import SurgeNavbar from '@/components/surge/Navbar';
import SurgeFeatures from '@/components/surge/Features';
import SurgeProducts from '@/components/surge/Products';
import SurgeProcess from '@/components/surge/Process';
import SurgeFooter from '@/components/surge/Footer';

export default function Template14() {
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
      className="relative font-sans bg-black overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        body { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <SurgeNavbar />

      <motion.div
        className="fixed top-0 left-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #ccff00, #00ff88)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/surge-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Left Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        {/* Top + Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#ccff00] selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6">
          <div className="container mx-auto">
            <div className="max-w-2xl relative z-20 mt-20">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] md:text-[12px] font-mono font-bold tracking-[0.5em] uppercase mb-8 text-[#ccff00]"
              >
                Performance Series
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="leading-none font-black mb-8 uppercase tracking-tighter"
                style={{
                  fontSize: 'clamp(5rem, 14vw, 12rem)',
                }}
              >
                SURGE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="text-lg md:text-xl font-light tracking-[0.2em] text-white/80 font-sans"
              >
                Kinetic fruit fuel.<br />
                Engineered for max velocity.
              </motion.p>
            </div>
          </div>

          
        </section>

        {/* ORIGIN SECTION */}
        <section id="core" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ccff00] uppercase mb-4 block">
                [SYS.CORE] // 01
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter">
                Overclock Your <span className="text-white/40">System.</span>
              </h2>
              <div className="border-l border-[#ccff00]/30 pl-8">
                <p className="text-white/60 text-lg font-sans font-light leading-relaxed mb-12">
                  Traditional energy drinks spike and crash. SURGE uses a proprietary sustained-release nootropic matrix combined with raw fruit cellular voltage to keep you operating at peak capacity for hours.
                </p>
                <button className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white hover:text-[#ccff00] transition-colors flex items-center gap-4 group">
                  Access Data
                  <span className="w-8 h-[1px] bg-[#ccff00] group-hover:w-12 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <SurgeFeatures />
        
        <SurgeProcess />
        
        <SurgeProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.1)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-black leading-none mb-12 text-white tracking-tighter uppercase"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                }}
              >
                Break Your <br />
                <span className="text-[#ccff00]">Limits.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-12 py-5 bg-[#ccff00] text-black text-[12px] font-mono font-bold uppercase tracking-[0.3em] transition-transform hover:scale-105 duration-300">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Deploy Now
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <SurgeFooter />
    </div>
  );
}
