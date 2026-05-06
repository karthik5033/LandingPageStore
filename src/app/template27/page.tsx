'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import FractureNavbar from '@/components/fracture/Navbar';
import FractureFeatures from '@/components/fracture/Features';
import FractureProducts from '@/components/fracture/Products';
import FractureProcess from '@/components/fracture/Process';
import FractureFooter from '@/components/fracture/Footer';

export default function Template27() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative font-sans bg-[#080402] overflow-x-hidden"
    >
      <FractureNavbar />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#c98a53'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/fracture-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Subtle overlays to integrate video */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080402]/90 via-transparent to-[#080402]/50 z-10" />
      </div>

      <main className="relative z-10 w-full text-[#ffffff] selection:bg-[#c98a53] selection:text-[#080402]">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-[100dvh] relative flex items-center justify-center text-center px-8 md:px-16">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl mx-auto relative z-20 mt-12"
            >
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="block text-[10px] tracking-[0.5em] font-light uppercase mb-8 text-[#c98a53]"
              >
                Coffee Deconstructed
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="leading-[0.95] mb-8 font-light text-[#ffffff] tracking-tighter"
                style={{
                  fontSize: 'clamp(4rem, 11vw, 9rem)',
                }}
              >
                The Absolute <br/>
                <span className="font-bold text-[#c98a53]">Break.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="text-xs md:text-sm font-light tracking-[0.2em] text-[#ffffff]/60 max-w-lg mx-auto leading-relaxed uppercase"
              >
                Witness the raw, violent beauty of flavor extraction at the molecular level.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-bold tracking-[0.4em] text-[#c98a53] uppercase mb-6 block">
                  00. / The Deconstruction
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Coffee, <br />
                  <span className="italic text-[#c98a53]">reassembled.</span>
                </h2>
                <div className="border-l border-[#c98a53]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    FRACTURE takes the traditional coffee experience and breaks it apart. We separate the brewing process into distinct phases: a cold-bloom pre-infusion, a high-pressure mid-extraction, and a gravity-fed finishing drip. Then we recombine them in precise ratios to create a cup with three distinct flavour layers.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    The top note is bright and citric. The middle is rich and chocolatey. The base is deep, smoky, and long. Each sip reveals a different chapter. This is coffee reimagined from first principles.
                  </p>
                </div>

                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>3</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Phase Brew</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>9 bar</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Pressure</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Layer</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Architecture</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        <FractureProcess />
        <FractureFeatures />
        <FractureProducts />

        {/* CTA SECTION */}
        <section className="h-[80vh] flex flex-col items-center justify-center px-8 text-center bg-transparent border-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] font-light text-[#c98a53] uppercase mb-6 block">
              Initiate the Break
            </span>
            <h2
              className="text-[#ffffff] mb-12 leading-tight font-light tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
              }}
            >
              Taste the <span className="font-semibold text-[#c98a53]">Fragments.</span>
            </h2>
            
            <button className="px-14 py-5 border border-[#c98a53] text-[#ffffff] text-[10px] font-semibold tracking-[0.3em] uppercase hover:bg-[#c98a53] hover:text-[#080402] transition-all duration-500 relative overflow-hidden group">
              <span className="relative z-10">Access the Lab</span>
              <div className="absolute inset-0 bg-[#c98a53] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
            </button>
          </motion.div>
        </section>

      </main>

      <FractureFooter />
    </div>
  );
}
