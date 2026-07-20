const fs = require('fs');
let content = fs.readFileSync('src/components/Visionaries.tsx', 'utf8');

const targetArray = `const fullSpeakers: Speaker[] = [
  { name: "Ms Urvashi Singhal", role: "HOD Computer Science", company: "Digit Crew", initial: "US", image: "/Ms Uravshi Singhal.jpg", imagePosition: "center top", bio: "Leads the computer science department, guiding the team and mentoring students in technology." },
  { name: "Ms Nitika Wadhwa", role: "Computer Visionary", company: "Digit Crew", initial: "NW", image: "/Ms Nitika Wadhwa.jpg", imagePosition: "center top", bio: "Teaches coding foundations to students, making classroom learning technical and engaging." },
  { name: "Ms Deepti Chopra", role: "Computer Visionary", company: "Digit Crew", initial: "DC", image: "/Ms Deepti Chopra.png", bio: "Guides students through computing concepts with patience and mentorship, inspiring their interest in technology." },
  { name: "Ms Garima Mehra", role: "Computer Visionary", company: "Digit Crew", initial: "GM", image: "/Ms Garima Mehra.png", bio: "Introduces young students to the basics of computers and digital literacy, building their tech skills early." },
  { name: "Rudransh Kandpal", role: "President", company: "Digit Crew", initial: "RK", image: "/Rudransh Kandpal.jpg", bio: "Leads the team, plans strategies, and makes sure everyone works together to achieve our goals." },
  { name: "Ishika Mittal", role: "Vice President", company: "Digit Crew", initial: "IM", image: "/Ishika Mittal.jpg", bio: "Helps in managing team operations, solving problems, and keeping the team organized." },
  { name: "Aarav Tuteja", role: "Media Manager", company: "Digit Crew", initial: "AT", image: "/Aarav Tuteja.jpg", bio: "Handles our online presence by creating posts and strategies to grow our social media accounts." },
  { name: "Prajanay Chandra", role: "Video Visionary", company: "Digit Crew", initial: "PC", image: "/Prajanay Chandra.jpg", bio: "Creates and directs videos, making sure our digital content looks great." },
  { name: "Granth Shandilya", role: "Video Visionary", company: "Digit Crew", initial: "GS", image: "/Granth.jpg", bio: "Captures the team's work on camera and turns ideas into amazing visual stories." },
  { name: "Sheza Khan", role: "Director", company: "Digit Crew", initial: "SK", image: "/Sheza Khan.jpg", bio: "Manages our content and information, keeping everything well-organized and running smoothly." },
  { name: "Divyansh Rathore", role: "Event Head", company: "Digit Crew", initial: "DR", image: "/Divyansh Rathore.jpg", bio: "Manages event plans and coordinates logistics so everything runs smoothly on the day of the event." },
  { name: "Vivaan Tripathi", role: "Event Head", company: "Digit Crew", initial: "VT", image: "/Vivaan Tripathi.png", bio: "Creates challenges and manages the technical parts of the events for the participants." },
  { name: "Aditya Pandey", role: "Event Head", company: "Digit Crew", initial: "AP", image: "/Aaditya Pandey.png", bio: "Event Head of DigiMeme" },
  { name: "Hanisha Nagi", role: "Event Head", company: "Digit Crew", initial: "HN", image: "/Hanisha Nagi.jpg", bio: "Brings energy to the team and helps organize great events in a fast-paced environment." },
  { name: "Aaradhya Yadav", role: "Event Head", company: "Digit Crew", initial: "AY", image: "/Aaradhya Yadav.jpg", bio: "Keeps track of details, schedules, and logistics to make sure complex events go as planned." },
  { name: "Navya Ahuja", role: "Event Head", company: "Digit Crew", initial: "NA", image: "/Navya Ahuja.jpg", bio: "Helps plan and organize events with creativity and structure to create memorable experiences." },
  { name: "Ananya Gahlot", role: "Event Head", company: "Digit Crew", initial: "AG", image: "/Ananya Gahlot.jpg", bio: "Coordinates people and resources to turn event ideas into successful live events." }
];`;

const replacementArray = `const fullSpeakers: Speaker[] = [
  { name: "Ms Urvashi Singhal", role: "HOD Computer Science", company: "Digit Crew", initial: "US", image: "/Ms Uravshi Singhal.jpg", imagePosition: "center top", bio: "Leads the computer science department, guiding the team and mentoring students in technology." },
  { name: "Ms Nitika Wadhwa", role: "Computer Visionary", company: "Digit Crew", initial: "NW", image: "/Ms Nitika Wadhwa.jpg", imagePosition: "center top", bio: "Teaches coding foundations to students, making classroom learning technical and engaging." },
  { name: "Ms Deepti Chopra", role: "Computer Visionary", company: "Digit Crew", initial: "DC", image: "/Ms Deepti Chopra.png", bio: "Guides students through computing concepts with patience and mentorship, inspiring their interest in technology." },
  { name: "Ms Garima Mehra", role: "Computer Visionary", company: "Digit Crew", initial: "GM", image: "/Ms Garima Mehra.png", bio: "Introduces young students to the basics of computers and digital literacy, building their tech skills early." },
  { name: "Rudransh Kandpal", role: "President", company: "Digit Crew", initial: "RK", image: "/Rudransh Kandpal.jpg", bio: "Leads the team, plans strategies, and makes sure everyone works together to achieve our goals." },
  { name: "Ishika Mittal", role: "Vice President", company: "Digit Crew", initial: "IM", image: "/Ishika Mittal.jpg", bio: "Helps in managing team operations, solving problems, and keeping the team organized." },
  { name: "Sheza Khan", role: "Director", company: "Digit Crew", initial: "SK", image: "/Sheza Khan.jpg", bio: "Manages our content and information, keeping everything well-organized and running smoothly." },
  { name: "Aarav Tuteja", role: "Media Lead", company: "Digit Crew", initial: "AT", image: "/Aarav Tuteja.jpg", bio: "Handles our online presence by creating posts and strategies to grow our social media accounts." },
  { name: "Granth Shandilya", role: "Video Visionary", company: "Digit Crew", initial: "GS", image: "/Granth.jpg", bio: "Captures the team's work on camera and turns ideas into amazing visual stories." },
  { name: "Prajanay Chandra", role: "Video Visionary", company: "Digit Crew", initial: "PC", image: "/Prajanay Chandra.jpg", bio: "Creates and directs videos, making sure our digital content looks great." },
  { name: "Divyansh Rathore", role: "Event Head", company: "Digit Crew", initial: "DR", image: "/Divyansh Rathore.jpg", bio: "Manages event plans and coordinates logistics so everything runs smoothly on the day of the event." },
  { name: "Vivaan Tripathi", role: "Event Head", company: "Digit Crew", initial: "VT", image: "/Vivaan Tripathi.png", bio: "Creates challenges and manages the technical parts of the events for the participants." },
  { name: "Aditya Pandey", role: "Event Head", company: "Digit Crew", initial: "AP", image: "/Aaditya Pandey.png", bio: "Event Head of DigiMeme" },
  { name: "Hanisha Nagi", role: "Event Head", company: "Digit Crew", initial: "HN", image: "/Hanisha Nagi.jpg", bio: "Brings energy to the team and helps organize great events in a fast-paced environment." },
  { name: "Aaradhya Yadav", role: "Event Head", company: "Digit Crew", initial: "AY", image: "/Aaradhya Yadav.jpg", bio: "Keeps track of details, schedules, and logistics to make sure complex events go as planned." },
  { name: "Navya Ahuja", role: "Event Head", company: "Digit Crew", initial: "NA", image: "/Navya Ahuja.jpg", bio: "Helps plan and organize events with creativity and structure to create memorable experiences." },
  { name: "Ananya Gahlot", role: "Event Head", company: "Digit Crew", initial: "AG", image: "/Ananya Gahlot.jpg", bio: "Coordinates people and resources to turn event ideas into successful live events." }
];`;

content = content.replace(targetArray, replacementArray);

fs.writeFileSync('src/components/Visionaries.tsx', content);

let contactContent = fs.readFileSync('src/components/ContactUs.tsx', 'utf8');

const targetContactArray = `const STUDENT_DIRECTORS = [
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
    name: "Aarav Tuteja",
    role: "Media Manager",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Prajanay Chandra",
    role: "Video Visionary",
    email: "prajanay.chandra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-neon-cyan"
  },
  {
    name: "Granth Shandilya",
    role: "Video Visionary",
    email: "granth.shandilya@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Sheza Khan",
    role: "Director",
    email: "sheza.khan@digitcrew.in",
    phone: "+91 9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  }
];`;

const replacementContactArray = `const STUDENT_DIRECTORS = [
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
    name: "Sheza Khan",
    role: "Director",
    email: "sheza.khan@digitcrew.in",
    phone: "+91 9968882786",
    icon: Code,
    accent: "text-neon-cyan"
  },
  {
    name: "Aarav Tuteja",
    role: "Media Lead",
    email: "aarav.tuteja@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Granth Shandilya",
    role: "Video Visionary",
    email: "granth.shandilya@digitcrew.in",
    phone: "",
    icon: User,
    accent: "text-neon-cyan"
  },
  {
    name: "Prajanay Chandra",
    role: "Video Visionary",
    email: "prajanay.chandra@digitcrew.in",
    phone: "",
    icon: Code,
    accent: "text-neon-cyan"
  }
];`;

contactContent = contactContent.replace(targetContactArray, replacementContactArray);
fs.writeFileSync('src/components/ContactUs.tsx', contactContent);

