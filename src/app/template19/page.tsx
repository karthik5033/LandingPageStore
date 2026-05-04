'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ForgeNavbar from '@/components/forge/Navbar';
import ForgeFeatures from '@/components/forge/Features';
import ForgeProducts from '@/components/forge/Products';
import ForgeProcess from '@/components/forge/Process';
import ForgeFooter from '@/components/forge/Footer';

export default function Template19() {
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
      className="relative font-sans bg-[#0a0a0f] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <ForgeNavbar />

      <motion.div
        className="fixed top-0 left-0 w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#4a90d9'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/forge-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-[#0a0a0f]/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-transparent to-[#0a0a0f]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#4a90d9] selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl relative z-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block text-sm font-bold tracking-[0.4em] uppercase mb-4 text-[#4a90d9]"
              >
                // Performance Series
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="leading-[0.85] font-bold mb-8 uppercase tracking-tight text-white"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(6rem, 15vw, 12rem)',
                }}
              >
                FORGE <br />
                <span className="text-[#4a90d9]">Unbreakable.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl font-medium tracking-wide text-white/70 max-w-lg leading-relaxed border-l-4 border-[#4a90d9] pl-6"
              >
                Not manufactured. Forged. Industrial-grade energy tempered for athletes who train like machines.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl bg-black/40 backdrop-blur-md border border-white/10 p-12">
              <span className="text-sm font-bold tracking-[0.4em] text-[#4a90d9] uppercase mb-4 block">
                // Origin Story
              </span>
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 uppercase tracking-tight leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Hardened in <span className="text-[#4a90d9]">the Gym.</span>
              </h2>
              <p className="text-white/70 text-lg font-medium leading-relaxed mb-12">
                FORGE was born in a basement gym at 5 AM. No sponsors, no shortcuts — just raw compounds engineered by athletes who refused to drink synthetic garbage. Every can is a blueprint for clean, industrial-strength output that doesn't quit when you do.
              </p>
              <button className="text-[12px] font-bold tracking-[0.3em] uppercase text-white bg-[#4a90d9] hover:bg-white hover:text-[#4a90d9] transition-colors duration-300 px-8 py-4">
                Enter the Foundry
              </button>
            </div>
          </div>
        </section>

        <ForgeFeatures />
        
        <ForgeProcess />
        
        <ForgeProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,144,217,0.15)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold leading-none mb-12 text-white tracking-tight uppercase"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 'clamp(4rem, 12vw, 10rem)',
                }}
              >
                Get <br />
                <span className="text-[#4a90d9]">Forged.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-16 py-6 bg-[#4a90d9] text-white text-[14px] font-bold uppercase tracking-[0.3em] transition-transform hover:scale-105 duration-300">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-[#4a90d9] transition-colors duration-300">
                  Acquire FORGE
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <ForgeFooter />
    </div>
  );
}
