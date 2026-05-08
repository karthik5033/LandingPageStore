'use client';
import { motion } from 'framer-motion';

const pieces = [
  { name: 'CLASSIQUE', description: 'Our signature white bar. Pure cocoa butter, Alpine milk, Madagascar vanilla. Nothing else.', tasting: 'Warm cream, honeycomb, delicate vanilla orchid.', format: 'Bar · 85g', price: '$28' },
  { name: 'CARAMEL BLOND', description: 'The Classique, roasted at low temperature until the milk sugars caramelise into liquid gold.', tasting: 'Toffee, browned butter, toasted marshmallow.', format: 'Bar · 85g', price: '$32' },
  { name: 'FLEUR DE SEL', description: 'Classique finished with hand-harvested Guérande sea salt crystals from Brittany, France.', tasting: 'Sweet cream meets mineral brine. The contrast is electric.', format: 'Bar · 85g', price: '$30' },
  { name: 'YUZU PEARL', description: 'Infused with Japanese yuzu zest and scattered with candied bergamot pearls.', tasting: 'Bright citrus, floral cream, a fizzy, effervescent finish.', format: 'Box · 12 pcs', price: '$48' },
];

export default function IvoireProducts() {
  return (
    <section id="collection" className="relative z-10 py-40 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10%' }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
          <div>
            <span className="text-xs font-medium tracking-[0.5em] text-[#6b4a2e] uppercase block mb-6">La Collection</span>
            <h2 className="text-5xl md:text-7xl font-normal text-[#2a1f1a] leading-[1.1]" style={{ fontFamily: "'Libre Baskerville', serif" }}>Four expressions<br/>of <span className="italic text-[#6b4a2e]">white.</span></h2>
          </div>
          <p className="text-[#5a4d40] text-[15px] font-light leading-[1.9] max-w-md">Each piece begins with our Classique base — then we add a single variable. One ingredient. One transformation.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pieces.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-5%' }} transition={{ delay: i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="group relative border border-[#2a1f1a]/[0.08] bg-[#f5efe6]/80 backdrop-blur-xl p-10 md:p-12 flex flex-col hover:border-[#6b4a2e]/25 transition-all duration-700 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-normal text-[#2a1f1a] tracking-wider group-hover:text-[#6b4a2e] transition-colors duration-500" style={{ fontFamily: "'Libre Baskerville', serif" }}>{p.name}</h3>
                <span className="text-[9px] tracking-[0.2em] text-[#6b4a2e]/40 uppercase border border-[#6b4a2e]/15 px-3 py-1">{p.format}</span>
              </div>
              <p className="text-[#5a4d40] text-[14px] font-light leading-[1.8] mb-6">{p.description}</p>
              <div className="w-full h-[1px] bg-[#2a1f1a]/[0.06] mb-6" />
              <div className="mb-8 flex-1">
                <span className="text-[9px] tracking-[0.3em] text-[#6b4a2e]/50 uppercase block mb-2">Notes</span>
                <p className="text-[#6b4a2e]/70 text-sm font-light italic leading-relaxed" style={{ fontFamily: "'Libre Baskerville', serif" }}>&ldquo;{p.tasting}&rdquo;</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#2a1f1a]/[0.06]">
                <span className="text-2xl font-light text-[#2a1f1a]" style={{ fontFamily: "'Libre Baskerville', serif" }}>{p.price}</span>
                <button className="text-xs font-medium tracking-[0.2em] uppercase text-[#6b4a2e] border border-[#6b4a2e]/25 px-6 py-3 hover:bg-[#6b4a2e] hover:text-[#f5efe6] transition-all duration-500">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
