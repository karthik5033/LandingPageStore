'use client';
import { motion } from 'framer-motion';

export default function AureliaFooter() {
  return (
    <footer id="newsletter" className="relative z-10 pt-40 pb-12 px-8 border-t border-[#c79a52]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Private <span className="italic text-[#c79a52]">Reserve.</span>
            </h3>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-md mb-12">
              Join our innermost circle to receive allocations of our rarest micro-batch releases, accessible only to members.
            </p>
            <form className="flex border-b border-white/20 pb-4 max-w-md group focus-within:border-[#c79a52] transition-colors">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent flex-1 outline-none text-white placeholder-white/30 text-sm font-light"
              />
              <button type="submit" className="text-[10px] font-semibold tracking-[0.3em] text-[#c79a52] uppercase group-hover:text-white transition-colors">
                Request Entry
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-16 md:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-4">Sitemap</span>
              <a href="#heritage" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Heritage</a>
              <a href="#philosophy" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Philosophy</a>
              <a href="#process" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Craft</a>
              <a href="#collection" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Collection</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase mb-4">Connect</span>
              <a href="#" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Instagram</a>
              <a href="#" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Journal</a>
              <a href="#" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Concierge</a>
              <a href="#" className="text-white/70 hover:text-[#c79a52] text-sm font-light transition-colors">Stockists</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 text-xs font-light text-white/40">
          <p>© 2024 AURELIA Chocolatier. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
