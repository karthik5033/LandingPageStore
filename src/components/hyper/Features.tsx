'use client';
import { motion } from 'framer-motion';
import { Rocket, Zap, Crosshair } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: "Light Speed",
    description: "Rapid-absorption liquid matrix hits your bloodstream in under 4 minutes. Zero wait time. Maximum velocity."
  },
  {
    icon: Zap,
    title: "Neon Overdrive",
    description: "Supercharged with a proprietary blend of B-vitamins, Taurine, and L-Carnitine for sustained, electric energy."
  },
  {
    icon: Crosshair,
    title: "Laser Focus",
    description: "Nootropic enhancement via L-Theanine and Tyrosine. Tunnel vision for the tasks that demand perfection."
  }
];

export default function Features() {
  return (
    <section id="velocity" className="py-40 relative z-20 border-t border-[#ff00cc]/20 bg-black/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <span className="text-sm font-bold tracking-[0.4em] text-[#ff00cc] uppercase mb-4 block">
            // Telemetry Data
          </span>
          <h2 className="text-6xl md:text-8xl font-bold text-white uppercase leading-tight tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Break the <br />
            <span className="text-[#ff00cc] drop-shadow-[0_0_15px_rgba(255,0,204,0.5)]">Sound Barrier.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-10 border border-[#ff00cc]/10 hover:border-[#ff00cc] transition-colors duration-300 group bg-black/40 backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00cc]/10 rounded-full blur-3xl group-hover:bg-[#ff00cc]/30 transition-all duration-500" />
              
              <feature.icon className="text-[#ff00cc] mb-8 relative z-10" size={48} strokeWidth={1.5} />
              <h3 className="text-3xl font-bold tracking-wide text-white mb-4 uppercase relative z-10" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed relative z-10 font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
