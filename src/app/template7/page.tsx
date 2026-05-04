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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.4em] uppercase flex flex-col items-center gap-6 text-gray-600"
          >
            Discover
            <motion.div
              className="w-[1px] h-16 bg-gray-500/30 relative overflow-hidden"
            >
                <motion.div 
                    className="w-full h-full bg-white absolute top-0 left-0"
                    animate={{ y: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                />
            </motion.div>
          </motion.div>
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
