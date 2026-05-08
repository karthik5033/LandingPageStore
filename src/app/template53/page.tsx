'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import IvoireNavbar from '@/components/ivoire/Navbar';
import IvoireFeatures from '@/components/ivoire/Features';
import IvoireProcess from '@/components/ivoire/Process';
import IvoireProducts from '@/components/ivoire/Products';
import IvoireFooter from '@/components/ivoire/Footer';

export default function Template53() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#f5efe6]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <IvoireNavbar />

      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #6b4a2e)' }} />

      {/* FULLSCREEN CANVAS — light overlay for text readability while keeping video visible */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao3-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-[#f5efe6]/80 backdrop-blur-[1px] z-10" />
      </div>

      <main className="relative z-10 w-full selection:bg-[#6b4a2e] selection:text-[#f5efe6]">

        {/* HERO */}
        <section id="hero" className="h-screen relative flex flex-col items-center justify-center text-center px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
            <span className="text-xs font-medium tracking-[0.7em] text-[#6b4a2e] uppercase block mb-10">L&apos;Art du Chocolat Blanc</span>
            <h1 className="leading-[0.9] font-normal mb-8 text-[#2a1f1a]" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>IVOIRE</h1>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.8 }} className="w-32 h-[1px] bg-[#6b4a2e]/40 mx-auto mb-8 origin-center" />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="text-[#5a4d40] text-lg font-light leading-relaxed tracking-wide max-w-lg mx-auto">
              White chocolate, reimagined from first principles.<br />Four ingredients. Forty-eight hours of refinement.<br />Infinite patience.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-12 flex flex-col items-center gap-3">
            <span className="text-[11px] tracking-[0.5em] text-[#6b4a2e]/40 uppercase">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-[1px] h-8 bg-gradient-to-b from-[#6b4a2e]/40 to-transparent" />
          </motion.div>
        </section>

        {/* ESSENCE — Origin story */}
        <section id="essence" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <span className="text-xs font-medium tracking-[0.5em] text-[#6b4a2e] uppercase block mb-8">00. / The Essence</span>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
                <div className="md:col-span-6">
                  <h2 className="text-5xl md:text-7xl font-normal text-[#2a1f1a] leading-[1.1] mb-12" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    What if white<br />chocolate were<br />made <span className="italic text-[#6b4a2e]">properly?</span>
                  </h2>
                  <div className="flex gap-14 pt-8 border-t border-[#2a1f1a]/[0.08]">
                    {[{ v: '4', l: 'Ingredients' }, { v: '48h', l: 'Refining' }, { v: '0', l: 'Compromises' }].map(s => (
                      <div key={s.l}>
                        <span className="text-4xl font-normal text-[#2a1f1a]" style={{ fontFamily: "'Libre Baskerville', serif" }}>{s.v}</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-[#6b4a2e]/40 block mt-2">{s.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-6 flex flex-col justify-center">
                  <div className="border-l border-[#6b4a2e]/20 pl-10">
                    <p className="text-[#5a4d40] text-lg font-light leading-[2] mb-8">White chocolate has a reputation problem. For decades, it has been dismissed as the confectionery world&apos;s afterthought — overly sweet, waxy, devoid of complexity. Supermarket shelves are lined with bars that contain more sugar and vegetable fat than actual cocoa butter.</p>
                    <p className="text-[#5a4d40] text-lg font-light leading-[2] mb-8">IVOIRE was founded on the conviction that this reputation is undeserved. True white chocolate, crafted from pure, undeodorised cocoa butter, has extraordinary depth: floral top notes, a creamy mid-palate, and a long, clean finish that rivals any grand cru dark.</p>
                    <p className="text-[#5a4d40] text-lg font-light leading-[2] mb-12">Our approach is radical in its simplicity. We use exactly four ingredients: cocoa butter, milk powder, cane sugar, and vanilla. No soy lecithin. No palm oil. No artificial flavours.</p>
                    <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#6b4a2e] uppercase hover:text-[#2a1f1a] transition-colors group">
                      <span>Discover the Collection</span>
                      <div className="w-8 h-[1px] bg-[#6b4a2e] group-hover:w-14 transition-all duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-10 h-[1px] bg-[#6b4a2e]/30 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-[#2a1f1a]/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              &ldquo;White chocolate is not the absence of cacao. It is the purest expression of cocoa butter — the soul of the bean, distilled to its essence.&rdquo;
            </blockquote>
            <span className="text-xs tracking-[0.4em] text-[#6b4a2e]/50 uppercase">— IVOIRE Manifesto</span>
            <div className="w-10 h-[1px] bg-[#6b4a2e]/30 mx-auto mt-10" />
          </motion.div>
        </section>

        {/* COMPARISON — Deodorised vs Whole */}
        <section className="py-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-center mb-20">
              <span className="text-xs font-medium tracking-[0.5em] text-[#6b4a2e] uppercase block mb-6">The Difference</span>
              <h2 className="text-4xl md:text-5xl font-normal text-[#2a1f1a]" style={{ fontFamily: "'Libre Baskerville', serif" }}>Deodorised vs. <span className="italic text-[#6b4a2e]">whole.</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="p-10 border border-[#2a1f1a]/[0.06] bg-[#e8ddd0]/50 backdrop-blur-sm">
                <span className="text-xs tracking-[0.3em] text-[#6b4a2e]/30 uppercase block mb-4">Industry Standard</span>
                <h3 className="text-xl text-[#2a1f1a]/50 mb-6" style={{ fontFamily: "'Libre Baskerville', serif" }}>Deodorised Cocoa Butter</h3>
                <ul className="flex flex-col gap-4 text-base text-[#6b4a2e]/40 font-light leading-[1.8]">
                  <li className="flex items-start gap-3"><span className="mt-1">—</span><span>Steam-stripped to remove all natural flavour</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">—</span><span>Standardised for consistency across batches</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">—</span><span>Requires heavy vanilla and sugar to compensate</span></li>
                  <li className="flex items-start gap-3"><span className="mt-1">—</span><span>Results in one-dimensional sweetness, waxy feel</span></li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="p-10 border border-[#6b4a2e]/20 bg-[#f5efe6]/80 backdrop-blur-xl shadow-sm">
                <span className="text-xs tracking-[0.3em] text-[#6b4a2e] uppercase block mb-4">The IVOIRE Way</span>
                <h3 className="text-xl text-[#2a1f1a] mb-6" style={{ fontFamily: "'Libre Baskerville', serif" }}>Whole Cocoa Butter</h3>
                <ul className="flex flex-col gap-4 text-base text-[#5a4d40] font-light leading-[1.8]">
                  <li className="flex items-start gap-3"><span className="text-[#6b4a2e] mt-1">+</span><span>Cold-pressed at 28°C, preserving 200+ aroma compounds</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#6b4a2e] mt-1">+</span><span>Unique flavour fingerprint reflecting origin and season</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#6b4a2e] mt-1">+</span><span>Natural floral and nutty notes reduce sugar need</span></li>
                  <li className="flex items-start gap-3"><span className="text-[#6b4a2e] mt-1">+</span><span>Multi-layered complexity with a clean, melting finish</span></li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <IvoireFeatures />
        <IvoireProcess />

        {/* TEXTURE QUOTE */}
        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-[#2a1f1a]/[0.08] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#6b4a2e]/40 uppercase block mb-8">On Texture</span>
            <p className="text-2xl md:text-4xl font-normal text-[#2a1f1a]/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              At eighteen microns, the tongue can no longer distinguish individual particles. The chocolate becomes a single, continuous sensation — cool at first, then warm as it melts.
            </p>
          </motion.div>
        </section>

        <IvoireProducts />

        {/* CTA */}
        <section className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-10 h-[1px] bg-[#6b4a2e] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#6b4a2e] uppercase block mb-8">La Boîte Blanche</span>
            <h2 className="font-normal leading-[1.1] text-[#2a1f1a] mb-8" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Rediscover<br /><span className="italic text-[#6b4a2e]">white.</span>
            </h2>
            <p className="text-[#5a4d40] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">
              Our quarterly tasting box delivers all four expressions with a hand-written tasting card and pairing guide. Limited to two hundred boxes worldwide.
            </p>
            <button className="px-14 py-5 border border-[#6b4a2e] text-[#6b4a2e] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#6b4a2e] hover:text-[#f5efe6] transition-all duration-500">
              Reserve Your Boîte
            </button>
          </motion.div>
        </section>

      </main>
      <IvoireFooter />
    </div>
  );
}
