'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import AmbroseNavbar from '@/components/ambrose/Navbar';
import AmbroseManifesto from '@/components/ambrose/Manifesto';
import AmbroseHarvest from '@/components/ambrose/Harvest';
import AmbroseRoasting from '@/components/ambrose/Roasting';
import AmbroseIngredients from '@/components/ambrose/Ingredients';
import AmbroseArtistry from '@/components/ambrose/Artistry';
import AmbroseSensory from '@/components/ambrose/Sensory';
import AmbroseLegacy from '@/components/ambrose/Legacy';
import AmbroseCollection from '@/components/ambrose/Collection';
import AmbroseFooter from '@/components/ambrose/Footer';

export default function Template57() {
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
      className="relative font-sans bg-[#140a05]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        body { font-family: 'Lato', sans-serif; }
      `}</style>

      <AmbroseNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #e6cda3)'
        }}
      />

      {/* FULLSCREEN CANVAS — Video remains completely visible */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao7-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle, warm dark overlay to preserve video visibility while boosting contrast */}
        <div className="absolute inset-0 bg-[#140a05]/75 backdrop-blur-[2px] mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140a05]/50 via-transparent to-[#140a05]/80 z-20" />
      </div>

      <main className="relative z-30 w-full text-[#f4eee1] selection:bg-[#e6cda3] selection:text-[#140a05]">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="h-screen relative flex flex-col justify-center px-8 md:px-16 pt-20">
          <div className="max-w-7xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase">
                  Maison Fondée 1889
                </span>
                <div className="w-24 h-[1px] bg-[#e6cda3]/40" />
              </div>
              
              <h1
                className="leading-[1.05] font-normal text-[#f4eee1] mb-8"
                style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
                }}
              >
                The Alchemy <br /> of <span className="italic text-[#e6cda3]">Ambrose.</span>
              </h1>
              
              <p className="text-[#f4eee1]/70 text-lg md:text-xl font-light leading-[1.8] max-w-2xl mb-12">
                A relentless pursuit of the absolute. We transform the world's most elusive cacao into liquid velvet through century-old artisan techniques.
              </p>
              
              <a href="#manifesto" className="inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-[#e6cda3] hover:text-[#f4eee1] transition-colors group">
                <div className="w-8 h-[1px] bg-[#e6cda3] group-hover:w-16 transition-all duration-500" />
                <span>Begin the Journey</span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. MANIFESTO */}
        <AmbroseManifesto />

        {/* 3. HARVEST */}
        <AmbroseHarvest />

        {/* 4. ROASTING */}
        <AmbroseRoasting />

        {/* 5. INGREDIENTS */}
        <AmbroseIngredients />

        {/* 6. QUOTE SECTION */}
        <section className="py-40 px-8 flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center relative z-10"
          >
            <div className="w-16 h-[1px] bg-[#e6cda3]/50 mx-auto mb-10" />
            <blockquote
              className="text-3xl md:text-5xl font-normal text-[#f4eee1] leading-[1.5] italic mb-10"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              "Perfection in chocolate is not an additive process. It is a reductive one. It is the art of removing every obstacle between the palate and the earth."
            </blockquote>
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3]/80 uppercase">
              — The Founders
            </span>
          </motion.div>
        </section>

        {/* 7. ARTISTRY */}
        <AmbroseArtistry />

        {/* 8. SENSORY */}
        <AmbroseSensory />

        {/* 9. LEGACY */}
        <AmbroseLegacy />

        {/* 10. COLLECTION */}
        <AmbroseCollection />

      </main>

      {/* 11. FOOTER */}
      <AmbroseFooter />
    </div>
  );
}
