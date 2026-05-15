'use client';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import ScrollSequence from '@/components/ScrollSequence';
import Navbar from '@/components/velour/Navbar';
import Footer from '@/components/velour/Footer';
import Features from '@/components/velour/Features';
import Products from '@/components/velour/Products';
import Process from '@/components/velour/Process';
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

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative bg-[#020202] font-sans selection:bg-[#d8b4e2] selection:text-black">
      <Navbar />

      {/* Progress Bar (Top) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#d8b4e2] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Side Brand Indicator */}
      <div className="fixed right-0 top-0 bottom-0 w-24 border-l border-white/5 z-40 hidden md:flex flex-col items-center justify-center">
        <div className="-rotate-90 origin-center whitespace-nowrap text-[10px] tracking-[0.6em] text-gray-600 flex items-center gap-6">
          <span className="uppercase">Molecular Soft Serve Lab</span>
          <div className="w-12 h-[1px] bg-white/10" />
          <span className="uppercase">Tokyo — LA</span>
        </div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence 
          folderPath="/icecream2-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Reading Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10" />
      </div>

      <main className="relative z-10 w-full text-white">
        
        {/* Section 1: Hero */}
        <section id="hero" className="h-[120vh] relative flex items-center pl-6 md:pl-48 pr-6">
          <motion.div 
            style={{ opacity, scale }}
            className="max-w-5xl relative z-20"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '60px' }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="h-[1px] bg-[#d8b4e2] mb-16"
            />
            <div className="overflow-hidden mb-8">
              <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                 className="text-[12vw] md:text-[10rem] leading-[0.75] font-serif font-bold tracking-tight"
              >
                VELOUR
              </motion.h1>
            </div>
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1.5 }}
               className="flex items-baseline gap-8"
            >
               <p className="text-xl md:text-3xl font-light tracking-[0.4em] uppercase text-gray-200">
                 Silken <span className="text-white">Indulgence</span>
               </p>
               <div className="hidden md:block w-32 h-[1px] bg-white/30" />
            </motion.div>
          </motion.div>

          <div className="absolute bottom-24 left-48 hidden md:block">
             <div className="flex items-center gap-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d8b4e2] animate-pulse" />
                <span className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold">Atmospheric Pressure: 1.02 atm</span>
             </div>
          </div>
        </section>

        {/* Section 2: Origin */}
        <section id="origin" className="min-h-screen flex items-center pl-6 md:pl-48 pr-6 relative py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.5em] uppercase">
                  01. / The Synthesis
                </span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <h2 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter">
                The New <br/>
                <span className="text-gray-400 italic font-light">Viscosity.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-16 border-l border-[#d8b4e2]/40 pl-12 max-w-lg">
                A symphony of texture and taste. VELOUR soft serve is extruded 
                precisely to create a micro-crystal structure that feels like 
                pure silk on the palate.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-10 py-5 border border-white/20 text-xs font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all"
              >
                Research Origins
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Features />

        <section id="roast" className="min-h-screen flex items-center pl-6 md:pl-48 pr-6 relative py-32">
          <div className="max-w-2xl">
             <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex items-center gap-6 mb-12">
                <span className="text-[#d8b4e2] text-xs font-bold tracking-[0.5em] uppercase">
                  02. / The Aeration
                </span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>
              <h2 className="text-7xl md:text-9xl font-serif leading-[0.9] mb-12 tracking-tighter">
                Lighter <br/>
                <span className="text-gray-400 italic font-light">than Air.</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light mb-16 border-l border-[#d8b4e2]/40 pl-12 max-w-lg">
                 We carefully calibrate the overrun—the exact percentage of air 
                 whipped into the base—resulting in a weightless, cloud-like 
                 dessert that transcends traditional ice cream.
              </p>
            </motion.div>
          </div>
        </section>

        <Products />

        <Process />

        {/* Section 4: Ritual */}
        <section id="ritual" className="h-screen flex items-center justify-center px-6 relative bg-transparent text-white overflow-hidden">
           <div className="max-w-4xl text-center relative z-10">
              <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              >
                  <span className="text-xs font-bold tracking-[0.6em] uppercase mb-12 block text-gray-400">03. / The Immersion</span>
                  <h2 className="text-8xl md:text-[12rem] font-serif font-bold mb-16 leading-[0.75] tracking-tighter">
                    MELT <br />
                    <span className="text-[#d8b4e2] italic font-normal">Into It.</span>
                  </h2>
                  <p className="text-xl text-gray-400 max-w-lg mx-auto mb-20 font-light leading-relaxed">
                     Experience a fleeting moment of pure, unadulterated luxury. Velour is not just eaten; it is felt.
                  </p>
                  <motion.button 
                     whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                     className="px-20 py-8 border-2 border-white/30 backdrop-blur-md text-white font-bold uppercase tracking-[0.4em] text-sm transition-all duration-500 hover:border-white"
                  >
                     Enter the Atelier
                  </motion.button>
              </motion.div>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

