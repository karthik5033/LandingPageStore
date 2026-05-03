'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import ScrollSequence from '@/components/ScrollSequence';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Process from '@/components/Process';
import { useRef, useState, useEffect } from 'react';

const sections = [
  { id: 'hero', title: 'Beginnings' },
  { id: 'origin', title: 'The Source' },
  { id: 'roast', title: 'The Craft' },
  { id: 'ritual', title: 'The Ritual' }
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-black font-sans">
      <Navbar />

      {/* Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50 mix-blend-difference"
        style={{ scaleX }}
      />

      {/* Decorative Vertical Lines (Left) */}
      <div className="fixed left-0 top-0 bottom-0 w-24 border-r border-white/10 z-40 hidden md:block" />
      <div className="fixed left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-xs tracking-[0.3em] text-white/40 hidden md:block z-40 flex items-center gap-4">
        <span>EST. 2026 — AURA COFFEE CO.</span>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence />
        {/* Vignette Overlay for better text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-amber-100 selection:text-black">
        
        {/* Section 1: Hero */}
        <section id="hero" className="h-screen relative flex items-center pl-6 md:pl-40 pr-6">
          <div className="max-w-4xl relative z-20">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[1px] bg-white mb-8"
            />
            <motion.h1 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, ease: "easeOut" }}
               className="text-7xl sm:text-8xl md:text-[9rem] leading-[0.85] font-serif font-bold tracking-tighter mix-blend-overlay mb-6"
            >
              AURA
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-gray-300 ml-2"
            >
              The Essence of Coffee
            </motion.p>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="absolute bottom-12 left-6 md:left-40 text-xs tracking-widest uppercase text-gray-400 flex items-center gap-4"
          >
             <span className="w-12 h-[1px] bg-gray-600"></span>
             Scroll to Explore
          </motion.div>
        </section>

        {/* Section 2: Origin */}
        <section id="origin" className="min-h-[120vh] flex items-center pl-6 md:pl-40 pr-6 relative py-24">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-amber-500 text-xs font-bold tracking-[0.3em] mb-4 uppercase">
                01. / The Source
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
                Born in the <br/>
                <span className="text-gray-400">Highlands.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 border-l border-white/20 pl-6">
                Harvested from the secluded micro-lots of Ethiopia. 
                Where the air is thin, the soil is volcanic, and the flavor 
                is as complex as the mist that covers the mountains.
              </p>
              <button className="text-xs font-bold uppercase tracking-widest border-b border-white pb-2 hover:text-amber-400 hover:border-amber-400 transition-colors">
                Discover Origins
              </button>
            </motion.div>
          </div>
        </section>

        {/* Expanded Content: Features Grid */}
        <Features />

        {/* Section 3: Process */}
        <section id="roast" className="min-h-[120vh] flex items-center pl-6 md:pl-40 pr-6 relative py-24">
          <div className="max-w-xl">
             <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-amber-500 text-xs font-bold tracking-[0.3em] mb-4 uppercase">
                02. / The Craft
              </span>
              <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
                Precision in <br/>
                <span className="text-gray-400">Every Drop.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-8 border-l border-white/20 pl-6">
                 We don't just roast; we sculpt flavor. Using state-of-the-art 
                 convection technology, we unlock hidden notes of jasmine, 
                 dark chocolate, and wild berries in every bean.
              </p>
              
              <div className="flex gap-8 mt-12">
                 <div>
                    <div className="text-3xl font-serif mb-1">205°</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">Roast Temp</div>
                 </div>
                 <div>
                    <div className="text-3xl font-serif mb-1">12m</div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">Duration</div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expanded Content: Products */}
        <Products />

        {/* Expanded Content: Stats / Methodology */}
        <Process />

        {/* Section 4: Ritual */}
        <section id="ritual" className="h-[100vh] flex items-center justify-center pl-6 md:pl-40 pr-6">
           <div className="max-w-3xl text-center">
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
              >
                  <span className="block text-amber-500 text-xs font-bold tracking-[0.3em] mb-6 uppercase">
                    03. / The Ritual
                  </span>
                  <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-none">
                    ELEVATE <br />
                    YOUR DAY.
                  </h2>
                  <p className="text-xl text-gray-400 max-w-lg mx-auto mb-12 font-light">
                     Join the select few who understand that coffee is more than a beverage—it is a daily ceremony of excellence.
                  </p>
                  <motion.button 
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     className="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-amber-100 transition-colors"
                  >
                     Shop Collection
                  </motion.button>
              </motion.div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
