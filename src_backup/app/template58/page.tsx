'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ValorNavbar from '@/components/valor/Navbar';
import ValorFeatures from '@/components/valor/Features';
import ValorProcess from '@/components/valor/Process';
import ValorProducts from '@/components/valor/Products';
import ValorFooter from '@/components/valor/Footer';

export default function Template58() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#020617]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;700&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>
      <ValorNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #94a3b8)' }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao5-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#94a3b8] selection:text-black">

        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#94a3b8] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#94a3b8] uppercase block mb-4">Legacy of honour · Est. 2024</span>
              <h1 className="leading-[0.9] font-normal text-white" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Valor</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-[#94a3b8] text-lg font-light leading-[1.9] mb-4">
                Chocolate forged with military precision. Single-origin cacao from the most demanding terroirs, processed with absolute discipline and zero compromise. This is not indulgence — it is conviction.
              </p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#94a3b8]" /><span className="text-xs font-medium tracking-[0.5em] text-[#94a3b8] uppercase">00. / The code</span></div>
                <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1.1] mb-12" style={{ fontFamily: "'Cinzel', serif" }}>Discipline <br /><span className="italic text-[#94a3b8]">over decoration.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Cinzel', serif" }}>72h</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Conche time</span></div>
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Cinzel', serif" }}>3</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Ingredients</span></div>
                  <div><span className="text-4xl font-normal text-white" style={{ fontFamily: "'Cinzel', serif" }}>0</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Excuses</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="border-l border-[#94a3b8]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">The chocolate industry is full of stories. Origin stories, founder stories, stories about cocoa farmers in exotic locations. Most of them are designed to distract you from the reality that the chocolate itself is unremarkable — a commodity product dressed in artisanal packaging.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Valor has no story. We have a standard. Our standard is simple: every bar must be made from the finest available cacao, processed with maximum care, and sold without pretence. We do not romanticise our supply chain. We do not mythologise our process. We simply execute, with the same discipline and attention to detail that defines any serious craft.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">The name Valor means courage — specifically, the courage to let the chocolate speak for itself, without the crutch of narrative or the safety net of marketing. If the bar is not exceptional on its own merits, no amount of storytelling will save it.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#94a3b8] uppercase hover:text-white transition-colors group"><span>Inspect the armoury</span><div className="w-8 h-[1px] bg-[#94a3b8] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#94a3b8]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-white/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Cinzel', serif" }}>&ldquo;We do not make chocolate that tells a story. We make chocolate that ends the conversation.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#94a3b8]/60 uppercase">— Valor code of standards, 2024</span>
            <div className="w-12 h-[1px] bg-[#94a3b8]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <ValorFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Gran Couva', country: 'Trinidad', elevation: '200m', variety: 'Trinitario', text: 'Trinidad is the birthplace of the Trinitario variety — a cross between the delicate Criollo and the hardy Forastero that occurred naturally after a hurricane in 1727. The Gran Couva estate produces beans with a distinctive spiced character: clove, cinnamon, and a warm nuttiness that recalls toasted breadcrumbs. We roast this origin with precise restraint, at one hundred and thirty-five degrees for exactly seventy minutes.' },
                { region: 'Beni Lowlands', country: 'Bolivia', elevation: '250m', variety: 'Beniano', text: 'The Beniano is a wild cacao variety found only in the lowland forests of northeastern Bolivia. The trees grow along seasonal flood plains, their root systems adapted to months of submersion. The beans produce chocolate with a rare savouriness — dried meat, leather, and roasted barley — that is unlike any cultivated variety. We process with extended fermentation to develop the complex amino acid profile.' },
                { region: 'Berau', country: 'Indonesia', elevation: '100m', variety: 'Forestero', text: 'Borneo cacao is rarely featured in craft chocolate, but the volcanic soils and equatorial rainfall of Berau produce Forestero beans with unexpected complexity. The typically bitter Forestero develops a smoky sweetness in this terroir — burnt sugar, black sesame, and a long finish of charred wood. We roast aggressively with this origin, pushing the Maillard reactions into territory that would destroy a lesser bean.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Cinzel', serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#94a3b8]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#94a3b8]/20 transition-colors duration-700" />
                  <p className="text-[#94a3b8] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ValorProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#94a3b8]/40 uppercase block mb-8">On rigour</span>
            <p className="text-2xl md:text-4xl font-normal text-white/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Cinzel', serif" }}>Any batch that does not meet the sensory profile is re-processed or discarded. We release only what we would serve at our own table — and our table has exacting standards.</p>
          </motion.div>
        </section>

        <ValorProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#94a3b8] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#94a3b8] uppercase block mb-8">Join the ranks</span>
            <h2 className="font-normal leading-[1.1] text-white mb-8" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Earn the <br /><span className="italic text-[#94a3b8]">standard.</span></h2>
            <p className="text-[#94a3b8] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Reserve members receive priority allocation for every seasonal release, along with detailed roasting and conching reports. Membership is by application only — because some standards are worth protecting.</p>
            <button className="px-14 py-5 border border-[#94a3b8] text-[#94a3b8] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#94a3b8] hover:text-[#020617] transition-all duration-500">Apply now</button>
            <div className="w-12 h-[1px] bg-[#94a3b8]/20 mx-auto mt-14" />
          </motion.div>
        </section>

      </main>
      <ValorFooter />
    </div>
  );
}
