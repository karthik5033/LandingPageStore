const fs = require('fs');
const path = require('path');

['Navbar', 'Footer'].forEach(comp => {
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

console.log("Fixed Navbar and Footer for Ethos");
