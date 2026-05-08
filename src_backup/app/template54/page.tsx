'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import AureliaNavbar from '@/components/aurelia/Navbar';
import AureliaFeatures from '@/components/aurelia/Features';
import AureliaProcess from '@/components/aurelia/Process';
import AureliaProducts from '@/components/aurelia/Products';
import AureliaFooter from '@/components/aurelia/Footer';

export default function Template54() {
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
      className="relative font-sans bg-[#0a0a0a]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <AureliaNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #c79a52)'
        }}
      />

      {/* FULLSCREEN CANVAS — video stays visible throughout */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao7-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle dark overlay for text readability without hiding video */}
        <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-[1px] z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#c79a52] selection:text-[#0a0a0a]">
        
        {/* HERO */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-8">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.6em] text-[#c79a52] uppercase block mb-10">
                La Grande Cuvée
              </span>
              <h1
                className="leading-[1.1] font-normal text-white mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 12vw, 10rem)',
                }}
              >
                AURELIA
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 140 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="h-[1px] bg-[#c79a52]/50 mx-auto mb-10"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
              >
                The pursuit of absolute perfection in chocolate. <br />
                Crafted slowly. Enjoyed endlessly.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* HERITAGE */}
        <section id="heritage" className="min-h-screen relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-[1px] bg-[#c79a52]" />
                <span className="text-xs font-semibold tracking-[0.4em] text-[#c79a52] uppercase">
                  Chapter I: The Heritage
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
                <div className="md:col-span-7">
                  <h2
                    className="text-5xl md:text-7xl font-normal text-white leading-[1.2] mb-12"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    A century of <br />
                    <span className="italic text-[#c79a52]">obsession.</span>
                  </h2>
                  <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08]">
                    <div>
                      <span className="text-3xl md:text-4xl font-normal text-white" style={{ fontFamily: "'Playfair Display', serif" }}>1924</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mt-3">Established</span>
                    </div>
                    <div>
                      <span className="text-3xl md:text-4xl font-normal text-white" style={{ fontFamily: "'Playfair Display', serif" }}>72</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mt-3">Hours Conched</span>
                    </div>
                    <div>
                      <span className="text-3xl md:text-4xl font-normal text-white" style={{ fontFamily: "'Playfair Display', serif" }}>12</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 block mt-3">Grand Crus</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="border-l border-[#c79a52]/30 pl-8 md:pl-12">
                    <p className="text-white/70 text-base md:text-lg font-light leading-[2.2] mb-8">
                      AURELIA was founded not as a business, but as a revolt against industrial chocolate. For a hundred years, our maison has preserved the forgotten techniques of the 19th-century chocolatiers, refusing to compromise for the sake of scale.
                    </p>
                    <p className="text-white/70 text-base md:text-lg font-light leading-[2.2] mb-12">
                      We roast in antique ball roasters. We grind with stone. We conche for a minimum of 72 hours. The result is a chocolate that unfolds on the palate like a symphony, revealing layers of hidden fruit, spice, and earth.
                    </p>
                    <a href="#collection" className="inline-flex items-center gap-6 text-xs font-semibold tracking-[0.3em] text-[#c79a52] uppercase hover:text-white transition-colors group">
                      <span>View Collection</span>
                      <div className="w-12 h-[1px] bg-[#c79a52] group-hover:w-20 transition-all duration-500" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="py-40 px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-center"
          >
            <blockquote
              className="text-3xl md:text-5xl font-light text-white/90 leading-[1.6] italic mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Time is the most expensive ingredient in our recipe. It is also the only one that cannot be faked.&rdquo;
            </blockquote>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#c79a52]/70 uppercase font-semibold">
              — The Master Chocolatier
            </span>
          </motion.div>
        </section>

        <AureliaFeatures />
        <AureliaProcess />
        
        {/* SENSORY BREAK */}
        <section className="py-40 px-8">
          <div className="max-w-6xl mx-auto border-y border-[#c79a52]/20 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs tracking-[0.5em] text-white/50 uppercase block mb-10 font-semibold">The Degustation</span>
              <p
                className="text-2xl md:text-4xl font-light text-white/80 leading-[1.6] max-w-4xl mx-auto"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let a square rest on your tongue. Do not chew. As it melts, it releases its aromatics in three distinct acts: the bright snap of acidity, the warm depth of roasted cocoa, and a long, resonant finish.
              </p>
            </motion.div>
          </div>
        </section>

        <AureliaProducts />

      </main>

      {/* The Footer acts as the CTA section here, keeping video visible */}
      <AureliaFooter />
    </div>
  );
}
