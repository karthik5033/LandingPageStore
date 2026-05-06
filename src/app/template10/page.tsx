'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import OasisNavbar from '@/components/oasis/Navbar';
import OasisFeatures from '@/components/oasis/Features';
import OasisProducts from '@/components/oasis/Products';
import OasisProcess from '@/components/oasis/Process';
import OasisFooter from '@/components/oasis/Footer';

export default function Template10() {
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

      <OasisNavbar />

      <motion.div
        className="fixed top-0 right-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #f97316, #eab308)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template10-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-orange-500 selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-7xl relative z-20 mt-20">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="block text-[12px] md:text-[14px] font-black tracking-[0.8em] uppercase mb-12 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            >
              The Fresh Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none font-black mb-12 uppercase tracking-tighter"
              style={{
                fontSize: 'clamp(5rem, 18vw, 16rem)',
                WebkitTextStroke: '2px rgba(255,255,255,0.1)',
              }}
            >
              OASIS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-sm md:text-base font-black tracking-[0.5em] uppercase text-gray-300 max-w-xl mx-auto"
            >
              Liquid Gold. Bottled.
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#fb923c] uppercase mb-6 block">
                  00. / The Origin
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Liquid gold, <br />
                  <span className="italic text-[#fb923c]">bottled.</span>
                </h2>
                <div className="border-l border-[#fb923c]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    OASIS is crafted from the world's most prized citrus. Seville oranges, Meyer lemons, and Japanese yuzu. Fruits so aromatic that their essential oils are worth more per ounce than saffron. We source directly from groves that have been family-owned for generations.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our proprietary micro-filtration process removes all pulp and sediment while preserving the delicate terpene profile that gives each fruit its signature aroma. The result is a juice of crystalline clarity and explosive flavour.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Rare Citrus</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>0.2μm</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Filtered</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Direct</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Trade</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <OasisProcess />
        
        <OasisFeatures />
        
        <OasisProducts />

        {/* CTA SECTION */}
        <section className="py-32 flex flex-col items-center justify-center px-6 border-t border-orange-500/20 bg-black/40 backdrop-blur-md">
          <div className="max-w-4xl text-center">
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
                Claim Your <br />
                <span className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">Sunshine.</span>
              </h2>
              
              <button className="px-16 py-6 bg-white text-black text-[12px] font-black uppercase tracking-[0.5em] hover:bg-orange-500 hover:text-white transition-colors duration-500 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                Secure A Crate
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <OasisFooter />
    </div>
  );
}
