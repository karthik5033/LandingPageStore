const fs = require('fs');
const path = require('path');

const templates = Array.from({length: 10}, (_, i) => i + 58);

templates.forEach(id => {
  const isLightTheme = id === 67; // Ethos is light theme
  const cardClass = isLightTheme 
    ? 'bg-white/60 backdrop-blur-md border border-black/10 p-8 md:p-12 rounded-xl'
    : 'bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl';
    
  const cardClassSm = isLightTheme 
    ? 'bg-white/60 backdrop-blur-md border border-black/10 p-6 rounded-xl'
    : 'bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-xl';

  // 1. Update page.tsx
  const pagePath = path.join(__dirname, 'src', 'app', `template${id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // Reduce gradient overlay so video is visible
    content = content.replace(/bg-gradient-to-t from-\[#[a-fA-F0-9]+\]\/70 via-transparent to-\[#[a-fA-F0-9]+\]\/40 z-10/g, 'bg-transparent z-10');
    // Also handle templates 58 and 59 that don't have this exact gradient (Wait, they do now because I just rebuilt them!)
    
    // Add card to Hero Left
    content = content.replace(/(\<motion\.div[\s\S]*?initial=\{\{ opacity: 0, y: 40 \}\}[\s\S]*?transition=\{\{[\s\S]*?\}\})[\s\S]*?\>/, (match) => {
      if (match.includes('className=')) return match;
      return match.replace('>', `\n              className="${cardClass}"\n            >`);
    });
    
    // Add card to Hero Right
    content = content.replace(/(\<motion\.div[\s\S]*?initial=\{\{ opacity: 0 \}\}[\s\S]*?transition=\{\{[\s\S]*?\}\}[\s\S]*?)className="md:text-right md:max-w-sm pb-4"/, (match, p1) => {
      return `${p1}className="md:text-right md:max-w-sm pb-4 ${cardClassSm}"`;
    });

    // Add card to Manifesto Left
    content = content.replace(/(\<motion\.div[\s\S]*?initial=\{\{ opacity: 0, y: 40 \}\}[\s\S]*?whileInView=\{\{ opacity: 1, y: 0 \}\}[\s\S]*?viewport=\{\{ once: true, margin: '-10%' \}\}[\s\S]*?transition=\{\{[\s\S]*?\}\})[\s\S]*?\>/, (match) => {
      if (match.includes('className=')) return match;
      return match.replace('>', `\n                className="${cardClass}"\n              >`);
    });

    // Add card to Manifesto Right
    content = content.replace(/(\<motion\.div[\s\S]*?initial=\{\{ opacity: 0, y: 40 \}\}[\s\S]*?whileInView=\{\{ opacity: 1, y: 0 \}\}[\s\S]*?viewport=\{\{ once: true, margin: '-10%' \}\}[\s\S]*?transition=\{\{[\s\S]*?\}\}[\s\S]*?)className="flex flex-col justify-center"/, (match, p1) => {
      return `${p1}className="flex flex-col justify-center ${cardClass}"`;
    });

    fs.writeFileSync(pagePath, content, 'utf8');
  }

  // Determine brand name
  const brandNames = {
    58: 'valor',
    59: 'soma',
    60: 'core',
    61: 'lumina',
    62: 'obelisk',
    63: 'vortex',
    64: 'nova',
    65: 'aeon',
    66: 'origin',
    67: 'ethos'
  };
  const brand = brandNames[id];

  // 2. Update Features.tsx
  const featuresPath = path.join(__dirname, 'src', 'components', brand, 'Features.tsx');
  if (fs.existsSync(featuresPath)) {
    let content = fs.readFileSync(featuresPath, 'utf8');
    
    // Add card to each feature
    const featureCardClass = isLightTheme 
      ? 'group bg-white/60 backdrop-blur-md border border-black/10 p-8 rounded-xl' 
      : 'group bg-black/50 backdrop-blur-md border border-white/10 p-8 rounded-xl';
    
    content = content.replace(/className="group"/g, `className="${featureCardClass}"`);
    fs.writeFileSync(featuresPath, content, 'utf8');
  }

  // 3. Update Process.tsx
  const processPath = path.join(__dirname, 'src', 'components', brand, 'Process.tsx');
  if (fs.existsSync(processPath)) {
    let content = fs.readFileSync(processPath, 'utf8');
    
    const processCardClass = isLightTheme 
      ? 'group border border-black/10 bg-white/60 backdrop-blur-md p-10 md:p-14 hover:border-black/20 transition-all duration-700 rounded-xl'
      : 'group border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-14 hover:border-white/20 transition-all duration-700 rounded-xl';
      
    content = content.replace(/className="group border[^"]*"/g, `className="${processCardClass}"`);
    fs.writeFileSync(processPath, content, 'utf8');
  }

  // 4. Update Products.tsx
  const productsPath = path.join(__dirname, 'src', 'components', brand, 'Products.tsx');
  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    
    const productCardClass = isLightTheme 
      ? 'group relative border border-black/10 bg-white/60 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-black/20 transition-all duration-700 rounded-xl'
      : 'group relative border border-white/10 bg-black/50 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-white/20 transition-all duration-700 rounded-xl';
      
    content = content.replace(/className="group relative border[^"]*"/g, `className="${productCardClass}"`);
    fs.writeFileSync(productsPath, content, 'utf8');
  }
});

console.log("Done updating 58-67");
