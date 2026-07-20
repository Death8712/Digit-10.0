const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const shezaCode = `,
  {
    name: "Sheza Khan",
    role: "Content Director",
    email: "sheza.khan@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-neon-cyan"
  }
];`;

content = content.replace(/\];\n\nconst EVENT_HEADS/, shezaCode + '\n\nconst EVENT_HEADS');

fs.writeFileSync('src/components/ContactUs.tsx', content);
