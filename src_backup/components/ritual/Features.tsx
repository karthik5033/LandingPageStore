'use client';
import { motion } from 'framer-motion';
import { Sun, Heart, Flame } from 'lucide-react';

const features = [
  {
    icon: Sun,
    title: "First Light",
    description: "The stillness of the early hours is sacred. Our roasts are designed to gently awaken the senses, matching the soft warmth of the rising sun."
  },
  {
    icon: Flame,
    title: "Slow Roast",
    description: "Patience yields sweetness. We stretch our roast profiles, allowing natural sugars to caramelize fully for a comforting, balanced cup."
  },
  {
    icon: Heart,
    title: "Mindful Brewing",
    description: "Coffee is not just caffeine; it's a moment of grounding. We encourage slow, manual brewing methods to savor the preparation."
  }
];

export default function RitualFeatures() {
  return (
    <section id="sanctuary" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.3em] text-[#e8c490] uppercase mb-6 block font-light" style={{ fontFamily: "'Lora', serif" }}>
                The Practice
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-[#fdfbf7] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Your Daily <br />
                <span className="text-[#e8c490] italic">Sanctuary.</span>
              </h2>
              <p className="text-[#fdfbf7]/70 text-sm font-light leading-relaxed max-w-md" style={{ fontFamily: "'Lora', serif" }}>
                Before the noise of the day begins, there is a quiet space. It smells like roasted beans and hot water. It sounds like a steady pour. This is your time.
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
                <div className="w-12 h-12 rounded-full border border-[#e8c490]/30 flex items-center justify-center mb-6 group-hover:bg-[#e8c490] group-hover:border-[#e8c490] transition-all duration-700 text-[#e8c490] group-hover:text-[#2b221a]">
                  <feature.icon size={20} strokeWidth={1} />
                </div>
                <h3 className="text-2xl text-[#fdfbf7] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#fdfbf7]/60 text-sm font-light leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
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
