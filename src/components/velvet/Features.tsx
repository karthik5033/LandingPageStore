'use client';
import { motion } from 'framer-motion';
import { Thermometer, Droplets, Wind } from 'lucide-react';

const features = [
  {
    icon: Thermometer,
    title: "Precision Roasting",
    description: "Every batch is strictly temperature-profiled to preserve delicate floral notes and complex sugars without scorching."
  },
  {
    icon: Droplets,
    title: "Golden Crema",
    description: "Engineered for the perfect extraction. A dense, velvety crema that encapsulates the soul of the bean."
  },
  {
    icon: Wind,
    title: "Aromatic Bloom",
    description: "Roasted to order and sealed instantly. Experience an explosive aromatic bloom the moment water meets grounds."
  }
];

export default function VelvetFeatures() {
  return (
    <section id="roast" className="py-40 relative z-20 border-t border-[#d4af37]/10 bg-[#0a0806]/40 backdrop-blur-sm">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase mb-6 block">
                The Craft
              </span>
              <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Mastering the <br />
                <span className="italic text-[#d4af37]">Alchemy.</span>
              </h2>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
                We approach coffee as an exact science and a high art. From precise thermal manipulation to evaluating the exact humidity of the cooling tray, every variable is controlled to deliver an uncompromising cup.
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
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] group-hover:text-black transition-colors duration-500 text-[#d4af37]">
                  <feature.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-white/50 text-xs font-light leading-relaxed">
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
