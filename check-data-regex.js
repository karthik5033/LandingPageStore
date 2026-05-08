const fs = require('fs');

const data = fs.readFileSync('./src/lib/data.ts', 'utf8');

// Find all object literals in the templates arrays
const templateRegex = /\{\s*id:\s*"(\d+)",\s*name:\s*"([^"]+)",([^}]+)\}/g;
let match;
while ((match = templateRegex.exec(data)) !== null) {
  const id = match[1];
  const props = match[3];
  
  if (!props.includes('description:')) console.log(`Template ${id} missing description`);
  if (!props.includes('href:')) console.log(`Template ${id} missing href`);
  if (!props.includes('accent:')) console.log(`Template ${id} missing accent`);
  if (!props.includes('accentHex:')) console.log(`Template ${id} missing accentHex`);
  if (!props.includes('heroHeadline:')) console.log(`Template ${id} missing heroHeadline`);
  if (!props.includes('icon:')) console.log(`Template ${id} missing icon`);
  if (!props.includes('folder:')) console.log(`Template ${id} missing folder`);
  if (!props.includes('ext:')) console.log(`Template ${id} missing ext`);
  if (!props.includes('prefix:')) console.log(`Template ${id} missing prefix`);
  if (!props.includes('frameCount:')) console.log(`Template ${id} missing frameCount`);
}
console.log("Check complete.");
