const fs = require('fs');
let content = fs.readFileSync('src/data/events.ts', 'utf8');

content = content.replace(
  'eventHead: "Prajanay Chandra", eventHeadNumber: "+91 8010984447"',
  'eventHead: "Ananya Gahlot", eventHeadNumber: "+91 9810743364"'
);

fs.writeFileSync('src/data/events.ts', content);
