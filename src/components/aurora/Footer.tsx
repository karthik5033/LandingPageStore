'use client';

export default function AuroraFooter() {
  return (
    <footer className="w-full bg-black/40 backdrop-blur-md text-white relative z-20 py-10 px-6 md:px-20 border-t border-yellow-500/10">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 max-w-7xl mx-auto mb-20">
        
        <div className="text-center md:text-left md:w-1/3">
          <span className="text-3xl font-light tracking-[0.3em] uppercase text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            AURORA
          </span>
          <p className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase mt-4">
            The Citrus Dawn
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:w-2/3 text-center md:text-left">
          <div>
            <h4 className="text-[9px] font-bold text-yellow-400 uppercase tracking-[0.3em] mb-6">Nectars</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-light tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Daybreak</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Golden Hour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twilight</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] font-bold text-yellow-400 uppercase tracking-[0.3em] mb-6">World</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-light tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">The Groves</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[9px] font-bold text-yellow-400 uppercase tracking-[0.3em] mb-6">Connect</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-light tracking-widest text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-gray-600 uppercase font-medium max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} AURORA WELLNESS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
