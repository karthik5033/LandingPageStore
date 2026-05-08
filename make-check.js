const fs = require('fs');

const dataFile = fs.readFileSync('./src/lib/data.ts', 'utf8');

// We can just execute the data.ts (transpiled) or use a regex to find missing properties.
// Actually, data.ts is not standard JS (it uses ES6 modules and TS).
// Let's just write a script that runs ts-node to import data.ts and check.
const script = `
require('ts-node').register({ transpileOnly: true });
const { categories } = require('./src/lib/data.ts');

let hasError = false;
categories.forEach(cat => {
  cat.templates.forEach(t => {
    const required = ['id', 'name', 'description', 'href', 'accent', 'accentHex', 'heroHeadline', 'icon', 'folder', 'ext', 'prefix', 'frameCount'];
    required.forEach(req => {
      if (t[req] === undefined) {
        console.error('Template ' + t.id + ' missing ' + req);
        hasError = true;
      }
    });
  });
});

if (!hasError) console.log("All templates have all required properties.");
`;

fs.writeFileSync('check-data.js', script);
