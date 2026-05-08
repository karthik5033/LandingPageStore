'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import OpusNavbar from '@/components/opus/Navbar';
import OpusFeatures from '@/components/opus/Features';
import OpusProducts from '@/components/opus/Products';
import OpusProcess from '@/components/opus/Process';
import OpusFooter from '@/components/opus/Footer';

export default function Template24() {
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
      className="relative font-sans bg-[#050505] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <OpusNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #f5f5f0, #a3a3a3)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/opus-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-[#050505]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#f5f5f0] selection:text-[#050505]">
        
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
                className="block text-[9px] tracking-[0.5em] font-light uppercase mb-8 text-[#a3a3a3]"
              >
                The Perfect Pour
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.95] mb-8 font-normal text-[#f5f5f0]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 9vw, 8rem)',
                }}
              >
                Liquid <span className="italic text-[#a3a3a3]">Silk.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-[11px] md:text-xs font-light tracking-[0.2em] text-[#a3a3a3] max-w-lg leading-relaxed uppercase"
              >
                Where espresso meets milk in a flawless, mesmerizing symphony. Experience coffee as high art.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#f5f5f0] uppercase mb-6 block">
                  00. / The Method
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Precision in <br />
                  <span className="italic text-[#f5f5f0]">every variable.</span>
                </h2>
                <div className="border-l border-[#f5f5f0]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    OPUS treats coffee brewing as applied physics. We control every variable: water temperature to within 0.1 degrees, grind size to 50-micron tolerances, and extraction time measured in tenths of a second. The result is not just coffee. It is the platonic ideal of what coffee can be.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our green beans are stored in nitrogen-flushed silos at exactly 11 degrees Celsius, preserving freshness for months without degradation. When an order arrives, we roast, grind, and ship within the same twelve-hour window.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>0.1°</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Precision</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>50μm</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Grind Size</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>12h</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Roast-to-Ship</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <OpusProcess />
        <OpusFeatures />
        <OpusProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] tracking-[0.5em] font-light text-[#a3a3a3] uppercase mb-6 block">
              Taste the Canvas
            </span>
            <h2
              className="text-[#f5f5f0] mb-12 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Master <span className="italic text-[#a3a3a3]">Your Pour.</span>
            </h2>
            
            <button className="px-14 py-5 border border-[#f5f5f0] text-[#f5f5f0] text-[9px] font-light tracking-[0.4em] uppercase hover:bg-[#f5f5f0] hover:text-[#050505] transition-all duration-700 relative overflow-hidden group">
              <span className="relative z-10">Acquire the Blend</span>
              <div className="absolute inset-0 bg-[#f5f5f0] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
            </button>
          </motion.div>
        </section>

      </main>

      <OpusFooter />
    </div>
  );
}
