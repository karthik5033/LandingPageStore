'use client';
import { motion } from 'framer-motion';
import { Star, Trophy, Users } from 'lucide-react';

const reviews = [
    {
        name: "ALEX 'VORTEX' K.",
        role: "PRO VALORANT PLAYER",
        text: "The reaction time boost is noticeable instantly. No jitters, just pure lock-in focus for 6+ hour scrims.",
        rating: 5
    },
    {
        name: "SARAH JENKINS",
        role: "TWITCH PARTNER",
        text: "Finally an energy drink that doesn't taste like battery acid. The Cyber Cherry is genuinely addicting.",
        rating: 5
    },
    {
        name: "MARCUS D.",
        role: "SOFTWARE ARCHITECT",
        text: "Replaced my morning coffee context switching. Keeps me in the flow state longer than anything else.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" className="min-h-screen py-32 px-6 md:px-12 relative z-10 pointer-events-none overflow-hidden flex items-center justify-start text-left">
             {/* Gradient Background for text legibility */}
             <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-black via-black/90 to-transparent z-0 pointer-events-none" />

             <div className="max-w-7xl mx-auto w-full relative z-10 pointer-events-auto">
                 
                 <div className="md:w-1/2 flex flex-col items-start">
                    <motion.div
                       initial={{ opacity: 0, x: -50 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                    >
                       <div className="flex items-center gap-2 mb-4">
                           <Trophy className="text-[#ccff00]" size={20} />
                           <span className="text-[#ccff00] font-black uppercase tracking-[0.4em] text-sm">Elite Verified</span>
                       </div>
                       
                       <h2 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-12 text-white">
                          Tested in <br/> <span className="text-white border-b-4 border-[#ccff00]">Combat.</span>
                       </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                       {reviews.map((rev, i) => (
                           <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.2 }}
                              className="border-l-2 border-white/10 pl-6 hover:border-[#ccff00] transition-colors group cursor-default"
                           >
                               <div className="flex gap-1 mb-2">
                                   {[...Array(rev.rating)].map((_, r) => (
                                       <Star key={r} size={12} className="fill-[#ccff00] text-[#ccff00]" />
                                   ))}
                               </div>
                               <p className="text-xl text-gray-300 font-medium italic mb-4 leading-relaxed group-hover:text-white transition-colors">"{rev.text}"</p>
                               <div>
                                   <div className="text-white font-black uppercase tracking-widest text-sm">{rev.name}</div>
                                   <div className="text-[#ccff00] text-[10px] font-mono tracking-[0.2em] uppercase">{rev.role}</div>
                               </div>
                           </motion.div>
                       ))}
                    </div>
                 </div>

             </div>
        </section>
    );
}
