'use client';
import { motion } from 'framer-motion';
import { Settings, Gauge, Activity } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: "9 Bars of Pressure",
    description: "The golden standard. We calibrate every machine to deliver exactly 9 bars of pressure, ensuring a perfectly even, viscous extraction."
  },
  {
    icon: Activity,
    title: "Flow Profiling",
    description: "We don't just push water through coffee. We profile the flow rate, starting with a gentle pre-infusion and ramping up to capture the sweetest notes."
  },
  {
    icon: Settings,
    title: "Naked Portafilters",
    description: "Total visibility. Using bottomless portafilters allows us to monitor the extraction in real-time, correcting any channeling instantly."
  }
];

export default function ExtractFeatures() {
  return (
    <section id="pressure" className="py-40 relative z-20 border-none bg-transparent ">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] tracking-[0.4em] text-[#cfa052] uppercase mb-6 block font-bold">
                The Variables
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#ffffff] leading-tight mb-8">
                Absolute <br />
                <span className="text-[#cfa052] font-light italic">Control.</span>
              </h2>
              <p className="text-[#ffffff]/60 text-sm font-medium leading-relaxed max-w-md tracking-wide">
                Espresso is an unforgiving science. A single gram off, a degree too hot, or a micro-channel in the puck can ruin the shot. We control every variable to guarantee the perfect yield.
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
                <div className="w-14 h-14 bg-[#cfa052]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#cfa052] group-hover:-translate-y-2 transition-all duration-500 text-[#cfa052] group-hover:text-[#0c0a08]">
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl text-[#ffffff] mb-4 font-bold tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-[#ffffff]/50 text-xs font-medium leading-relaxed">
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
