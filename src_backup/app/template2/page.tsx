'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

// Energy Drink Components
import Navigation from '@/components/energy/Navigation';
import HeroSection from '@/components/energy/HeroSection';
import SpecsGrid from '@/components/energy/SpecsGrid';
import FlavorProfile from '@/components/energy/FlavorProfile';
import Testimonials from '@/components/energy/Testimonials';
import Science from '@/components/energy/Science';
import Lifestyle from '@/components/energy/Lifestyle';
import Footer from '@/components/energy/Footer';
import ScrollSequence from '@/components/ScrollSequence';

export default function Template2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative bg-black font-sans min-h-[400vh] text-white selection:bg-[#ccff00] selection:text-black">
      <Navigation />

      {/* Progress Line (Left) - Moved to left to avoid collision with right-side scrollbar */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-1 md:w-2 bg-[#ccff00] origin-top z-50 shadow-[0_0_20px_#ccff00]"
        style={{ scaleY }}
      />

      {/* Vertical decorative text */}
      <div className="fixed left-6 bottom-12 origin-bottom-left -rotate-90 text-[10px] font-mono tracking-[0.5em] text-gray-600 mix-blend-difference z-40 hidden md:block pointer-events-none uppercase">
          System Core: Online // Sequence 001
      </div>

      {/* Grid overlay - Subtler */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Background Sequence */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/drk-frames" fileExtension="jpg" />
        
        {/* Dynamic vignette - stronger left vignette for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 opacity-80" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
      </div>

      <main className="relative z-10 w-full">
        
        {/* SECTION 1: HERO */}
        <HeroSection />

        {/* SECTION 2: SPECS / FORMULA */}
        <SpecsGrid />

        {/* SECTION 3: FLAVOR / LIFESTYLE */}
        <FlavorProfile />

        {/* SECTION 4: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 5: LIFESTYLE (New) */}
        <Lifestyle />

        {/* SECTION 6: SCIENCE */}
        <Science />

        {/* SECTION 7: FOOTER & OUTRO */}
        <div className="relative z-20 overflow-hidden">
           {/* Section to ensure scroll reaches end - Transparency Fix */}
           <section className="h-[50vh] flex items-center justify-center relative w-full">
               {/* Fixed the giant green block - relying on text only */}
               <h2 className="text-[15vw] font-black italic uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none pointer-events-none mix-blend-overlay tracking-tighter">
                  UNLEASH
               </h2>
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#ccff00] uppercase mb-6 block">
                  [SYS.CORE] // 00
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Space Grotesk', serif" }}>
                  ENGINEERED <br />
                  <span className="italic text-[#ccff00]">OUTPUT.</span>
                </h2>
                <div className="border-l border-[#ccff00]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    VOLT.OS is not a beverage. It is a delivery system. We reverse-engineered the human energy cycle to create a formulation that maps to your body's natural cortisol rhythm. The result: zero crash, zero jitter, sustained cognitive output for up to eight hours.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our proprietary NRG-X matrix combines plant-derived caffeine from Guayusa leaf with L-Theanine, Alpha-GPC, and a micro-dose of electrolyte minerals. Every milligram is calibrated. Every effect is intentional.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Space Grotesk', serif" }}>8h</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Sustained</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Space Grotesk', serif" }}>0</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Crash Factor</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Space Grotesk', serif" }}>NRG-X</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Matrix</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

           
           {/* Footer with a slight gradient background instead of solid black */}
           <div className="bg-gradient-to-t from-black via-black/90 to-transparent">
              <Footer />
           </div>
        </div>

      </main>
    </div>
  );
}
