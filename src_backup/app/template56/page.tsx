'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import NocturneNavbar from '@/components/nocturne/Navbar';
import NocturneAwakening from '@/components/nocturne/Awakening';
import NocturneTerroir from '@/components/nocturne/Terroir';
import NocturneBotanicals from '@/components/nocturne/Botanicals';
import NocturneCraft from '@/components/nocturne/Craft';
import NocturneSensory from '@/components/nocturne/Sensory';
import NocturneEcosystem from '@/components/nocturne/Ecosystem';
import NocturneVault from '@/components/nocturne/Vault';
import NocturneFooter from '@/components/nocturne/Footer';

export default function Template56() {
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
      className="relative font-sans bg-[#050505]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      `}</style>

      <NocturneNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #8f825e, #cfbba0)'
        }}
      />

      {/* FULLSCREEN CANVAS — Video remains completely visible */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao6-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle, cool dark overlay to preserve video visibility while boosting contrast */}
        <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-[2px] mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/80 z-20" />
      </div>

      <main className="relative z-30 w-full text-white selection:bg-[#cfbba0] selection:text-black">
        
        {/* 1. HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center px-8 text-center pt-20">
          <div className="max-w-6xl w-full mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-[1px] bg-[#cfbba0]/50" />
                <span className="text-[11px] font-medium tracking-[0.6em] text-[#cfbba0] uppercase">
                  Grand Cru Classé
                </span>
                <div className="w-16 h-[1px] bg-[#cfbba0]/50" />
              </div>
              
              <h1
                className="leading-[1] font-normal text-white mb-10"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                }}
              >
                NOCTURNE
              </h1>
              
              <p className="text-white/70 text-lg md:text-xl font-light leading-[1.8] max-w-2xl mx-auto mb-16">
                Cultivated in darkness. Finished in fire. An unprecedented exploration of altitude, patience, and absolute botanical purity.
              </p>
              
              <a href="#awakening" className="flex flex-col items-center gap-4 text-[10px] font-semibold tracking-[0.4em] uppercase text-white/50 hover:text-[#cfbba0] transition-colors group">
                <span>Descend</span>
                <div className="w-[1px] h-12 bg-white/20 group-hover:bg-[#cfbba0] transition-colors" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* 2. THE AWAKENING */}
        <NocturneAwakening />

        {/* 3. TERROIR DETAIL */}
        <NocturneTerroir />

        {/* 4. PHILOSOPHICAL QUOTE */}
        <section className="py-40 px-8 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[#cfbba0]/5 mix-blend-overlay" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-center relative z-10"
          >
            <div className="w-12 h-12 rounded-full border border-[#cfbba0]/30 mx-auto flex items-center justify-center mb-12">
              <div className="w-2 h-2 rounded-full bg-[#cfbba0]" />
            </div>
            <blockquote
              className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-[1.4] mb-12"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              "To mask the bean with vanilla is a tragedy. To rush the conche is a crime. We surrender entirely to time."
            </blockquote>
            <span className="text-xs font-medium tracking-[0.5em] text-[#cfbba0]/70 uppercase">
              — The Manifesto, 1894
            </span>
          </motion.div>
        </section>

        {/* 5. BOTANICALS */}
        <NocturneBotanicals />

        {/* 6. CRAFT & PROCESS */}
        <NocturneCraft />

        {/* 7. SENSORY PROFILE */}
        <NocturneSensory />

        {/* 8. ECOSYSTEM */}
        <NocturneEcosystem />

        {/* 9. PRODUCTS / THE VAULT */}
        <NocturneVault />

        {/* 10. THE MASTERS */}
        <section id="masters" className="py-40 px-8 relative bg-[#050505]/40 backdrop-blur-md">
          <div className="max-w-6xl mx-auto border-t border-b border-[#cfbba0]/20 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-6">The Lineage</span>
                <h2 className="text-5xl font-normal text-white leading-tight mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
                  Four Generations of Mastery.
                </h2>
                <p className="text-white/60 text-lg font-light leading-[1.9] mb-8">
                  The techniques used to create Nocturne have been passed down through oral tradition since the late 19th century. There are no manuals. There are no timers. 
                </p>
                <p className="text-white/60 text-lg font-light leading-[1.9]">
                  Every batch is governed by scent, sound, and touch. The maitre chocolatier must listen to the hum of the melangeur to know when the particle size has reached absolute perfection.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-square border border-[#cfbba0]/20 flex items-center justify-center p-12 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#cfbba0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="w-full h-full border border-[#cfbba0]/10 flex flex-col items-center justify-center text-center gap-6 p-8 relative z-10">
                  <span className="text-6xl text-[#cfbba0]/30" style={{ fontFamily: "'Cinzel', serif" }}>N</span>
                  <div className="h-[1px] w-12 bg-[#cfbba0]/30" />
                  <span className="text-xs tracking-[0.3em] uppercase text-white/50">Paris · Geneva · Tokyo</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* 11. FOOTER */}
      <NocturneFooter />
    </div>
  );
}
