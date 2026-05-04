'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import KineticNavbar from '@/components/kinetic/Navbar';
import KineticFeatures from '@/components/kinetic/Features';
import KineticProducts from '@/components/kinetic/Products';
import KineticProcess from '@/components/kinetic/Process';
import KineticFooter from '@/components/kinetic/Footer';
import Cursor from '@/components/kinetic/Cursor';

export default function Template15() {
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
      className="relative font-sans bg-[#02040a] overflow-x-hidden cursor-none"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Inter:wght@300;400;600&family=Space+Mono:wght@400;700&display=swap');
        body { font-family: 'Inter', sans-serif; cursor: none !important; }
        a, button { cursor: none !important; }
        .font-mono { font-family: 'Space Mono', monospace; }
      `}</style>

      <Cursor />
      <KineticNavbar />

      <motion.div
        className="fixed top-0 left-0 w-[2px] md:w-[3px] h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #00f0ff, #0055ff)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/kinetic-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Neon Tech Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a]/95 via-[#02040a]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/80 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#00f0ff] selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl relative z-20 mt-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] md:text-[12px] font-mono font-bold tracking-[0.5em] uppercase mb-8 text-[#00f0ff]"
              >
                [SYS_BOOT: KINETIC]
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="leading-none font-bold mb-8 uppercase tracking-tighter"
                style={{
                  fontFamily: "'Syncopate', sans-serif",
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                }}
              >
                PURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0055ff]">ENERGY.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="text-sm md:text-base font-mono tracking-[0.1em] text-[#00f0ff]/70 max-w-lg leading-relaxed"
              >
                No latency. No crash. Just raw, unadulterated fruit voltage engineered for the human runtime.
              </motion.p>
            </motion.div>
          </div>

          
        </section>

        {/* ORIGIN SECTION */}
        <section id="system" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#00f0ff] uppercase mb-6 block">
                [SYS.CORE] // V.2.0
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 uppercase tracking-tighter" style={{ fontFamily: "'Syncopate', sans-serif" }}>
                Overclock Your <span className="text-[#00f0ff]">Runtime.</span>
              </h2>
              <div className="border-l-2 border-[#00f0ff] pl-8">
                <p className="text-white/70 text-lg font-mono leading-relaxed mb-12">
                  Traditional energy drinks cause memory leaks and system crashes. KINETIC uses a proprietary sustained-release protocol combined with raw fruit cellular voltage to keep you operating at peak clock speeds for hours.
                </p>
                <button className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-white hover:text-black hover:bg-[#00f0ff] border border-[#00f0ff] px-6 py-3 transition-all duration-300">
                  Access Data
                </button>
              </div>
            </div>
          </div>
        </section>

        <KineticFeatures />
        
        <KineticProcess />
        
        <KineticProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="font-bold leading-none mb-12 text-white tracking-tighter uppercase"
                style={{
                  fontFamily: "'Syncopate', sans-serif",
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                }}
              >
                Break Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0055ff]">Limits.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-12 py-5 bg-transparent border border-[#00f0ff] text-[#00f0ff] text-[12px] font-mono font-bold uppercase tracking-[0.4em] transition-transform hover:scale-105 duration-300">
                <span className="absolute inset-0 bg-[#00f0ff] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Deploy Now
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <KineticFooter />
    </div>
  );
}
