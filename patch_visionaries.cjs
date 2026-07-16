const fs = require('fs');
let content = fs.readFileSync('src/components/Visionaries.tsx', 'utf8');

// Find Aditya Pandey
const adityaRegex = /\s*{\s*name:\s*"Aditya Pandey"[\s\S]*?},/g;
const adityaMatch = content.match(adityaRegex);

if (adityaMatch) {
  // Remove Aditya Pandey
  content = content.replace(adityaRegex, '');
  
  // Insert before Hanisha Nagi
  content = content.replace(
    /(\s*{\s*name:\s*"Hanisha Nagi")/,
    adityaMatch[0] + "$1"
  );
  
  fs.writeFileSync('src/components/Visionaries.tsx', content);
}
