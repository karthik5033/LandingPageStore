'use client';
import { motion, useScroll } from 'framer-motion';
import { ArrowRight, Coffee, Zap, Sparkles, FolderOpen, Layers, Cpu, Smartphone, Code2, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  {
    name: "Chocolate Series",
    description: "Dark, moody, and ultra-premium designs tailored for luxury artisan brands. Features deep cinematic vignettes and slow-melt scroll dynamics.",
    templates: [
      {
        id: "03",
        name: "VELVET",
        description: "The Dark Art of Chocolate",
        href: "/template3",
        accent: "text-[#c8922a]",
        icon: Sparkles
      },
      {
        id: "04",
        name: "NOIR",
        description: "The Essence of Dark",
        href: "/template4",
        accent: "text-[#a67c52]",
        icon: Sparkles
      },
      {
        id: "05",
        name: "OBSIDIAN",
        description: "Pure 100% Cacao Experience",
        href: "/template5",
        accent: "text-white",
        icon: Sparkles
      },
      {
        id: "06",
        name: "SILK",
        description: "Smooth. Decadent. Pure.",
        href: "/template6",
        accent: "text-[#c8a97e]",
        icon: Sparkles
      }
    ]
  },
  {
    name: "Fresh Series",
    description: "Vibrant, high-energy interfaces designed for cold-pressed juices and organic fruit brands. Features refreshing color palettes and dynamic fluid motion.",
    templates: [
      {
        id: "07",
        name: "VITALITY",
        description: "Pure Organic Energy",
        href: "/template7",
        accent: "text-green-400",
        icon: Sparkles
      },
      {
        id: "08",
        name: "NECTAR",
        description: "The Essence of Fruit",
        href: "/template8",
        accent: "text-red-400",
        icon: Sparkles
      },
      {
        id: "09",
        name: "BOTANICA",
        description: "Wildcrafted Elixirs",
        href: "/template9",
        accent: "text-emerald-400",
        icon: Sparkles
      },
      {
        id: "10",
        name: "OASIS",
        description: "Liquid Gold Bottled",
        href: "/template10",
        accent: "text-orange-400",
        icon: Sparkles
      }
    ]
  },
  {
    name: "Coffee Series",
    description: "Warm, sophisticated scrolling experiences designed for craft roasters. Incorporates organic fluid transitions and earthy color palettes.",
    templates: [
      {
        id: "01",
        name: "AURA",
        description: "The Art of Coffee",
        href: "/template1",
        accent: "text-amber-500",
        icon: Coffee
      }
    ]
  },
  {
    name: "Performance Series",
    description: "High-octane, neon-accented interfaces built for energy products and tech hardware. Features sharp, aggressive scroll velocity.",
    templates: [
      {
        id: "02",
        name: "VOLT.OS",
        description: "High-Voltage Energy",
        href: "/template2",
        accent: "text-[#ccff00]",
        icon: Zap
      }
    ]
  }
];

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
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

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
            <a href="#" className="font-light tracking-[0.3em] text-lg uppercase text-white hover:text-gray-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>Atelier</a>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <a href="#templates" className="hover:text-white transition-colors duration-300">Collection</a>
            <a href="#features" className="hover:text-white transition-colors duration-300">The Engine</a>
          </div>
          <a href="#templates" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white px-8 py-3 hover:bg-white hover:text-black transition-all duration-300 inline-block">
            View Gallery
          </a>
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
            <a href="#templates" className="w-full sm:w-auto px-10 py-4 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
              Explore Collection <ArrowRight size={14} />
            </a>
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

      {/* Templates Collection */}
      <section id="templates" className="relative z-10 container mx-auto px-6 py-40 flex-grow flex flex-col">
        <div className="mb-24 text-center">
          <span className="block text-gray-400 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Curated Gallery
          </span>
          <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Collection
          </h2>
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col gap-32">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1 }}
            >
              {/* Category Header */}
              <div className="flex flex-col items-center text-center mb-16 border-b border-white/10 pb-12">
                <h3 className="text-2xl font-light tracking-[0.3em] uppercase mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{category.name}</h3>
                <p className="text-gray-400 text-sm max-w-2xl font-light leading-relaxed">{category.description}</p>
              </div>
              
              {/* Template Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.templates.map((t) => (
                  <Link 
                    key={t.id}
                    href={t.href} 
                    className="group relative flex items-center justify-between p-5 md:p-6 bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500"
                  >
                    <div className="flex items-center gap-5">
                      {/* Icon Circle */}
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-600 group-hover:${t.accent} group-hover:border-white/30 transition-all duration-500`}>
                        <t.icon size={16} strokeWidth={1.5} />
                      </div>
                      
                      {/* Text */}
                      <div>
                        <h4 className="font-light text-lg md:text-xl tracking-[0.15em] uppercase text-gray-300 group-hover:text-white transition-colors duration-500" style={{ fontFamily: "'Playfair Display', serif" }}>
                          {t.name}
                        </h4>
                        <p className="text-[10px] md:text-xs text-gray-500 font-light mt-1 tracking-wider">{t.description}</p>
                      </div>
                    </div>
                    
                    {/* Trailing Actions */}
                    <div className="flex flex-col items-end gap-4">
                      <span className="font-mono text-[9px] text-gray-700 tracking-widest group-hover:text-gray-500 transition-colors">NO. {t.id}</span>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            alert('Download option not available now... but coming soon!');
                          }}
                          className="hidden sm:block px-3 py-1.5 border border-white/10 text-[9px] font-bold tracking-widest uppercase text-gray-500 hover:text-white hover:border-white/30 rounded transition-all"
                        >
                          Download
                        </button>
                        <ArrowRight size={14} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
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
                  <li><a href="#" className="hover:text-white transition-colors">Chocolate Series</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Coffee Series</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Performance Series</a></li>
                </ul>
              </div>

              <div>
                <h5 className="text-[9px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-6">Studio</h5>
                <ul className="flex flex-col gap-4 text-xs font-light text-gray-600">
                  <li><a href="#" className="hover:text-white transition-colors">Engine Core</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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
