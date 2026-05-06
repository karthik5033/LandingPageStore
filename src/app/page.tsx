'use client';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Coffee, Zap, Sparkles, FolderOpen, Layers, Cpu, Smartphone, Code2, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/data';
import { PageTransitionProvider, usePageTransition } from '@/components/PageTransition';

const features = [
  {
    icon: Cpu,
    title: "HTML5 Canvas Engine",
    description: "Proprietary progressive interlaced loader guarantees 60 FPS scroll-synced video playback without network throttling."
  },
  {
    icon: Layers,
    title: "React & Framer Motion",
    description: "Built strictly on modern React paradigms with Framer Motion for buttery smooth micro-interactions."
  },
  {
    icon: Smartphone,
    title: "Responsive by Design",
    description: "Canvas sizing dynamically adapts to devicePixelRatio, ensuring perfect 4K crispness from mobile to ultra-wide."
  },
  {
    icon: Code2,
    title: "Developer Ready",
    description: "Clean, componentized Next.js architecture using Tailwind CSS. Fully typed and ready to integrate into your stack."
  }
];

export default function Home() {
  return (
    <PageTransitionProvider>
      <HomeContent />
    </PageTransitionProvider>
  );
}

function HomeContent() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative overflow-x-hidden flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
      `}</style>
      
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-10" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-5' : 'bg-transparent border-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-light tracking-[0.3em] text-lg uppercase text-white hover:text-gray-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>Atelier</Link>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/gallery" className="hover:text-white transition-colors duration-300">Collection</Link>
            <a href="#features" className="hover:text-white transition-colors duration-300">The Engine</a>
          </div>
          <Link href="/gallery" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 inline-block">
            View Gallery
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-48 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <span className="block text-gray-400 text-[10px] font-bold tracking-[0.5em] mb-8 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Premium Template Library
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-8 leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Cinematic web experiences,<br />
            <span className="italic text-gray-400">crafted for production.</span>
          </h1>
          
          <p className="text-gray-400 text-sm md:text-base font-light tracking-[0.2em] max-w-2xl mx-auto leading-relaxed mb-16 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            A curated library of ultra-premium, scroll-driven landing page templates. Deploy flawless visual narratives in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link href="/gallery" className="w-full sm:w-auto px-10 py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
              Explore Collection <ArrowRight size={14} />
            </Link>
            <a href="#features" className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white/10 transition-colors flex items-center justify-center">
              Discover Engine
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 border-y border-white/10 bg-[#0a0a0a]/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-light tracking-wide mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Engineered for absolute <span className="italic text-gray-400">perfection.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-sm">
              We didn't just design templates; we built a proprietary rendering engine that guarantees flawless execution across all devices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 text-gray-400">
                  <f.icon size={28} strokeWidth={1} />
                </div>
                <h3 className="text-sm font-normal tracking-widest uppercase mb-4 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>{f.title}</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Templates Showcase */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-gray-500 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                Featured Exhibits
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                A glimpse of the <span className="italic text-gray-400">collection.</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto font-light leading-relaxed tracking-wide text-sm">
                Each template is a cinematic narrative — scroll-driven, pixel-perfect, and ready for production deployment.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "NECTAR", desc: "The Essence of Fruit", href: "/template8", num: "08", accent: "#f87171", preview: "/previews/template8.png" },
              { name: "CARDAMOM", desc: "Vibrant Green Pods", href: "/template47", num: "47", accent: "#81c784", preview: "/spice18-frames/ezgif-frame-001.png" },
              { name: "VELVET", desc: "The Master Roasters", href: "/template22", num: "22", accent: "#d4af37", preview: "/previews/template22.png" },
            ].map((t, i) => (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <div 
                  onClick={() => navigateTo(t.href)}
                  className="group block relative overflow-hidden rounded-xl border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img
                      src={t.preview}
                      alt={t.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-[9px] font-bold tracking-[0.4em] uppercase mb-2 block" style={{ color: t.accent }}>{t.name}</span>
                      <p className="text-white text-lg font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>{t.desc}</p>
                    </div>
                    <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest text-white/60 font-bold bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      NO. {t.num}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/gallery" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors duration-300 group">
              View All {categories.reduce((acc, c) => acc + c.templates.length, 0)} Templates
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative z-10 border-y border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl mx-auto text-center">
            {[
              { value: categories.reduce((acc, c) => acc + c.templates.length, 0).toString(), label: "Templates" },
              { value: categories.length.toString(), label: "Series" },
              { value: "60", label: "FPS Playback" },
              { value: "100%", label: "Responsive" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl md:text-4xl font-light text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Testimonial */}
      <section className="relative z-10 py-40 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <span className="block text-gray-500 text-[10px] font-bold tracking-[0.5em] mb-10 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Philosophy
            </span>
            <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
              &ldquo;A landing page should feel like opening a door to another world. Every scroll should reveal something beautiful, every transition should feel <span className="italic text-gray-400">inevitable.</span>&rdquo;
            </blockquote>
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-[1px] bg-white/20" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">Atelier Design Studio</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-wide mb-8 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to <span className="italic text-gray-400">deploy?</span>
            </h2>
            <p className="text-gray-500 text-sm font-light tracking-wide leading-relaxed max-w-lg mx-auto mb-12">
              Browse the full collection, pick your template, and launch a cinematic web experience today. No compromises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/gallery" className="px-10 py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-3">
                Browse Gallery <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#050505] pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
            <div className="max-w-sm">
              <span className="block font-light tracking-[0.3em] text-xl uppercase text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Atelier
              </span>
              <p className="text-gray-500 text-xs font-light leading-relaxed tracking-wide">
                Empowering designers to build uncompromising, cinematic web experiences without the technical overhead. Designed with absolute precision.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div>
                <h5 className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Gallery</h5>
                <ul className="flex flex-col gap-4 text-xs font-light text-gray-600">
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Chocolate Series</Link></li>
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Coffee Series</Link></li>
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Fresh Series</Link></li>
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Performance Series</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Studio</h5>
                <ul className="flex flex-col gap-4 text-xs font-light text-gray-600">
                  <li><a href="#features" className="hover:text-white transition-colors">Engine Core</a></li>
                  <li><Link href="/gallery" className="hover:text-white transition-colors">Full Collection</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} Atelier Studio. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
