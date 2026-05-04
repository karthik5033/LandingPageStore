'use client';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black/40 backdrop-blur-md py-10 border-t border-rose-500/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-md">
            <h3 className="text-3xl font-black tracking-tighter text-white mb-6 uppercase">Zest</h3>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Vibrant organic elixirs crafted for the bold. 100% cold-pressed fruit energy to fuel your highest potential.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h5 className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-6">Shop</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">All Blends</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gifting</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[10px] font-bold tracking-widest uppercase text-rose-500 mb-6">Company</h5>
              <ul className="flex flex-col gap-4 text-sm font-medium text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sourcing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10 text-[9px] text-white/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} ZEST ORGANICS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
