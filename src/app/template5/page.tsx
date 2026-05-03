'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ObsidianNavbar from '@/components/obsidian/ObsidianNavbar';
import ObsidianFeatures from '@/components/obsidian/ObsidianFeatures';
import ObsidianProducts from '@/components/obsidian/ObsidianProducts';
import ObsidianProcess from '@/components/obsidian/ObsidianProcess';
import ObsidianFooter from '@/components/obsidian/ObsidianFooter';

export default function Template5() {
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
      className="relative font-sans bg-[#050302]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <ObsidianNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #4a3825, #a67c52, #d6b89a)'
        }}
      />

      <div className="fixed left-0 top-0 bottom-0 w-24 border-r border-[#a67c52]/10 z-40 hidden md:block mix-blend-difference" />
      <div className="fixed left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-[10px] tracking-[0.5em] text-[#8c7f75] hidden md:block z-40 uppercase">
        OBSIDIAN — THE DARKEST CACAO
      </div>

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template5-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050302]/95 via-[#050302]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050302] via-transparent to-[#050302]/80 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#a67c52] selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center pl-6 md:pl-48 pr-6">
          <div className="max-w-3xl relative z-20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="h-[2px] mb-10"
              style={{ background: 'linear-gradient(90deg, #a67c52, transparent)' }}
            />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[11px] font-bold tracking-[0.6em] uppercase mb-6 text-[#a67c52]"
            >
              The 100% Cacao Experience
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              className="leading-[0.9] font-black tracking-tight mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(4rem, 10vw, 8rem)',
              }}
            >
              PURE<br/>
              <span className="italic font-light text-[#d4ccc5]">OBSIDIAN</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl font-light tracking-[0.2em] uppercase text-[#8c7f75] max-w-lg"
            >
              No sugar. No vanilla. Just the uncompromising intensity of volcanic terroir.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-16 left-6 md:left-48 text-[10px] tracking-[0.3em] uppercase flex items-center gap-6 text-[#706055]"
          >
            <span className="w-16 h-[1px] bg-[#a67c52]/40" />
            Embrace the Dark
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              ↓
            </motion.span>
          </motion.div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] flex items-center pl-6 md:pl-48 pr-6 relative py-32">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ duration: 0.9 }}
            >
              <span className="block mb-6 text-xs font-bold tracking-[0.4em] uppercase text-[#a67c52]">
                01. / The Terroir
              </span>
              <h2
                className="font-normal leading-tight mb-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                }}
              >
                Forged in<br />
                <span className="italic text-[#a09085]">Fire & Ash.</span>
              </h2>
              <p className="text-xl leading-relaxed font-light mb-10 border-l-2 pl-8 border-[#a67c52]/30 text-[#8c7f75]">
                Grown exclusively on the steep slopes of Mount Rinjani. The volcanic soil imparts an unparalleled earthy depth and a smoky finish that cannot be replicated anywhere else on Earth.
              </p>
              <button className="text-[11px] font-bold uppercase tracking-[0.3em] pb-3 border-b border-[#a67c52] text-[#a67c52] hover:text-white transition-colors">
                Explore the Source
              </button>
            </motion.div>
          </div>
        </section>

        <ObsidianFeatures />
        
        <ObsidianProcess />
        
        <ObsidianProducts />

        {/* RITUAL SECTION */}
        <section id="ritual" className="min-h-screen flex items-center justify-center px-6 relative py-32 overflow-hidden">
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="block mb-8 text-xs font-bold tracking-[0.5em] uppercase text-[#a67c52]">
                04. / The Reserve
              </span>
              <h2
                className="font-light leading-none mb-10"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                }}
              >
                A TASTE FOR<br />
                <span className="italic text-[#8c7f75]">THE BOLD.</span>
              </h2>
              <p className="text-xl mb-16 font-light max-w-2xl mx-auto text-[#706055]">
                Only 500 bars are produced each harvest. Secure your allocation of the darkest, most intense chocolate experience ever crafted.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-6 bg-[#a67c52] text-black text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-colors duration-500"
              >
                Join the Waitlist
              </motion.button>
            </motion.div>
          </div>
        </section>

      </main>

      <ObsidianFooter />
    </div>
  );
}
