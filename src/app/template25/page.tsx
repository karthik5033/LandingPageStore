'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ZenithNavbar from '@/components/zenith/Navbar';
import ZenithFeatures from '@/components/zenith/Features';
import ZenithProducts from '@/components/zenith/Products';
import ZenithProcess from '@/components/zenith/Process';
import ZenithFooter from '@/components/zenith/Footer';

export default function Template25() {
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
      className="relative font-sans bg-[#0a0908] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <ZenithNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#f2f0eb'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/zenith-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/90 via-transparent to-[#0a0908]/50 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#f2f0eb] selection:text-[#0a0908]">
        
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
                className="block text-[9px] tracking-[0.5em] font-light uppercase mb-8 text-[#f2f0eb]/70"
              >
                The Absolute Pinnacle
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.95] mb-8 font-normal text-[#f2f0eb]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                }}
              >
                Infinite <span className="italic text-[#f2f0eb]/70">Rhythm.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-[11px] md:text-xs font-light tracking-[0.2em] text-[#f2f0eb]/60 max-w-lg mx-auto leading-relaxed uppercase"
              >
                Experience the mesmerizing symmetry of the perfect concentric pour.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <ZenithProcess />
        <ZenithFeatures />
        <ZenithProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] tracking-[0.5em] font-light text-[#f2f0eb]/50 uppercase mb-6 block">
              Reach the Zenith
            </span>
            <h2
              className="text-[#f2f0eb] mb-12 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Elevate <span className="italic text-[#f2f0eb]/70">Your Ritual.</span>
            </h2>
            
            <button className="px-14 py-5 border border-[#f2f0eb] text-[#f2f0eb] text-[9px] font-light tracking-[0.4em] uppercase hover:bg-[#f2f0eb] hover:text-[#0a0908] transition-all duration-700 relative overflow-hidden group">
              <span className="relative z-10">Discover the Collection</span>
              <div className="absolute inset-0 bg-[#f2f0eb] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
            </button>
          </motion.div>
        </section>

      </main>

      <ZenithFooter />
    </div>
  );
}
