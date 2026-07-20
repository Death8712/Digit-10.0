const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const target = `    name: "Aarav Tuteja",
    role: "Media Manager",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  }
];`;

const replacement = `    name: "Aarav Tuteja",
    role: "Media Manager",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Sheza Khan",
    role: "Content Director",
    email: "sheza.khan@digitcrew.in",
    phone: "+91 9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  }
];`;

content = content.replace(target, replacement);

fs.writeFileSync('src/components/ContactUs.tsx', content);
