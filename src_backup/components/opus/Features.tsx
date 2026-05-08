'use client';
import { motion } from 'framer-motion';
import { CircleDot, Droplets, Waves } from 'lucide-react';

const features = [
  {
    icon: CircleDot,
    title: "Perfect Symmetry",
    description: "Every pour is calculated. We balance the sharp acidity of our espresso with the sweet, velvet texture of steamed milk."
  },
  {
    icon: Waves,
    title: "Fluid Dynamics",
    description: "Mastering the micro-foam. The texture of our milk is engineered to create the perfect canvas for flavor integration."
  },
  {
    icon: Droplets,
    title: "The Marbling",
    description: "A visual and culinary masterpiece. The high-contrast marbling indicates a flawless extraction and pour."
  }
];

export default function OpusFeatures() {
  return (
    <section id="canvas" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[9px] tracking-[0.5em] text-[#a3a3a3] uppercase mb-6 block font-light">
                The Canvas
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-[#f5f5f0] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Painting with <br />
                <span className="italic text-[#a3a3a3]">Flavor.</span>
              </h2>
              <p className="text-[#a3a3a3]/80 text-xs font-light leading-relaxed max-w-md tracking-wide">
                We view every cup as a blank canvas. By meticulously controlling the aeration of the milk and the pressure of the extraction, we create a symphony of contrasting notes and stunning visuals.
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
                <div className="w-12 h-12 rounded-full border border-[#f5f5f0]/20 flex items-center justify-center mb-6 group-hover:bg-[#f5f5f0] transition-colors duration-700 text-[#f5f5f0] group-hover:text-[#050505]">
                  <feature.icon size={18} strokeWidth={1} />
                </div>
                <h3 className="text-xl text-[#f5f5f0] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#a3a3a3] text-[11px] font-light leading-relaxed tracking-wide">
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
