'use client';

export default function FractureFooter() {
  return (
    <footer className="w-full bg-transparent text-[#ffffff] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-2xl font-light tracking-[0.4em] uppercase text-[#ffffff]">
            FRACTURE
          </span>
          <p className="text-[9px] text-[#c98a53] font-light tracking-[0.4em] uppercase mt-4 mb-6">
            Coffee Deconstructed
          </p>
          <p className="text-[#ffffff]/50 text-[11px] font-light leading-relaxed tracking-wide">
            Breaking down the barriers of traditional coffee extraction. Experience flavor at the molecular level.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[9px] text-[#ffffff]/40 uppercase tracking-[0.4em] mb-6 font-semibold">Inventory</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#ffffff]/80">
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">Shattered Beans</a></li>
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">Extraction Gear</a></li>
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">Merchandise</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[9px] text-[#ffffff]/40 uppercase tracking-[0.4em] mb-6 font-semibold">Network</h4>
            <ul className="flex flex-col gap-4 text-[10px] font-light tracking-widest text-[#ffffff]/80">
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">The Lab</a></li>
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">Methodology</a></li>
              <li><a href="#" className="hover:text-[#c98a53] transition-colors duration-300">Contact Protocol</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#ffffff]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.4em] text-[#ffffff]/40 uppercase font-light max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} FRACTURE COFFEE LABS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#ffffff] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
