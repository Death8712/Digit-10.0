import { Brush, Image as ImageIcon, Presentation, Clapperboard, Video, Eye, Lightbulb, ShoppingBag, Bug, Gamepad2, Bot, LucideIcon } from 'lucide-react';

export interface EventItem {
  title: string;
  description: string;
  icon: LucideIcon;
  size: string;
  featured?: boolean;
  isLive?: boolean;
  about?: string;
  venue?: string;
  image?: string;
  mode?: string;
  classGroup?: string;
  software?: string;
  eventHead?: string;
  eventHeadNumber?: string;
  teamSize?: string;
}

export interface Category {
  id: string;
  name: string;
  accentCode: string;
  glowCode: string;
  lineColor: string;
  borderCode: string;
  hoverBgCode: string;
  events: EventItem[];
  gridClass?: string;
}

export const categories: Category[] = [
  {
    id: "primary",
    name: "Preparatory Stage (Class 3-5)",
    accentCode: "text-amber-400",
    glowCode: "rgba(251, 191, 36, 0.15)", // Tailwind Amber-400
    lineColor: "from-amber-400",
    borderCode: "border-amber-400",
    hoverBgCode: "bg-gradient-to-br from-amber-400/20 to-amber-500/5",
    gridClass: "md:grid-cols-3",
    events: [
      { title: "DigiMagic", description: "Class 3", mode: "Online + Offline", classGroup: "Class 3", software: "TuxPaint or Paint3D", icon: Brush, size: "col-span-1", isLive: true, about: "Students will design vibrant digital posters on TuxPaint or Paint3D, bringing to life the theme of either SDG-3, Good Health and Well-Being or SDG-13, Climate Action. Blending creativity with awareness, this individual event begins with an online preliminary round, ending in an offline finale where the top five participants showcase their ideas and artistic vision.", venue: "Primary Computer Lab (basement)", image: "/digi-magic.png" , teamSize: "Individual" },
      { title: "DigiPoster", description: "Class 4", mode: "Online + Offline", classGroup: "Class 4", software: "Canva", icon: ImageIcon, size: "col-span-1", featured: true, about: "DigiPoster encourages students to explore their creativity on Canva by designing a poster on either SDG 15, Life on Land or SDG 4, Quality Education. This individual event nurtures design thinking and meaningful expression. It begins with an online preliminary round and culminates in an offline finale, where the top five participants present their ideas with clarity and visual impact.", venue: "Primary Computer Lab (basement)", image: "/digi-poster.png" , teamSize: "Individual" },
      { title: "DigiSlides", description: "Class 5", mode: "Online + Offline", classGroup: "Class 5", software: "Canva", icon: Presentation, size: "col-span-1", about: "In DigiSlides, students step into the world of creative expression, creating engaging presentations on Canva. Through SDGs like Clean Water and Sanitation (6) or Life Below Water (14), they combine creativity with awareness. This event builds confidence, storytelling, and digital skills, helping students present important ideas in a clear and visually appealing way.", venue: "Primary Computer Lab (basement)", image: "/digi-slides.png" , teamSize: "Individual" },
    ]
  },
  {
    id: "middle",
    name: "Middle Stage (Class 6-8)",
    accentCode: "text-purple-400",
    glowCode: "rgba(192, 132, 252, 0.15)", // Tailwind Purple-400
    lineColor: "from-purple-400",
    borderCode: "border-purple-400",
    hoverBgCode: "bg-gradient-to-br from-purple-400/20 to-purple-500/5",
    gridClass: "md:grid-cols-2",
    events: [
      { title: "DigiTales", description: "Class 6", mode: "Online + Offline", classGroup: "Class 6", software: "Adobe, Canva, ppt, etc.", icon: Clapperboard, size: "col-span-1", about: "DigiTales is all about storytelling in the digital age. Students share experiences through comic strips, animations, digital art, or puzzles. This event encourages imagination, expression, and innovation, allowing participants to transform their thoughts into engaging digital creations that entertain, inform, and inspire.", venue: "Middle Computer Lab (basement)", image: "/digi-tales.png" , teamSize: "Individual" },
      { title: "DigiFilm", description: "Class 7", mode: "Online + Offline", classGroup: "Class 7", software: "Canva, Inshot, etc.", icon: Video, size: "col-span-1", about: "DigiFilm empowers students to become digital filmmakers. Participants will shoot, edit, and produce short films, expressing their unique perspectives and creative visions.", venue: "Middle Computer Lab (basement)", image: "/digi-tales.png" , teamSize: "Individual" },
      { title: "DigiQuiz", description: "Class 8", mode: "Online + Offline", classGroup: "Class 8", software: "Kahoot/ NearPod", icon: Lightbulb, size: "col-span-1", about: "Put your thinking caps on for DigiQuiz! This event tests students’ knowledge of computational thinking and artificial intelligence. Fast-paced and engaging, it challenges participants to think logically, solve problems, and apply concepts, making learning both competitive and fun.", venue: "Middle Computer Lab (basement)", image: "/digi-quiz.png" , teamSize: "Individual" },
      { title: "DigiBuild", description: "Class 8", mode: "Online", classGroup: "Class 8", software: "-", icon: Bot, size: "col-span-1", about: "DigiBuild is a platform for aspiring innovators to showcase their technical prowess. Students will engage in online problem-solving challenges and build creative solutions in real-time.", venue: "Online", image: "/digi-tales.png" , teamSize: "Individual" },
    ]
  },
  {
    id: "senior",
    name: "Seniors Stage (Class 9-12)",
    accentCode: "text-neon-cyan",
    glowCode: "rgba(0, 255, 255, 0.12)", // Neon Cyan
    lineColor: "from-neon-cyan",
    borderCode: "border-neon-cyan",
    hoverBgCode: "bg-gradient-to-br from-neon-cyan/20 to-blue-500/5",
    gridClass: "md:grid-cols-2 lg:grid-cols-2",
    events: [
      { title: "DigiTote", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "-", icon: ShoppingBag, size: "col-span-1", about: "DigiTote combines creativity with sustainability. Students design eco-friendly tote bags inspired by technology, turning everyday items into meaningful expressions. This offline event encourages innovation, environmental awareness, and artistic flair, proving that style and sustainability can go hand in hand.", venue: "Auditorium", image: "/digi-tote.png", eventHead: "Ishika", eventHeadNumber: "+91 9876543210" , teamSize: "Individual" },
      { title: "DIGICT-AI", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "-", icon: Bot, size: "col-span-1", about: "The Bias Detectives is a fun, hands-on challenge where students act as \"AI Doctors\" to fix \"sick\" computer programs. Today, AI makes many big decisions, such as who gets hired for a job or what shows you see on your feed, but sometimes these programs make unfair choices because they learn from bad or biased information. In this event, students do not need to know how to write complex code; instead, they use computational thinking, which is a way of solving problems that computers use, to find out why an AI is acting unfairly and how to fix it.\n\nTeams will work together to break down a big, confusing AI issue into smaller, easier pieces, look at a list of data to find where the unfair instructions are hiding, and finally create a new, fairer plan to make sure the AI treats everyone equally. The event ends with a quick presentation where teams share their fix, which is a great way to show that when it comes to AI, the most important part is not the technology itself but the human logic used to build it.", venue: "Senior IT Lab", image: "/digi-bug.png", eventHead: "Sheza", eventHeadNumber: "+91 8765432109", teamSize: "Individual" },
      { title: "DigiReport", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "-", icon: Eye, size: "col-span-1", about: "DigiReport invites students to become technical journalists, analyzing and documenting digital trends and innovations. This event hones research, writing, and presentation skills.", venue: "Offline", image: "/digi-tales.png", eventHead: "Aarav", eventHeadNumber: "+91 7654321098" , teamSize: "Individual" },
      { title: "DigiBattles", description: "Class 9-12", mode: "Online + Offline", classGroup: "Class 9-12", software: "BGMI", icon: Gamepad2, size: "col-span-1", featured: true, about: "DigiBattles brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Second Floor Classrooms", image: "/digi-battles.png", eventHead: "Divyansh", eventHeadNumber: "+91 6543210987" , teamSize: "Team of 4" },
    ]
  }
];

