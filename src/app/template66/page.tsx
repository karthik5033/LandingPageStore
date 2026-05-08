'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import OriginNavbar from '@/components/origin/Navbar';
import OriginFeatures from '@/components/origin/Features';
import OriginProcess from '@/components/origin/Process';
import OriginProducts from '@/components/origin/Products';
import OriginFooter from '@/components/origin/Footer';

export default function Template66() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#0d1a0d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow-light {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      `}</style>
      <OriginNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #88b04b)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao16-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/80 via-transparent to-[#0d1a0d]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white premium-text-shadow selection:bg-[#88b04b] selection:text-black">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#88b04b] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#88b04b] uppercase block mb-4">Wild harvest · 2024</span>
              <h1 className="leading-[0.9] font-bold text-white premium-text-shadow" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(5rem, 14vw, 12rem)' }}>Origin</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4">
              <p className="text-white/50 text-lg font-light leading-[1.9] mb-4">Unfiltered cacao from the jungle floor. No refinement beyond the essential. This is chocolate stripped back to its botanical roots — fierce, complex, and unapologetically raw.</p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }}>
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#88b04b]" /><span className="text-xs font-medium tracking-[0.5em] text-[#88b04b] uppercase">00. / The position</span></div>
                <h2 className="text-5xl md:text-7xl font-bold text-white premium-text-shadow leading-[1.1] mb-12" style={{ fontFamily: "'Syne', sans-serif" }}>Radical <span className="italic text-[#88b04b]">purity.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-light text-white premium-text-shadow">0%</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Additives</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow">100%</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Single tree</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow">Wild</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Genetics</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center">
                <div className="border-l border-[#88b04b]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Every step of industrial processing is a step away from the truth of the bean. Emulsifiers smooth out the rough edges that make cacao interesting. Vanillin masks the terroir that makes each origin unique. Lecithin compensates for a process that was too aggressive to begin with.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Origin rejects all of it. Our beans are fermented on the jungle floor using naturally occurring wild yeasts from the surrounding flora. They are dried under the canopy, not in mechanical dryers. They are stone-ground by hand using volcanic rock from the same watershed. This is not chocolate as an industry produces it. This is cacao as nature intended it.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">The result is confrontational. It is not sweet. It is not smooth. It is alive with the botanical complexity of a living ecosystem — herbal, earthy, sometimes bitter, always honest. If you are looking for comfort, look elsewhere. If you are looking for truth, you have found it.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#88b04b] uppercase hover:text-white premium-text-shadow transition-colors group"><span>View the yield</span><div className="w-8 h-[1px] bg-[#88b04b] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#88b04b]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-bold text-white/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Syne', sans-serif" }}>&ldquo;If you have to add things to make it taste good, it was not good enough to begin with.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#88b04b]/60 uppercase">— Origin first principles, 2024</span>
            <div className="w-12 h-[1px] bg-[#88b04b]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <OriginFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Upper Amazon', country: 'Peru', elevation: '300m', variety: 'Wild Nacional', text: 'The Upper Amazon basin is the genetic birthplace of cacao. The wild trees here have never been cultivated — they grow in the understory of primary rainforest, competing with thousands of other species for light and nutrients. The beans are small, irregular, and ferociously complex. Our Upper Amazon bar tastes like the jungle itself — damp earth, green bark, wild mushroom, and a persistent mineral bitterness that is challenging and rewarding in equal measure.' },
                { region: 'Congo Basin', country: 'DR Congo', elevation: '600m', variety: 'Amelonado', text: 'Central African cacao is rarely featured in fine chocolate, but the Amelonado varieties grown in the Congo basin are remarkable. The heavy equatorial rainfall and red laterite soil produce beans with a robust, smoky character — charcoal, black tea, and a savoury umami quality that is completely absent from South American origins. We process with a longer fermentation to tame the tannins.' },
                { region: 'Mekong Delta', country: 'Vietnam', elevation: '50m', variety: 'Trinitario', text: 'Vietnam is a newcomer to fine cacao, but the Mekong Delta produces beans with a startling tropical intensity. The alluvial soil deposits create a unique mineral profile that gives the chocolate a bright, almost electric acidity. Our Mekong bar opens with a burst of tropical fruit — jackfruit, guava, green mango — before settling into a clean, spicy finish with notes of galangal and black pepper.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-bold text-white premium-text-shadow" style={{ fontFamily: "'Syne', sans-serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#88b04b]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#88b04b]/20 transition-colors duration-700" />
                  <p className="text-white/50 text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <OriginProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#88b04b]/40 uppercase block mb-8">On honesty</span>
            <p className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto">We do not make chocolate that everyone will enjoy. We make chocolate that a few people will never forget. The difference is in what we refuse to add.</p>
          </motion.div>
        </section>

        <OriginProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#88b04b] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#88b04b] uppercase block mb-8">Join the network</span>
            <h2 className="font-bold leading-[1.1] text-white premium-text-shadow mb-8" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Stay <span className="italic text-[#88b04b]">wild.</span></h2>
            <p className="text-white/50 text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Our allocations are offered in order of network seniority. Register your intent and receive first access to each seasonal wild harvest, along with detailed provenance reports and botanical field notes.</p>
            <button className="px-14 py-5 bg-[#88b04b] text-black text-xs font-medium uppercase tracking-[0.3em] hover:bg-white transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-[#88b04b]/20 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <OriginFooter />
    </div>
  );
}
