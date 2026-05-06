import fs from 'fs';
import path from 'path';

// 46: PEPPER (#424242) - King of Spices, Bold, Sharp, Classic
const pepperDir = path.join('src', 'components', 'pepper');
fs.writeFileSync(path.join(pepperDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1">
            <span className="text-[#424242] text-xs font-bold tracking-[0.6em] uppercase mb-6 block border-b border-[#424242]/30 pb-4">The King's Harvest</span>
            <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-8">
              Black <br /><span className="text-[#424242] italic">Gold.</span>
            </h2>
            <p className="text-white/70 font-light leading-relaxed text-lg mb-8">
              Black pepper was once the currency of empires. Today, most commercial pepper is a hollow shadow of its former glory—dusty, mild, and stale. We return to the ancient methods, harvesting the peppercorns only when they turn crimson on the vine, ensuring maximum piperine content and a sharp, biting heat that lingers elegantly on the palate.
            </p>
          </motion.div>
          <div className="flex-1 space-y-4">
            {[
              { t: 'The Crimson Pluck', d: 'Harvested entirely by hand when the berries reach peak maturity.' },
              { t: 'Solar Curing', d: 'The berries are blanched in boiling water, then spread under the equatorial sun until the skin oxidizes into a wrinkled, pitch-black armor.' },
              { t: 'Gravity Sorting', d: 'Only the heaviest, most dense peppercorns pass our density test. Lighter, hollow corns are discarded.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/40 backdrop-blur-md p-8 border-l-4 border-[#424242] hover:bg-white/5 transition-colors">
                <h3 className="text-2xl text-white font-bold uppercase tracking-widest mb-2">{s.t}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(pepperDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-black/80 to-[#424242]/20 backdrop-blur-lg border border-white/10 p-12 md:p-24 text-center rounded-[3rem]">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-12">The Piperine Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-6xl font-black text-[#424242] block mb-4">6.5%</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Piperine Content</h4>
              <p className="text-white/40 text-xs">Standard pepper is 2%. Ours delivers triple the heat and aromatic bite.</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0 md:px-8">
              <span className="text-6xl font-black text-[#424242] block mb-4">Tellicherry</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Highest Grade</h4>
              <p className="text-white/40 text-xs">Only the top 10% largest corns qualify for our reserve collection.</p>
            </div>
            <div>
              <span className="text-6xl font-black text-[#424242] block mb-4">Unmilled</span>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Whole Form</h4>
              <p className="text-white/40 text-xs">Pre-ground pepper loses 80% of its oils in a month. We only sell whole corns.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(pepperDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-16">The Reserve Vault</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {['Imperial Black Corns', 'Smoked White Pepper'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/60 backdrop-blur-md border border-[#424242] p-16 hover:border-white transition-colors group">
              <h3 className="text-3xl text-white font-black uppercase tracking-tighter mb-4">{p}</h3>
              <p className="text-white/40 text-sm mb-8">Vacuum-sealed in dark glass to prevent UV degradation.</p>
              <div className="flex justify-between items-center border-t border-white/10 pt-8 mt-8">
                <span className="text-[#424242] text-2xl font-bold">$35.00</span>
                <button className="bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-3 group-hover:bg-[#424242] group-hover:text-white transition-colors">Acquire</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 47: CARDAMOM (#81c784) - Queen of Spices, Floral, Expensive
const cardamomDir = path.join('src', 'components', 'cardamom');
fs.writeFileSync(path.join(cardamomDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-24">
          <span className="text-[#81c784] text-xs font-bold tracking-[0.5em] uppercase mb-8 block font-serif">The Green Queen</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            A Symphony of <span className="italic text-[#81c784]">Eucalyptus.</span>
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            True green cardamom is the third most expensive spice in the world, requiring an astonishing amount of manual labor. Our pods grow in the shade of the forest canopy, slowly developing the complex camphor, citrus, and mint notes that define the highest grade 'Alleppey Green Extra Bold'.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#81c784]/30 to-transparent hidden md:block" />
          {[
            { step: 'I', t: 'Canopy Growth', d: 'Cultivated under native shade trees, protecting the delicate flowers from harsh direct sunlight.' },
            { step: 'II', t: 'Selective Pluck', d: 'Harvesters traverse the steep hillsides, picking only the mature pods every 30 days.' },
            { step: 'III', t: 'Cold Curing', d: 'Dried slowly without artificial heat to preserve the vibrant green hue and volatile oils.' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-black/50 backdrop-blur-lg border border-[#81c784]/20 p-10 rounded-full aspect-square w-72 flex flex-col items-center justify-center relative z-10 hover:border-[#81c784] transition-all">
              <span className="text-3xl text-[#81c784] font-serif italic mb-4">{s.step}</span>
              <h3 className="text-xl text-white font-serif mb-2">{s.t}</h3>
              <p className="text-white/50 text-xs font-light text-center px-4 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(cardamomDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row bg-gradient-to-br from-black/80 to-black/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          <div className="flex-1 p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/5">
            <h2 className="text-4xl font-light text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>Beyond the <span className="italic text-[#81c784]">Pod.</span></h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">Most commercial cardamom is pale, bleached, and devoid of essential oils. True Extra Bold cardamom is plump, vividly green, and so intensely aromatic that a single crushed pod can perfume an entire room.</p>
          </div>
          <div className="flex-1 grid grid-cols-2">
            <div className="p-12 border-b border-r border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">8mm+</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Pod Diameter</span>
            </div>
            <div className="p-12 border-b border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">10%</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Oil Content</span>
            </div>
            <div className="p-12 border-r border-white/5 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">Zero</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Bleaching</span>
            </div>
            <div className="p-12 flex flex-col justify-center items-center text-center">
              <span className="text-[#81c784] text-4xl mb-2 font-serif">100%</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">Hand Sorted</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(cardamomDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light text-white text-center mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Floral Reserve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {['Alleppey Extra Bold Pods', 'Pure Cardamom Seeds'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black/40 backdrop-blur-md border border-[#81c784]/20 p-12 rounded-2xl hover:border-[#81c784] transition-all group text-center">
              <h3 className="text-3xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{p}</h3>
              <p className="text-[#81c784] font-serif italic mb-8">$55.00 / 50g</p>
              <button className="border border-[#81c784] text-[#81c784] px-10 py-3 rounded-full text-xs uppercase tracking-widest group-hover:bg-[#81c784] group-hover:text-black transition-colors">Reserve Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 48: VANILLA (#f3e5ab) - Orchid, Labor-intensive, Luxurious
const vanillaDir = path.join('src', 'components', 'vanilla');
fs.writeFileSync(path.join(vanillaDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/3">
            <span className="text-[#f3e5ab] text-xs font-bold tracking-[0.4em] uppercase mb-8 block font-serif">The Orchid's Gift</span>
            <h2 className="text-5xl font-light text-white leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pollinated by <span className="italic text-[#f3e5ab]">Hand.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              Vanilla is the fruit of an orchid that blooms for only 24 hours. Because the Melipona bee native to Mexico is absent in Madagascar, every single vanilla flower must be meticulously pollinated by hand using a wooden needle—a technique unchanged since 1841.
            </p>
          </motion.div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'Hand Pollination', d: 'A delicate maneuver performed at dawn, marrying the male and female parts of the flower.' },
              { t: 'Nine Month Maturation', d: 'The green pods remain on the vine for nearly a year, developing their core vanillin compounds.' },
              { t: 'The Bourbon Blanch', d: 'Plunged into hot water to stop fermentation and begin the enzymatic curing process.' },
              { t: 'Sweating & Drying', d: 'Wrapped in wool blankets by night to sweat, and baked in the sun by day for months until they form tiny, glittering vanillin crystals.' }
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-white/5 backdrop-blur-md p-8 border border-white/10 hover:border-[#f3e5ab]/50 transition-colors">
                <span className="text-[#f3e5ab] font-serif italic text-xl mb-4 block">0{i+1}</span>
                <h3 className="text-xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{s.t}</h3>
                <p className="text-white/50 text-sm font-light leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(vanillaDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block bg-black/60 backdrop-blur-xl border border-[#f3e5ab]/30 p-16 md:p-24 rounded-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>The True <span className="italic text-[#f3e5ab]">Caviar.</span></h2>
          <p className="text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Synthetic artificial vanilla extract accounts for 99% of global consumption. It is made from petrochemicals or wood pulp. True Madagascar Bourbon vanilla beans contain over 250 distinct flavor compounds—floral, woody, sweet, and incredibly complex—that simply cannot be synthesized in a lab.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-[#f3e5ab] text-sm tracking-widest uppercase">
            <span>Grade A Plump</span>
            <span>✦</span>
            <span>Over 25% Moisture</span>
            <span>✦</span>
            <span>Caviar Dense</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(vanillaDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-light text-white text-center mb-20" style={{ fontFamily: "'Playfair Display', serif" }}>The Orchid Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: 'Grade A Beans', p: '$45.00', d: 'Two impossibly plump, moist Madagascar Bourbon beans.' },
            { n: 'Pure Paste', p: '$65.00', d: 'Thick, caviar-rich paste for baking perfection.' },
            { n: 'Double Fold Extract', p: '$80.00', d: 'Aged in oak barrels for 12 months. Double strength.' }
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-black/50 backdrop-blur-md border-t border-[#f3e5ab]/40 p-12 hover:bg-black/80 transition-colors text-center">
              <h3 className="text-2xl text-white font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{p.n}</h3>
              <p className="text-white/50 text-sm font-light leading-relaxed mb-8">{p.d}</p>
              <span className="text-[#f3e5ab] font-serif italic text-lg block mb-8">{p.p}</span>
              <button className="border-b border-white/30 pb-2 text-white/70 uppercase tracking-widest text-xs hover:text-[#f3e5ab] hover:border-[#f3e5ab] transition-colors">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 49: GINGER (#ffcc80) - Zesty, Fibrous, Medicinal
const gingerDir = path.join('src', 'components', 'ginger');
fs.writeFileSync(path.join(gingerDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <span className="text-[#ffcc80] text-xs font-bold tracking-[0.4em] uppercase mb-6 block">The Rhizome</span>
          <h2 className="text-6xl font-light text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Zesty <span className="italic text-[#ffcc80]">Vitality.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative border-l-2 border-[#ffcc80]/20 pl-8 ml-4 md:ml-auto">
          {[
            { t: 'Subterranean Growth', d: 'Grown deep in nutrient-dense tropical soils for 10 months to develop peak gingerol content.' },
            { t: 'The Dig', d: 'Carefully uprooted by hand to prevent bruising the fibrous, aromatic rhizomes.' },
            { t: 'Cold Milling', d: 'Sun-dried and slowly cold-milled to preserve the sharp, spicy, and citrusy essential oils that heat would destroy.' }
          ].map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="mb-16 relative">
              <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-[#ffcc80] shadow-[0_0_15px_rgba(255,204,128,0.8)]" />
              <div className="bg-black/60 backdrop-blur-md border border-[#ffcc80]/10 p-8 rounded-xl hover:border-[#ffcc80]/50 transition-colors">
                <h3 className="text-2xl text-white font-serif mb-4">{s.t}</h3>
                <p className="text-white/60 font-light leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(gingerDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square rounded-full border border-[#ffcc80]/30 flex items-center justify-center bg-black/40 backdrop-blur-sm p-12 text-center">
            <div>
              <h2 className="text-5xl text-[#ffcc80] font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>High Gingerol</h2>
              <p className="text-white/70 font-light text-lg">Our ginger contains 4x the gingerol content of supermarket alternatives, delivering unmatched medicinal warmth and digestive benefits.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-white text-2xl font-serif mb-2">Fierce Heat</h3>
              <p className="text-white/50 font-light">A sharp, lingering bite that cuts through rich dishes.</p>
            </div>
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-white text-2xl font-serif mb-2">Citrus Undertones</h3>
              <p className="text-white/50 font-light">Bright, lemony aromatic top notes.</p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-serif mb-2">Zero Fibers</h3>
              <p className="text-white/50 font-light">Milled to an ultra-fine, dissolving powder.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(gingerDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-light text-white mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>The Root Collection</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {['Finely Milled Powder', 'Crystallized Chunks'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="w-full md:w-80 bg-black/50 backdrop-blur-md border border-[#ffcc80]/20 p-12 hover:bg-[#ffcc80]/10 transition-colors rounded-3xl">
              <h3 className="text-2xl text-white font-serif mb-6">{p}</h3>
              <span className="text-[#ffcc80] font-serif italic text-xl block mb-8">$18.00</span>
              <button className="w-full border border-[#ffcc80] text-[#ffcc80] uppercase tracking-widest text-xs py-3 rounded-full hover:bg-[#ffcc80] hover:text-black transition-colors">Select</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

// 50: ALLIUM (#f5f5dc) - Beige/Garlic, Savory, Foundation
const alliumDir = path.join('src', 'components', 'allium');
fs.writeFileSync(path.join(alliumDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section id="craft" className="py-40 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-full max-w-5xl bg-black/40 backdrop-blur-xl border border-[#f5f5dc]/20 p-12 md:p-24 rounded-tl-[4rem] rounded-br-[4rem] text-center">
          <span className="text-[#f5f5dc] text-xs font-bold tracking-[0.4em] uppercase mb-8 block">The Foundational Bulb</span>
          <h2 className="text-5xl md:text-7xl font-light text-white leading-tight mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Essence of <span className="italic text-[#f5f5dc]">Savory.</span>
          </h2>
          <p className="text-white/70 font-light leading-relaxed text-lg max-w-2xl mx-auto mb-16">
            Pungent. Sweet. Umami. Our heritage garlic bulbs are grown in cold climates to force the bulb to develop deep, concentrated sugars and fiery allicin compounds. We don't bleach our garlic. We don't irradiate it. It is simply harvested, naturally cured, and gently dehydrated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#f5f5dc]/10 pt-12 text-left">
            {[
              { t: 'Cold Winter Sowing', d: 'Planted before the hard freeze to ensure massive, potent bulb development.' },
              { t: 'Field Curing', d: 'Left to hang in shaded barns for 4 weeks to draw moisture from the stalk into the cloves.' },
              { t: 'Low-Temp Dehydration', d: 'Toasted at extremely low heat to prevent bitterness, locking in the sweet, savory depth.' }
            ].map((s, i) => (
              <div key={i}>
                <h3 className="text-[#f5f5dc] font-serif text-xl mb-3">{s.t}</h3>
                <p className="text-white/50 text-sm font-light">{s.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(alliumDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Features() {
  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 justify-center">
          {[
            { t: 'Intense Allicin', d: 'The compound responsible for the signature pungency is retained at 95%.' },
            { t: 'Zero Anti-Caking', d: 'We refuse to use silicon dioxide. Expect pure, sticky, natural clumping.' }
          ].map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="bg-black/60 backdrop-blur-md p-12 border-t-4 border-[#f5f5dc] w-full md:w-96 text-center">
              <h3 className="text-3xl text-white font-light mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{f.t}</h3>
              <p className="text-white/60 font-light">{f.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

fs.writeFileSync(path.join(alliumDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Products() {
  return (
    <section id="collection" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl text-white font-light text-center mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Pantry Staples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {['Toasted Garlic Granules', 'Fine Garlic Powder'].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-black/40 backdrop-blur-sm border border-white/10 p-10 flex flex-col md:flex-row justify-between items-center hover:border-[#f5f5dc] transition-colors">
              <h3 className="text-2xl text-white font-serif mb-4 md:mb-0">{p}</h3>
              <div className="flex items-center gap-6">
                <span className="text-[#f5f5dc] italic font-serif">$14.00</span>
                <button className="border-b border-[#f5f5dc] text-[#f5f5dc] uppercase tracking-widest text-xs pb-1">Select</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

console.log('Custom templates 46-50 created successfully.');
