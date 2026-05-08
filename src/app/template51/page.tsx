'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import CrestNavbar from '@/components/crest/Navbar';
import CrestFeatures from '@/components/crest/Features';
import CrestProcess from '@/components/crest/Process';
import CrestProducts from '@/components/crest/Products';
import CrestFooter from '@/components/crest/Footer';

export default function Template51() {
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
      className="relative font-sans bg-[#0c0604]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <CrestNavbar />

      {/* Progress bar — thin gold line at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #d4a054)'
        }}
      />

      {/* FULLSCREEN CANVAS — minimal overlay, user wants to SEE the video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao1-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Very subtle vignette — NOT darkening, just edge fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0604]/70 via-transparent to-[#0c0604]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#d4a054] selection:text-[#0c0604]">
        
        {/* ═══════════════════════════════════════════════════════ */}
        {/* HERO — Asymmetric editorial masthead                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="hero" className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Left — Brand */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="h-[1px] bg-[#d4a054] mb-6"
              />
              <span className="text-xs font-medium tracking-[0.5em] text-[#d4a054] uppercase block mb-4">
                Est. 2024 · Bean to Bar
              </span>
              <h1
                className="leading-[0.9] font-light text-white"
                style={{
                  fontFamily: "'EB Garamond', serif",
                  fontSize: 'clamp(5rem, 14vw, 13rem)',
                }}
              >
                CREST
              </h1>
            </motion.div>

            {/* Right — Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="md:text-right md:max-w-sm pb-4"
            >
              <p className="text-[#a89080] text-lg font-light leading-[1.9] mb-4">
                Single-origin chocolate, fire-roasted and stone-ground over five days. No emulsifiers. No shortcuts. Just cacao, sugar, and obsessive patience.
              </p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* MANIFESTO — The brand's philosophical declaration       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Left column — big editorial text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-[1px] bg-[#d4a054]" />
                  <span className="text-xs font-medium tracking-[0.5em] text-[#d4a054] uppercase">
                    00. / The Manifesto
                  </span>
                </div>
                <h2
                  className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-12"
                  style={{ fontFamily: "'EB Garamond', serif" }}
                >
                  Chocolate should <br />
                  taste of <span className="italic text-[#d4a054]">somewhere.</span>
                </h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>3</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Origins</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>5</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Ingredients Max</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>0</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Additives</span>
                  </div>
                </div>
              </motion.div>

              {/* Right column — body copy */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col justify-center"
              >
                <div className="border-l border-[#d4a054]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    Most chocolate is a composite — a blend of beans from a dozen countries, homogenised into uniformity, then masked with vanilla and lecithin. The result is consistent, but it is also anonymous. It tastes of nothing in particular. It could have been made anywhere.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    CREST exists to prove the opposite. We believe that cacao, like wine, is an expression of place. The same Criollo variety grown in Piura tastes nothing like the one from Tumaco. The altitude, the shade canopy, the fermentation method, even the species of banana leaf used to wrap the beans during drying — all of it matters. All of it can be tasted.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">
                    Our job is not to create flavour. It is to protect the flavour that already exists in the bean, and deliver it intact to your palate. This means longer roasts, longer conches, fewer ingredients, and a fanatical refusal to take shortcuts at any stage of the process.
                  </p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#d4a054] uppercase hover:text-white transition-colors group">
                    <span>Explore the Collection</span>
                    <div className="w-8 h-[1px] bg-[#d4a054] group-hover:w-14 transition-all duration-500" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PHILOSOPHY QUOTE — Full-width editorial pause          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center"
          >
            <div className="w-12 h-[1px] bg-[#d4a054]/40 mx-auto mb-10" />
            <blockquote
              className="text-3xl md:text-5xl font-light text-white/80 leading-[1.4] italic mb-10"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              &ldquo;The best chocolate is the one that makes you close your eyes. Not because it is sweet — but because it is true.&rdquo;
            </blockquote>
            <span className="text-xs tracking-[0.4em] text-[#d4a054]/60 uppercase">
              — Crest Founding Principles, 2024
            </span>
            <div className="w-12 h-[1px] bg-[#d4a054]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FEATURES — 6-pillar editorial grid                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <CrestFeatures />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* TERROIR NARRATIVE — Immersive mid-page editorial break  */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {[
                {
                  region: 'Piura Valley',
                  country: 'Peru',
                  elevation: '350m',
                  variety: 'Nacional Blanco',
                  text: 'The Piura Valley sits between the Sechura Desert and the Andes foothills. The persistent Pacific fog — called garúa — creates a natural humidity chamber. Cacao trees here produce pale, almost albino beans with an extraordinary concentration of fruity esters. Our Piura 85% captures this terroir: bright, acidic, with a finish that lingers for minutes.',
                },
                {
                  region: 'Alto Beni',
                  country: 'Bolivia',
                  elevation: '1,200m',
                  variety: 'Wild Cacao',
                  text: 'The Alto Beni region is one of the last frontiers of wild cacao. Trees grow in the understory of the Yungas cloud forest, pollinated by native midges. The beans are smaller and more complex than cultivated varieties. Fermentation happens in wooden crates lined with banana leaves, giving the finished chocolate a distinctive raw honey sweetness.',
                },
                {
                  region: 'Tumaco Coast',
                  country: 'Colombia',
                  elevation: '50m',
                  variety: 'Fino de Aroma',
                  text: 'The Pacific coast of Nariño produces some of the most aromatic cacao in the Americas. The salt air, volcanic soil, and equatorial sun conspire to create beans with intense floral top notes. Our Tumaco 68% is our most approachable bar — passion fruit and jasmine wrapped in a silky caramel body.',
                },
              ].map((t, i) => (
                <motion.div
                  key={t.region}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.9 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: "'EB Garamond', serif" }}>
                      {t.region}
                    </h3>
                    <span className="text-xs tracking-[0.2em] text-[#d4a054]/50 uppercase">{t.country}</span>
                  </div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase">
                    <span>{t.elevation}</span>
                    <span>·</span>
                    <span>{t.variety}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#d4a054]/20 transition-colors duration-700" />
                  <p className="text-[#a89080] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PROCESS — Bean-to-bar vertical timeline                */}
        {/* ═══════════════════════════════════════════════════════ */}
        <CrestProcess />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECOND QUOTE — Sensory pause before products           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-32 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center"
          >
            <span className="text-xs tracking-[0.5em] text-[#d4a054]/40 uppercase block mb-8">On Patience</span>
            <p
              className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              We could conche for twelve hours and call it done. But we conche for one hundred and twenty, because the last eighty hours are where the magic happens — where the acidity softens, the bitterness rounds, and the chocolate finally begins to taste like itself.
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PRODUCTS — Reserve collection                          */}
        {/* ═══════════════════════════════════════════════════════ */}
        <CrestProducts />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* NEWSLETTER / RITUAL — Immersive CTA                    */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-center"
          >
            <div className="w-12 h-[1px] bg-[#d4a054] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#d4a054] uppercase block mb-8">Join the Reserve</span>
            <h2
              className="font-light leading-[1.1] text-white mb-8"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Taste the <br />
              <span className="italic text-[#d4a054]">origin.</span>
            </h2>
            <p className="text-[#a89080] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">
              Each seasonal release is limited to two hundred bars per origin. Reserve members receive first access, tasting notes from our maître chocolatier, and free worldwide shipping.
            </p>
            <button className="px-14 py-5 border border-[#d4a054] text-[#d4a054] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#d4a054] hover:text-[#0c0604] transition-all duration-500">
              Join the Waitlist
            </button>
            <div className="w-12 h-[1px] bg-[#d4a054]/20 mx-auto mt-14" />
          </motion.div>
        </section>

      </main>

      <CrestFooter />
    </div>
  );
}
