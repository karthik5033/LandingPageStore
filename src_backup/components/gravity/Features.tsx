'use client';
import { motion } from 'framer-motion';
import { Zap, Activity, Flame } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: "High-Velocity Roast",
    description: "Our beans are subjected to intense, rapid heat, locking in volatile aromatics and creating an explosive flavor profile."
  },
  {
    icon: Zap,
    title: "Kinetic Extraction",
    description: "Brewed under immense pressure to force every ounce of strength and character out of the grind."
  },
  {
    icon: Activity,
    title: "Maximum Density",
    description: "We don't do weak coffee. Every batch is calibrated for absolute maximum density and body."
  }
];

export default function GravityFeatures() {
  return (
    <section id="force" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-1 bg-[#b87333] mb-8 transform -skew-x-12" />
              <h2 className="text-5xl md:text-7xl font-bold text-[#fdfbf7] leading-none mb-8 uppercase tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Pure <br />
                <span className="text-[#b87333]">Force.</span>
              </h2>
              <p className="text-[#fdfbf7]/70 text-sm font-medium leading-relaxed max-w-md uppercase tracking-wider">
                This isn't a gentle morning ritual. This is a collision of intense heat, extreme pressure, and the highest grade beans on the planet. Prepare for impact.
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
                <div className="w-14 h-14 bg-[#b87333]/10 border border-[#b87333]/30 flex items-center justify-center mb-6 transform -skew-x-12 group-hover:bg-[#b87333] transition-all duration-500 text-[#b87333] group-hover:text-[#0d0704]">
                  <feature.icon size={24} strokeWidth={2} className="transform skew-x-12" />
                </div>
                <h3 className="text-2xl text-[#fdfbf7] mb-4 uppercase font-bold tracking-wide" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#fdfbf7]/50 text-xs font-medium leading-relaxed">
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
