'use client';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ScrollSequence from '@/components/ScrollSequence';
import Navbar from '@/components/glace/Navbar';
import Footer from '@/components/glace/Footer';
import Features from '@/components/glace/Features';
import Products from '@/components/glace/Products';
import Process from '@/components/glace/Process';
import { useRef, useState, useEffect } from 'react';

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

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative bg-black font-sans selection:bg-[#fbcfe8] selection:text-black">
      <Navbar />

      {/* Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#fbcfe8] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Side Brand Indicator */}
      <div className="fixed left-0 top-0 bottom-0 w-24 border-r border-white/5 z-40 hidden md:flex flex-col items-center justify-center">
        <div className="rotate-90 origin-center whitespace-nowrap text-[10px] tracking-[0.5em] text-gray-500 flex items-center gap-6">
          <span className="uppercase">Premium Gelato Atelier</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="uppercase">Est. 2026</span>
        </div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence 
          folderPath="/icecream1-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Reading Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
      </div>

      <main className="relative z-10 w-full text-white">
        
        {/* Section 1: Hero */}
        <section id="hero" className="h-[120vh] relative flex items-center pl-6 md:pl-48 pr-6 overflow-hidden">
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-5xl relative z-20"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="h-[1px] bg-[#fbcfe8] mb-12"
            />
            <div className="overflow-hidden mb-6">
              <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[12vw] md:text-[10rem] leading-[0.8] font-serif font-bold tracking-tight"
              >
                GLACÉ
              </motion.h1>
            </div>
            <motion.p 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="text-lg md:text-2xl font-light tracking-[0.4em] uppercase text-gray-200 flex items-center gap-6"
            >
              The Art of <span className="text-[#fbcfe8] italic lowercase font-serif tracking-normal font-normal">Gelato</span>
            </motion.p>
          </motion.div>

          <div className="absolute bottom-24 right-12 hidden md:block">
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="flex flex-col items-center gap-4"
             >
                <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 vertical-text">Scroll to Indulge</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
             </motion.div>
          </div>
        </section>

        {/* Section 2: Origin */}
        <section id="origin" className="min-h-screen flex items-center pl-6 md:pl-48 pr-6 relative py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#fbcfe8]" />
                <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.4em] uppercase">
                  01. / The Provenance
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-12 tracking-tighter">
                Density <br/>
                <span className="text-gray-400 italic font-light">Redefined.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-12 border-l border-white/10 pl-10 max-w-lg">
                Crafted from the richest single-origin dairy and the finest imported 
                vanilla beans. Our gelato is slowly churned to create a 
                texture so dense and velvety, it defies the boundaries of physics.
              </p>
              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group transition-all"
              >
                <span>Discover the Source</span>
                <div className="w-12 h-[1px] bg-white group-hover:bg-[#fbcfe8]" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Features />

        <section id="roast" className="min-h-screen flex items-center pl-6 md:pl-48 pr-6 relative py-32">
          <div className="max-w-2xl">
             <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#fbcfe8]" />
                <span className="text-[#fbcfe8] text-xs font-bold tracking-[0.4em] uppercase">
                  02. / The Craft
                </span>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-12 tracking-tighter">
                Patience <br/>
                <span className="text-gray-400 italic font-light">is Flavor.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-12 border-l border-white/10 pl-10 max-w-lg">
                 We don't just freeze; we sculpt flavor. Using traditional 
                 Italian batch freezers, we incorporate minimal air to ensure 
                 a dense, intensely flavorful experience in every bite.
              </p>
            </motion.div>
          </div>
        </section>

        <Products />

        <Process />

        {/* Section 4: Ritual */}
        <section id="ritual" className="min-h-screen py-32 flex items-center justify-center px-6 relative bg-transparent text-white overflow-hidden">
           <div className="max-w-4xl text-center relative z-10">
              <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              >
                  <span className="text-xs font-bold tracking-[0.5em] uppercase mb-10 block text-gray-400">03. / The Invitation</span>
                  <h2 className="text-7xl md:text-[10rem] font-serif font-bold mb-12 leading-[0.8] tracking-tighter">
                    INDULGE <br />
                    <span className="text-[#fbcfe8] italic font-normal">Fully.</span>
                  </h2>
                  <p className="text-xl text-gray-500 max-w-xl mx-auto mb-16 font-light leading-relaxed">
                     Join the select few who understand that dessert is more than an afterthought—it is a daily ceremony of sensory joy.
                  </p>
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-16 py-8 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-sm hover:bg-[#fbcfe8] hover:text-black transition-all duration-500"
                  >
                     Explore the Collection
                  </motion.button>
              </motion.div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

