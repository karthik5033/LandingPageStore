'use client';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { categories } from '@/lib/data';
import TemplateCard from '@/components/gallery/TemplateCard';
import { PageTransitionProvider } from '@/components/PageTransition';
import { AuthProvider, useAuth } from '@/components/AuthContext';

export default function GalleryPage() {
  return (
    <AuthProvider>
      <GalleryGuard />
    </AuthProvider>
  );
}

function GalleryGuard() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/auth/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-4">
            <svg className="w-full h-full animate-spin" style={{ animationDuration: '2s' }} viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray={`${2 * Math.PI * 20 * 0.25} ${2 * Math.PI * 20 * 0.75}`} strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/25">Redirecting</p>
        </div>
      </div>
    );
  }

  return (
    <PageTransitionProvider>
      <GalleryContent />
    </PageTransitionProvider>
  );
}

function GalleryContent() {
  const { userName, logout } = useAuth();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollY } = useScroll();

  // Filter categories/templates based on search
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const q = searchQuery.toLowerCase();
    return categories
      .map(cat => ({
        ...cat,
        templates: cat.templates.filter(t =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.heroHeadline.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q) ||
          t.id.includes(q)
        )
      }))
      .filter(cat => cat.templates.length > 0);
  }, [searchQuery]);

  const totalResults = filteredCategories.reduce((acc, c) => acc + c.templates.length, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
      `}</style>
      
      {/* Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale"
        >
          <source src="/newv.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 z-10" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 py-5' : 'bg-transparent border-transparent py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-light tracking-[0.3em] text-lg uppercase text-white hover:text-gray-300 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>Atelier</Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            <Link href="/#features" className="hover:text-white transition-colors duration-300">The Engine</Link>
            <Link href="/" className="hover:text-white transition-colors duration-300">About</Link>
          </div>

          {/* Right: User + Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50 bg-white/[0.05] border border-white/10 px-4 py-2 rounded-full">{userName || 'Guest'}</span>
              <button
                onClick={() => { logout(); router.replace('/auth/login'); }}
                className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-500 hover:text-red-400 transition-colors duration-300"
              >
                Logout
              </button>
            </div>
            <Link href="/" className="text-[10px] font-bold uppercase tracking-[0.2em] border border-white/30 text-white px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 inline-block">
              Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 container mx-auto px-6 pt-48 pb-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block text-gray-400 text-[10px] font-bold tracking-[0.5em] mb-6 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Archive
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Complete <span className="italic text-gray-400">Collection</span>
          </h1>
        </motion.div>
      </section>

      {/* Search Bar */}
      <section className="relative z-10 container mx-auto px-6 pb-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates by name, series, or keyword..."
              className="w-full bg-[#111111] border border-white/20 rounded-2xl py-4 pr-12 text-sm font-light placeholder:text-gray-500 focus:outline-none focus:border-white/40 focus:bg-[#151515] transition-all tracking-wider shadow-lg shadow-black/40"
              style={{ paddingLeft: '3rem' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors text-xs"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery.trim() && (
            <p className="text-center mt-3 text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase">
              {totalResults} {totalResults === 1 ? 'template' : 'templates'} found
            </p>
          )}
        </motion.div>
      </section>

      {/* TEMPLATES SHOWCASE */}
      <section className="relative z-10 py-16 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
        <div className="flex flex-col gap-32">
          {filteredCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="flex flex-col gap-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Category Header */}
              <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-light tracking-[0.3em] uppercase text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {category.name}
                  </h3>
                  <p className="text-gray-400 font-light text-base md:text-lg max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.templates.map((t) => (
                  <TemplateCard
                    key={t.id}
                    id={t.id}
                    name={t.name}
                    description={t.description}
                    href={t.href}
                    accentHex={t.accentHex}
                    heroHeadline={t.heroHeadline}
                    icon={t.icon}
                    folder={t.folder}
                    ext={t.ext}
                    prefix={t.prefix}
                    frameCount={t.frameCount}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* No Results */}
          {searchQuery.trim() && filteredCategories.length === 0 && (
            <div className="flex flex-col items-center justify-center py-24">
              <svg className="w-12 h-12 text-white/10 mb-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
              <h4 className="text-xl font-light tracking-[0.2em] text-gray-400 uppercase mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                No templates found
              </h4>
              <p className="text-[10px] text-gray-600 tracking-widest uppercase">Try a different keyword</p>
            </div>
          )}

          {/* COMING SOON INDICATOR */}
          {!searchQuery.trim() && (
            <div className="mt-16 flex flex-col items-center justify-center py-20 px-6 border border-dashed border-white/10 rounded-2xl bg-white/[0.01] backdrop-blur-sm hover:bg-white/[0.02] hover:border-white/20 transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-4 text-center">Expanding The Archive</span>
              <h4 className="text-2xl md:text-3xl font-light tracking-[0.2em] text-gray-300 uppercase text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
                More Exhibits <span className="italic text-gray-500">Coming Soon.</span>
              </h4>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-auto py-12 text-center text-[10px] tracking-[0.3em] font-bold text-gray-600 uppercase">
        <p>© {new Date().getFullYear()} ATELIER STUDIOS. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
