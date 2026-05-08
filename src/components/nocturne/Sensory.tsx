'use client';
import { motion } from 'framer-motion';

export default function NocturneSensory() {
  return (
    <section id="sensory" className="py-40 px-8 relative z-10 bg-[#050505]/40 backdrop-blur-xl border-y border-[#cfbba0]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#cfbba0] uppercase block mb-6">Tasting Notes</span>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Cinzel', serif" }}>
              The <br /> Degustation.
            </h2>
            <div className="space-y-12">
              <div>
                <h4 className="text-white font-medium tracking-[0.2em] uppercase text-sm mb-4">Initial (0-10 seconds)</h4>
                <p className="text-white/50 text-base font-light leading-[1.8]">A bright, sharp burst of red fruit acidity. Notes of unripe raspberry and tart cherry immediately awaken the palate.</p>
              </div>
              <div>
                <h4 className="text-white font-medium tracking-[0.2em] uppercase text-sm mb-4">Mid-Palate (10-30 seconds)</h4>
                <p className="text-white/50 text-base font-light leading-[1.8]">As the cocoa butter melts at body temperature, the acidity gives way to a profound, earthy depth. Roasted nuts, dark caramel, and espresso.</p>
              </div>
              <div>
                <h4 className="text-white font-medium tracking-[0.2em] uppercase text-sm mb-4">The Finish (1+ minute)</h4>
                <p className="text-white/50 text-base font-light leading-[1.8]">A long, resonant finish characterized by woody tannins and a subtle, lingering smokiness. The chocolate continues to evolve long after it has melted.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-full min-h-[500px] border border-[#cfbba0]/20 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#cfbba0]/10 to-transparent" />
            <div className="w-full h-full border border-[#cfbba0]/10 flex flex-col justify-end p-8 text-center relative z-10">
              <span className="text-lg text-white/40 font-light italic mb-4" style={{ fontFamily: "'Cinzel', serif" }}>"Close your eyes. Let it melt. Listen."</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
