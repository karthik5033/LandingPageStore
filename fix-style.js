const fs = require('fs');
const path = require('path');

const templates = Array.from({length: 10}, (_, i) => i + 58);

templates.forEach(id => {
  const pagePath = path.join(__dirname, 'src', 'app', `template${id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // Fix the syntax error: the CSS classes were placed outside the template string `...`
    // We want to move the `} from before .premium-text-shadow to after the classes.
    const badSyntax = /`\}\s+\.premium-text-shadow\s+\{\s+text-shadow: 0px 4px 20px rgba\(0,0,0,0\.8\), 0px 0px 10px rgba\(0,0,0,0\.5\);\s+\}\s+\.premium-text-shadow-light\s+\{\s+text-shadow: 0px 4px 20px rgba\(255,255,255,0\.8\), 0px 0px 10px rgba\(255,255,255,0\.5\);\s+\}\s+\<\/style\>/g;
    
    const goodSyntax = `
        .premium-text-shadow {
          text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5);
        }
        .premium-text-shadow-light {
          text-shadow: 0px 4px 20px rgba(255,255,255,0.8), 0px 0px 10px rgba(255,255,255,0.5);
        }
      \`}</style>`;
      
    content = content.replace(badSyntax, goodSyntax);

    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

console.log("Syntax error fixed (style tags).");
