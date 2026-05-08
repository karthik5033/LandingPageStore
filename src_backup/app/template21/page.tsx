'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import HyperNavbar from '@/components/hyper/Navbar';
import HyperFeatures from '@/components/hyper/Features';
import HyperProducts from '@/components/hyper/Products';
import HyperProcess from '@/components/hyper/Process';
import HyperFooter from '@/components/hyper/Footer';

export default function Template21() {
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
      className="relative font-sans bg-[#05020a] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <HyperNavbar />

      <motion.div
        className="fixed top-0 left-0 w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#ff00cc',
          boxShadow: '0 0 20px #ff00cc'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/hyper-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05020a]/80 via-[#05020a]/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05020a]/90 via-transparent to-[#05020a]/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#ff00cc] selection:text-white">
        
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
                className="block text-sm font-bold tracking-[0.4em] uppercase mb-4 text-[#ff00cc]"
              >
                // Performance Series
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="leading-[0.85] font-bold mb-8 uppercase tracking-tight text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(5rem, 12vw, 10rem)',
                }}
              >
                HYPER <br />
                <span className="text-[#ff00cc] drop-shadow-[0_0_20px_rgba(255,0,204,0.6)]">Velocity.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl font-medium tracking-wide text-white/70 max-w-lg leading-relaxed border-l-4 border-[#ff00cc] pl-6"
              >
                Zero lag. Pure thrust. The energy formula built for the synthwave generation and the digital frontier.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl bg-black/40 backdrop-blur-md border border-[#ff00cc]/20 p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff00cc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-sm font-bold tracking-[0.4em] text-[#ff00cc] uppercase mb-4 block">
                  // Mission Log
                </span>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Escape the <br />
                  <span className="text-[#ff00cc] drop-shadow-[0_0_15px_rgba(255,0,204,0.4)]">Simulation.</span>
                </h2>
                <p className="text-white/70 text-lg font-medium leading-relaxed mb-12">
                  HYPER was engineered to bypass the physical limits of traditional energy drinks. By compiling the cleanest synthetic nootropics with aggressive metabolic accelerators, we created a formula that doesn't just wake you up—it launches you.
                </p>
                <button className="text-[12px] font-bold tracking-[0.3em] uppercase text-[#ff00cc] border border-[#ff00cc] hover:bg-[#ff00cc] hover:text-white transition-colors duration-300 px-8 py-4">
                  Initialize Sequence
                </button>
              </div>
            </div>
          </div>
        </section>

        <HyperFeatures />
        
        <HyperProcess />
        
        <HyperProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,204,0.15)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="font-bold leading-tight mb-12 text-white tracking-tight uppercase"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                }}
              >
                Engage <br />
                <span className="text-[#ff00cc] drop-shadow-[0_0_20px_rgba(255,0,204,0.6)]">Drive.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-16 py-6 bg-[#ff00cc] text-white text-[14px] font-bold uppercase tracking-[0.3em] transition-transform hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,0,204,0.5)]">
                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-[#ff00cc] transition-colors duration-300">
                  Secure HYPER
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <HyperFooter />
    </div>
  );
}
