'use client';
import { motion } from 'framer-motion';
import { Focus, Droplets, Layers } from 'lucide-react';

const features = [
  {
    icon: Focus,
    title: "Centricity",
    description: "Every element orbits the center. Our pour technique relies on absolute precision to create mesmerizing, symmetric ripples."
  },
  {
    icon: Layers,
    title: "Laminar Flow",
    description: "We texturize milk to achieve a perfectly laminar flow, allowing it to glide across the espresso rather than mixing immediately."
  },
  {
    icon: Droplets,
    title: "The Contrast",
    description: "Darkness and light. The sharp acidity of the roast cuts cleanly through the sweet, heavy velvet of the milk."
  }
];

export default function ZenithFeatures() {
  return (
    <section id="technique" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[9px] tracking-[0.5em] text-[#f2f0eb]/50 uppercase mb-6 block font-light">
                The Technique
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-[#f2f0eb] leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Concentric <br />
                <span className="italic text-[#f2f0eb]/70">Perfection.</span>
              </h2>
              <p className="text-[#f2f0eb]/60 text-xs font-light leading-relaxed max-w-md tracking-wide">
                We view the cup as an infinite loop. By meticulously pouring dead-center, we force the crema to expand outward in perfect, uninterrupted rings, building a drink that is visually and structurally flawless.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="w-12 h-12 rounded-full border border-[#f2f0eb]/20 flex items-center justify-center mb-6 group-hover:bg-[#f2f0eb] transition-colors duration-700 text-[#f2f0eb] group-hover:text-[#0a0908]">
                  <feature.icon size={18} strokeWidth={1} />
                </div>
                <h3 className="text-2xl text-[#f2f0eb] mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#f2f0eb]/50 text-[11px] font-light leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
