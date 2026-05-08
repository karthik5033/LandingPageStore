'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import AetherNavbar from '@/components/aether/Navbar';
import AetherFeatures from '@/components/aether/Features';
import AetherProducts from '@/components/aether/Products';
import AetherProcess from '@/components/aether/Process';
import AetherFooter from '@/components/aether/Footer';

export default function Template7() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <AetherNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[1px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #ffffff)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template7-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-white selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-5xl relative z-20 mt-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[9px] font-bold tracking-[0.5em] uppercase mb-10 text-gray-400"
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
                letterSpacing: '0.05em'
              }}
            >
              VITALITY
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-gray-500 max-w-lg mx-auto"
            >
              Pure Organic Energy.
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#4ade80] uppercase mb-6 block">
                  00. / The Source
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  From soil to <br />
                  <span className="italic text-[#4ade80]">soul.</span>
                </h2>
                <div className="border-l border-[#4ade80]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    Every bottle of VITALITY begins in our regenerative organic farms nestled in the volcanic soil of Central California. No pesticides, no synthetic fertilizers. Just ancient farming practices refined by modern soil science. Our produce is harvested at dawn, cold-pressed within four hours, and bottled before noon.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    We believe that true energy does not come from caffeine or sugar. It comes from living enzymes, raw phytonutrients, and the unmistakable vitality of produce that was in the ground just hours ago.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>4h</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Farm to Bottle</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Organic</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>0g</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Added Sugar</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <AetherProcess />
        
        <AetherFeatures />
        
        <AetherProducts />

        {/* CTA SECTION */}
        <section className="py-32 flex items-center justify-center px-6 border-t border-white/5 bg-black/60 backdrop-blur-md">
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
                Taste the <br />
                <span className="italic text-gray-400">Freshness.</span>
              </h2>
              
              <button className="mt-8 px-12 py-5 bg-white text-black text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-gray-200 transition-all duration-500">
                Shop Organic
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <AetherFooter />
    </div>
  );
}
