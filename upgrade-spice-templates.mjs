import fs from 'fs';
import path from 'path';

const templates = [
  { id: 32, brand: 'ember', title: 'EMBER', accent: '#dc143c', font: 'Playfair Display' },
  { id: 33, brand: 'ochre', title: 'OCHRE', accent: '#dcb83c', font: 'Playfair Display' },
  { id: 34, brand: 'flame', title: 'FLAME', accent: '#ff4500', font: 'Playfair Display' },
  { id: 35, brand: 'cassia', title: 'CASSIA', accent: '#d2691e', font: 'Playfair Display' },
  { id: 36, brand: 'anise', title: 'ANISE', accent: '#4b0082', font: 'Playfair Display' },
  { id: 37, brand: 'caraway', title: 'CARAWAY', accent: '#556b2f', font: 'Playfair Display' },
  { id: 38, brand: 'mace', title: 'MACE', accent: '#daa520', font: 'Playfair Display' },
  { id: 39, brand: 'sumac', title: 'SUMAC', accent: '#800000', font: 'Playfair Display' },
  { id: 40, brand: 'masala', title: 'MASALA', accent: '#e2725b', font: 'Playfair Display' },
  { id: 41, brand: 'fennel', title: 'FENNEL', accent: '#4caf50', font: 'Playfair Display' },
  { id: 42, brand: 'chai', title: 'CHAI', accent: '#8d6e63', font: 'Playfair Display' },
  { id: 43, brand: 'clove', title: 'CLOVE', accent: '#5d4037', font: 'Playfair Display' },
  { id: 44, brand: 'nutmeg', title: 'NUTMEG', accent: '#a1887f', font: 'Playfair Display' },
  { id: 45, brand: 'coriander', title: 'CORIANDER', accent: '#ffb300', font: 'Playfair Display' },
  { id: 46, brand: 'pepper', title: 'PEPPER', accent: '#424242', font: 'Playfair Display' },
  { id: 47, brand: 'cardamom', title: 'CARDAMOM', accent: '#81c784', font: 'Playfair Display' },
  { id: 48, brand: 'vanilla', title: 'VANILLA', accent: '#f3e5ab', font: 'Playfair Display' },
  { id: 49, brand: 'ginger', title: 'GINGER', accent: '#ffcc80', font: 'Playfair Display' },
  { id: 50, brand: 'allium', title: 'ALLIUM', accent: '#f5f5dc', font: 'Playfair Display' }
];

const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

for (const t of templates) {
  const compDir = path.join('src', 'components', t.brand);
  const CompName = titleCase(t.brand);

  // Upgrade Process
  fs.writeFileSync(path.join(compDir, 'Process.tsx'), `'use client';
import { motion } from 'framer-motion';

export default function Process() {
  const processes = [
    { step: '01', title: 'Sourcing', desc: 'Directly sourced from high-altitude artisan farms.' },
    { step: '02', title: 'Refining', desc: 'Slowly processed using traditional non-mechanized methods.' },
    { step: '03', title: 'Preservation', desc: 'Sealed immediately to lock in volatile essential oils and aromatics.' }
  ];

  return (
    <section id="craft" className="py-32 relative z-20 bg-black/20 backdrop-blur-md border-t border-[${t.accent}]/10">
      <div className="container mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">The Craft</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-none mb-8 tracking-tighter uppercase" style={{ fontFamily: "'${t.font}', serif" }}>
              Forged in <br />
              <span className="italic font-light text-[${t.accent}] normal-case">Tradition.</span>
            </h2>
            <p className="text-white/60 text-base font-light leading-relaxed">
              We refuse to rush perfection. Every step is an orchestrated ritual to elevate the palate.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {processes.map((p, idx) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group flex flex-col md:flex-row items-start md:items-center p-8 md:p-12 border border-[${t.accent}]/20 hover:border-[${t.accent}]/80 transition-colors duration-500 bg-black/40 backdrop-blur-md rounded-lg"
            >
              <div className="text-[${t.accent}] text-6xl font-bold md:w-40 mb-6 md:mb-0 opacity-50 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'${t.font}', serif" }}>{p.step}</div>
              <div className="md:border-l md:border-white/10 md:pl-12 flex-1">
                <h3 className="text-3xl text-white mb-4 tracking-wide uppercase font-bold" style={{ fontFamily: "'${t.font}', serif" }}>{p.title}</h3>
                <p className="text-white/50 text-base font-light leading-relaxed max-w-2xl">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

  // Upgrade Features
  fs.writeFileSync(path.join(compDir, 'Features.tsx'), `'use client';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Sun, Eye } from 'lucide-react';

export default function Features() {
  const metrics = [
    { icon: Star, value: 'Grade I', label: 'Premium Quality', col: 'col-span-1', delay: 0.1 },
    { icon: Eye, value: '100%', label: 'Purity Standard', col: 'col-span-1', delay: 0.2 },
    { icon: Sun, value: 'Natural', label: 'Sun Dried', col: 'col-span-1', delay: 0.3 },
    { icon: ShieldCheck, value: 'ISO', label: 'Certified Organic', col: 'col-span-1 md:col-span-3', delay: 0.4 }
  ];

  return (
    <section id="features" className="py-32 relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">The Anatomy</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight" style={{ fontFamily: "'${t.font}', serif" }}>
              Measurable <br /><span className="italic text-[${t.accent}]">Excellence.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8 max-w-md">
              Sourced from the finest terroirs, ensuring absolute peak concentration of essential oils and aromatic compounds.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: m.delay }}
                className={\`p-8 bg-black/20 backdrop-blur-md border border-white/5 hover:border-[${t.accent}]/40 transition-colors duration-500 rounded-2xl flex flex-col items-center text-center \${m.col}\`}
              >
                <m.icon className="text-[${t.accent}] mb-4" strokeWidth={1} size={24} />
                <span className="text-2xl text-white font-light mb-1" style={{ fontFamily: "'${t.font}', serif" }}>{m.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/50">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}`);

  // Upgrade Products
  fs.writeFileSync(path.join(compDir, 'Products.tsx'), `'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    { name: 'Artisan Selection', price: '$24', desc: 'Perfect for elevating everyday culinary creations. Preserved in UV-protected glass.', weight: '50g Net Wt.' },
    { name: 'Reserve Blend', price: '$45', desc: 'Hand-selected from our highest altitude farms for exceptional depth.', weight: '45g Net Wt.' },
    { name: 'Chef\\'s Vault', price: '$120', desc: 'Limited annual harvest. The ultimate expression of purity and intensity.', weight: '100g Net Wt.' }
  ];

  return (
    <section id="collection" className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[${t.accent}]/20">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[${t.accent}] text-[10px] font-bold tracking-[0.3em] uppercase mb-6 block">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: "'${t.font}', serif" }}>
              Signature Blends.
            </h2>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Available in highly limited quantities to preserve exclusivity and freshness.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group flex flex-col md:flex-row justify-between items-center p-8 md:p-12 border border-white/10 hover:border-[${t.accent}]/50 bg-black/30 backdrop-blur-md rounded-xl transition-all duration-500"
            >
              <div className="flex-1 md:pr-12 text-center md:text-left mb-6 md:mb-0">
                <h3 className="text-2xl text-white font-light mb-2" style={{ fontFamily: "'${t.font}', serif" }}>{product.name}</h3>
                <span className="text-[${t.accent}] font-light font-serif block mb-4">{product.price} <span className="text-white/40 text-xs ml-2 uppercase tracking-widest">{product.weight}</span></span>
                <p className="text-white/50 text-sm font-light leading-relaxed max-w-md mx-auto md:mx-0">
                  {product.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-white/70 group-hover:text-[${t.accent}] transition-colors py-4 px-8 border border-white/10 group-hover:border-[${t.accent}] rounded-full">
                  <span>Add to Reserve</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`);

  // Upgrade Footer
  fs.writeFileSync(path.join(compDir, 'Footer.tsx'), `'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-xl py-20 border-t border-[${t.accent}]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-light text-2xl tracking-[0.2em] text-white uppercase mt-1" style={{ fontFamily: "'${t.font}', serif" }}>${t.title}</span>
            </div>
            <p className="text-white/50 text-sm font-light leading-loose">
              Elevating the culinary experience. We source the finest, purest spices for those who appreciate the subtle nuances of exceptional flavour.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[${t.accent}] mb-8">Explore</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><a href="#collection" className="hover:text-white transition-colors duration-300">Shop Collection</a></li>
                <li><a href="#origin" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.3em] uppercase text-[${t.accent}] mb-8">Connect</h5>
              <ul className="flex flex-col gap-6 text-sm font-light text-white/60">
                <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 text-[10px] text-white/40 font-light tracking-[0.2em] uppercase">
          <p>© {new Date().getFullYear()} ${t.title} SPICES. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[${t.accent}] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[${t.accent}] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}`);

  // Upgrade page.tsx CTA Background
  const pagePath = path.join('src', 'app', `template${t.id}`, 'page.tsx');
  let pageContent = fs.readFileSync(pagePath, 'utf8');
  pageContent = pageContent.replace(
    /bg-black\/60 backdrop-blur-md/g,
    'bg-black/20 backdrop-blur-md border-t border-[' + t.accent + ']/20'
  );
  fs.writeFileSync(pagePath, pageContent);

}

console.log('Templates 32-50 upgraded successfully.');
