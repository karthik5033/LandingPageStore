'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import GravityNavbar from '@/components/gravity/Navbar';
import GravityFeatures from '@/components/gravity/Features';
import GravityProducts from '@/components/gravity/Products';
import GravityProcess from '@/components/gravity/Process';
import GravityFooter from '@/components/gravity/Footer';

export default function Template26() {
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
      className="relative font-sans bg-[#0d0704] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <GravityNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#b87333'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/gravity-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0704]/90 via-transparent to-[#0d0704]/70 z-10" />
      </div>

      <main className="relative z-10 w-full text-[#fdfbf7] selection:bg-[#b87333] selection:text-[#0d0704]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-[100dvh] relative flex items-center justify-center text-center px-8 md:px-16">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-5xl mx-auto relative z-20 mt-12 flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-16 h-2 bg-[#b87333] mb-8 transform -skew-x-12 origin-left"
              />

              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="block text-[11px] tracking-widest font-bold uppercase mb-6 text-[#b87333]"
              >
                Maximum Impact
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.9] mb-8 font-bold text-[#fdfbf7] uppercase tracking-tighter"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(5rem, 12vw, 11rem)',
                }}
              >
                The Force <br/>
                <span className="text-[#b87333]">Of Coffee.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1.5 }}
                className="text-xs md:text-sm font-bold tracking-widest text-[#fdfbf7]/70 max-w-lg mx-auto leading-relaxed uppercase"
              >
                Aggressive extraction. Uncompromising strength. Prepare for absolute sensory overload.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <GravityProcess />
        <GravityFeatures />
        <GravityProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="w-12 h-1 bg-[#b87333] mb-8 transform -skew-x-12" />
            <span className="text-[10px] tracking-widest font-bold text-[#b87333] uppercase mb-6 block">
              Brace Yourself
            </span>
            <h2
              className="text-[#fdfbf7] mb-12 leading-none uppercase font-bold tracking-tighter"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 'clamp(4rem, 9vw, 8rem)',
              }}
            >
              Initiate <br/>
              <span className="text-[#b87333]">Extraction.</span>
            </h2>
            
            <button className="px-16 py-6 bg-[#b87333] text-[#0d0704] text-[12px] font-bold tracking-widest uppercase hover:bg-[#fdfbf7] transition-all duration-300 transform -skew-x-12">
              <span className="block transform skew-x-12">Deploy Reserve</span>
            </button>
          </motion.div>
        </section>

      </main>

      <GravityFooter />
    </div>
  );
}
