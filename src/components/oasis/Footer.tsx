'use client';

export default function OasisFooter() {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-xl text-white relative z-20 pt-20 pb-10 px-6 md:px-20 border-t border-orange-500/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 max-w-7xl mx-auto mb-16">
        
        <div className="text-center md:text-left">
          <span className="text-4xl font-black tracking-[0.3em] uppercase text-white">
            OASIS
          </span>
          <p className="text-[10px] font-bold text-orange-500 tracking-[0.4em] uppercase mt-2">
            Vibrant Tropical Energy
          </p>
        </div>

        <div className="flex gap-10 text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">
          <a href="#" className="hover:text-orange-400 transition-colors">Shop</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Story</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Groves</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] text-gray-600 uppercase font-black max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} OASIS NECTARS. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
