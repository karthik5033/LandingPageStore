'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import EclipseNavbar from '@/components/eclipse/Navbar';
import EclipseFeatures from '@/components/eclipse/Features';
import EclipseProcess from '@/components/eclipse/Process';
import EclipseProducts from '@/components/eclipse/Products';
import EclipseFooter from '@/components/eclipse/Footer';

export default function Template55() {
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
      className="relative font-sans bg-[#030303]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <EclipseNavbar />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, transparent, #8f1722)'
        }}
      />

      {/* FULLSCREEN CANVAS — Video remains completely visible */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/cacao6-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Deep translucent overlay to ensure text contrast while keeping video visible */}
        <div className="absolute inset-0 bg-[#030303]/75 backdrop-blur-[2px] z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#8f1722] selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center pt-24 px-8 md:px-16">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-[#8f1722]" />
                <span className="text-[10px] font-bold tracking-[0.5em] text-[#8f1722] uppercase">
                  Est. 1992
                </span>
              </div>
              <h1
                className="leading-[0.95] font-light text-white mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(4.5rem, 10vw, 8rem)',
                }}
              >
                The Dark <br />
                <span className="italic text-white/50">Eclipse.</span>
              </h1>
              <p className="text-white/60 text-lg font-light leading-[1.8] max-w-md mb-12">
                A symphony of shade and intensity. We harvest our cacao exclusively under the canopy of the Amazon, producing notes of wild cherry, tobacco, and ancient soil.
              </p>
              <div className="flex gap-8">
                <a href="#collection" className="text-xs font-semibold tracking-[0.3em] uppercase text-white hover:text-[#8f1722] transition-colors border-b border-[#8f1722] pb-1">
                  Discover
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="hidden md:flex justify-end"
            >
              <div className="text-right">
                <div className="text-sm font-light text-white/40 tracking-[0.2em] mb-2 uppercase">Current Release</div>
                <div className="text-3xl font-light text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Madagascar 88%</div>
                <div className="text-[#8f1722] text-xs font-bold tracking-[0.3em] uppercase">Limited Allocation</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ORIGIN / STORY */}
        <section id="origin" className="min-h-screen relative z-20 flex items-center py-40">
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="sticky top-40"
              >
                <h2
                  className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Born in the <br />
                  <span className="italic text-[#8f1722]">Shadows.</span>
                </h2>
                <div className="flex gap-12 pt-8 border-t border-white/[0.05]">
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>88<span className="text-xl">%</span></span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mt-2">Cacao Min</span>
                  </div>
                  <div>
                    <span className="text-4xl font-light text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>0</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 block mt-2">Compromise</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-12"
              >
                <p className="text-white/70 text-lg font-light leading-[2.1]">
                  Industrial chocolate demands sunlight and cleared forests. We operate entirely within the deep shade of the original rainforest canopy. The lack of direct sunlight forces the cacao pods to mature slowly, drawing complex minerals from the unbroken mycelial network below.
                </p>
                <p className="text-white/70 text-lg font-light leading-[2.1]">
                  When you taste an ECLIPSE bar, you are tasting the undisturbed forest floor. You are tasting wild fermentation. Our beans are fermented in mahogany boxes wrapped in native plantain leaves, allowing the ambient wild yeasts of the jungle to dictate the flavor profile.
                </p>
                <div className="p-8 border border-white/10 bg-[#030303]/40 backdrop-blur-md">
                  <h3 className="text-xl font-normal text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>The Yield</h3>
                  <p className="text-white/50 text-sm font-light leading-[1.8]">
                    Because our trees fight for canopy light, they produce only a fraction of the pods of a commercial plantation. What they lack in volume, they return in devastating intensity.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EDITORIAL QUOTE */}
        <section className="py-40 px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl text-center"
          >
            <div className="w-1 h-16 bg-[#8f1722] mx-auto mb-12" />
            <blockquote
              className="text-4xl md:text-6xl font-light text-white/90 leading-[1.3] italic mb-12"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "We do not temper the chocolate to make it sweet. We temper it to make it sharp."
            </blockquote>
          </motion.div>
        </section>

        <EclipseFeatures />
        <EclipseProcess />
        <EclipseProducts />

      </main>

      <EclipseFooter />
    </div>
  );
}
