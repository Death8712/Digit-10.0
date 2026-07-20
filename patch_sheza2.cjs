const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const replacement = `,
  {
    name: "Sheza Khan",
    role: "Content Director & Event Head (DigiThon)",
    email: "sheza.khan@digitcrew.in",
    phone: "+91 9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  }
];

const EVENT_HEADS`;

content = content.replace(/\];\n\nconst EVENT_HEADS/, replacement);

fs.writeFileSync('src/components/ContactUs.tsx', content);
