'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import AeonNavbar from '@/components/aeon/Navbar';
import AeonFeatures from '@/components/aeon/Features';
import AeonProcess from '@/components/aeon/Process';
import AeonProducts from '@/components/aeon/Products';
import AeonFooter from '@/components/aeon/Footer';

export default function Template65() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-serif bg-[#1c1c1c]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Spectral:ital,wght@0,300;0,400;0,600;1,400&display=swap');
        body { font-family: 'Spectral', serif; }
      `}</style>
      <AeonNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao15-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-[#f4f1ea] selection:bg-[#c5a059] selection:text-[#1c1c1c]">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#c5a059] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#c5a059] uppercase block mb-4">Heritage collection · Est. 2024</span>
              <h1 className="leading-[0.9] font-normal text-[#f4f1ea]" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Aeon</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-[#a89080] text-lg font-light leading-[1.9] mb-4">Heirloom cacao from century-old trees. Slow-fermented, stone-milled, and aged in underground vaults. A tribute to the patience of generations past and the terroir they left behind.</p>
              <span className="text-xs tracking-[0.4em] text-[#f4f1ea]/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#c5a059]" /><span className="text-xs font-medium tracking-[0.5em] text-[#c5a059] uppercase">00. / The legacy</span></div>
                <h2 className="text-5xl md:text-7xl font-normal text-[#f4f1ea] leading-[1.1] mb-12" style={{ fontFamily: "'Cinzel', serif" }}>Time is <br /><span className="italic text-[#c5a059]">the ingredient.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-normal text-[#f4f1ea]" style={{ fontFamily: "'Cinzel', serif" }}>120+</span><span className="text-xs uppercase tracking-[0.25em] text-[#f4f1ea]/30 block mt-2">Tree age (years)</span></div>
                  <div><span className="text-4xl font-normal text-[#f4f1ea]" style={{ fontFamily: "'Cinzel', serif" }}>180</span><span className="text-xs uppercase tracking-[0.25em] text-[#f4f1ea]/30 block mt-2">Days aged</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="border-l border-[#c5a059]/20 pl-10">
                  <p className="text-[#f4f1ea]/60 text-lg font-light leading-[2] mb-8">We do not plant for ourselves — we harvest what others planted before us. The mother trees we source from are between one hundred and one hundred and eighty years old, their root systems extending deep into ancient volcanic deposits. These trees have weathered droughts, storms, and the passage of entire human generations, developing a resilience that is reflected in the density and complexity of their beans.</p>
                  <p className="text-[#f4f1ea]/60 text-lg font-light leading-[2] mb-8">A young tree produces flavour. An old tree produces meaning. The difference is in the tannin structure — heirloom beans develop long-chain polyphenols that unfold slowly on the palate, revealing layers of flavour over minutes rather than seconds. This is chocolate that rewards contemplation.</p>
                  <p className="text-[#f4f1ea]/60 text-lg font-light leading-[2] mb-12">Aeon exists to protect these ancient genetics. Every purchase funds the preservation of heritage groves — ensuring that the trees that survived a century will survive another. This is not commerce. It is conservation, expressed in chocolate.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#c5a059] uppercase hover:text-[#f4f1ea] transition-colors group"><span>View the vault</span><div className="w-8 h-[1px] bg-[#c5a059] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#c5a059]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-[#f4f1ea]/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Cinzel', serif" }}>&ldquo;A tree that has lived for a century has something to say. Our only obligation is to listen.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#c5a059]/60 uppercase">— Aeon heritage charter, 2024</span>
            <div className="w-12 h-[1px] bg-[#c5a059]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <AeonFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Catatumbo', country: 'Venezuela', elevation: '400m', variety: 'Heirloom Criollo', text: 'The Catatumbo basin is famous for its perpetual lightning storms, which deposit nitrogen directly into the soil. Cacao trees here grow in mineral-rich alluvial deposits, their roots extending into ancient river sediments. The beans produce a chocolate with a distinctive electric quality — a sharpness on the palate that is almost galvanic, layered over deep notes of aged rum and tanned leather.' },
                { region: 'Amazonas', country: 'Peru', elevation: '800m', variety: 'Wild Nacional', text: 'The Amazonas region harbours some of the oldest cacao genetics on earth. These trees predate the arrival of Europeans by centuries, their DNA untouched by modern breeding programmes. The flavour is primal and complex — wet forest floor, wild mushroom, raw honeycomb, and a tannic backbone that recalls very old Burgundy. We process with extreme restraint, allowing the genetics to speak for themselves.' },
                { region: 'Soconusco', country: 'Mexico', elevation: '350m', variety: 'Ancient Criollo', text: 'Archaeological evidence confirms continuous cacao cultivation in Soconusco for over three thousand eight hundred years. The trees we source from are direct descendants of the original Mesoamerican stock. The chocolate has a ceremonial quality — bitter, earthy, with undertones of chilli and copal incense that recall the original xocolatl prepared for Aztec nobility.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-normal text-[#f4f1ea]" style={{ fontFamily: "'Cinzel', serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#c5a059]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-[#f4f1ea]/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#c5a059]/20 transition-colors duration-700" />
                  <p className="text-[#a89080] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AeonProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#c5a059]/40 uppercase block mb-8">On patience</span>
            <p className="text-2xl md:text-4xl font-normal text-[#f4f1ea]/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Cinzel', serif" }}>We age our bars for one hundred and eighty days. Not because we must, but because the chocolate asks for it. At ninety days, it is good. At one hundred and eighty, it is complete.</p>
          </motion.div>
        </section>

        <AeonProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#c5a059] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#c5a059] uppercase block mb-8">Join the circle</span>
            <h2 className="font-normal leading-[1.1] text-[#f4f1ea] mb-8" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Secure your <br /><span className="italic text-[#c5a059]">legacy.</span></h2>
            <p className="text-[#a89080] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Each release is strictly limited by the yield of our heirloom groves. Circle members receive first allocation, provenance certificates for every bar, and a percentage of proceeds is reinvested into heritage tree conservation.</p>
            <button className="px-14 py-5 border border-[#c5a059] text-[#c5a059] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#c5a059] hover:text-[#1c1c1c] transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-[#c5a059]/20 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <AeonFooter />
    </div>
  );
}
