import { categories } from '@/lib/data';
import Link from 'next/link';

export default function CheckoutPage({ searchParams }: { searchParams: { id?: string } }) {
  const ALL_TEMPLATES = categories.flatMap(c => c.templates);
  const id = searchParams.id || '1';
  const template = ALL_TEMPLATES.find(t => t.id === id) || ALL_TEMPLATES[0];
  const numId = parseInt(template.id, 10);
  const price = (numId % 3 === 0 ? 4.99 : numId % 2 === 0 ? 3.99 : 2.99).toFixed(2);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow based on template accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ backgroundColor: template.accentHex }}
      />
      
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 z-10 shadow-2xl">
        
        {/* Left Side - Product Summary */}
        <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-12">
          <div>
            <Link href="/gallery" className="text-white/40 hover:text-white text-xs tracking-widest uppercase mb-12 inline-block transition-colors">
              ← Back to Gallery
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-light mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Secure <span className="italic" style={{ color: template.accentHex }}>Checkout.</span>
            </h1>
            
            <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rounded-bl-full" style={{ backgroundColor: template.accentHex }} />
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-2 block">Item</span>
                <h3 className="text-2xl font-light mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{template.name}</h3>
                <p className="text-xs text-white/50 tracking-wider uppercase mb-6">Template No. {template.id}</p>
                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-6">
                  <span className="text-sm font-bold tracking-widest uppercase">Total</span>
                  <span className="text-3xl font-light">${price}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-xs text-white/40 leading-relaxed max-w-xs">
            <p>One-time payment. You will receive an instant download link to the full source code and high-resolution assets.</p>
          </div>
        </div>
        
        {/* Right Side - Payment Form */}
        <div className="flex flex-col justify-center">
          <form className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/80 border-b border-white/10 pb-4">Payment Details</h3>
              
              <div>
                <label className="text-[10px] tracking-widest uppercase text-white/50 block mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="receipt@example.com" 
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              
              <div>
                <label className="text-[10px] tracking-widest uppercase text-white/50 block mb-2">Card Information</label>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-black/40 border border-white/20 rounded-t-lg px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                />
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    className="w-1/2 bg-black/40 border border-white/20 border-t-0 rounded-bl-lg px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    className="w-1/2 bg-black/40 border border-white/20 border-t-0 border-l-0 rounded-br-lg px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
            </div>
            
            <button 
              type="button" 
              className="w-full py-4 rounded-lg font-bold tracking-widest uppercase text-xs transition-transform hover:scale-[1.02] mt-8 flex items-center justify-center gap-3"
              style={{ backgroundColor: template.accentHex, color: '#000' }}
            >
              Pay ${price}
            </button>
            <p className="text-center text-[10px] text-white/30 tracking-widest uppercase mt-4 flex items-center justify-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Encrypted & Secure
            </p>
          </form>
        </div>
        
      </div>
    </div>
  );
}
