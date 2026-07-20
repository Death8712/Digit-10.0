const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Insert import ContactUs from './components/ContactUs';
content = content.replace(
  "import EventResults from './components/EventResults';",
  "import EventResults from './components/EventResults';\nimport ContactUs from './components/ContactUs';"
);

fs.writeFileSync('src/App.tsx', content);
