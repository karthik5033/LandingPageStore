'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-fuchsia-500/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-md">
            <h3 className="text-4xl font-black italic tracking-tighter text-white mb-6 uppercase">CRUSH</h3>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Kinetic fruit energy designed to break boundaries. Pure, unadulterated flavor colliding with medical-grade focus elements.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h5 className="text-[10px] font-black tracking-widest uppercase text-fuchsia-500 mb-6">The Lab</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Formulas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clinical</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-black tracking-widest uppercase text-fuchsia-500 mb-6">Network</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[9px] text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} CRUSH LABS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-fuchsia-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-fuchsia-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
