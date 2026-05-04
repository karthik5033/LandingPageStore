'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
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
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full" />
            </div>
            <span className="font-bold tracking-widest text-sm uppercase">Antigravity</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#templates" className="hover:text-white transition-colors">Templates</a>
            <a href="#features" className="hover:text-white transition-colors">Engine</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>
          <button className="text-xs font-bold uppercase tracking-widest bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-200 transition-colors">
            Get Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-40 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Antigravity Engine v2.0 Live
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95]">
            Cinematic web experiences, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">packaged for production.</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
            A curated library of ultra-premium, scroll-driven landing page templates built for Next.js. Deploy Apple-tier visual narratives in minutes, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#templates" className="w-full sm:w-auto px-8 py-4 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Explore Templates <ArrowRight size={16} />
            </a>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 border border-white/20 bg-black/40 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-white/10 transition-colors flex items-center justify-center">
              Discover the Engine
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 border-y border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Engineered for absolute performance.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We didn't just design templates; we built a proprietary rendering engine that guarantees flawless execution across all devices.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white">
                  <f.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Collection */}
      <section id="templates" className="relative z-10 container mx-auto px-6 py-32 flex-grow flex flex-col">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">The Collection</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Browse our meticulously crafted brand templates.</p>
        </div>

        <div className="max-w-5xl mx-auto w-full flex flex-col gap-24">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FolderOpen className="text-gray-500" size={24} />
                    <h3 className="text-3xl font-bold tracking-widest uppercase">{category.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">{category.description}</p>
                </div>
                <div className="text-xs font-mono text-gray-600 bg-white/5 px-3 py-1 rounded-md self-start md:self-auto">
                  {category.templates.length} TEMPLATES
                </div>
              </div>
              
              {/* Template Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((t) => (
                  <Link 
                    key={t.id}
                    href={t.href} 
                    className="group flex flex-col justify-between p-8 bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-start mb-10">
                      <div className={`p-4 bg-black/60 rounded-xl border border-white/5 shadow-2xl group-hover:border-white/20 transition-colors ${t.accent}`}>
                        <t.icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="font-mono text-xs text-gray-500 font-bold tracking-widest">SEQ-{t.id}</span>
                    </div>
                    
                    <div>
                      <h4 className="font-black text-2xl tracking-wider mb-2 uppercase group-hover:text-white transition-colors">{t.name}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed mb-8">{t.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">
                          <span>Live Preview</span>
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                        <CheckCircle2 size={16} className="text-green-500/0 group-hover:text-green-500/100 transition-colors" />
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
      <footer className="relative z-10 border-t border-white/10 bg-black pt-20 pb-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>
                <span className="font-bold tracking-widest text-sm uppercase">Antigravity</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Empowering developers and designers to build uncompromising, cinematic web experiences without the technical overhead.
              </p>
            </div>
            
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Product</h5>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Engine Core</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-6">Resources</h5>
              <ul className="flex flex-col gap-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-600 font-mono">
            <p>© {new Date().getFullYear()} Antigravity Systems. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
