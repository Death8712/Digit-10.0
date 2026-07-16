const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(
  "const NAV_ITEMS = ['JOURNEY', 'EVENTS', 'INTERSCHOOL', 'OUR TEAM', 'RESULTS'];",
  "const NAV_ITEMS = ['JOURNEY', 'INTRASCHOOL', 'INTERSCHOOL', 'OUR TEAM', 'RESULTS'];"
);

content = content.replace(
  "if (item === 'INTERSCHOOL') return 'interschool';\n        if (item === 'OUR TEAM') return 'visionaries';",
  "if (item === 'INTRASCHOOL') return 'events';\n        if (item === 'INTERSCHOOL') return 'interschool';\n        if (item === 'OUR TEAM') return 'visionaries';"
);

content = content.replace(
  "const id = item === 'JOURNEY' ? 'legacy' : item === 'INTERSCHOOL' ? 'interschool' : item === 'OUR TEAM' ? 'visionaries' : item.toLowerCase();",
  "const id = item === 'JOURNEY' ? 'legacy' : item === 'INTRASCHOOL' ? 'events' : item === 'INTERSCHOOL' ? 'interschool' : item === 'OUR TEAM' ? 'visionaries' : item.toLowerCase();"
);

fs.writeFileSync('src/components/Navbar.tsx', content);
