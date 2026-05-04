'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import PrismNavbar from '@/components/prism/Navbar';
import PrismFeatures from '@/components/prism/Features';
import PrismProducts from '@/components/prism/Products';
import PrismProcess from '@/components/prism/Process';
import PrismFooter from '@/components/prism/Footer';

export default function Template18() {
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
      className="relative font-sans bg-black overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <PrismNavbar />

      <motion.div
        className="fixed top-0 left-0 w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(to bottom, #ff0066, #00ccff, #ccff00)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/prism-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#ff0066] selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl relative z-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block text-sm font-bold tracking-[0.4em] uppercase mb-4 text-[#ff0066]"
              >
                // Performance Series
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="leading-[0.85] font-bold mb-8 uppercase tracking-tight text-white"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(6rem, 15vw, 12rem)',
                }}
              >
                PRISM <br />
                <span className="text-[#ff0066]">Explode.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl font-medium tracking-wide text-white/70 max-w-lg leading-relaxed border-l-4 border-[#ff0066] pl-6"
              >
                Every color has a frequency. Every frequency has power. PRISM shatters the spectrum into pure, drinkable energy.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 p-12">
              <span className="text-sm font-bold tracking-[0.4em] text-[#ff0066] uppercase mb-4 block">
                // Chromatic Override
              </span>
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 uppercase tracking-tight leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                Break the <span className="text-[#ff0066]">Spectrum.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-12">
                Standard energy is colorless noise — synthetic caffeine in a grey can. PRISM is different. We extract full-spectrum flavor from the most volatile organic compounds on earth. Each can is a controlled detonation of real fruit energy, amplified through our chromatic stacking process.
              </p>
              <button className="text-[12px] font-bold tracking-[0.3em] uppercase text-black bg-[#ff0066] hover:bg-white transition-colors duration-300 px-8 py-4">
                Enter the Spectrum
              </button>
            </div>
          </div>
        </section>

        <PrismFeatures />
        
        <PrismProcess />
        
        <PrismProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,102,0.15)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold leading-none mb-12 text-white tracking-tight uppercase"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(4rem, 12vw, 10rem)',
                }}
              >
                See in <br />
                <span className="text-[#ff0066]">Full Color.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-16 py-6 bg-[#ff0066] text-white text-[14px] font-bold uppercase tracking-[0.3em] transition-transform hover:scale-105 duration-300">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-[#ff0066] transition-colors duration-300">
                  Acquire PRISM
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <PrismFooter />
    </div>
  );
}
