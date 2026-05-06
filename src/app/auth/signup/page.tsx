'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github, Chrome, Apple, ShieldCheck } from 'lucide-react';
import { PageTransitionProvider, usePageTransition } from '@/components/PageTransition';
import { AuthProvider, useAuth } from '@/components/AuthContext';

export default function SignupPage() {
  return (
    <AuthProvider>
      <PageTransitionProvider>
        <SignupContent />
      </PageTransitionProvider>
    </AuthProvider>
  );
}

function SignupContent() {
  const { navigateTo } = usePageTransition();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError('Please enter your name'); return; }
    if (!email.trim()) { setError('Please enter your email'); return; }
    if (!password || password.length < 4) { setError('Password must be at least 4 characters'); return; }
    setError('');
    signup(name.trim(), email.trim());
    navigateTo('/gallery');
  };

  const handleSocialSignup = () => {
    signup('User', '');
    navigateTo('/gallery');
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans relative flex items-center justify-center p-6 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
      `}</style>

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[440px]">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div 
              onClick={() => navigateTo('/')}
              className="inline-block font-light tracking-[0.4em] text-2xl uppercase text-white cursor-pointer hover:text-gray-300 transition-colors mb-4" 
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Atelier
            </div>
            <p className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
              Join the Collection
            </p>
          </motion.div>
        </div>

        {/* Signup Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <h1 className="text-2xl font-light tracking-wide mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
            Create an <span className="italic text-gray-400">Account</span>
          </h1>

          {/* Error message */}
          {error && (
            <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
              <p className="text-[10px] font-bold tracking-widest text-red-400 uppercase">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                  required
                  placeholder="Alexander Wright"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm font-light placeholder:text-gray-700 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  required
                  placeholder="name@studio.com"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm font-light placeholder:text-gray-700 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm font-light placeholder:text-gray-700 focus:outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 px-1 mt-2">
              <div className="mt-1">
                <ShieldCheck size={14} className="text-gray-500" />
              </div>
              <p className="text-[9px] text-gray-500 leading-relaxed tracking-wider uppercase">
                I agree to the <span className="text-white cursor-pointer hover:underline">Terms of Service</span> and <span className="text-white cursor-pointer hover:underline">Privacy Policy</span>.
              </p>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group mt-4"
            >
              Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/5"></div>
            </div>
            <div className="relative flex justify-center text-[9px] font-bold tracking-[0.3em] uppercase">
              <span className="bg-[#050505] px-4 text-gray-600">Join With Social</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-3 gap-4">
            <button onClick={handleSocialSignup} className="flex items-center justify-center py-3 border border-white/5 rounded-xl hover:bg-white/[0.03] hover:border-white/10 transition-all group">
              <Chrome size={18} className="text-gray-500 group-hover:text-white transition-colors" />
            </button>
            <button onClick={handleSocialSignup} className="flex items-center justify-center py-3 border border-white/5 rounded-xl hover:bg-white/[0.03] hover:border-white/10 transition-all group">
              <Apple size={18} className="text-gray-500 group-hover:text-white transition-colors" />
            </button>
            <button onClick={handleSocialSignup} className="flex items-center justify-center py-3 border border-white/5 rounded-xl hover:bg-white/[0.03] hover:border-white/10 transition-all group">
              <Github size={18} className="text-gray-500 group-hover:text-white transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-[10px] font-medium tracking-widest uppercase">
            Already a member?{' '}
            <button 
              onClick={() => navigateTo('/auth/login')}
              className="text-white hover:underline underline-offset-4 transition-all ml-2"
            >
              Sign In
            </button>
          </p>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="fixed top-12 left-12 w-24 h-[1px] bg-white/10 pointer-events-none hidden md:block" />
      <div className="fixed top-12 left-12 w-[1px] h-24 bg-white/10 pointer-events-none hidden md:block" />
      <div className="fixed bottom-12 right-12 w-24 h-[1px] bg-white/10 pointer-events-none hidden md:block" />
      <div className="fixed bottom-12 right-12 w-[1px] h-24 bg-white/10 pointer-events-none hidden md:block" />
    </main>
  );
}
