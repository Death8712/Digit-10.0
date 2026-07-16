const fs = require('fs');
let content = fs.readFileSync('src/data/events.ts', 'utf8');

content = content.replace(
  'requirements: "Create a presentation highlighting the importance of the chosen topic. Length: Exactly 10 Slides. Language: English language only."',
  'requirements: "Create a presentation highlighting the importance of the chosen topic. Length: Exactly 10 Slides. Language: English language only.\\n\\nSend your entries latest by 10th August, 2026."'
);

fs.writeFileSync('src/data/events.ts', content);
