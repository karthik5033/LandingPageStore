'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ObeliskNavbar from '@/components/obelisk/Navbar';
import ObeliskFeatures from '@/components/obelisk/Features';
import ObeliskProcess from '@/components/obelisk/Process';
import ObeliskProducts from '@/components/obelisk/Products';
import ObeliskFooter from '@/components/obelisk/Footer';

export default function Template62() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-mono bg-[#0a0a0a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Roboto+Mono:wght@300;400;500&display=swap');
        body { font-family: 'Roboto Mono', monospace; }
      `}</style>
      <ObeliskNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] origin-left z-[60] bg-white" style={{ scaleX }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao12-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-white selection:text-black">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-white mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase block mb-4">Architectural cacao · Est. 2024</span>
              <h1 className="leading-[0.9] font-normal text-white" style={{ fontFamily: "'Syncopate', sans-serif", fontSize: 'clamp(4rem, 12vw, 11rem)' }}>Obelisk</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-white/40 text-lg font-light leading-[1.9] mb-4">Structural chocolate engineered for a specific melting point and load capacity. Every bar is a monument to precision — designed, not just made.</p>
              <span className="text-xs tracking-[0.4em] text-white/20 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white/40" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">00. / The manifesto</span></div>
                <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1.1] mb-12" style={{ fontFamily: "'Syncopate', sans-serif" }}>Structured <span className="italic text-white/30">silence.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>900g</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Force capacity</span></div>
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>34°</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Crystal threshold</span></div>
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>0</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Stabilisers</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="border-l border-white/10 pl-10">
                  <p className="text-white/50 text-lg font-light leading-[2] mb-8">We eliminate the noise of modern confectionery. Obelisk is the result of thousands of hours of material testing — identifying the exact crystal structure required to achieve a clean, acoustic snap. Most chocolate breaks with a dull thud. Ours fractures with a frequency you can hear across a quiet room.</p>
                  <p className="text-white/50 text-lg font-light leading-[2] mb-8">The philosophy is architectural. We think of a chocolate bar not as a confection but as a structure — a load-bearing assembly of cocoa butter crystals, suspended cacao solids, and precisely calibrated sugar particles. Every element serves a structural purpose. Nothing is decorative.</p>
                  <p className="text-white/50 text-lg font-light leading-[2] mb-12">This is not chocolate that melts on your tongue. This is chocolate that resists — briefly, deliberately — before yielding to body heat in a controlled, uniform dissolution that releases flavour in waves rather than all at once.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-white/60 uppercase hover:text-white transition-colors group"><span>Enter the archive</span><div className="w-8 h-[1px] bg-white/40 group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-white/70 leading-[1.4] italic mb-10" style={{ fontFamily: "'Syncopate', sans-serif" }}>&ldquo;A bar of chocolate is a small building. Treat it like one.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-white/30 uppercase">— Obelisk design principles, 2024</span>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-10" />
          </motion.div>
        </section>

        <ObeliskFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Chuao Valley', country: 'Venezuela', elevation: '150m', variety: 'Criollo', text: 'Chuao is arguably the most famous cacao origin on earth, and for good reason. The coastal valley is accessible only by boat, preserving genetic isolation that dates back centuries. The beans are large, pale, and extraordinarily aromatic — violet and dried cherry layered over a body of roasted almond. We process Chuao with extreme restraint, roasting just enough to develop flavour without losing the delicate top notes.' },
                { region: 'Soconusco', country: 'Mexico', elevation: '400m', variety: 'Criollo Antiguo', text: 'The birthplace of chocolate itself. Soconusco cacao was the currency of the Aztec empire, and the variety grown here today is genetically identical to the beans found in archaeological sites dating to 1900 BCE. The flavour is earthy and primal — cinnamon, chilli pepper, and a deep, almost smoky sweetness that recalls the original xocolatl.' },
                { region: 'Sambirano', country: 'Madagascar', elevation: '300m', variety: 'Trinitario', text: 'Madagascar cacao is unlike anything from the Americas. The island\'s unique terroir — laterite soil, monsoon rains, and intense equatorial sun — produces beans with a sharp citrus acidity that is unmistakable. Our Sambirano bar is the most structurally ambitious in the range: we temper at a fraction of a degree below standard, creating a crystal matrix that is almost brittle in its precision.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Syncopate', sans-serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-white/30 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/15 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-white/10 transition-colors duration-700" />
                  <p className="text-white/40 text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ObeliskProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-white/20 uppercase block mb-8">On structure</span>
            <p className="text-2xl md:text-4xl font-normal text-white/60 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Syncopate', sans-serif" }}>We do not temper to make chocolate shiny. We temper to make it strong. The gloss is merely a side effect of structural integrity.</p>
          </motion.div>
        </section>

        <ObeliskProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-white/40 mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-white/60 uppercase block mb-8">Join the archive</span>
            <h2 className="font-normal leading-[1.1] text-white mb-8" style={{ fontFamily: "'Syncopate', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Enter the <span className="italic text-white/30">monolith.</span></h2>
            <p className="text-white/40 text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Each seasonal release is limited to five hundred units per origin. Archive members receive priority allocation, structural analysis reports, and worldwide delivery at no additional cost.</p>
            <button className="px-14 py-5 border border-white/30 text-white text-xs font-medium uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-white/10 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <ObeliskFooter />
    </div>
  );
}
