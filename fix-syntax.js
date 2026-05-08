const fs = require('fs');
const path = require('path');

const templates = Array.from({length: 10}, (_, i) => i + 58);

templates.forEach(id => {
  const pagePath = path.join(__dirname, 'src', 'app', `template${id}`, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');

    // Fix the syntax error: className="group" bg-black/50... -> className="group bg-black/50..."
    content = content.replace(
      /className="group"\s+(bg-(?:black|white)\/\d+\s+backdrop-blur-md\s+border\s+border-(?:white|black)\/\d+\s+p-8\s+md:p-12\s+rounded-xl)"\>/g,
      'className="group $1">'
    );

    fs.writeFileSync(pagePath, content, 'utf8');
  }
});

console.log("Syntax error fixed.");
