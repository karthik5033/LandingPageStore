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
              The Fresh Series
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
              NECTAR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-sm md:text-base font-bold tracking-[0.4em] uppercase text-gray-500 max-w-xl mx-auto"
            >
              The Essence of Fruit.
            </motion.p>
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#f87171] uppercase mb-6 block">
                  00. / The Harvest
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Nature's purest <br />
                  <span className="italic text-[#f87171]">reward.</span>
                </h2>
                <div className="border-l border-[#f87171]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    NECTAR sources its fruit from small family orchards across the Mediterranean basin. Sun-ripened pomegranates from Turkey, blood oranges from Sicily, and wild figs from the Greek islands. Each fruit is selected by hand at peak maturity, when the natural sugar content reaches its absolute zenith.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our cold-press extraction uses hydraulic pressure rather than heat, preserving every volatile compound and delicate enzyme. The result is a juice so vivid and aromatic, it tastes like biting into the fruit itself.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Regions</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>48h</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Shelf Life</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Zero</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Preservatives</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <MonolithProcess />
        
        <MonolithFeatures />
        
        <MonolithProducts />

        {/* CTA SECTION */}
        <section className="py-32 flex items-center justify-center px-6 border-t-2 border-white/20 bg-black/60 backdrop-blur-md">
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
                Pure <br />
                <span className="text-gray-700">Extract.</span>
              </h2>
              
              <button className="mt-8 px-16 py-8 bg-white text-black text-[12px] font-black uppercase tracking-[0.5em] hover:bg-gray-300 transition-colors">
                Order Now
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <MonolithFooter />
    </div>
  );
}
