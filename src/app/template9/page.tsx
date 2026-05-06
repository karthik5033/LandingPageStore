'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import BotanicaNavbar from '@/components/botanica/Navbar';
import BotanicaFeatures from '@/components/botanica/Features';
import BotanicaProducts from '@/components/botanica/Products';
import BotanicaProcess from '@/components/botanica/Process';
import BotanicaFooter from '@/components/botanica/Footer';

export default function Template9() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scaleX = useSpring(scrollYProgress, {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <BotanicaNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #4ade80)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template9-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-green-400 selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-5xl relative z-20 mt-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[10px] font-medium tracking-[0.4em] uppercase mb-10 text-green-400"
            >
              The Fresh Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              className="leading-none font-light mb-10"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(4rem, 12vw, 10rem)',
                letterSpacing: '0.02em'
              }}
            >
              BOTANICA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-gray-200 max-w-lg mx-auto"
            >
              Wildcrafted Elixirs.
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#34d399] uppercase mb-6 block">
                  00. / The Wild
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Foraged from the <br />
                  <span className="italic text-[#34d399]">untouched.</span>
                </h2>
                <div className="border-l border-[#34d399]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    BOTANICA's ingredients are wildcrafted, gathered from forests, meadows, and coastal cliffs where no human hand has intervened. Our foragers work with indigenous communities across the Pacific Northwest, harvesting elderflower, nettle, sea buckthorn, and wild mint at the precise moment of peak potency.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    These are not ingredients you will find in any supply chain catalog. They are rare, seasonal, and profoundly alive. Each batch is unique, shaped by rainfall, altitude, and the quiet rhythms of the natural world.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Wild</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Harvested</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>12</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Botanicals</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Seasonal</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Batches</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <BotanicaProcess />
        
        <BotanicaFeatures />
        
        <BotanicaProducts />

        {/* CTA SECTION */}
        <section className="py-32 flex items-center justify-center px-6 border-t border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-light leading-tight mb-12 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                }}
              >
                Nourish Your <br />
                <span className="italic text-gray-400">Roots.</span>
              </h2>
              
              <button className="mt-8 px-14 py-5 bg-white text-black text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-green-400 hover:text-white transition-all duration-500">
                Shop The Harvest
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <BotanicaFooter />
    </div>
  );
}
