'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import PulseNavbar from '@/components/pulse/Navbar';
import PulseFeatures from '@/components/pulse/Features';
import PulseProducts from '@/components/pulse/Products';
import PulseProcess from '@/components/pulse/Process';
import PulseFooter from '@/components/pulse/Footer';

export default function Template17() {
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
      className="relative font-sans bg-[#0a0604] overflow-x-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      <PulseNavbar />

      <motion.div
        className="fixed top-0 left-0 w-[1px] h-full origin-top z-[60]"
        style={{
          scaleY,
          background: '#c8922a'
        }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/j4vid-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        {/* Luxury Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0604]/95 via-[#0a0604]/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0604]/95 via-transparent to-[#0a0604]/70 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[#c8922a] selection:text-white">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center px-6 md:px-12">
          <div className="container mx-auto">
            <motion.div 
              style={{ y: heroY, opacity: heroOpacity }}
              className="max-w-4xl relative z-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block text-xs font-medium tracking-[0.4em] uppercase mb-6 text-[#c8922a]"
              >
                The Premium Standard
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="leading-[1.1] font-normal mb-8 tracking-wide text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                }}
              >
                Elevated <br />
                <span className="italic text-[#c8922a]">Vitality.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl font-light tracking-wide text-white/70 max-w-lg leading-relaxed border-l border-[#c8922a] pl-8 ml-2"
              >
                Harness raw organic energy. Uncapped cognitive potential delivered in a masterfully crafted fluid matrix.
              </motion.p>
            </motion.div>
          </div>

          
        </section>

        {/* ORIGIN SECTION */}
        <section id="origin" className="min-h-[120vh] relative z-20 flex items-center py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl bg-black/40 backdrop-blur-md border border-[#c8922a]/20 p-12 md:p-16">
              <span className="text-xs font-medium tracking-[0.4em] text-[#c8922a] uppercase mb-6 block">
                01. / The Origin
              </span>
              <h2 className="text-5xl md:text-6xl font-normal text-white mb-8 tracking-wide leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pure <span className="italic text-[#c8922a]">Momentum.</span>
              </h2>
              <p className="text-white/70 text-base font-light leading-relaxed mb-12">
                Stop relying on legacy fuel. PULSE is engineered from the ground up to elevate your cognitive bandwidth without the inevitable crash. We distilled raw organic energy into a drinkable, luxurious format.
              </p>
              <button className="text-[10px] font-medium tracking-[0.3em] uppercase text-black bg-[#c8922a] hover:bg-white transition-colors duration-500 px-8 py-4">
                Discover The Source
              </button>
            </div>
          </div>
        </section>

        <PulseFeatures />
        
        <PulseProcess />
        
        <PulseProducts />

        {/* CTA SECTION */}
        <section className="h-screen flex flex-col items-center justify-center px-6 relative z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,146,42,0.1)_0%,transparent_50%)] pointer-events-none" />
          
          <div className="max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="font-normal leading-tight mb-12 text-white tracking-wide"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                }}
              >
                Experience The <br />
                <span className="italic text-[#c8922a]">Difference.</span>
              </h2>
              
              <button className="relative group overflow-hidden px-12 py-5 border border-[#c8922a] text-[#c8922a] text-[12px] font-medium uppercase tracking-[0.3em] transition-all duration-500 hover:text-black">
                <span className="absolute inset-0 bg-[#c8922a] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">
                  Acquire PULSE
                </span>
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <PulseFooter />
    </div>
  );
}
