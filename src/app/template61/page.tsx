'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import LuminaNavbar from '@/components/lumina/Navbar';
import LuminaFeatures from '@/components/lumina/Features';
import LuminaProcess from '@/components/lumina/Process';
import LuminaProducts from '@/components/lumina/Products';
import LuminaFooter from '@/components/lumina/Footer';

export default function Template61() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="relative font-sans bg-[#1a0b2e]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;600&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
      
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow-light {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      `}</style>

      <LuminaNavbar />
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]" style={{ scaleX, background: 'linear-gradient(90deg, transparent, #ffd700)' }} />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence folderPath="/cacao11-frames" frameCount={156} fileNamePrefix="ezgif-frame-" fileExtension="png" padLength={3} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa]/80 via-transparent to-[#fafafa]/40 z-10" />
      </div>

      <main className="relative z-10 w-full text-white premium-text-shadow selection:bg-[#ffd700] selection:text-black">

        <section className="h-screen relative flex items-end pb-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <motion.div initial={{ width: 0 }} animate={{ width: 80 }} transition={{ duration: 0.8, delay: 0.5 }} className="h-[1px] bg-[#ffd700] mb-6" />
              <span className="text-xs font-medium tracking-[0.5em] text-[#ffd700] uppercase block mb-4">Golden hour release · 2024</span>
              <h1 className="leading-[0.9] font-light text-white premium-text-shadow" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(5rem, 14vw, 13rem)' }}>Lumina</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="md:text-right md:max-w-sm pb-4">
              <p className="text-[#c4a882] text-lg font-light leading-[1.9] mb-4">
                A celebration of light and shadow. Solar-roasted cacao from the cloud forests of the Andes, capturing the brilliant floral complexities of high-altitude harvests.
              </p>
              <span className="text-xs tracking-[0.4em] text-white/30 uppercase">Scroll to explore</span>
            </motion.div>
          </div>
        </section>

        <section id="manifesto" className="min-h-[140vh] relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2 }}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-[1px] bg-[#ffd700]" />
                  <span className="text-xs font-medium tracking-[0.5em] text-[#ffd700] uppercase">00. / The vision</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-light text-white premium-text-shadow leading-[1.1] mb-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Cacao is a <br /><span className="italic text-[#ffd700]">solar battery.</span>
                </h2>
                <div className="flex gap-16 pt-10 border-t border-white/[0.06]">
                  <div>
                    <span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>2,400m</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Elevation</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>90</span>
                    <span className="text-xs uppercase tracking-[0.25em] text-white/30 block mt-2">Days aged</span>
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1.2, delay: 0.2 }} className="flex flex-col justify-center">
                <div className="border-l border-[#ffd700]/20 pl-10">
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    We believe that cacao is a solar battery — storing the energy of the equatorial sun within its molecular structure. The polyphenols, the flavanols, the volatile esters that give fine chocolate its complexity — all of these are photosynthetic products, built molecule by molecule from sunlight and mineral-rich volcanic soil.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-8">
                    Our mission at Lumina is to release that stored energy with minimal interference. We do not roast aggressively. We do not over-conche. We do not add emulsifiers or flavourings that would mask the sun's fingerprint. Every bar is a portrait of a specific altitude, a specific latitude, a specific season of light.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-[2] mb-12">
                    The name itself is a declaration of intent — lumina, from the Latin for light. When you taste our chocolate, you are tasting the accumulated warmth of a thousand equatorial days, concentrated into a single, radiant moment on your palate.
                  </p>
                  <a href="#collection" className="inline-flex items-center gap-4 text-xs font-medium tracking-[0.3em] text-[#ffd700] uppercase hover:text-white premium-text-shadow transition-colors group">
                    <span>Explore the vintages</span>
                    <div className="w-8 h-[1px] bg-[#ffd700] group-hover:w-14 transition-all duration-500" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 md:px-16 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-4xl text-center">
            <div className="w-12 h-[1px] bg-[#ffd700]/40 mx-auto mb-10" />
            <blockquote className="text-3xl md:text-5xl font-light text-white/80 leading-[1.4] italic mb-10" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              &ldquo;The finest chocolate does not announce itself. It arrives quietly, unfolds slowly, and leaves you thinking about it long after it has dissolved.&rdquo;
            </blockquote>
            <span className="text-xs tracking-[0.4em] text-[#ffd700]/60 uppercase">— Lumina founding charter, 2024</span>
            <div className="w-12 h-[1px] bg-[#ffd700]/40 mx-auto mt-10" />
          </motion.div>
        </section>

        <LuminaFeatures />

        <section className="py-40 px-8 md:px-16">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { region: 'Arhuaco Highlands', country: 'Colombia', elevation: '2,400m', variety: 'Criollo Porcelana', text: 'The Sierra Nevada de Santa Marta is the world\'s highest coastal mountain. The Arhuaco people have cultivated cacao here for millennia, in biodynamic polyculture alongside avocado, citrus, and shade trees. The beans are small and pale, almost white, with an extraordinary floral intensity — jasmine and orange blossom layered over a body of raw honey and toasted almond.' },
                { region: 'San Martín', country: 'Peru', elevation: '1,600m', variety: 'Nacional', text: 'The eastern slopes of the Andes catch moisture from the Amazon basin, creating a perpetual mist that cloaks the cacao trees in humidity. This slows the ripening process by weeks, allowing the beans to develop a concentration of sugars and acids that lowland cacao never achieves. Our San Martín bars have a brightness that recalls Riesling — crisp acidity balanced by stone fruit and beeswax.' },
                { region: 'Alto Beni', country: 'Bolivia', elevation: '1,200m', variety: 'Wild Cacao', text: 'The Yungas cloud forest harbours some of the last truly wild cacao on earth. These trees were never planted — they colonised the forest understory naturally, pollinated by native midges and dispersed by howler monkeys. The beans are irregular, each one slightly different, and the flavour is complex beyond measure: raw honey, wet tobacco, and a finish like sunlight on warm stone.' },
              ].map((t, i) => (
                <motion.div key={t.region} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9 }} className="group">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-light text-white premium-text-shadow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{t.region}</h3>
                    <span className="text-xs tracking-[0.2em] text-[#ffd700]/50 uppercase">{t.country}</span>
                  </div>
                  <div className="flex gap-6 mb-6 text-xs tracking-[0.2em] text-white/20 uppercase">
                    <span>{t.elevation}</span><span>·</span><span>{t.variety}</span>
                  </div>
                  <div className="w-full h-[1px] bg-white/[0.06] mb-6 group-hover:bg-[#ffd700]/20 transition-colors duration-700" />
                  <p className="text-[#c4a882] text-base font-light leading-[1.9]">{t.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <LuminaProcess />

        <section className="py-32 px-8 md:px-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="max-w-5xl mx-auto border-y border-white/[0.06] py-20 text-center">
            <span className="text-xs tracking-[0.5em] text-[#ffd700]/40 uppercase block mb-8">On patience</span>
            <p className="text-2xl md:text-4xl font-light text-white/70 leading-[1.5] italic max-w-3xl mx-auto" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              We age our bars for ninety days in cedar-lined vaults at a constant eighteen degrees. This is not a marketing gimmick — it is a chemical necessity. During resting, the cocoa butter crystals slowly migrate and stabilise, while the volatile aromatics settle into a harmonious equilibrium that freshly tempered chocolate simply cannot achieve.
            </p>
          </motion.div>
        </section>

        <LuminaProducts />

        <section id="reserve" className="min-h-screen flex items-center justify-center px-8 py-40">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="max-w-3xl text-center">
            <div className="w-12 h-[1px] bg-[#ffd700] mx-auto mb-10" />
            <span className="text-xs tracking-[0.5em] text-[#ffd700] uppercase block mb-8">Enter the radiance</span>
            <h2 className="font-light leading-[1.1] text-white premium-text-shadow mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Taste the <br /><span className="italic text-[#ffd700]">golden hour.</span>
            </h2>
            <p className="text-[#c4a882] text-lg font-light leading-[1.9] max-w-xl mx-auto mb-14">
              Our allocations are released with the solar cycles — four times a year, aligned to the equinoxes and solstices. Reserve members receive first access, tasting notes from our maître chocolatier, and worldwide shipping at no extra cost.
            </p>
            <button className="px-14 py-5 border border-[#ffd700] text-[#ffd700] text-xs font-medium uppercase tracking-[0.3em] hover:bg-[#ffd700] hover:text-[#1a0b2e] transition-all duration-500">
              Join the waitlist
            </button>
            <div className="w-12 h-[1px] bg-[#ffd700]/20 mx-auto mt-14" />
          </motion.div>
        </section>

      </main>
      <LuminaFooter />
    </div>
  );
}
