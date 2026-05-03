'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import NoirNavbar from '@/components/noir/Navbar';
import NoirFeatures from '@/components/noir/Features';
import NoirProducts from '@/components/noir/Products';
import NoirProcess from '@/components/noir/Process';
import NoirFooter from '@/components/noir/Footer';

export default function Template4() {
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
      className="relative font-sans"
      style={{ background: '#0a0300' }}
    >
      {/* Google Font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;600;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <NoirNavbar />

      {/* Scroll Progress Bar — gold */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #7a4a1a, #c8922a, #f0d080)'
        }}
      />

      {/* Decorative Left Edge */}
      <div className="fixed left-0 top-0 bottom-0 w-20 border-r border-[#3a2010]/30 z-40 hidden md:block" />
      <div className="fixed left-10 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-[9px] tracking-[0.4em] text-[#4a3020] hidden md:block z-40 uppercase">
        EST. 2026 — NOIR CHOCOLATIER
      </div>

      {/* === FULLSCREEN STICKY CANVAS BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template4-v4-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Layered vignettes for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0300]/90 via-[#0a0300]/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0300]/95 via-transparent to-[#0a0300]/70 z-10" />
      </div>

      {/* ============= MAIN CONTENT ============= */}
      <main className="relative z-10 w-full text-white selection:bg-[#c8922a] selection:text-black">

        {/* ——— SECTION 1: HERO ——— */}
        <section id="hero" className="h-screen relative flex items-center pl-6 md:pl-40 pr-6">
          <div className="max-w-4xl relative z-20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="h-[1px] mb-8"
              style={{ background: 'linear-gradient(90deg, #c8922a, transparent)' }}
            />

            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[10px] font-bold tracking-[0.5em] uppercase mb-5"
              style={{ color: '#c8922a' }}
            >
              The Essence of Dark
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              className="leading-[0.88] font-black tracking-tighter mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(4.5rem, 12vw, 10rem)',
                color: 'white'
              }}
            >
              NOIR
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl font-light tracking-[0.35em] uppercase ml-1"
              style={{ color: '#8a7060' }}
            >
              Liquid. Silk. Intensity.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-40 text-[10px] tracking-widest uppercase flex items-center gap-4"
            style={{ color: '#5a4030' }}
          >
            <span className="w-10 h-[1px]" style={{ background: '#3a2010' }} />
            Enter the Abyss
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-base"
            >
              ↓
            </motion.span>
          </motion.div>
        </section>

        {/* ——— SECTION 2: ORIGIN ——— */}
        <section id="origin" className="min-h-[130vh] flex items-center pl-6 md:pl-40 pr-6 relative py-28">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ duration: 0.9 }}
            >
              <span className="block mb-5 text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: '#c8922a' }}>
                01. / The Source
              </span>
              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: 'white'
                }}
              >
                Deep.<br />
                <span style={{ color: '#8a7060' }}>Untamed.</span>
              </h2>
              <p className="text-lg leading-relaxed font-light mb-8 border-l-2 pl-6" style={{ color: '#9a8070', borderColor: '#3a2010' }}>
                Our journey begins in the dense, volcanic soils where rare Criollo trees have stood for centuries. We don't just harvest; we uncover profound flavor profiles hidden deep within the earth.
              </p>
              <button className="text-[11px] font-bold uppercase tracking-widest border-b pb-2 hover:opacity-70 transition-opacity" style={{ color: '#c8922a', borderColor: '#c8922a' }}>
                Explore the Terroir →
              </button>
            </motion.div>
          </div>
        </section>

        {/* ——— FEATURES GRID ——— */}
        <NoirFeatures />

        {/* ——— SECTION 3: PROCESS ——— */}
        <section id="craft" className="min-h-[130vh] flex items-center pl-6 md:pl-40 pr-6 relative py-28">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ duration: 0.9 }}
            >
              <span className="block mb-5 text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: '#c8922a' }}>
                02. / The Craft
              </span>
              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: 'white'
                }}
              >
                Liquid<br />
                <span style={{ color: '#8a7060' }}>Perfection.</span>
              </h2>
              <p className="text-lg leading-relaxed font-light mb-8 border-l-2 pl-6" style={{ color: '#9a8070', borderColor: '#3a2010' }}>
                Every bar is conched for an unprecedented 72 hours. This relentless process breaks down particle sizes to a microscopic level, resulting in an immediate, silken melt the moment it touches your tongue.
              </p>
              {/* Stats */}
              <div className="flex gap-10 mt-10">
                <div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white' }}>72h</div>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>Conching</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white' }}>12μm</div>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>Particle Size</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ——— PRODUCTS ——— */}
        <NoirProducts />

        {/* ——— PROCESS TIMELINE ——— */}
        <NoirProcess />

        {/* ——— SECTION 4: CTA / RITUAL ——— */}
        <section id="ritual" className="h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Glowing backdrop */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,146,42,0.08) 0%, transparent 70%)'
            }}
          />

          <div className="max-w-3xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <span className="block mb-6 text-[10px] font-bold tracking-[0.5em] uppercase" style={{ color: '#c8922a' }}>
                03. / The Ritual
              </span>
              <h2
                className="font-black leading-none mb-8 tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4rem, 11vw, 9rem)',
                  color: 'white'
                }}
              >
                SURRENDER.
              </h2>
              <p className="text-xl mb-14 font-light max-w-lg mx-auto" style={{ color: '#6a5040' }}>
                Some experiences are meant to consume you. Step into the dark.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden px-14 py-5 border text-[11px] font-bold uppercase tracking-[0.3em] transition-colors duration-500"
                style={{ borderColor: '#c8922a', color: '#c8922a' }}
              >
                <span
                  className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                  style={{ background: '#c8922a' }}
                />
                <span className="relative group-hover:text-black transition-colors duration-500">
                  Enter the Boutique
                </span>
              </motion.button>
            </motion.div>
          </div>
        </section>

      </main>

      <NoirFooter />
    </div>
  );
}
