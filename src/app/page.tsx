'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Zap, Sparkles, FolderOpen } from 'lucide-react';

const categories = [
  {
    name: "Chocolate Series",
    description: "Dark, moody, and ultra-premium designs for luxury chocolate brands.",
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
      }
    ]
  },
  {
    name: "Coffee Series",
    description: "Warm, sophisticated scrolling experiences for craft coffee.",
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
    description: "High-octane, neon-accented interfaces for energy products.",
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

export default function Home() {
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
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black z-10" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 flex-grow flex flex-col">
        
        {/* Header */}
        <div className="mb-20 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
               Landing Page Store
             </h1>
             <p className="text-gray-400 text-lg max-w-xl mx-auto">
               A curated library of premium scroll-sequence templates.
             </p>
           </motion.div>
        </div>

        {/* Categories */}
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                <FolderOpen className="text-gray-500" size={20} />
                <h2 className="text-2xl font-bold tracking-widest uppercase">{category.name}</h2>
              </div>
              <p className="text-gray-400 mb-8 text-sm">{category.description}</p>
              
              {/* Template Grid (Small elegant cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((t) => (
                  <a 
                    key={t.id}
                    href={t.href} 
                    className="group flex flex-col justify-between p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 bg-black/40 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors ${t.accent}`}>
                        <t.icon size={20} />
                      </div>
                      <span className="font-mono text-xs text-gray-600 font-bold">{t.id}</span>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-xl tracking-wider mb-2 uppercase group-hover:text-white transition-colors">{t.name}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed mb-6">{t.description}</p>
                      
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                        <span>View Template</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <footer className="relative z-10 py-12 text-center text-xs font-mono text-gray-600 uppercase tracking-widest">
         © 2026 Antigravity Systems. All Rights Reserved.
      </footer>

    </main>
  );
}
