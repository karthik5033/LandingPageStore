import fs from 'fs';
import path from 'path';

const templates = [
  { id: 30, brand: 'kin', title: 'KIN', frames: 'spice1', accent: '#8b4513', font: 'Playfair Display' },
  { id: 31, brand: 'aroma', title: 'AROMA', frames: 'spice2', accent: '#f4a460', font: 'Playfair Display' },
  { id: 32, brand: 'ember', title: 'EMBER', frames: 'spice3', accent: '#dc143c', font: 'Playfair Display' },
  { id: 33, brand: 'ochre', title: 'OCHRE', frames: 'spice4', accent: '#dcb83c', font: 'Playfair Display' },
  { id: 34, brand: 'flame', title: 'FLAME', frames: 'spice5', accent: '#ff4500', font: 'Playfair Display' },
  { id: 35, brand: 'cassia', title: 'CASSIA', frames: 'spice6', accent: '#d2691e', font: 'Playfair Display' },
  { id: 36, brand: 'anise', title: 'ANISE', frames: 'spice7', accent: '#4b0082', font: 'Playfair Display' },
  { id: 37, brand: 'caraway', title: 'CARAWAY', frames: 'spice8', accent: '#556b2f', font: 'Playfair Display' },
  { id: 38, brand: 'mace', title: 'MACE', frames: 'spice9', accent: '#daa520', font: 'Playfair Display' },
  { id: 39, brand: 'sumac', title: 'SUMAC', frames: 'spice10', accent: '#800000', font: 'Playfair Display' },
  { id: 40, brand: 'masala', title: 'MASALA', frames: 'spice11', accent: '#e2725b', font: 'Playfair Display' }
];

const createDir = (dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
};

const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

for (const t of templates) {
  const compDir = path.join('src', 'components', t.brand);
  createDir(compDir);
  
  const CompName = titleCase(t.brand);

  // Navbar
  fs.writeFileSync(path.join(compDir, 'Navbar.tsx'), `'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "linear" }}
      className={\`fixed top-0 w-full z-50 transition-colors duration-300 \${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-[${t.accent}]/20" : "bg-transparent"
      }\`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between font-sans">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-light text-2xl tracking-[0.2em] text-white uppercase mt-1" style={{ fontFamily: "'${t.font}', serif" }}>${t.title}</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] text-white/60 uppercase">
          <a href="#origin" className="hover:text-[${t.accent}] transition-colors">Origin</a>
          <a href="#craft" className="hover:text-[${t.accent}] transition-colors">Craft</a>
          <a href="#collection" className="hover:text-[${t.accent}] transition-colors">Collection</a>
          <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
        </div>

        <button className="text-white/80 hover:text-[${t.accent}] transition-colors">
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}`);

  // Footer
  fs.writeFileSync(path.join(compDir, 'Footer.tsx'), `'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/80 backdrop-blur-lg py-20 border-t border-[${t.accent}]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-light text-2xl tracking-[0.2em] text-white uppercase mt-1" style={{ fontFamily: "'${t.font}', serif" }}>${t.title}</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-loose">
              Elevating the culinary experience. We source the finest, purest spices for those who appreciate the subtle nuances of exceptional flavour.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[${t.accent}] mb-8">Explore</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><a href="#collection" className="hover:text-white transition-colors duration-300">Shop Collection</a></li>
                <li><a href="#origin" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[${t.accent}] mb-8">Connect</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] text-white/40 font-light tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} ${t.title} SPICES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[${t.accent}] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[${t.accent}] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`);

  // Process
  fs.writeFileSync(path.join(compDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Process</span>
          <h2 className="text-3xl md:text-5xl font-light text-white" style={{ fontFamily: "'${t.font}', serif" }}>From Farm to Table</h2>
        </motion.div>
      </div>
    </section>
  );
}`);

  // Features
  fs.writeFileSync(path.join(compDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">Pure Quality</span>
          <h2 className="text-3xl md:text-5xl font-light text-white" style={{ fontFamily: "'${t.font}', serif" }}>Uncompromising Standards</h2>
        </motion.div>
      </div>
    </section>
  );
}`);

  // Products
  fs.writeFileSync(path.join(compDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">The Collection</span>
          <h2 className="text-3xl md:text-5xl font-light text-white" style={{ fontFamily: "'${t.font}', serif" }}>Signature Blends</h2>
        </motion.div>
      </div>
    </section>
  );
}`);

  // Page
  const pageDir = path.join('src', 'app', `template${t.id}`);
  createDir(pageDir);
  
  fs.writeFileSync(path.join(pageDir, 'page.tsx'), `'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import ScrollSequence from '@/components/ScrollSequence';
import ${CompName}Navbar from '@/components/${t.brand}/Navbar';
import ${CompName}Features from '@/components/${t.brand}/Features';
import ${CompName}Products from '@/components/${t.brand}/Products';
import ${CompName}Process from '@/components/${t.brand}/Process';
import ${CompName}Footer from '@/components/${t.brand}/Footer';

export default function Template${t.id}() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative font-sans bg-black overflow-x-hidden">
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
      \`}</style>

      <${CompName}Navbar />

      <motion.div
        className="fixed top-0 left-0 w-1 md:w-2 h-full origin-top z-[60]"
        style={{ scaleY, background: '${t.accent}' }}
      />

      {/* FULLSCREEN CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ScrollSequence
          folderPath="/${t.frames}-frames"
          frameCount={156}
          fileNamePrefix="ezgif-frame-"
          fileExtension="png"
          padLength={3}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
      </div>

      <main className="relative z-10 w-full text-white selection:bg-[${t.accent}] selection:text-black">
        
        {/* HERO SECTION */}
        <section id="hero" className="h-screen relative flex items-center justify-center text-center px-6">
          <div className="max-w-5xl relative z-20 mt-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block text-[10px] font-bold tracking-[0.5em] uppercase mb-10 text-[${t.accent}]"
            >
              The Spice Series
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              className="leading-none font-light mb-10"
              style={{ fontFamily: "'${t.font}', serif", fontSize: 'clamp(4rem, 12vw, 10rem)', letterSpacing: '0.05em' }}
            >
              ${t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xs md:text-sm font-light tracking-[0.3em] uppercase text-white/70 max-w-lg mx-auto"
            >
              Pure, unadulterated flavour.
            </motion.p>
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
                <span className="text-[10px] font-bold tracking-[0.4em] text-[${t.accent}] uppercase mb-6 block">
                  00. / The Source
                </span>
                <h2 className="text-5xl md:text-6xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'${t.font}', serif" }}>
                  Rooted in <br />
                  <span className="italic text-[${t.accent}]">tradition.</span>
                </h2>
                <div className="border-l border-[${t.accent}]/30 pl-8">
                  <p className="text-white/70 text-lg font-light leading-loose mb-8">
                    We travel to the far corners of the earth to source the most vibrant, aromatic spices directly from smallholder farmers. Each harvest is hand-selected at the absolute peak of its season.
                  </p>
                  <p className="text-white/60 text-base font-light leading-loose mb-12">
                    Our spices are never irradiated or treated with harsh chemicals. They are sun-dried, stone-ground, and packaged immediately to preserve their volatile essential oils.
                  </p>
                </div>
                <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'${t.font}', serif" }}>100%</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Organic</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'${t.font}', serif" }}>Single</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Origin</div>
                  </div>
                  <div>
                    <div className="text-3xl text-white mb-1" style={{ fontFamily: "'${t.font}', serif" }}>Zero</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-light">Additives</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <${CompName}Process />
        <${CompName}Features />
        <${CompName}Products />

        {/* CTA SECTION */}
        <section className="py-32 flex items-center justify-center px-6 border-t border-[${t.accent}]/10 bg-black/60 backdrop-blur-md">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="font-light leading-tight mb-12 text-white" style={{ fontFamily: "'${t.font}', serif", fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                Elevate your <br />
                <span className="italic text-[${t.accent}]">kitchen.</span>
              </h2>
              <button className="mt-8 px-12 py-5 bg-[${t.accent}] text-black text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-white transition-all duration-500">
                Shop the Collection
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <${CompName}Footer />
    </div>
  );
}`);
}

console.log('Templates created successfully.');
