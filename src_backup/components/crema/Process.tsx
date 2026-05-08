'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Sourcing",
    desc: "Single-origin Arabica beans hand-selected from volcanic soils at high altitudes."
  },
  {
    num: "02",
    title: "Roasting",
    desc: "Lightly roasted in small batches to preserve delicate floral and fruity notes."
  },
  {
    num: "03",
    title: "Steeping",
    desc: "24-hour slow extraction in filtered alkaline water for zero acidity."
  },
  {
    num: "04",
    title: "Bottling",
    desc: "Sealed cold in opaque glass to protect the delicate flavor profile from light."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-40 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-32">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#d4a373] uppercase mb-6 block">
            02. / The Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            From soil to <span className="italic text-[#d4a373]">glass.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              className="relative text-center group"
            >
              <div className="text-6xl font-light text-white/10 mb-8 transition-colors duration-500 group-hover:text-[#d4a373]/30" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.num}
              </div>
              
              <div className="hidden md:block absolute top-10 left-[60%] w-full h-[1px] bg-gradient-to-r from-[#d4a373]/20 to-transparent" />
              
              <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {step.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed font-light px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
