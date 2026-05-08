'use client';
import { motion } from 'framer-motion';

export default function AmbroseLegacy() {
  return (
    <section className="py-40 px-8 relative z-10 bg-[#140a05]/80 backdrop-blur-md">
      <div className="max-w-[1000px] mx-auto text-center border-t border-b border-[#e6cda3]/20 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#e6cda3] uppercase block mb-8">Chapter VII</span>
          <h2 className="text-4xl md:text-5xl font-normal text-[#f4eee1] leading-tight mb-12" style={{ fontFamily: "'Libre Baskerville', serif" }}>
            Preserving the <br /> <span className="italic text-[#e6cda3]">Genetics.</span>
          </h2>
          <p className="text-[#f4eee1]/70 text-lg font-light leading-[2.1] max-w-3xl mx-auto mb-12">
            The world's rarest cacao strains are on the verge of extinction, replaced by disease-resistant hybrids that sacrifice flavor for yield. We operate a private nursery deep in the Amazon, identifying and cloning ancient Criollo and Nacional mother trees to preserve their genetic lineage for the next century.
          </p>
          <div className="flex justify-center gap-12 text-[#e6cda3]">
            <div className="text-center">
              <div className="text-4xl font-normal mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>14</div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f4eee1]/40">Mother Trees Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-normal mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>1889</div>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#f4eee1]/40">Oldest Specimen</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
