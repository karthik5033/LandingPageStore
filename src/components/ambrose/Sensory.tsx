'use client';
import { motion } from 'framer-motion';

export default function AmbroseSensory() {
  return (
    <section id="sensory" className="py-40 px-8 relative z-10 bg-gradient-to-t from-[#140a05] to-transparent">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square border border-[#e6cda3]/20 p-8"
          >
            <div className="w-full h-full border border-[#e6cda3]/10 flex flex-col justify-center items-center text-center p-12 bg-[#140a05]/50 backdrop-blur-md">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase mb-8">The Experience</span>
              <h3 className="text-4xl text-[#f4eee1] font-light italic mb-8" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                "Do not chew. <br /> Allow it to surrender."
              </h3>
              <div className="w-16 h-[1px] bg-[#e6cda3]/50" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-6">Chapter VI</span>
            <h2 className="text-5xl md:text-6xl font-normal text-[#f4eee1] leading-tight mb-12" style={{ fontFamily: "'Libre Baskerville', serif" }}>
              The Tasting <span className="italic text-[#e6cda3]">Ritual.</span>
            </h2>
            <div className="space-y-12">
              <div className="border-l border-[#e6cda3]/30 pl-8">
                <h4 className="text-[#e6cda3] font-normal text-xl mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>01. The Snap</h4>
                <p className="text-[#f4eee1]/60 text-base font-light leading-[1.8]">A clean, sharp acoustic snap indicates perfect crystallization of the cocoa butter. It should break exactly where you intend.</p>
              </div>
              <div className="border-l border-[#e6cda3]/30 pl-8">
                <h4 className="text-[#e6cda3] font-normal text-xl mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>02. The Melt</h4>
                <p className="text-[#f4eee1]/60 text-base font-light leading-[1.8]">Place it on the tongue. Our 14-micron grind ensures a melt that feels like silk, instantly coating the palate without graininess.</p>
              </div>
              <div className="border-l border-[#e6cda3]/30 pl-8">
                <h4 className="text-[#e6cda3] font-normal text-xl mb-3" style={{ fontFamily: "'Libre Baskerville', serif" }}>03. The Arc</h4>
                <p className="text-[#f4eee1]/60 text-base font-light leading-[1.8]">Observe the chronological arc of flavor: first the volatile fruit acids, then the deep roasted earth, and finally the enduring tannic finish.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
