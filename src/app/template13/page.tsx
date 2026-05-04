'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import CrushNavbar from '@/components/crush/Navbar';
import CrushFeatures from '@/components/crush/Features';
import CrushProducts from '@/components/crush/Products';
import CrushProcess from '@/components/crush/Process';
import CrushFooter from '@/components/crush/Footer';

export default function Template13() {
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

  return (
    <div
      ref={containerRef}
      className="relative font-sans bg-black overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      `}</style>

      <CrushNavbar />

      <motion.div
        className="fixed top-0 right-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: 'linear-gradient(180deg, #d946ef, #a855f7)'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/crush-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Left Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        {/* Top + Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-fuchsia-500 selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6">
          <div className="container mx-auto">
            <div className="max-w-2xl relative z-20 mt-20">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] md:text-[12px] font-bold tracking-[0.5em] uppercase mb-8 text-fuchsia-500"
              >
                The Fresh Series
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="leading-none font-black mb-8 uppercase tracking-tighter"
                style={{
                  fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                }}
              >
                CRUSH
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="text-lg md:text-xl font-light tracking-[0.2em] text-white/80"
              >
                Kinetic fruit energy.<br />
                Pressed for maximum velocity.
              </motion.p>
            </div>
          </div>

          
        </section>

        {/* ORIGIN SECTION */}
        <section id="essence" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <span className="text-[10px] font-bold tracking-[0.3em] text-fuchsia-500 uppercase mb-4 block">
                01. / The Essence
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-12 leading-tight">
                Harnessing <span className="italic text-fuchsia-400">Nature's</span> Voltage.
              </h2>
              <div className="border-l-2 border-fuchsia-500/30 pl-8">
                <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                  We don't just juice fruit; we extract its vital force. Our cold-press protocol operates at sub-zero temperatures to ensure the cellular integrity of every antioxidant and vitamin remains unbroken.
                </p>
                <button className="text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-fuchsia-400 transition-colors flex items-center gap-4 group">
                  Explore The Science
                  <span className="w-8 h-[1px] bg-fuchsia-500 group-hover:w-12 transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <CrushFeatures />
        
        <CrushProcess />
        
        <CrushProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          {/* Radial gradient backdrop glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2
                className="font-black leading-none mb-12 text-white tracking-tighter uppercase"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                }}
              >
                Amplify Your <br />
                <span className="italic text-fuchsia-500">Frequency.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-12 py-5 bg-transparent border border-fuchsia-500 text-white text-[12px] font-bold uppercase tracking-[0.3em] transition-colors duration-500">
                <span className="absolute inset-0 bg-fuchsia-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Secure Your Supply
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <CrushFooter />
    </div>
  );
}
