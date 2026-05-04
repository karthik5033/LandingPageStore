'use client';
import { motion } from 'framer-motion';
import { Spline, Zap, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: ShieldAlert,
    title: "Structural Failure",
    description: "We bypass standard grinding. By inducing structural failure at the molecular level, we expose maximum surface area for extraction."
  },
  {
    icon: Zap,
    title: "Volatile Release",
    description: "The moment the bean fractures, trapped gases and oils are violently released. We capture this exact instant."
  },
  {
    icon: Spline,
    title: "Chaotic Harmony",
    description: "What looks like destruction is carefully controlled chaos, resulting in a flavor profile of unparalleled depth."
  }
];

export default function FractureFeatures() {
  return (
    <section id="physics" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.4em] text-[#c98a53] uppercase mb-6 block font-light">
                The Physics
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[#ffffff] leading-tight mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Shatter <br />
                <span className="font-semibold text-[#c98a53]">Expectations.</span>
              </h2>
              <p className="text-[#ffffff]/60 text-sm font-light leading-relaxed max-w-md tracking-wide">
                Traditional grinding is slow and generates heat, destroying delicate oils. We use a high-impact, sub-zero shattering technique that preserves the bean's soul until the moment water hits it.
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
                <div className="w-12 h-12 bg-transparent border border-[#c98a53]/30 flex items-center justify-center mb-6 group-hover:bg-[#c98a53] group-hover:scale-110 transition-all duration-500 text-[#c98a53] group-hover:text-[#080402]">
                  <feature.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-[#ffffff] mb-4 font-light tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#ffffff]/50 text-xs font-light leading-relaxed">
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
