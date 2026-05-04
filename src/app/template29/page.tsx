'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import RitualNavbar from '@/components/ritual/Navbar';
import RitualFeatures from '@/components/ritual/Features';
import RitualProducts from '@/components/ritual/Products';
import RitualProcess from '@/components/ritual/Process';
import RitualFooter from '@/components/ritual/Footer';

export default function Template29() {
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

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative font-serif bg-[#2b221a] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
      `}</style>

      <RitualNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#e8c490'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/ritual-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b221a]/90 via-transparent to-[#2b221a]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-[#fdfbf7] selection:bg-[#e8c490] selection:text-[#2b221a]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-[100dvh] relative flex items-center justify-center text-center px-8 md:px-16">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl mx-auto relative z-20 mt-12"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[11px] tracking-[0.4em] font-light uppercase mb-8 text-[#e8c490]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                A Moment of Peace
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[1.1] mb-8 font-normal text-[#fdfbf7]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                }}
              >
                Your Daily <br/>
                <span className="italic text-[#e8c490]">Sanctuary.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-sm md:text-base font-light text-[#fdfbf7]/80 max-w-lg mx-auto leading-relaxed"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Find warmth and clarity in every cup. Because how you start your morning defines your day.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <RitualProcess />
        <RitualFeatures />
        <RitualProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] tracking-[0.3em] font-light text-[#e8c490] uppercase mb-6 block" style={{ fontFamily: "'Lora', serif" }}>
              Welcome the Dawn
            </span>
            <h2
              className="text-[#fdfbf7] mb-12 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(3rem, 7vw, 5rem)',
              }}
            >
              Start Your <br />
              <span className="italic text-[#e8c490]">Ritual.</span>
            </h2>
            
            <button className="px-14 py-4 bg-[#e8c490] text-[#2b221a] text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#fdfbf7] transition-all duration-300 rounded-full" style={{ fontFamily: "'Lora', serif" }}>
              Shop the Collection
            </button>
          </motion.div>
        </section>

      </main>

      <RitualFooter />
    </div>
  );
}
