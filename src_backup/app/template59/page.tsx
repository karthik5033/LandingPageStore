'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import SomaNavbar from '@/components/soma/Navbar';
import SomaFeatures from '@/components/soma/Features';
import SomaProcess from '@/components/soma/Process';
import SomaProducts from '@/components/soma/Products';
import SomaFooter from '@/components/soma/Footer';

export default function Template59() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#1a0f0a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap');
        body { font-family: 'Lato', sans-serif; }
      `}</style>
      <SomaNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #d2691e)' }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao8-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-[#f5e6d3] selection:bg-[#d2691e] selection:text-white">

        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#d2691e] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#d2691e] uppercase block mb-4">The art of translation · 2024</span>
              <h1 className="leading-[0.9] font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Soma</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-[#c4956a] text-lg font-light leading-[1.9] mb-4">
                Cacao as a living translation — from pod to palate, from soil to soul. Each bar captures the sensory memory of a specific place, a specific season, a specific moment in the life of a tree.
              </p>
              <span className="text-xs tracking-[0.4em] text-[#f5e6d3]/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#d2691e]" /><span className="text-xs font-medium tracking-[0.5em] text-[#d2691e] uppercase">00. / The philosophy</span></div>
                <h2 className="text-5xl md:text-7xl font-normal text-[#f5e6d3] leading-[1.1] mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Flavour is <br /><span className="italic text-[#d2691e]">memory.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif" }}>7</span><span className="text-xs uppercase tracking-[0.25em] text-[#f5e6d3]/30 block mt-2">Day ferment</span></div>
                  <div><span className="text-4xl font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif" }}>96h</span><span className="text-xs uppercase tracking-[0.25em] text-[#f5e6d3]/30 block mt-2">Conche time</span></div>
                  <div><span className="text-4xl font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif" }}>3</span><span className="text-xs uppercase tracking-[0.25em] text-[#f5e6d3]/30 block mt-2">Ingredients</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="border-l border-[#d2691e]/20 pl-10">
                  <p className="text-[#f5e6d3]/60 text-lg font-light leading-[2] mb-8">The word "soma" is ancient — it appears in the Vedas as a ritual drink of the gods, in Greek as the body itself, and in modern usage as the physical vessel of consciousness. We chose it because chocolate, at its best, is all of these things: a sacred preparation, a bodily experience, and a vehicle for awareness.</p>
                  <p className="text-[#f5e6d3]/60 text-lg font-light leading-[2] mb-8">Our approach is one of translation. We believe that a cacao bean is a compressed narrative — a story encoded in molecules. It contains the mineral signature of the soil, the microbial culture of the fermentation, the thermal history of the roast, and the temporal record of the conche. Our job as chocolate makers is to translate this molecular narrative into a sensory experience that is faithful to its origin.</p>
                  <p className="text-[#f5e6d3]/60 text-lg font-light leading-[2] mb-12">We do not improve the bean. We do not correct it. We do not blend away its idiosyncrasies. We listen to what it has to say, and we find the gentlest, most honest way to help it speak. Every bar is a letter from a specific place — and we are merely the translators.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#d2691e] uppercase hover:text-[#f5e6d3] transition-colors group"><span>Read the translations</span><div className="w-8 h-[1px] bg-[#d2691e] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#d2691e]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-[#f5e6d3]/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>&ldquo;A chocolate maker is not a creator. A chocolate maker is a translator — and the best translations are the ones where the translator is invisible.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#d2691e]/60 uppercase">— Soma translation principles, 2024</span>
            <div className="w-12 h-[1px] bg-[#d2691e]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <SomaFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Chulucanas', country: 'Peru', elevation: '500m', variety: 'Nacional', text: 'The Piura River valley is one of the few places in the world where Nacional cacao still grows in its pure form. The trees produce pale, almost albino beans with an extraordinary concentration of fruity esters. Our Chulucanas translation captures this in full: bright tropical fruit, passion flower, and a finish like sun-warmed terracotta. We ferment for seven days in mahogany boxes to preserve the delicate floral top notes.' },
                { region: 'Belize River', country: 'Belize', elevation: '150m', variety: 'Heirloom Criollo', text: 'The Maya were the first people to systematically cultivate cacao, and the Belize River valley still harbours trees descended from their original plantations. The beans are small and incredibly aromatic — dried apricot, raw almond, and a warm spice that recalls the original Mayan chocolate drink. We roast at the lowest temperature in our range to protect these ancient flavour compounds.' },
                { region: 'Tanga Coast', country: 'Tanzania', elevation: '200m', variety: 'Amelonado', text: 'East African cacao is a revelation — bright, citric, and completely distinct from anything produced in the Americas. The Indian Ocean climate creates a unique terroir: monsoon humidity, coral-derived soil minerals, and intense equatorial sun. Our Tanga translation opens with a burst of tangerine and passionfruit before settling into a clean, mineral finish like wet limestone after rain.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-normal text-[#f5e6d3]" style={{ fontFamily: "'Playfair Display', serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#d2691e]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-[#f5e6d3]/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#d2691e]/20 transition-colors duration-700" />
                  <p className="text-[#c4956a] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <SomaProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#d2691e]/40 uppercase block mb-8">On fidelity</span>
            <p className="text-2xl md:text-4xl font-normal text-[#f5e6d3]/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Playfair Display', serif" }}>We conche for ninety-six hours not because it makes the chocolate smoother — though it does — but because it gives the volatile flavour compounds time to rearrange themselves into the pattern that most faithfully represents the bean's origin.</p>
          </motion.div>
        </section>

        <SomaProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#d2691e] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#d2691e] uppercase block mb-8">Join the circle</span>
            <h2 className="font-normal leading-[1.1] text-[#f5e6d3] mb-8" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Taste the <br /><span className="italic text-[#d2691e]">translation.</span></h2>
            <p className="text-[#c4956a] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Each seasonal release is limited by the harvest of our partner groves. Circle members receive first access, tasting notes written as narrative prose, and free worldwide shipping in temperature-controlled packaging.</p>
            <button className="px-14 py-5 border border-[#d2691e] text-[#d2691e] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#d2691e] hover:text-[#f5e6d3] transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-[#d2691e]/20 mx-auto mt-14" />
          </motion.div>
        </section>

      </main>
      <SomaFooter />
    </div>
  );
}
