'use client';
import { motion } from 'framer-motion';

const structures = [
  {
    name: 'PROJECT APEX',
    desc: 'A 40-story residential tower defying gravity with cantilevered concrete terraces.',
    status: 'COMPLETED 2024',
  },
  {
    name: 'THE VAULT',
    desc: 'Subterranean data center shielded by 4-meter thick reinforced brutalist walls.',
    status: 'IN PROGRESS',
  },
  {
    name: 'HORIZON HQ',
    desc: 'Corporate campus merging raw steel frameworks with native forest ecosystems.',
    status: 'DESIGN PHASE',
  }
];

export default function MonolithProducts() {
  return (
    <section id="structures" className="relative z-10 py-40 px-6 md:px-24 border-t border-white/10 bg-gradient-to-t from-black/80 to-black/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-32"
      >
        <span className="block text-gray-600 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase">
          Selected Works
        </span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
          Monolithic <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">Structures</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {structures.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
            className="group relative p-12 bg-[#050505] border border-white/10 hover:border-white/40 transition-all duration-500 flex flex-col"
          >
            <div className="mb-12">
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">{s.status}</span>
            </div>
            
            <h3 className="text-3xl font-bold tracking-tighter text-white mb-6 uppercase">{s.name}</h3>
            <p className="text-sm font-medium tracking-wide leading-relaxed text-gray-500 mb-12 flex-grow">{s.desc}</p>
            
            <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
              <button className="text-[10px] font-bold tracking-[0.4em] uppercase text-white group-hover:text-gray-400 transition-colors">
                View Case Study
              </button>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <span className="font-bold">&rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
