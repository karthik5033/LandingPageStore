'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-[#00f0ff]/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-12">
          <div className="max-w-md">
            <span className="block font-bold text-3xl tracking-[0.3em] text-white mb-6 uppercase" style={{ fontFamily: "'Syncopate', sans-serif" }}>
              KINETIC
            </span>
            <p className="text-[#00f0ff]/60 text-xs font-mono leading-relaxed">
              High-voltage kinetic fuel. Engineered for those who demand uncompromising performance and sustained output. Welcome to the new runtime.
            </p>
          </div>
          
          <div className="flex gap-16 font-mono">
            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00f0ff] mb-6 border-b border-[#00f0ff]/30 pb-2 inline-block">Database</h5>
              <ul className="flex flex-col gap-4 text-xs text-[#00f0ff]/50">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Core Specs</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Clinical Data</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#00f0ff] mb-6 border-b border-[#00f0ff]/30 pb-2 inline-block">Terminal</h5>
              <ul className="flex flex-col gap-4 text-xs text-[#00f0ff]/50">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Acquire</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Subscribe</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Hardware</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#00f0ff]/20 text-[9px] text-[#00f0ff]/40 font-bold uppercase tracking-[0.3em] font-mono">
          <p>SYS.DATE {new Date().getFullYear()} // KINETIC LABS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#00f0ff] transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-[#00f0ff] transition-colors">Terms of Op</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
