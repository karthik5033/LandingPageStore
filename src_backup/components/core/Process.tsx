'use client';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Fractional distillation',
    body: 'We separate cocoa butter from the solid mass at exactly forty-seven degrees celsius. This temperature is critical — one degree higher and the desirable stearic acid fractions begin to degrade. The extracted butter is filtered through activated charcoal to remove any residual bitterness, then recombined at a ratio determined by the specific origin.',
  },
  {
    num: '02',
    title: 'Radiant roast',
    body: 'Our static chamber applies heat through ceramic radiant panels rather than forced convection. The beans sit motionless on perforated trays, receiving uniform energy from all directions. We monitor internal bean temperature via embedded thermocouples, targeting a core of one hundred and thirty-eight degrees over ninety minutes. The result is a roast that preserves the entire aromatic spectrum.',
  },
  {
    num: '03',
    title: 'Sonic refinement',
    body: 'After initial grinding, we pass the cacao mass through an ultrasonic cavitation cell. High-frequency pressure waves shatter the remaining particle clusters without generating the friction heat of traditional roller mills. This achieves a fourteen-micron finish in a single pass — a process that would take conventional equipment twelve hours of continuous grinding.',
  },
  {
    num: '04',
    title: 'Nitrogen temper',
    body: 'The molten chocolate is seeded with pre-crystallised cocoa butter at thirty-one point five degrees, then flash-cooled with food-grade nitrogen. The rapid thermal gradient forces the butter into a tight Type V crystal lattice. We verify crystal structure with a polarising microscope before every pour — any batch showing polymorphic instability is remelted and reseeded from scratch.',
  },
];

export default function CoreProcess() {
  return (
    <section id="craft" className="relative z-10 py-40 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1 }}
          className="mb-28"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-[#00f0ff]" />
            <span className="text-xs font-medium tracking-[0.5em] text-[#00f0ff] uppercase">The pipeline</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-light text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            From raw mass <br />
            <span className="italic text-[#00f0ff]">to final form.</span>
          </h2>
        </motion.div>

        <div className="space-y-1">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="text-5xl font-light text-white/10 group-hover:text-[#00f0ff]/30 transition-colors duration-700 shrink-0" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3
                    className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-[#00f0ff] transition-colors duration-500"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#7a8a9a] text-lg font-light leading-[1.9]">{s.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
