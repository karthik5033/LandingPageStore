'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import SilkNavbar from '@/components/silk/Navbar';
import SilkFeatures from '@/components/silk/Features';
import SilkProducts from '@/components/silk/Products';
import SilkProcess from '@/components/silk/Process';
import SilkFooter from '@/components/silk/Footer';

export default function Template6() {
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
      className="relative font-sans bg-[#1a110a]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <SilkNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #c8a97e)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template6-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-[#1a110a]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a] via-transparent to-[#1a110a]/80 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#c8a97e] selection:text-[#1a110a]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-4xl relative z-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[10px] font-bold tracking-[0.5em] uppercase mb-8 text-[#c8a97e]"
            >
              The Paris Collection
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              className="leading-tight font-light mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(5rem, 15vw, 12rem)',
                color: '#e8d5c4'
              }}
            >
              S I L K
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-[#a89584] max-w-lg mx-auto"
            >
              Smooth. Decadent. Pure.
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#c8a97e] uppercase mb-6 block">
                  00. / The Craft
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Smooth beyond <br />
                  <span className="italic text-[#c8a97e]">reason.</span>
                </h2>
                <div className="border-l border-[#c8a97e]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    SILK begins where other chocolatiers stop. We conche our chocolate for ninety-six hours, four times the industry standard, until every particle is reduced to below eighteen microns. At this scale, the human tongue cannot detect any grittiness. Only pure, liquid smoothness remains.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our milk chocolate uses fresh cream from grass-fed Jersey cows, blended at precisely forty-two degrees to preserve the delicate lactose crystals that give SILK its signature melt-on-contact texture.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>96h</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Conching</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>18μm</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Particle Size</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>42°C</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Blend Temp</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <SilkFeatures />
        
        <SilkProcess />
        
        <SilkProducts />

        {/* CTA SECTION */}
        <section className="min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-light leading-tight mb-10 text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                }}
              >
                Experience the <br />
                <span className="italic text-[#c8a97e]">Unforgettable.</span>
              </h2>
              
              <button className="mt-8 px-12 py-5 border border-[#c8a97e] text-[#c8a97e] text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#c8a97e] hover:text-[#1a110a] transition-all duration-500">
                Shop the Collection
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <SilkFooter />
    </div>
  );
}
