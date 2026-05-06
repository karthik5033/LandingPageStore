'use client';

import { categories } from '@/lib/data';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { CreditCard, Smartphone, QrCode, Landmark, Wallet, ShieldCheck, ArrowLeft } from 'lucide-react';

type PaymentMethod = 'card' | 'upi' | 'qr' | 'netbanking' | 'wallet';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const ALL_TEMPLATES = categories.flatMap(c => c.templates);
  const id = searchParams.get('id') || '1';
  const template = ALL_TEMPLATES.find(t => t.id === id) || ALL_TEMPLATES[0];
  const numId = parseInt(template.id, 10);
  const price = (numId % 3 === 0 ? 4.99 : numId % 2 === 0 ? 3.99 : 2.99).toFixed(2);

  const [activeMethod, setActiveMethod] = useState<PaymentMethod>('card');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePay = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  const paymentMethods: { id: PaymentMethod; label: string; icon: React.ReactNode }[] = [
    { id: 'card', label: 'Card', icon: <CreditCard size={16} /> },
    { id: 'upi', label: 'UPI', icon: <Smartphone size={16} /> },
    { id: 'qr', label: 'Scan & Pay', icon: <QrCode size={16} /> },
    { id: 'netbanking', label: 'Net Banking', icon: <Landmark size={16} /> },
    { id: 'wallet', label: 'Wallet', icon: <Wallet size={16} /> },
  ];

  if (success) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: template.accentHex }}>
            <svg className="w-10 h-10" style={{ color: template.accentHex }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h1 className="text-3xl font-light mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Payment <span className="italic" style={{ color: template.accentHex }}>Successful</span>
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Thank you for your purchase. Your download link for <strong className="text-white">{template.name}</strong> has been sent to your email.
          </p>
          <Link href="/gallery" className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60 hover:text-white transition-colors">
            ← Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ backgroundColor: template.accentHex }}
      />
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-0 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl z-10 shadow-2xl overflow-hidden">
        
        {/* Left Side - Product Summary */}
        <div className="flex flex-col justify-between p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <Link href="/gallery" className="text-white/40 hover:text-white text-xs tracking-widest uppercase mb-8 inline-flex items-center gap-2 transition-colors">
              <ArrowLeft size={14} /> Back to Gallery
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-light mb-3 mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Secure <span className="italic" style={{ color: template.accentHex }}>Checkout.</span>
            </h1>
            <p className="text-xs text-white/40 tracking-wider leading-relaxed mb-8">One-time payment. Instant download link to the full source code and high-resolution assets.</p>
            
            {/* Order Summary Card */}
            <div className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 opacity-15 rounded-bl-full" style={{ backgroundColor: template.accentHex }} />
              <div className="relative z-10">
                <span className="text-[9px] font-bold tracking-widest uppercase text-white/40 mb-2 block">Template</span>
                <h3 className="text-xl font-light mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{template.name}</h3>
                <p className="text-[10px] text-white/40 tracking-wider uppercase mb-5">No. {template.id} · {template.description}</p>
                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">Total</span>
                  <span className="text-2xl font-light">${price}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 mt-8 text-[9px] text-white/20 tracking-wider uppercase">
            <ShieldCheck size={12} /> 256-bit SSL Encryption
          </div>
        </div>
        
        {/* Right Side - Payment Methods */}
        <div className="flex flex-col p-6 md:p-10">
          <h3 className="text-xs font-bold tracking-widest uppercase mb-5 text-white/60">Payment Method</h3>
          
          {/* Method Tabs */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {paymentMethods.map(m => (
              <button
                key={m.id}
                onClick={() => setActiveMethod(m.id)}
                className={`flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl border text-[8px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeMethod === m.id 
                    ? 'border-white/20 bg-white/[0.05] text-white' 
                    : 'border-white/5 bg-transparent text-white/30 hover:border-white/10 hover:text-white/50'
                }`}
              >
                {m.icon}
                <span className="hidden sm:block">{m.label}</span>
              </button>
            ))}
          </div>

          {/* Payment Forms */}
          <div className="flex-1 flex flex-col">
            {/* Card Payment */}
            {activeMethod === 'card' && (
              <div className="space-y-4 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">Email for Receipt</label>
                  <input type="email" placeholder="you@example.com" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                </div>
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">Card Number</label>
                  <input type="text" placeholder="4242 4242 4242 4242" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20 tracking-wider" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">Expiry</label>
                    <input type="text" placeholder="MM / YY" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                  </div>
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">CVC</label>
                    <input type="text" placeholder="123" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                  </div>
                </div>
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">Cardholder Name</label>
                  <input type="text" placeholder="Full name on card" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                </div>
              </div>
            )}

            {/* UPI Payment */}
            {activeMethod === 'upi' && (
              <div className="space-y-4 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">UPI ID</label>
                  <input type="text" placeholder="yourname@upi" className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                </div>
                <div className="text-center py-4">
                  <p className="text-[10px] text-white/30 tracking-wider uppercase mb-4">Popular UPI Apps</p>
                  <div className="flex justify-center gap-4">
                    {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                      <button key={app} className="px-4 py-2.5 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-bold tracking-widest uppercase text-white/50 hover:border-white/20 hover:text-white transition-all">
                        {app}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* QR Code Payment */}
            {activeMethod === 'qr' && (
              <div className="flex flex-col items-center py-4 animate-[fadeIn_300ms_ease-out]">
                <p className="text-[10px] text-white/40 tracking-wider uppercase mb-5 font-bold">Scan with any payment app</p>
                {/* Simulated QR Code */}
                <div className="w-48 h-48 bg-white rounded-2xl p-4 mb-5 relative">
                  <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[2px]">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="rounded-[1px]"
                        style={{ 
                          backgroundColor: [0,1,2,3,5,6,7,8,9,10,13,14,15,16,17,21,23,24,25,26,31,32,33,34,38,40,42,46,47,48,49,50,54,55,56,57,58,63].includes(i) ? '#000' : 'transparent'
                        }}
                      />
                    ))}
                  </div>
                  {/* Center logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white text-[7px] font-bold tracking-widest">PAY</span>
                    </div>
                  </div>
                </div>
                <p className="text-[9px] text-white/25 tracking-wider uppercase">Amount: <span className="text-white/50">${price}</span></p>
              </div>
            )}

            {/* Net Banking */}
            {activeMethod === 'netbanking' && (
              <div className="space-y-4 animate-[fadeIn_300ms_ease-out]">
                <div>
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-2 font-bold">Select Your Bank</label>
                  <div className="grid grid-cols-2 gap-2">
                    {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak', 'Yes Bank'].map(bank => (
                      <button key={bank} className="px-4 py-3 bg-white/[0.03] border border-white/5 rounded-xl text-[10px] font-bold tracking-wider uppercase text-white/50 hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition-all text-left">
                        {bank}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <label className="text-[9px] tracking-widest uppercase text-white/40 block mb-1.5 font-bold">Or Search Bank</label>
                  <input type="text" placeholder="Type bank name..." className="w-full bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-colors placeholder:text-white/20" />
                </div>
              </div>
            )}

            {/* Wallet */}
            {activeMethod === 'wallet' && (
              <div className="space-y-3 animate-[fadeIn_300ms_ease-out]">
                <p className="text-[10px] text-white/40 tracking-wider uppercase mb-2 font-bold">Choose Wallet</p>
                {[
                  { name: 'Paytm Wallet', color: '#00BAF2' },
                  { name: 'Amazon Pay', color: '#FF9900' },
                  { name: 'Mobikwik', color: '#E91E63' },
                  { name: 'Freecharge', color: '#8BC34A' },
                ].map(w => (
                  <button key={w.name} className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/5 rounded-xl text-sm font-medium text-white/60 hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition-all text-left flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: w.color }} />
                    {w.name}
                  </button>
                ))}
              </div>
            )}

            {/* Pay Button */}
            <button 
              onClick={handlePay}
              disabled={processing}
              className="w-full py-4 rounded-xl font-bold tracking-widest uppercase text-[11px] transition-all hover:scale-[1.02] mt-6 flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
              style={{ backgroundColor: template.accentHex, color: '#000' }}
            >
              {processing ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="31.42 31.42" strokeLinecap="round" /></svg>
                  Processing...
                </>
              ) : (
                <>Pay ${price}</>
              )}
            </button>
            
            <p className="text-center text-[9px] text-white/20 tracking-widest uppercase mt-3 flex items-center justify-center gap-2">
              <ShieldCheck size={11} /> Encrypted & Secure
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="w-10 h-10 animate-spin">
          <svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" /><circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray={`${2 * Math.PI * 20 * 0.25} ${2 * Math.PI * 20 * 0.75}`} strokeLinecap="round" /></svg>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
