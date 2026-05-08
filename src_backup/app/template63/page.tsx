'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import VortexNavbar from '@/components/vortex/Navbar';
import VortexFeatures from '@/components/vortex/Features';
import VortexProcess from '@/components/vortex/Process';
import VortexProducts from '@/components/vortex/Products';
import VortexFooter from '@/components/vortex/Footer';

export default function Template63() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#0d0d0d]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>
      <VortexNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #ccff00)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao13-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-transparent z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#ccff00] selection:text-black">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#ccff00] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#ccff00] uppercase block mb-4">High-velocity cacao · 2024</span>
              <h1 className="leading-[0.9] font-normal text-white" style={{ fontFamily: "'Krona One', sans-serif", fontSize: 'clamp(4.5rem, 12vw, 11rem)' }}>Vortex</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4 bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl">
              <p className="text-white/50 text-lg font-light leading-[1.9] mb-4">Kinetic energy applied to cacao extraction. High-speed conching, hyper-aerated refinement, and a flavour profile that hits fast and lingers without friction.</p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }} className="bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-[#ccff00]" /><span className="text-xs font-medium tracking-[0.5em] text-[#ccff00] uppercase">00. / The declaration</span></div>
                <h2 className="text-5xl md:text-7xl font-normal text-white leading-[1.1] mb-12" style={{ fontFamily: "'Krona One', sans-serif" }}>Kinetic <span className="italic text-[#ccff00]">extraction.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div><span className="text-4xl font-light text-white">4800</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">rpm conche</span></div>
                  <div><span className="text-4xl font-light text-white">72h</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Aeration</span></div>
                  <div><span className="text-4xl font-light text-white">0</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Shortcuts</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="border-l border-[#ccff00]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">The chocolate industry treats speed as the enemy of quality. We disagree. Speed is a tool — and like any tool, what matters is how you use it. A slow conche is not inherently better than a fast one. What matters is the energy transfer rate, the particle distribution curve, and the volumetric throughput of volatile acids.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Vortex runs its conche at four thousand eight hundred revolutions per minute — ten times faster than a traditional longitudinal conche. But here is the key: we pair that speed with aggressive aeration, pumping filtered nitrogen through the mass at a rate of twelve litres per minute. The nitrogen strips acetic acid from the chocolate surface faster than any slow-speed process can achieve.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">The result is a chocolate that tastes as smooth as a five-day conche, but with a brightness and energy that slow processing inevitably dulls. Our chocolate does not just melt — it arrives. Fast, clean, and with an intensity that fades gracefully rather than lingering into bitterness.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#ccff00] uppercase hover:text-white transition-colors group"><span>View the frequency range</span><div className="w-8 h-[1px] bg-[#ccff00] group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#ccff00]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-normal text-white/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Krona One', sans-serif" }}>&ldquo;Speed is not the enemy of quality. Laziness is.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-[#ccff00]/60 uppercase">— Vortex kinetic principles, 2024</span>
            <div className="w-12 h-[1px] bg-[#ccff00]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <VortexFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Esmeraldas', country: 'Ecuador', elevation: '200m', variety: 'Nacional Arriba', text: 'The coastal province of Esmeraldas produces cacao with an explosive tropical profile — mango, passionfruit, and a bright acidity that recalls Sauvignon Blanc. Our high-speed conching is particularly effective with this origin, preserving the volatile tropical esters that slow processing would allow to evaporate. The result is a bar that hits you like walking into a fruit market at dawn.' },
                { region: 'Cuyagua', country: 'Venezuela', elevation: '100m', variety: 'Criollo', text: 'Cuyagua is a tiny coastal village producing some of the most complex Criollo cacao in the world. The beans are large and pale with an unusually high butter content. Our aeration protocol works beautifully with this fat-rich origin — the nitrogen penetrates the lipid matrix, carrying volatile acids out while leaving the desirable flavour compounds intact. The finish is clean, long, and remarkably energetic.' },
                { region: 'Ambanja', country: 'Madagascar', elevation: '150m', variety: 'Trinitario', text: 'Madagascar cacao is defined by its citrus acidity — a sharp, almost electric brightness that sets it apart from all South American origins. We exploit this natural energy by keeping our roast exceptionally short: eight minutes at two hundred and ten degrees. The result is a bar that crackles on the palate, with yuzu zest and pink pepper layered over a clean, dark chocolate body.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-normal text-white" style={{ fontFamily: "'Krona One', sans-serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-[#ccff00]/50 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#ccff00]/20 transition-colors duration-700" />
                  <p className="text-white/50 text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <VortexProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#ccff00]/40 uppercase block mb-8">On energy</span>
            <p className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto">Every flavour compound in cacao is a form of stored energy. Our job is not to add energy, but to release what is already there — efficiently, completely, and without waste.</p>
          </motion.div>
        </section>

        <VortexProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#ccff00] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#ccff00] uppercase block mb-8">Enter the frequency</span>
            <h2 className="font-normal leading-[1.1] text-white mb-8" style={{ fontFamily: "'Krona One', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Feel the <span className="italic text-[#ccff00]">kinetic.</span></h2>
            <p className="text-white/50 text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Our allocations drop quarterly. Reserve members get priority access, full aeration reports for every batch, and free worldwide express shipping — because speed matters to us at every stage.</p>
            <button className="px-14 py-5 border border-[#ccff00] text-[#ccff00] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#ccff00] hover:text-[#0d0d0d] transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-[#ccff00]/20 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <VortexFooter />
    </div>
  );
}
