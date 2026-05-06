import fs from 'fs';
import path from 'path';

// 32: EMBER (Chili Red) - Aggressive, warning label, angular layout
const emberDir = path.join('src', 'components', 'ember');
fs.writeFileSync(path.join(emberDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-black/40 backdrop-blur-md border-t-2 border-[#dc143c]/30">
      <div className="container mx-auto px-6 md:px-16">
        <div className="max-w-2xl mb-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div className="inline-block px-4 py-1 border border-[#dc143c] text-[#dc143c] text-[10px] tracking-widest uppercase font-bold mb-8 animate-pulse">Extreme Heat Warning</div>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase font-sans mb-8">
              Forged in <span className="text-[#dc143c]">Fire.</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#dc143c]/20 hidden md:block" />
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/60 backdrop-blur-lg border border-[#dc143c]/40 p-10 transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-5xl font-black text-[#dc143c] mb-4 opacity-50">01</h3>
            <h4 className="text-2xl text-white font-bold uppercase mb-4 tracking-widest">High Altitude Isolation</h4>
            <p className="text-white/60 font-light leading-relaxed">Grown on volcanic slopes where extreme UV exposure forces the peppers to produce maximum capsaicin defense mechanisms.</p>
          </motion.div>
          
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-black/60 backdrop-blur-lg border border-[#dc143c]/40 p-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="text-5xl font-black text-[#dc143c] mb-4 opacity-50">02</h3>
            <h4 className="text-2xl text-white font-bold uppercase mb-4 tracking-widest">Hearth Smoking</h4>
            <p className="text-white/60 font-light leading-relaxed">Slow-smoked for 72 hours over hickory, infusing the raw aggressive heat with a deep, savory umami profile.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(emberDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#dc143c]/10 backdrop-blur-lg border-y border-[#dc143c] py-20 px-8 text-center relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dc143c] to-transparent" />
          <h2 className="text-7xl font-black text-white tracking-tighter uppercase mb-8">Scoville <span className="text-[#dc143c]">Overload</span></h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">350K+</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Scoville Units</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">Zero</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Extracts Used</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold text-white mb-2">100%</span>
              <span className="text-[10px] text-[#dc143c] tracking-[0.3em] uppercase">Pure Mash</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(emberDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[#dc143c]/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="aspect-square bg-gradient-to-br from-[#dc143c]/30 to-black rounded-full blur-3xl absolute inset-0" />
            <div className="aspect-[4/3] bg-black/80 border-2 border-[#dc143c] relative z-10 flex flex-col justify-between p-12">
              <span className="text-[#dc143c] font-mono text-sm tracking-widest">ITEM // 001</span>
              <div>
                <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Hellfire Flakes</h3>
                <p className="text-white/60 font-mono text-xs max-w-sm mb-8">Coarse crushed. Preserving the seeds for maximum capsaicin delivery.</p>
                <button className="bg-[#dc143c] text-black font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors">Acquire - $30</button>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="aspect-[4/3] bg-black/80 border border-white/10 relative flex flex-col justify-between p-12 hover:border-[#dc143c]/50 transition-colors">
              <span className="text-white/50 font-mono text-sm tracking-widest">ITEM // 002</span>
              <div>
                <h3 className="text-4xl font-bold text-white uppercase tracking-tighter mb-4">Smoked Dust</h3>
                <p className="text-white/60 font-mono text-xs max-w-sm mb-8">Micro-milled for instant absorption. Intense hickory profile.</p>
                <button className="border border-[#dc143c] text-[#dc143c] font-black uppercase tracking-widest px-8 py-4 hover:bg-[#dc143c] hover:text-black transition-colors">Acquire - $25</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`);

// 33: OCHRE (Turmeric Yellow) - Apothecary, herbalist, glowing
const ochreDir = path.join('src', 'components', 'ochre');
fs.writeFileSync(path.join(ochreDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-black/30 backdrop-blur-xl border-t border-[#dcb83c]/20 rounded-t-[4rem]">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <span className="text-[#dcb83c] text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">The Ancient Root</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Unearthed <span className="italic text-[#dcb83c]">Wisdom.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { step: 'Curing', desc: 'Boiled in spring water and dried in the shade for 15 days to lock in the essential curcurminoids.' },
            { step: 'Polishing', desc: 'Gently tumbled in traditional bamboo drums to remove the rough exterior and reveal the golden core.' },
            { step: 'Activation', desc: 'Blended with micro-doses of black pepper extract to increase bioavailability by 2000%.' }
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-10 border border-white/5 rounded-full aspect-square flex flex-col items-center justify-center bg-gradient-to-b from-black/60 to-transparent hover:border-[#dcb83c]/40 transition-all duration-700">
              <div className="w-16 h-16 rounded-full bg-[#dcb83c]/10 flex items-center justify-center mb-6 text-[#dcb83c] font-serif text-xl border border-[#dcb83c]/30 shadow-[0_0_30px_rgba(220,184,60,0.2)]">
                {i + 1}
              </div>
              <h3 className="text-2xl text-white mb-4 font-serif">{item.step}</h3>
              <p className="text-white/50 text-sm font-light text-center px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(ochreDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="bg-black/40 backdrop-blur-2xl border border-[#dcb83c]/20 rounded-3xl p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#dcb83c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Gold Standard of <span className="italic text-[#dcb83c]">Curcumin.</span>
            </h2>
            <ul className="space-y-6">
              {[
                '8%+ Curcumin content (Standard is 2%)',
                'Hand-harvested in the Meghalaya hills',
                'Cold-milled to prevent thermal degradation',
                'Zero heavy metals or synthetic dyes'
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white/70 font-light">
                  <span className="w-2 h-2 rounded-full bg-[#dcb83c] shadow-[0_0_10px_rgba(220,184,60,0.8)]" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(ochreDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <span className="text-[#dcb83c] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Apothecary</span>
        <h2 className="text-4xl md:text-6xl font-light text-white mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>Healing Blends</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Golden Milk Elixir', 'Pure Root Powder', 'Immunity Extract', 'Activated Capsules'].map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 border border-white/10 rounded-2xl bg-gradient-to-t from-black/80 to-transparent hover:border-[#dcb83c]/50 transition-colors group">
              <div className="w-full aspect-square rounded-full border border-white/5 bg-black/50 mb-8 flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(220,184,60,0.15)] transition-shadow">
                <span className="text-[#dcb83c]/20 font-serif text-xs">OCHRE</span>
              </div>
              <h3 className="text-xl text-white font-serif mb-2">{name}</h3>
              <p className="text-[#dcb83c] text-sm font-light mb-6">From $38</p>
              <button className="w-full py-3 text-[10px] tracking-widest uppercase text-white/60 border border-white/10 rounded-full group-hover:text-black group-hover:bg-[#dcb83c] group-hover:border-[#dcb83c] transition-all">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 34: FLAME (Cayenne Heat) - Dynamic, diagonal, energetic
const flameDir = path.join('src', 'components', 'flame');
fs.writeFileSync(path.join(flameDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-black/40 backdrop-blur-md overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4500] to-transparent opacity-50" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <h2 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter mb-6 uppercase leading-none">
              Raw <br /><span className="text-[#ff4500]">Velocity.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md border-l-4 border-[#ff4500] pl-6">
              Harvested at the exact moment of crimson maturation. Flash-dried instantly to capture the volatile heat compounds before they degrade.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full relative">
            <div className="w-full aspect-video bg-black/80 border border-[#ff4500]/30 transform -skew-x-12 overflow-hidden flex items-center justify-center group hover:border-[#ff4500] transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff4500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="text-4xl font-black text-[#ff4500] italic tracking-tighter transform skew-x-12">FLASH DRYING</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(flameDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: '90K', d: 'Scoville Heat Units' },
            { t: '12HR', d: 'Field to Mill Time' },
            { t: '100%', d: 'Capsaicin Retention' },
            { t: 'ZERO', d: 'Artificial Colorants' }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/60 backdrop-blur-md border border-white/5 p-12 hover:bg-[#ff4500]/10 hover:border-[#ff4500]/50 transition-all transform hover:-translate-y-2">
              <h3 className="text-6xl font-black italic text-white tracking-tighter mb-2">{f.t}</h3>
              <p className="text-[#ff4500] font-bold tracking-widest uppercase text-sm">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(flameDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[#ff4500]/20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-between items-end border-b-2 border-white/10 pb-8 mb-16">
          <h2 className="text-5xl font-black italic text-white tracking-tighter uppercase">The Arsenal</h2>
          <span className="text-[#ff4500] font-bold tracking-widest uppercase text-sm hidden md:block">View All Ignitions</span>
        </motion.div>

        <div className="flex flex-col gap-4">
          {[
            { n: 'Cayenne Extract', p: '$45' },
            { n: 'Crushed Fire Flakes', p: '$22' },
            { n: 'Whole Crimson Pods', p: '$30' }
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex justify-between items-center bg-black/60 border border-white/5 p-8 hover:border-[#ff4500] group cursor-pointer transition-colors">
              <h3 className="text-3xl font-black italic text-white tracking-tighter uppercase group-hover:text-[#ff4500] transition-colors">{p.n}</h3>
              <div className="flex items-center gap-8">
                <span className="text-white/50 font-bold">{p.p}</span>
                <div className="w-12 h-12 rounded-full bg-[#ff4500]/20 flex items-center justify-center group-hover:bg-[#ff4500] transition-colors">
                  <span className="text-white text-xl font-black">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 35: CASSIA (Cinnamon Bark) - Luxurious, woody, serif elegance
const cassiaDir = path.join('src', 'components', 'cassia');
fs.writeFileSync(path.join(cassiaDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-[#0a0604]/80 backdrop-blur-xl border-y border-[#d2691e]/20">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-[#d2691e] text-xs font-bold tracking-[0.5em] uppercase mb-8 block font-serif">The Art of Peeling</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stripped to the <br /><span className="italic text-[#d2691e]">Sweet Core.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-20 max-w-2xl mx-auto">
            Our harvesters carefully peel the inner bark of mature Cinnamomum verum trees. The bark is then left to curl naturally in the sun, forming the delicate, fragile quills that distinguish true Ceylon cinnamon from the harsh, thick bark of commercial Cassia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Harvesting', 'Quill Rolling', 'Shade Drying'].map((step, i) => (
            <div key={i} className="border-t border-[#d2691e]/30 pt-8 text-left">
              <span className="text-[#d2691e] font-serif text-xl italic mb-4 block">Chapter {i+1}</span>
              <h3 className="text-2xl text-white font-light" style={{ fontFamily: "'Playfair Display', serif" }}>{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(cassiaDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="border border-[#d2691e]/20 p-4 rounded-sm bg-black/40 backdrop-blur-md">
          <div className="border border-[#d2691e]/20 p-12 md:p-24 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10" />
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  True <span className="italic text-[#d2691e]">Ceylon.</span>
                </h2>
                <p className="text-white/60 leading-relaxed font-light mb-8">
                  Commercial cinnamon is often harsh, spicy, and contains high levels of coumarin. CASSIA sources exclusively true Ceylon cinnamon—sweet, floral, delicate, and entirely safe for daily consumption.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0.004%</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Coumarin Level</span>
                </div>
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Alba</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Highest Grade</span>
                </div>
                <div>
                  <span className="text-4xl text-white font-light block mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Sweet</span>
                  <span className="text-[#d2691e] text-[10px] tracking-widest uppercase">Flavor Profile</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(cassiaDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-[#0a0604]/90 backdrop-blur-xl border-t border-[#d2691e]/30">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-light text-white mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {['Alba Quills', 'Milled Powder', 'Bark Extract'].map((n, i) => (
            <motion.div key={n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-black border border-white/10 mb-8 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[#d2691e]/5 group-hover:bg-[#d2691e]/20 transition-colors duration-700" />
                <div className="w-16 h-24 border border-[#d2691e]/40 rounded-sm absolute" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-white font-light mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{n}</h3>
                <span className="text-[#d2691e] font-serif italic">$28.00</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 36: ANISE (Star Anise) - Mysterious, dark, minimal
const aniseDir = path.join('src', 'components', 'anise');
fs.writeFileSync(path.join(aniseDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-black/50 backdrop-blur-2xl">
      <div className="container mx-auto px-6 md:px-16 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="w-full max-w-4xl border border-[#4b0082]/30 p-16 md:p-32 rounded-[3rem] text-center bg-black/60 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#4b0082]/20 rounded-full blur-[100px]" />
          <span className="text-[#9370db] text-xs font-bold tracking-[0.6em] uppercase mb-8 block">The Midnight Harvest</span>
          <h2 className="text-5xl md:text-7xl font-light text-white mb-10 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Plucked by <span className="italic text-[#9370db]">Moonlight.</span>
          </h2>
          <p className="text-white/50 font-light leading-relaxed text-lg max-w-xl mx-auto">
            The star-shaped pods are harvested exclusively at night when the temperature drops, preventing the highly volatile licorice-scented essential oils from evaporating in the sun.
          </p>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(aniseDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            {[
              { t: 'Whole Pods', d: 'Never broken. Eight perfect points on every star.' },
              { t: 'Anethole Rich', d: 'Maximum concentration of the active licorice compound.' },
              { t: 'Shade Cured', d: 'Dried slowly in dark lofts for 30 days.' }
            ].map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="mb-12 last:mb-0 border-l border-[#4b0082] pl-8">
                <h3 className="text-3xl text-white font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{f.t}</h3>
                <p className="text-white/40 font-light">{f.d}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 border border-[#4b0082]/40 rounded-full flex items-center justify-center relative animate-[spin_60s_linear_infinite]">
              <div className="absolute inset-4 border border-[#9370db]/20 rounded-full" />
              <div className="text-[#9370db] font-serif italic text-2xl rotate-45">Eight Points</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(aniseDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-black/60 backdrop-blur-xl border-t border-[#4b0082]/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-5xl font-light text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Dark Collection</h2>
          <div className="w-px h-16 bg-gradient-to-b from-[#4b0082] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {['Midnight Stars', 'Anise Extract', 'Crushed Licorice'].map((p, i) => (
            <motion.div key={p} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex-1 bg-black border border-white/5 p-10 hover:border-[#9370db]/50 transition-all text-center group rounded-2xl">
              <h3 className="text-2xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <p className="text-[#9370db] font-serif italic mb-8">$22.00</p>
              <div className="w-12 h-12 rounded-full border border-white/10 mx-auto flex items-center justify-center group-hover:bg-[#4b0082]/20 transition-colors cursor-pointer">
                <span className="text-white">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

console.log('Custom templates for 32-36 created successfully.');
