const fs = require('fs');
const path = require('path');

const templates = Array.from({length: 10}, (_, i) => i + 58);

templates.forEach(id => {
  const isLightTheme = id === 67; // Ethos is light theme
  const cardClass = isLightTheme 
    ? 'bg-white/60 backdrop-blur-md border border-black/10 p-8 md:p-12 rounded-xl'
    : 'bg-black/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-xl';
    
  // 1. Update page.tsx
  const pagePath = path.join(__dirname, 'src', 'app', `template${id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // Manually add to Hero Left
    content = content.replace(
      /(\<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*40\s*\}\}\s+animate=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+transition=\{\{.*\}\})\s*\>/g,
      `$1 className="${cardClass}">`
    );

    // Manually add to Manifesto Left
    content = content.replace(
      /(\<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*40\s*\}\}\s+whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+viewport=\{\{\s*once:\s*true,\s*margin:\s*'-10%'\s*\}\}\s+transition=\{\{.*\}\})\s*\>/g,
      `$1 className="${cardClass}">`
    );
    
    // Some templates use different viewport or transition in manifesto left
    content = content.replace(
      /(\<motion\.div\s+initial=\{\{\s*opacity:\s*0,\s*y:\s*40\s*\}\}\s+whileInView=\{\{\s*opacity:\s*1,\s*y:\s*0\s*\}\}\s+viewport=\{\{\s*once:\s*true\s*\}\}\s+transition=\{\{.*\}\})\s*\>/g,
      `$1 className="${cardClass}">`
    );

    // Also add to Terroir Narrative items (the 3 column items at bottom)
    content = content.replace(
      /(\<motion\.div\s+key=\{t\.region\}\s+initial=\{\{.*\}\}\s+whileInView=\{\{.*\}\}\s+viewport=\{\{.*\}\}\s+transition=\{\{.*\}\}\s+className="group")\s*\>/g,
      `$1 ${cardClass}">`
    );

    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

console.log("Done fixing Hero and Manifesto Left");
