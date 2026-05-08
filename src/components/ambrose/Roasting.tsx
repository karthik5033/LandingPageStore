'use client';
import { motion } from 'framer-motion';

export default function AmbroseRoasting() {
  return (
    <section id="roasting" className="py-40 px-8 relative z-10">
      <div className="max-w-[1400px] mx-auto border-t border-b border-[#e6cda3]/10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[600px] border border-[#e6cda3]/20 flex items-center justify-center p-8 bg-[#140a05]/40 backdrop-blur-md overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e6cda3]/5 to-transparent group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="text-center relative z-10">
              <span className="text-7xl font-light text-[#e6cda3]" style={{ fontFamily: "'Libre Baskerville', serif" }}>108°C</span>
              <p className="text-[#f4eee1]/70 text-sm font-bold tracking-[0.3em] uppercase mt-6">The Threshold of Maillard</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase">Chapter III</span>
            <h2 className="text-5xl md:text-6xl font-normal text-[#f4eee1] leading-tight" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              The Ritual of <span className="italic text-[#e6cda3]">Fire.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-[#f4eee1]/70 text-lg font-light leading-[2.1]">
                Roasting is where the flavor profile is irrevocably determined. Commercial operations flash-roast beans at 150°C for 15 minutes to guarantee uniformity. This brutal process destroys the delicate floral esters unique to each harvest.
              </p>
              <p className="text-[#f4eee1]/70 text-lg font-light leading-[2.1]">
                We use an antique 1950s ball roaster. The thick cast iron distributes heat unevenly and gently. We roast at a maximum of 108°C for up to an hour. It requires constant supervision, listening to the crack of the beans and smelling the volatile compounds as they emerge.
              </p>
              <div className="border-l border-[#e6cda3] pl-6 py-2 mt-8">
                <span className="block text-xs font-bold tracking-[0.3em] text-[#e6cda3] uppercase mb-2">The Result</span>
                <span className="text-[#f4eee1]/90 italic text-lg" style={{ fontFamily: "'Libre Baskerville', serif" }}>A complex interplay of bright acidity and deep, resonating caramel.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
