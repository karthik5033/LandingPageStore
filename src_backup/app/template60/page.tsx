'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import CoreNavbar from '@/components/core/Navbar';
import CoreFeatures from '@/components/core/Features';
import CoreProcess from '@/components/core/Process';
import CoreProducts from '@/components/core/Products';
import CoreFooter from '@/components/core/Footer';

export default function Template60() {
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
      className="relative font-sans bg-[#0f1115]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <CoreNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #00f0ff)'
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao10-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#00f0ff] selection:text-black">

        {/* Hero */}
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[1px] bg-[#00f0ff] mb-6"
              />
              <span className="text-xs font-medium tracking-[0.5em] text-[#00f0ff] uppercase block mb-4">
                v1.0 · Production Grade
              </span>
              <h1
                className="leading-[0.9] font-light text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(5rem, 14vw, 13rem)',
                }}
              >
                Core
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl"
            >
              <p className="text-[#7a8a9a] text-lg font-light leading-[1.9] mb-4">
                A technical approach to cacao extraction. No additives. No marketing theatre. Just molecular integrity and absolute transparency in every gram.
              </p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        {/* Manifesto */}
        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-[1px] bg-[#00f0ff]" />
                  <span className="text-xs font-medium tracking-[0.5em] text-[#00f0ff] uppercase">
                    00. / The System
                  </span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-12"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  True quality is <br />
                  <span className="italic text-[#00f0ff]">subtraction.</span>
                </h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>14μ</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Particle size</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Ingredients</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>0</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Stabilisers</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl"
              >
                <div className="border-l border-[#00f0ff]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    The chocolate industry has spent decades perfecting the art of addition — emulsifiers to smooth texture, vanillin to mask off-flavours, lecithin to reduce viscosity. Every additive is an admission that the base material was not good enough on its own.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    Core takes the opposite approach. We've optimised the bean-to-bar pipeline for maximum retention of flavonoids and antioxidants, logging every batch with its precise chemical profile — pH levels, fermentation duration, and roasting temperature curve. The result is a bar that tastes like nothing was added, because nothing was.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">
                    We believe that the best chocolate is the one where the maker is invisible — where the only voice you hear belongs to the bean itself, unedited and uncompressed.
                  </p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#00f0ff] uppercase hover:text-white transition-colors group">
                    <span>View the specification</span>
                    <div className="w-8 h-[1px] bg-[#00f0ff] group-hover:w-14 transition-all duration-500" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Editorial quote */}
        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center"
          >
            <div className="w-12 h-[1px] bg-[#00f0ff]/40 mx-auto mb-10" />
            <blockquote
              className="text-3xl md:text-5xl font-light text-white/80 leading-[1.4] italic mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              &ldquo;If the ingredient list is longer than the tasting notes, something has gone wrong.&rdquo;
            </blockquote>
            <span className="text-xs tracking-[0.4em] text-[#00f0ff]/60 uppercase">
              — Core Methodology, Section 1.4
            </span>
            <div className="w-12 h-[1px] bg-[#00f0ff]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <CoreFeatures />

        {/* Terroir narrative */}
        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  region: 'Tumaco Basin',
                  country: 'Colombia',
                  elevation: '50m',
                  variety: 'Fino de Aroma',
                  text: 'The Pacific coast of Nariño is a landscape of salt marshes and volcanic soil. Cacao trees here grow under the shade of rubber and mahogany, drawing minerals from centuries of sedimentary deposit. The beans carry an unusual marine salinity — a faint brininess beneath the expected floral and citrus notes. We ferment for six days in cedar-lined boxes, then dry slowly over two weeks on raised bamboo beds.',
                },
                {
                  region: 'Satipo Valley',
                  country: 'Peru',
                  elevation: '1,400m',
                  variety: 'Chuncho',
                  text: 'At altitude, cacao trees produce fewer pods, but each bean is denser with flavour compounds. The Chuncho variety found in Satipo is genetically distinct from lowland Criollo — smaller, more bitter, with a pronounced earthy undertone that recalls damp forest floor and dried tobacco. Our roast profile for this origin is deliberately restrained: low and slow, to preserve the fragile aldehydes.',
                },
                {
                  region: 'Barlovento',
                  country: 'Venezuela',
                  elevation: '200m',
                  variety: 'Trinitario',
                  text: 'The cacao of Barlovento is the child of two worlds — the delicacy of Criollo crossed with the resilience of Forastero. The resulting Trinitario beans have a muscular body and a long, tannic finish that recalls good Barolo wine. We conche this origin for the full one hundred and twenty hours, allowing the tannins to soften into a persistent, savoury warmth.',
                },
              ].map((t, i) => (
                <motion.div
                  key={t.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.9 }}
                  className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {t.region}
                    </h3>
                    <span className="text-xs tracking-[0.2em] text-[#00f0ff]/50 uppercase">{t.country}</span>
                  </div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase">
                    <span>{t.elevation}</span>
                    <span>·</span>
                    <span>{t.variety}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#00f0ff]/20 transition-colors duration-700" />
                  <p className="text-[#7a8a9a] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CoreProcess />

        {/* Second quote */}
        <section className="py-32 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center"
          >
            <span className="text-xs tracking-[0.5em] text-[#00f0ff]/40 uppercase block mb-8">On precision</span>
            <p
              className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              We measure roasting in degrees, not minutes. We measure conching in microns, not hours. We measure quality in what we left out, not what we put in.
            </p>
          </motion.div>
        </section>

        <CoreProducts />

        {/* Newsletter CTA */}
        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-center"
          >
            <div className="w-12 h-[1px] bg-[#00f0ff] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#00f0ff] uppercase block mb-8">Connect to the system</span>
            <h2
              className="font-light leading-[1.1] text-white mb-8"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Receive the <br />
              <span className="italic text-[#00f0ff]">specification.</span>
            </h2>
            <p className="text-[#7a8a9a] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">
              Each batch report is published with full chemical analysis — pH, Brix, particle distribution, and flavour wheel. Reserve members receive automated updates alongside first access to every new release.
            </p>
            <button className="px-14 py-5 border border-[#00f0ff] text-[#00f0ff] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#00f0ff] hover:text-[#0f1115] transition-all duration-500">
              Join the waitlist
            </button>
            <div className="w-12 h-[1px] bg-[#00f0ff]/20 mx-auto mt-14" />
          </motion.div>
        </section>

      </main>

      <CoreFooter />
    </div>
  );
}
