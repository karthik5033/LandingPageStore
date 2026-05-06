import fs from 'fs';
import path from 'path';

const replacements = [
  // EMBER
  {
    file: 'ember/Process.tsx',
    find: 'className="py-32 relative z-20 bg-black/40 backdrop-blur-md border-t-2 border-[#dc143c]/30"',
    replace: 'className="py-32 relative z-20 bg-transparent border-t-2 border-[#dc143c]/30"'
  },
  {
    file: 'ember/Products.tsx',
    find: 'className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[#dc143c]/20"',
    replace: 'className="py-32 relative z-20 bg-transparent border-t border-[#dc143c]/20"'
  },
  
  // OCHRE
  {
    file: 'ochre/Process.tsx',
    find: 'className="py-40 relative z-20 bg-black/30 backdrop-blur-xl border-t border-[#dcb83c]/20 rounded-t-[4rem]"',
    replace: 'className="py-40 relative z-20 bg-transparent border-t border-[#dcb83c]/20 rounded-t-[4rem]"'
  },
  {
    file: 'ochre/Features.tsx',
    find: 'className="bg-black/40 backdrop-blur-2xl border border-[#dcb83c]/20 rounded-3xl p-12 md:p-24 overflow-hidden relative"',
    replace: 'className="bg-black/40 backdrop-blur-sm border border-[#dcb83c]/20 rounded-3xl p-12 md:p-24 overflow-hidden relative"'
  },
  {
    file: 'ochre/Products.tsx',
    find: 'className="py-32 relative z-20 bg-black/50 backdrop-blur-md"',
    replace: 'className="py-32 relative z-20 bg-transparent"'
  },

  // FLAME
  {
    file: 'flame/Process.tsx',
    find: 'className="py-32 relative z-20 bg-black/40 backdrop-blur-md overflow-hidden"',
    replace: 'className="py-32 relative z-20 bg-transparent overflow-hidden"'
  },
  {
    file: 'flame/Products.tsx',
    find: 'className="py-32 relative z-20 bg-black/40 backdrop-blur-lg border-t border-[#ff4500]/20"',
    replace: 'className="py-32 relative z-20 bg-transparent border-t border-[#ff4500]/20"'
  },

  // CASSIA
  {
    file: 'cassia/Process.tsx',
    find: 'className="py-40 relative z-20 bg-[#0a0604]/80 backdrop-blur-xl border-y border-[#d2691e]/20"',
    replace: 'className="py-40 relative z-20 bg-transparent border-y border-[#d2691e]/20"'
  },
  {
    file: 'cassia/Products.tsx',
    find: 'className="py-32 relative z-20 bg-[#0a0604]/90 backdrop-blur-xl border-t border-[#d2691e]/30"',
    replace: 'className="py-32 relative z-20 bg-transparent border-t border-[#d2691e]/30"'
  },

  // ANISE
  {
    file: 'anise/Process.tsx',
    find: 'className="py-40 relative z-20 bg-black/50 backdrop-blur-2xl"',
    replace: 'className="py-40 relative z-20 bg-transparent"'
  },
  {
    file: 'anise/Products.tsx',
    find: 'className="py-32 relative z-20 bg-black/60 backdrop-blur-xl border-t border-[#4b0082]/30"',
    replace: 'className="py-32 relative z-20 bg-transparent border-t border-[#4b0082]/30"'
  }
];

for (const req of replacements) {
  const filePath = path.join('src', 'components', req.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(req.find, req.replace);
    fs.writeFileSync(filePath, content);
  }
}
console.log('Fixed backgrounds specifically without breaking inner cards.');
