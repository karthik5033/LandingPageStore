'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import EthosNavbar from '@/components/ethos/Navbar';
import EthosFeatures from '@/components/ethos/Features';
import EthosProcess from '@/components/ethos/Process';
import EthosProducts from '@/components/ethos/Products';
import EthosFooter from '@/components/ethos/Footer';

export default function Template67() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#0f1115]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      `}</style>
      <EthosNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #1a1a1a)' }} />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao17-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8]/80 via-transparent to-[#fafaf8]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white premium-text-shadow selection:bg-white selection:text-black">
        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-white mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase block mb-4">Radical transparency · 2024</span>
              <h1 className="leading-[0.9] font-light text-white premium-text-shadow" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Ethos</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4">
              <p className="text-white/50 text-lg font-light leading-[1.9] mb-4">Every cost visible. Every decision documented. Every step auditable. This is chocolate made in the open — with nothing to hide and no reason to hide it.</p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }}>
                <div className="flex items-center gap-6 mb-8"><div className="w-16 h-[1px] bg-white" /><span className="text-xs font-medium tracking-[0.5em] text-white/60 uppercase">00. / The commitment</span></div>
                <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1] mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Nothing <br /><span className="italic text-white/40">hidden.</span></h2>
                <div className="flex gap-16 pt-10 border-t border-white/10">
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>$4.20</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Farmer per kg</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>100%</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Cost visible</span></div>
                  <div><span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>0</span><span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Hidden margins</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center">
                <div className="border-l border-white/10 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">The chocolate industry is built on opacity. Commodity trading, pooled origins, composite blends — all designed to obscure the true cost of production and the true conditions under which cacao is grown. The word "ethical" has become a marketing tool rather than a verifiable standard.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">Ethos exists to dismantle this opacity. Every bar we produce comes with a published cost breakdown — from the price paid to the farmer per kilogram, through shipping, roasting, moulding, packaging, and our own margin. Nothing is hidden. Nothing is averaged. Every number is specific, dated, and verifiable.</p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">We pay our farmers four dollars and twenty cents per kilogram of wet cacao — more than double the Fairtrade minimum and approximately four times the commodity price. We do this not because it is required, but because it is the actual cost of growing excellent cacao sustainably. Any price lower than this is being subsidised by someone, somewhere, in ways that the label does not disclose.</p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-white premium-text-shadow uppercase hover:text-white/60 transition-colors group"><span>View the ledger</span><div className="w-8 h-[1px] bg-white group-hover:w-14 transition-all duration-500" /></a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-white/20 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-light text-white/70 leading-[1.4] italic mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>&ldquo;If a company will not tell you what it pays its farmers, it is because the number would embarrass it.&rdquo;</blockquote>
            <span className="text-xs tracking-[0.4em] text-white/40 uppercase">— Ethos founding document, 2024</span>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-10" />
          </motion.div>
        </section>

        <EthosFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Tumaco', country: 'Colombia', elevation: '50m', variety: 'Fino de Aroma', text: 'We work directly with the Consejo Comunitario Alto Mira, a cooperative of sixty-three families on the Pacific coast of Nariño. The cacao is grown in agroforestry plots alongside plantain, coconut, and timber species. Our price of four dollars and twenty cents per kilogram represents a forty percent premium over the next highest buyer in the region. We publish our purchase contracts annually.' },
                { region: 'Kilombero', country: 'Tanzania', elevation: '350m', variety: 'Amelonado', text: 'The Kilombero Valley is one of the few African origins with genuine fine-flavour potential. We partner with a women-led cooperative of forty-two farmers who have transitioned from commodity to speciality production. The premium we pay funds a community health clinic and a school lunch programme. Every bar includes a QR code linking to the cooperative\'s most recent impact report.' },
                { region: 'Davao', country: 'Philippines', elevation: '200m', variety: 'Trinitario', text: 'Philippine cacao is rarely featured in premium chocolate, but the volcanic soils of Mindanao produce beans with a remarkable tropical fruit intensity. We work with a cooperative of Indigenous Lumad farmers who maintain traditional polyculture practices. Our pricing model guarantees a minimum of three times the commodity price, with an additional quality bonus tied to cupping scores.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group">
                  <div className="flex items-baseline gap-3 mb-2"><h3 className="text-2xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.region}</h3><span className="text-xs tracking-[0.2em] text-white/30 uppercase">{t.country}</span></div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase"><span>{t.elevation}</span><span>·</span><span>{t.variety}</span></div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-white/20 transition-colors duration-700" />
                  <p className="text-white/50 text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <EthosProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-white/30 uppercase block mb-8">On accountability</span>
            <p className="text-2xl md:text-4xl font-light text-white/60 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>We publish our full financial model annually — every cost, every margin, every payment. Transparency is not a feature of our business. It is the business.</p>
          </motion.div>
        </section>

        <EthosProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-white mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-white/60 uppercase block mb-8">Join the open ledger</span>
            <h2 className="font-light leading-[1.1] text-white premium-text-shadow mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>Demand the <span className="italic text-white/40">truth.</span></h2>
            <p className="text-white/50 text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">Ledger members receive full cost breakdowns for every release, farmer payment receipts, and quarterly impact reports. Your subscription directly funds our farmer premium programme.</p>
            <button className="px-14 py-5 bg-white text-black text-xs font-medium uppercase tracking-[0.3em] hover:bg-white/80 transition-all duration-500">Join the waitlist</button>
            <div className="w-12 h-[1px] bg-white/20 mx-auto mt-14" />
          </motion.div>
        </section>
      </main>
      <EthosFooter />
    </div>
  );
}
