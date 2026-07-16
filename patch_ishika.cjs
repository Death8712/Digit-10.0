const fs = require('fs');
let content = fs.readFileSync('src/components/Visionaries.tsx', 'utf8');

content = content.replace(
  'Supports the President in managing team operations, solving problems, and keeping the team organized.',
  'Helps in managing team operations, solving problems, and keeping the team organized.'
);

fs.writeFileSync('src/components/Visionaries.tsx', content);
