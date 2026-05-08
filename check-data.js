
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
