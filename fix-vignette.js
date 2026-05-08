const fs = require('fs');
const path = require('path');

const templates = [
  { id: 58, bg: '#020617' },
  { id: 59, bg: '#1a0f0a' },
  { id: 60, bg: '#0f1115' },
  { id: 61, bg: '#fafafa' }, // Light theme
  { id: 62, bg: '#1c1c1c' },
  { id: 63, bg: '#090a0f' },
  { id: 64, bg: '#050b14' },
  { id: 65, bg: '#1a1814' },
  { id: 66, bg: '#0d1a0d' },
  { id: 67, bg: '#fafaf8' }  // Light theme
];

templates.forEach(t => {
  const pagePath = path.join(__dirname, 'src', 'app', `template${t.id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Replace bg-transparent with the proper gradient vignette
    const isLight = t.id === 61 || t.id === 67;
    // For light themes, we use a light gradient to boost contrast against dark text
    const overlay = `<div className="absolute inset-0 bg-gradient-to-t from-[${t.bg}]/80 via-transparent to-[${t.bg}]/40 z-10" />`;
    
    content = content.replace(/<div className="absolute inset-0 bg-transparent z-10" \/>/g, overlay);

    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

console.log("Restored premium vignette overlays");
