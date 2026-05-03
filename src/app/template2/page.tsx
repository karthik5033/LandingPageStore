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
        <ScrollSequence folderPath="/drk-frames" />
        
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
           
           {/* Footer with a slight gradient background instead of solid black */}
           <div className="bg-gradient-to-t from-black via-black/90 to-transparent">
              <Footer />
           </div>
        </div>

      </main>
    </div>
  );
}
