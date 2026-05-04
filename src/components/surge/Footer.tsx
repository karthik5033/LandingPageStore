'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-[#ccff00]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-md">
            <span className="block font-black italic text-5xl tracking-tighter text-white mb-6 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              SURGE
            </span>
            <p className="text-[#ccff00]/60 text-sm font-mono leading-relaxed">
              Kinetic fruit fuel for the uncompromising. We extract raw potential from nature and supercharge it for maximum human output. No latency. Zero crash.
            </p>
          </div>
          
          <div className="flex gap-16 font-mono">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ccff00] mb-6">Payload</h5>
              <ul className="flex flex-col gap-4 text-xs text-[#ccff00]/50">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Formula V.1</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">The Lab</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Safety Specs</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ccff00] mb-6">Comm-Link</h5>
              <ul className="flex flex-col gap-4 text-xs text-[#ccff00]/50">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Twitter X</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[9px] text-white/40 font-bold uppercase tracking-[0.2em] font-mono">
          <p>© {new Date().getFullYear()} SURGE KINETICS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#ccff00] transition-colors duration-300">Privacy Data</a>
            <a href="#" className="hover:text-[#ccff00] transition-colors duration-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
