const fs = require('fs');
let content = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const newCoreTeam = `
const CORE_DIRECTORS = [
  {
    name: "Ms. Urvashi Singhal",
    role: "Head of the Event",
    email: "urvashi.singhal@digitcrew.in",
    phone: "",
    icon: Star,
    accent: "text-amber-400"
  },
  {
    name: "Ms. Nitika Wadhwa",
    role: "In-charge Senior Stage",
    email: "nitika.wadhwa@digitcrew.in",
    phone: "",
    icon: Zap,
    accent: "text-neon-magenta"
  },
  {
    name: "Ms. Deepti Chopra",
    role: "In-charge Middle Stage",
    email: "deepti.chopra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-purple-400"
  },
  {
    name: "Ms. Garima Mehra",
    role: "In-charge Primary Stage",
    email: "garima.mehra@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-emerald-400"
  },
  {
    name: "Rudransh Kandpal",
    role: "President",
    email: "rudransh.kandpal@digitcrew.in",
    phone: "",
    icon: Star,
    accent: "text-neon-cyan"
  },
  {
    name: "Ishika Mittal",
    role: "Vice President & Event Head (DigiTote)",
    email: "ishika.mittal@digitcrew.in",
    phone: "+91 9310527312",
    icon: Zap,
    accent: "text-neon-cyan"
  },
  {
    name: "Prajanay Chandra",
    role: "Video Director",
    email: "prajanay.chandra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-neon-cyan"
  },
  {
    name: "Granth Shandilya",
    role: "Cinematic Visionary",
    email: "granth.shandilya@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Aarav Tuteja",
    role: "Media Manager",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  }
];
`;

content = content.replace(/const CORE_TEAM = \[[\s\S]*?\];/, newCoreTeam);
content = content.replace(/CORE_TEAM/g, 'CORE_DIRECTORS');

fs.writeFileSync('src/components/ContactUs.tsx', content);
