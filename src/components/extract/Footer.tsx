'use client';

export default function ExtractFooter() {
  return (
    <footer className="w-full bg-transparent text-[#ffffff] relative z-20 py-12 px-8 md:px-16 border-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="max-w-sm">
          <span className="text-3xl font-bold tracking-[0.3em] uppercase text-[#ffffff]">
            EXTRACT
          </span>
          <p className="text-[9px] text-[#cfa052] font-bold tracking-[0.4em] uppercase mt-4 mb-6">
            The Perfect Yield
          </p>
          <p className="text-[#ffffff]/50 text-xs font-medium leading-relaxed tracking-wide">
            Precision engineering meets artisan coffee. We believe that absolute control yields the ultimate flavor profile.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24">
          <div>
            <h4 className="text-[10px] text-[#ffffff]/40 uppercase tracking-[0.3em] mb-6 font-bold">Hardware</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-semibold tracking-widest text-[#ffffff]/80">
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Machines</a></li>
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Grinders</a></li>
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] text-[#ffffff]/40 uppercase tracking-[0.3em] mb-6 font-bold">Coffee</h4>
            <ul className="flex flex-col gap-4 text-[11px] font-semibold tracking-widest text-[#ffffff]/80">
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Espresso Blends</a></li>
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Single Origin</a></li>
              <li><a href="#" className="hover:text-[#cfa052] transition-colors duration-300">Subscriptions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-[#ffffff]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-[#ffffff]/40 uppercase font-bold max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} EXTRACT LABS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-[#ffffff] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ffffff] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
