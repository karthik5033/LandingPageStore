'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import NovaNavbar from '@/components/nova/Navbar';
import NovaFeatures from '@/components/nova/Features';
import NovaProcess from '@/components/nova/Process';
import NovaProducts from '@/components/nova/Products';
import NovaFooter from '@/components/nova/Footer';

export default function Template64() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#0b0b1a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;1,9..144,400&family=Outfit:wght@300;400;600;700&display=swap');
        body { font-family: 'Outfit', sans-serif; }
      
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow-light {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      `}</style>
      <NovaNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #e0e7ff)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao14-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-[#050b14]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white premium-text-shadow selection:bg-[#e0e7ff] selection:text-[#0b0b1a]">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#e0e7ff] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#e0e7ff] uppercase block mb-4">Celestial harvest · 2024</span>
              <h1 className="leading-[0.9] font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Nova</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4">
              <p className="text-[#8a8fa8] text-lg font-light leading-[1.9] mb-4">Cacao from volcanic highlands where thin atmosphere and relentless ultraviolet forge beans of extraordinary molecular density. No additives — just the accumulated energy of a thousand equatorial days.</p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }}>
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#e0e7ff]" /><span className="text-xs font-medium tracking-[0.5em] text-[#e0e7ff] uppercase">00. / The thesis</span></div>
                <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1] mb-12" style={{ fontFamily: "'Fraunces', serif" }}>Flavour is <br /><span className="italic text-[#e0e7ff]">cosmological.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif" }}>2,800m</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Peak altitude</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif" }}>120h</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Conche time</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif" }}>14μ</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Particle finish</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center">
                <div className="border-l border-[#e0e7ff]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">The polyphenols in cacao are photosynthetic products — complex molecules assembled from sunlight, water, and volcanic minerals over months of slow maturation. At extreme altitudes, where ultraviolet radiation is more intense and atmospheric pressure is lower, cacao trees produce fewer pods but each bean is disproportionately rich in these sun-forged compounds.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Nova exists to capture this altitude effect. We source exclusively from groves above two thousand metres — places where the air is thin, the nights are cold, and the cacao grows slowly enough to accumulate flavour compounds that lowland beans never develop. The result is a chocolate with a luminous, almost phosphorescent quality on the palate.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">Our processing is deliberately minimal. We roast gently, conche slowly, and add nothing. The bean arrives at your palate as close to its celestial origin as we can deliver — a fragment of equatorial sunlight, compressed into seventy-five grams of dark matter.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#e0e7ff] uppercase hover:text-white premium-text-shadow transition-colors group"><span>View the constellation</span><div className="w-8 h-[1px] bg-[#e0e7ff] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#e0e7ff]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-light text-white/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Fraunces', serif" }}>&ldquo;Chocolate is condensed sunlight. Our only job is to not lose any of it along the way.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#e0e7ff]/60 uppercase">— Nova celestial charter, 2024</span>
            <div className="w-12 h-[1px] bg-[#e0e7ff]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <NovaFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Huila Highlands', country: 'Colombia', elevation: '2,400m', variety: 'Criollo', text: 'The Huila department sits in the shadow of the Nevado del Huila volcano. The soil is rich in sulfur and phosphorus — minerals deposited by millennia of eruptions. Cacao grown here develops a distinctive mineral backbone that supports layers of violet, dried cherry, and a finish like volcanic stone warmed by afternoon sun. We ferment for seven days in mahogany boxes.' },
                { region: 'Ucayali Basin', country: 'Peru', elevation: '1,800m', variety: 'Chuncho Nativo', text: 'The eastern Andes harbour ancient Chuncho varieties that have never been hybridised. These wild trees produce small, irregular pods with an unusually high concentration of theobromine. The flavour is intense and uncompromising — raw cocoa, damp earth, tobacco, and a persistent warmth that builds with each piece. We roast this origin at the lowest temperature in our range.' },
                { region: 'Caranavi', country: 'Bolivia', elevation: '2,100m', variety: 'Wild Hybrid', text: 'The Yungas region of Bolivia is one of the most biodiverse ecosystems on earth. Cacao trees grow alongside coca, coffee, and citrus in a dense polyculture that enriches the soil and creates complex flavour precursors. Our Caranavi bar has an otherworldly quality — bergamot, star anise, and raw honey dissolving into a finish that recalls watching a sunset from a very high place.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Fraunces', serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#e0e7ff]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#e0e7ff]/20 transition-colors duration-700" />
                  <p className="text-[#8a8fa8] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <NovaProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#e0e7ff]/40 uppercase block mb-8">On altitude</span>
            <p className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Fraunces', serif" }}>At two thousand metres, a cacao tree produces half the pods it would at sea level. But every bean carries twice the complexity. We trade volume for meaning, and the chocolate is richer for it.</p>
          </motion.div>
        </section>

        <NovaProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#e0e7ff] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#e0e7ff] uppercase block mb-8">Join the observation</span>
            <h2 className="font-light leading-[1.1] text-white premium-text-shadow mb-8" style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Taste the <br /><span className="italic text-[#e0e7ff]">altitude.</span></h2>
            <p className="text-[#8a8fa8] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Our harvests are aligned with the growing seasons of each highland origin. Reserve members receive first access, altitude and UV exposure data for every batch, and worldwide shipping at no additional cost.</p>
            <button className="px-14 py-5 border border-[#e0e7ff] text-[#e0e7ff] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#e0e7ff] hover:text-[#0b0b1a] transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-[#e0e7ff]/20 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <NovaFooter />
    </div>
  );
}
