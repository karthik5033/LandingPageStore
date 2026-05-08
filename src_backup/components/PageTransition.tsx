'use client';
import { createContext, useContext, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionContextType {
  navigateTo: (href: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const navigateTo = useCallback((href: string) => {
    setIsTransitioning(true);
    // Navigate after a tiny delay so the overlay renders first
    setTimeout(() => {
      router.push(href);
    }, 50);
  }, [router]);

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}

      {/* Full-screen transition overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black animate-[fadeIn_200ms_ease-out]">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3">
              <span 
                className="text-3xl md:text-4xl font-light tracking-[0.4em] uppercase text-white/90"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Atelier
              </span>
              <span className="text-[9px] font-bold tracking-[0.5em] uppercase text-white/30">
                Studios
              </span>
            </div>

            {/* Spinning ring */}
            <div className="relative w-12 h-12 mt-4">
              <svg className="w-full h-full animate-spin" style={{ animationDuration: '2s' }} viewBox="0 0 48 48">
                <circle
                  cx="24" cy="24" r="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <circle
                  cx="24" cy="24" r="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1"
                  strokeDasharray={`${2 * Math.PI * 20 * 0.25} ${2 * Math.PI * 20 * 0.75}`}
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/25">
              Loading Experience
            </span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </TransitionContext.Provider>
  );
}
