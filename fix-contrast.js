const fs = require('fs');
const path = require('path');

// --- Fix Template 67 (Ethos) - Convert to Dark Theme ---
const t67Path = path.join(__dirname, 'src', 'app', 'template67', 'page.tsx');
if (fs.existsSync(t67Path)) {
  let content = fs.readFileSync(t67Path, 'utf8');
  content = content.replace(/bg-\[\#fafaf8\]/g, 'bg-[#0f1115]');
  content = content.replace(/text-\[\#1a1a1a\]/g, 'text-white');
  content = content.replace(/bg-\[\#1a1a1a\]/g, 'bg-white');
  content = content.replace(/border-\[\#1a1a1a\]/g, 'border-white');
  content = content.replace(/premium-text-shadow-light/g, 'premium-text-shadow');
  
  // Fix the specific button: was text-[#fafaf8], now text-black
  content = content.replace(/text-\[\#fafaf8\]/g, 'text-black');
  
  fs.writeFileSync(t67Path, content, 'utf8');
}

['Features', 'Process', 'Products'].forEach(comp => {
  const compPath = path.join(__dirname, 'src', 'components', 'ethos', `${comp}.tsx`);
  if (fs.existsSync(compPath)) {
    let content = fs.readFileSync(compPath, 'utf8');
    content = content.replace(/bg-\[\#fafaf8\]/g, 'bg-[#0f1115]');
    content = content.replace(/text-\[\#1a1a1a\]/g, 'text-white');
    content = content.replace(/bg-\[\#1a1a1a\]/g, 'bg-white');
    content = content.replace(/border-\[\#1a1a1a\]/g, 'border-white');
    content = content.replace(/premium-text-shadow-light/g, 'premium-text-shadow');
    fs.writeFileSync(compPath, content, 'utf8');
  }
});

// Update data.ts for Ethos
const dataPath = path.join(__dirname, 'src', 'lib', 'data.ts');
if (fs.existsSync(dataPath)) {
  let content = fs.readFileSync(dataPath, 'utf8');
  // Ethos accent was text-[#1a1a1a]
  content = content.replace(
    /id: "67",[\s\S]*?accent: "text-\[\#1a1a1a\]",\s*accentHex: "\#1a1a1a",/,
    'id: "67",\n        name: "ETHOS",\n        description: "Ethical Transparent Cacao",\n        href: "/template67",\n        accent: "text-[#d1d5db]",\n        accentHex: "#d1d5db",'
  );
  fs.writeFileSync(dataPath, content, 'utf8');
}

// --- Fix Template 62 (Obelisk) - Improve Contrast ---
const t62Path = path.join(__dirname, 'src', 'app', 'template62', 'page.tsx');
if (fs.existsSync(t62Path)) {
  let content = fs.readFileSync(t62Path, 'utf8');
  // Darken the via-transparent to via-black/40
  content = content.replace(
    /bg-gradient-to-t from-black\/80 via-transparent to-black\/50 z-10/g,
    'bg-gradient-to-t from-black/90 via-black/40 to-black/70 z-10'
  );
  
  // Make the text shadow even stronger for template 62 specifically
  content = content.replace(
    /\.premium-text-shadow \{[\s\S]*?\}/,
    `.premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.9), 0px 0px 15px rgba(0,0,0,0.8), 0px 0px 5px rgba(0,0,0,0.6);
        }`
  );
  fs.writeFileSync(t62Path, content, 'utf8');
}

console.log("Fixed Template 67 to Dark Theme and improved Template 62 contrast");
