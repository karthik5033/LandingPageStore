'use client';
import { motion } from 'framer-motion';
import { Zap, Droplet, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Radiant Extraction",
    description: "Our proprietary brewing methodology captures the brightest, most volatile aromatic compounds from the beans."
  },
  {
    icon: Droplet,
    title: "Golden Crema",
    description: "A rich, luminous crema that serves as the perfect canvas for the deep, complex flavors beneath."
  },
  {
    icon: Star,
    title: "Signature Roast",
    description: "Roasted to a perfect medium-dark to unlock notes of toasted caramel, dark chocolate, and subtle fruit."
  }
];

export default function LumenFeatures() {
  return (
    <section id="roast" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.4em] text-[#d97706] uppercase mb-6 block font-semibold">
                The Mastery
              </span>
              <h2 className="text-5xl md:text-6xl font-normal text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Crafting <br />
                <span className="italic text-[#d97706]">Brilliance.</span>
              </h2>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-md">
                We believe coffee should be a luminous experience. By meticulously controlling the roasting temperature curve, we illuminate the hidden depths and brightest notes within every bean.
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
                <div className="w-14 h-14 rounded-full bg-[#d97706]/10 flex items-center justify-center mb-6 group-hover:bg-[#d97706] transition-colors duration-500 text-[#d97706] group-hover:text-[#0a0602]">
                  <feature.icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
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
