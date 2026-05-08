'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import TerroirNavbar from '@/components/terroir/Navbar';
import TerroirFeatures from '@/components/terroir/Features';
import TerroirProcess from '@/components/terroir/Process';
import TerroirProducts from '@/components/terroir/Products';
import TerroirFooter from '@/components/terroir/Footer';

export default function Template52() {
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
      className="relative font-sans bg-[#1c1410]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <TerroirNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #b8845a)'
        }}
      />

      {/* FULLSCREEN CANVAS — dark overlay to ensure white text is readable */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao2-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-[#1c1410]/80 backdrop-blur-[1px] z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#b8845a] selection:text-[#1c1410]">
        
        {/* ═══════════════════════════════════════════════════════ */}
        {/* HERO — Centered poetic statement                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-medium tracking-[0.6em] text-[#b8845a] uppercase block mb-8">
                Chocolate of Place
              </span>
              <h1
                className="leading-[0.95] font-light text-white mb-10"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4.5rem, 13vw, 12rem)',
                }}
              >
                TERROIR
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[1px] bg-[#b8845a]/50 mx-auto mb-8"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-[#a08a76] text-lg font-light leading-relaxed tracking-wide max-w-md mx-auto"
              >
                Where the cacao grows shapes everything. <br />
                Every bar is a landscape you can taste.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* HERITAGE — The founding story, split layout             */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section id="heritage" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs font-medium tracking-[0.5em] text-[#b8845a] uppercase block mb-8">
                00. / Our Heritage
              </span>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                {/* Large heading spans 7 cols */}
                <div className="md:col-span-7">
                  <h2
                    className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-12"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Born from <br />
                    volcanic <span className="italic text-[#b8845a]">earth.</span>
                  </h2>
                  <div className="flex gap-14 pt-8 border-t border-white/[0.06]">
                    <div>
                      <span className="text-4xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2019</span>
                      <span className="text-xs uppercase tracking-[0.25em] text-white/25 block mt-2">Founded</span>
                    </div>
                    <div>
                      <span className="text-4xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>7</span>
                      <span className="text-xs uppercase tracking-[0.25em] text-white/25 block mt-2">Partner Farms</span>
                    </div>
                    <div>
                      <span className="text-4xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>3</span>
                      <span className="text-xs uppercase tracking-[0.25em] text-white/25 block mt-2">Continents</span>
                    </div>
                  </div>
                </div>

                {/* Body copy spans 5 cols */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="border-l border-[#b8845a]/20 pl-10">
                    <p className="text-white/55 text-lg font-light leading-[2] mb-8">
                      TERROIR began with a simple question: why does chocolate from the same cacao variety taste entirely different depending on where it was grown? We spent two years walking farms across Peru, Bolivia, Colombia, and Madagascar — not buying beans, but learning landscapes.
                    </p>
                    <p className="text-white/55 text-lg font-light leading-[2] mb-8">
                      What we discovered changed everything. The volcanic soil of Piura deposits trace minerals into the root system that no fertiliser can replicate. The shade canopy of Alto Beni's cloud forest slows maturation so dramatically that the beans develop flavour compounds found nowhere else on earth.
                    </p>
                    <p className="text-white/55 text-lg font-light leading-[2] mb-10">
                      We realised that our job was not to impose a house style, but to let each origin speak for itself. Every TERROIR bar is a faithful translation of a specific place, a specific harvest, and the farmers who tend the trees year after year.
                    </p>
                    <a href="#harvest" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#b8845a] uppercase hover:text-white transition-colors group">
                      <span>View this season</span>
                      <div className="w-8 h-[1px] bg-[#b8845a] group-hover:w-14 transition-all duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* EDITORIAL QUOTE                                        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-32 px-8 md:px-16 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center"
          >
            <div className="w-10 h-[1px] bg-[#b8845a]/40 mx-auto mb-10" />
            <blockquote
              className="text-3xl md:text-5xl font-light text-white/75 leading-[1.4] italic mb-10"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              &ldquo;You cannot taste the terroir of a place you have never walked. And you should not make chocolate from beans you have never held.&rdquo;
            </blockquote>
            <span className="text-xs tracking-[0.4em] text-[#b8845a]/50 uppercase">
              — Terroir Harvest Journal, Vol. IV
            </span>
            <div className="w-10 h-[1px] bg-[#b8845a]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FEATURES — Nature's Blueprint grid                     */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TerroirFeatures />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FARM PROFILES — Deep-dive into partner farms           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <span className="text-xs font-medium tracking-[0.5em] text-[#b8845a] uppercase block mb-6">Our Partners</span>
              <h2 className="text-5xl md:text-6xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                The farmers behind <span className="italic text-[#b8845a]">the flavour.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  farm: 'Finca Esperanza',
                  location: 'Piura Valley, Peru',
                  farmer: 'Don Miguel Castillo',
                  since: 'Partner since 2020',
                  text: 'Three generations of cacao cultivation on the edge of the Sechura Desert. Don Miguel\'s Nacional Blanco trees are over sixty years old — ancient by farming standards — and produce small, intensely flavoured pods that taste of blackberry and cedar. His fermentation technique, passed down from his grandmother, uses a rotating-box method that we have seen nowhere else.',
                },
                {
                  farm: 'Cooperativa Sapecho',
                  location: 'Alto Beni, Bolivia',
                  farmer: 'María Elena Huanca',
                  since: 'Partner since 2021',
                  text: 'A women-led cooperative of twenty-eight families farming wild cacao in the Yungas cloud forest at 1,200 metres elevation. The trees are not planted — they are found, growing naturally in the forest understory. María Elena has mapped over four hundred wild trees across three valleys, each tagged and tracked for genetic diversity.',
                },
                {
                  farm: 'Hacienda de Cacao',
                  location: 'Tumaco, Colombia',
                  farmer: 'Carlos Andrés Mejía',
                  since: 'Partner since 2022',
                  text: 'Fifty hectares of Fino de Aroma cacao on Colombia\'s Pacific coast. Carlos practices biodynamic farming, timing his pruning and harvesting to lunar cycles. Sceptics scoff, but the proof is in the pod: his beans consistently win gold at the International Cocoa Awards. The salt air from the Pacific gives his cacao a distinctive mineral brightness.',
                },
                {
                  farm: 'Plantation Ambanja',
                  location: 'Sambirano Valley, Madagascar',
                  farmer: 'Jean-Pierre Rakotonirina',
                  since: 'Partner since 2023',
                  text: 'The Sambirano Valley is Madagascar\'s cacao heartland, and Jean-Pierre\'s twelve-hectare plantation produces the most vivid, fruity beans we have ever tasted. His post-harvest method involves a three-stage fermentation — first in pile, then in box, then a final "finishing" stage in airtight drums — that creates extraordinary complexity.',
                },
              ].map((f, i) => (
                <motion.div
                  key={f.farm}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.9 }}
                  className="group border border-white/[0.04] p-10 hover:border-[#b8845a]/15 transition-all duration-700"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-light text-white group-hover:text-[#b8845a] transition-colors duration-500" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      {f.farm}
                    </h3>
                    <span className="text-[11px] tracking-[0.2em] text-[#b8845a]/40 uppercase">{f.since}</span>
                  </div>
                  <div className="flex gap-4 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase">
                    <span>{f.location}</span>
                    <span>·</span>
                    <span>{f.farmer}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/[0.04] mb-6" />
                  <p className="text-[#a08a76] text-base font-light leading-[1.9]">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PROCESS — Pod-to-palate journey                        */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TerroirProcess />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* SECOND QUOTE                                           */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="py-32 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center"
          >
            <span className="text-xs tracking-[0.5em] text-[#b8845a]/40 uppercase block mb-8">On Single Origin</span>
            <p
              className="text-2xl md:text-4xl font-light text-white/65 leading-[1.5] italic max-w-3xl mx-auto"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Blending is the art of hiding. Single origin is the art of revealing. We chose to reveal — every imperfection, every glory, every whisper of the soil.
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════════════════ */}
        {/* PRODUCTS — Seasonal harvest bars                       */}
        {/* ═══════════════════════════════════════════════════════ */}
        <TerroirProducts />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* CTA — Join the seasonal subscription                   */}
        {/* ═══════════════════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="max-w-3xl text-center"
          >
            <div className="w-10 h-[1px] bg-[#b8845a] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#b8845a] uppercase block mb-8">Seasonal Dispatch</span>
            <h2
              className="font-light leading-[1.1] text-white mb-8"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Taste every <br />
              <span className="italic text-[#b8845a]">landscape.</span>
            </h2>
            <p className="text-[#a08a76] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">
              Four times a year, we release a new single-origin bar. Subscribers receive each bar with a hand-written harvest card, origin map, and tasting guide. Limited to three hundred members worldwide.
            </p>
            <button className="px-14 py-5 border border-[#b8845a] text-[#b8845a] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#b8845a] hover:text-[#1c1410] transition-all duration-500">
              Subscribe to the Harvest
            </button>
          </motion.div>
        </section>

      </main>

      <TerroirFooter />
    </div>
  );
}
