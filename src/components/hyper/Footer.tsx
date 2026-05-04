'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#05020a]/80 backdrop-blur-md py-10 border-t border-[#ff00cc]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-sm">
            <span className="block font-bold text-5xl tracking-widest text-white mb-4 uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              HYPER
            </span>
            <p className="text-white/50 text-sm font-medium leading-relaxed">
              Don't just run. Warp. We engineer the fuel for the next generation of digital athletes and cybernetic pioneers.
            </p>
          </div>
          
          <div className="flex gap-16 md:gap-24">
            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#ff00cc] mb-8">Modules</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">All Payloads</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Hardware Merch</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Auto-Ship</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#ff00cc] mb-8">Comms</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Discord Server</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">X / Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} HYPER SYSTEMS. ACCELERATE EVERYTHING.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#ff00cc] transition-colors">Privacy Data</a>
            <a href="#" className="hover:text-[#ff00cc] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
