'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ChocolateNavbar from '@/components/chocolate/ChocolateNavbar';
import ChocolateFeatures from '@/components/chocolate/ChocolateFeatures';
import ChocolateProducts from '@/components/chocolate/ChocolateProducts';
import ChocolateProcess from '@/components/chocolate/ChocolateProcess';
import ChocolateFooter from '@/components/chocolate/ChocolateFooter';

export default function Template3() {
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

      <ChocolateNavbar />

      {/* Scroll Progress Bar — warm gold */}
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
        EST. 2026 — VELVET CHOCOLATE CO.
      </div>

      {/* === FULLSCREEN STICKY CANVAS BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/template4-v3-frames"
          frameCount={281}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Layered vignettes for luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0300]/90 via-[#0a0300]/25 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0300]/95 via-transparent to-[#0a0300]/70 z-10" />
      </div>

      {/* ============= MAIN CONTENT ============= */}
      <main className="relative z-10 w-full text-white selection:bg-[#c8922a] selection:text-black">

        {/* ——— SECTION 1: HERO ——— */}
        <section id="hero" className="h-screen relative flex items-center pl-6 md:pl-40 pr-6">
          <div className="max-w-4xl relative z-20">
            {/* Animated underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              className="h-[1px] mb-8"
              style={{ background: 'linear-gradient(90deg, #c8922a, transparent)' }}
            />

            {/* Tag */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[10px] font-bold tracking-[0.5em] uppercase mb-5"
              style={{ color: '#c8922a' }}
            >
              Premium Artisan Chocolate
            </motion.span>

            {/* Main Headline */}
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
              VEL
              <span style={{ color: '#c8922a' }}>VET</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg md:text-xl font-light tracking-[0.35em] uppercase ml-1"
              style={{ color: '#a08060' }}
            >
              The Dark Art of Chocolate
            </motion.p>
          </div>

          {/* Scroll CTA */}
          
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
                01. / The Origin
              </span>
              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: 'white'
                }}
              >
                Born at the<br />
                <span style={{ color: '#8a7060' }}>Equator.</span>
              </h2>
              <p className="text-lg leading-relaxed font-light mb-8 border-l-2 pl-6" style={{ color: '#9a8070', borderColor: '#3a2010' }}>
                Our cacao journeys from the rich volcanic soils of Madagascar and the
                coastal cloud forests of Ecuador — where altitude, humidity, and
                centuries of tradition converge to create flavor that can never be replicated.
              </p>
              <button className="text-[11px] font-bold uppercase tracking-widest border-b pb-2 hover:opacity-70 transition-opacity" style={{ color: '#c8922a', borderColor: '#c8922a' }}>
                Discover Our Origins →
              </button>
            </motion.div>
          </div>
        </section>

        {/* ——— FEATURES GRID ——— */}
        <ChocolateFeatures />

        {/* ——— SECTION 3: CRAFT ——— */}
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
                Science as<br />
                <span style={{ color: '#8a7060' }}>Sensuality.</span>
              </h2>
              <p className="text-lg leading-relaxed font-light mb-8 border-l-2 pl-6" style={{ color: '#9a8070', borderColor: '#3a2010' }}>
                We don't make chocolate—we liberate it. Every parameter of our
                process is calibrated to reveal what the bean already knows:
                notes of wild fruit, ancient earth, and lingering warmth that
                unfold across four distinct flavor phases on the palate.
              </p>
              {/* Stats */}
              <div className="flex gap-10 mt-10">
                <div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white' }}>48h</div>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>Conching</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white' }}>31°C</div>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>Temper</div>
                </div>
                <div>
                  <div className="text-4xl font-black mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'white' }}>0</div>
                  <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>Additives</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ——— PRODUCTS ——— */}
        <ChocolateProducts />

        {/* ——— PROCESS TIMELINE ——— */}
        <ChocolateProcess />

        {/* ——— SECTION 4: FLAVOR NOTES ——— */}
        <section id="flavors" className="min-h-[130vh] flex items-center pl-6 md:pl-40 pr-6 relative py-28">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ duration: 0.9 }}
            >
              <span className="block mb-5 text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: '#c8922a' }}>
                03. / The Flavor
              </span>
              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                  color: 'white'
                }}
              >
                A Symphony<br />
                <span style={{ color: '#8a7060' }}>in Four Acts.</span>
              </h2>
              <p className="text-lg leading-relaxed font-light mb-10 border-l-2 pl-6" style={{ color: '#9a8070', borderColor: '#3a2010' }}>
                The first bite: a clean, sharp snap. The melt: a flood of top notes—
                bright fruit acidity, floral whispers. The mid-palate: roasted depth,
                tobacco, and earth. The finish: a warm, spiced cocoa that lingers for minutes.
              </p>

              {/* Flavor bars */}
              {[
                { label: 'Fruit & Acidity', pct: 78 },
                { label: 'Roast & Earth', pct: 91 },
                { label: 'Spice & Warmth', pct: 65 },
                { label: 'Sweetness', pct: 34 }
              ].map((bar, i) => (
                <motion.div
                  key={bar.label}
                  className="mb-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest" style={{ color: '#6a5040' }}>{bar.label}</span>
                    <span className="text-[10px] font-mono" style={{ color: '#c8922a' }}>{bar.pct}%</span>
                  </div>
                  <div className="h-[2px] rounded-full overflow-hidden" style={{ background: '#1a0f05' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #7a4a1a, #c8922a)' }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ——— SECTION 5: RITUAL / CTA ——— */}
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
                04. / The Ritual
              </span>
              <h2
                className="font-black leading-none mb-8 tracking-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4rem, 11vw, 9rem)',
                  color: 'white'
                }}
              >
                TASTE<br />
                <span style={{ color: '#8a7060' }}>DARKNESS.</span>
              </h2>
              <p className="text-xl mb-14 font-light max-w-lg mx-auto" style={{ color: '#6a5040' }}>
                Some things deserve to be savored. Your first Velvet should be taken slowly, with intention, in silence.
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
                  Shop the Collection
                </span>
              </motion.button>

              {/* Fine print */}
              <p className="mt-8 text-[9px] uppercase tracking-[0.3em]" style={{ color: '#3a2010' }}>
                Free worldwide shipping on orders over €80
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <ChocolateFooter />
    </div>
  );
}
