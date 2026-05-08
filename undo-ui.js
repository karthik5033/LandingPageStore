const fs = require('fs');
const path = require('path');

const templates = Array.from({length: 10}, (_, i) => i + 58);

templates.forEach(id => {
  const isLightTheme = id === 67; // Ethos is light theme
  const brandNames = {
    58: 'valor', 59: 'soma', 60: 'core', 61: 'lumina', 62: 'obelisk',
    63: 'vortex', 64: 'nova', 65: 'aeon', 66: 'origin', 67: 'ethos'
  };
  const brand = brandNames[id];

  const cardRegex1 = /\s*className="bg-(?:black|white)\/\d+\s+backdrop-blur-md\s+border\s+border-(?:white|black)\/\d+\s+p-8\s+md:p-12\s+rounded-xl"/g;
  const cardRegex2 = /\s+bg-(?:black|white)\/\d+\s+backdrop-blur-md\s+border\s+border-(?:white|black)\/\d+\s+p-6\s+rounded-xl/g;
  const cardRegex3 = /\s+bg-(?:black|white)\/\d+\s+backdrop-blur-md\s+border\s+border-(?:white|black)\/\d+\s+p-8\s+md:p-12\s+rounded-xl/g;
  const cardRegex4 = /\s+bg-(?:black|white)\/\d+\s+backdrop-blur-md\s+border\s+border-(?:white|black)\/\d+\s+p-8\s+rounded-xl/g;

  // 1. Update page.tsx
  const pagePath = path.join(__dirname, 'src', 'app', `template${id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Remove standalone classNames added to Hero Left / Manifesto Left
    content = content.replace(cardRegex1, '');
    
    // Remove appended classes from Hero Right / Manifesto Right
    content = content.replace(cardRegex2, '');
    content = content.replace(cardRegex3, '');

    // Revert terroir items
    content = content.replace(/className="group"[^>]*\>/g, 'className="group">');

    // Add CSS block for text shadow
    if (!content.includes('.premium-text-shadow')) {
      const cssBlock = `
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow-light {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      `;
      content = content.replace(/\<\/style\>/, `${cssBlock}\n      </style>`);
    }

    // Apply premium-text-shadow to main text elements inside the <main> block
    // We can do this safely by replacing text-white with text-white premium-text-shadow
    if (isLightTheme) {
      content = content.replace(/text-\[\#1a1a1a\](?![\w\-\/])/g, 'text-[#1a1a1a] premium-text-shadow-light');
    } else {
      content = content.replace(/text-white(?![\w\-\/])/g, 'text-white premium-text-shadow');
      // Also apply to specific brand colors if needed, but text-white is main.
    }

    fs.writeFileSync(pagePath, content, 'utf8');
  }

  // 2. Update Features.tsx
  const featuresPath = path.join(__dirname, 'src', 'components', brand, 'Features.tsx');
  if (fs.existsSync(featuresPath)) {
    let content = fs.readFileSync(featuresPath, 'utf8');
    content = content.replace(/className="group[^"]*"/g, 'className="group"');
    
    if (isLightTheme) {
      content = content.replace(/text-\[\#1a1a1a\](?![\w\-\/])/g, 'text-[#1a1a1a] premium-text-shadow-light');
    } else {
      content = content.replace(/text-white(?![\w\-\/])/g, 'text-white premium-text-shadow');
    }
    fs.writeFileSync(featuresPath, content, 'utf8');
  }

  // 3. Update Process.tsx
  const processPath = path.join(__dirname, 'src', 'components', brand, 'Process.tsx');
  if (fs.existsSync(processPath)) {
    let content = fs.readFileSync(processPath, 'utf8');
    
    // Revert the group card
    if (isLightTheme) {
      content = content.replace(/className="group border border-black\/10 bg-white\/60 backdrop-blur-md p-10 md:p-14 hover:border-black\/20 transition-all duration-700 rounded-xl"/g, 
        'className="group border border-[#1a1a1a]/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 hover:border-[#1a1a1a]/10 transition-all duration-700"');
      content = content.replace(/text-\[\#1a1a1a\](?![\w\-\/])/g, 'text-[#1a1a1a] premium-text-shadow-light');
    } else {
      content = content.replace(/className="group border border-white\/10 bg-black\/50 backdrop-blur-md p-10 md:p-14 hover:border-white\/20 transition-all duration-700 rounded-xl"/g, 
        'className="group border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-14 transition-all duration-700"');
      content = content.replace(/text-white(?![\w\-\/])/g, 'text-white premium-text-shadow');
    }
    fs.writeFileSync(processPath, content, 'utf8');
  }

  // 4. Update Products.tsx
  const productsPath = path.join(__dirname, 'src', 'components', brand, 'Products.tsx');
  if (fs.existsSync(productsPath)) {
    let content = fs.readFileSync(productsPath, 'utf8');
    
    if (isLightTheme) {
      content = content.replace(/className="group relative border border-black\/10 bg-white\/60 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-black\/20 transition-all duration-700 rounded-xl"/g, 
        'className="group relative border border-[#1a1a1a]/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col hover:border-[#1a1a1a]/15 transition-all duration-700"');
      content = content.replace(/text-\[\#1a1a1a\](?![\w\-\/])/g, 'text-[#1a1a1a] premium-text-shadow-light');
    } else {
      content = content.replace(/className="group relative border border-white\/10 bg-black\/50 backdrop-blur-md p-10 md:p-12 flex flex-col hover:border-white\/20 transition-all duration-700 rounded-xl"/g, 
        'className="group relative border border-white/[0.06] bg-transparent backdrop-blur-sm p-10 md:p-12 flex flex-col transition-all duration-700"');
      content = content.replace(/text-white(?![\w\-\/])/g, 'text-white premium-text-shadow');
    }
    fs.writeFileSync(productsPath, content, 'utf8');
  }
});

console.log("Done reverting UI and adding premium text shadows");
