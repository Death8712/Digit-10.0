import { Brush, ImageIcon, Presentation, Clapperboard, Video, Lightbulb, Bot, ShoppingBag, Eye, Gamepad2, Key } from "lucide-react";

export interface EventItem {
  title: string;
  description: string;
  mode: string;
  classGroup: string;
  software: string;
  icon: any; // Using any for Lucide icons to simplify type matching
  size: string;
  featured?: boolean;
  isLive?: boolean;
  about: string;
  venue: string;
  image: string;
  eventHead?: string;
  eventHeadNumber?: string;
  teamSize?: string;
  themes?: string[];
  submissionFormat?: string;
  judgementCriteria?: string[];
  requirements?: string;
  objectives?: string[];
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
      { 
        title: "DigiMagic", 
        description: "Class 3", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 3", 
        software: "TuxPaint or Paint3D", 
        icon: Brush, 
        size: "col-span-1", 
        isLive: true, 
        about: "Students will design vibrant digital posters on TuxPaint or Paint3D, bringing to life the theme of either SDG-3, Good Health and Well-Being or SDG-13, Climate Action.\n\nPreliminary Round: Online Submission.\nFinal Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\nCore Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement)", 
        image: "/digi-magic.png", 
        teamSize: "Individual",
        themes: ["SDG 3: Good Health and Well-Being", "SDG 13: Climate Action"],
        submissionFormat: ".png or .jpg format",
        judgementCriteria: ["Content", "Creativity", "Smart use of tools", "Presentation", "Relevance to the topic"],
        requirements: "Create an artwork related to the given themes. Students should use templates, pictures, effects, and other relevant tools."
      },
      { 
        title: "DigiPoster", 
        description: "Class 4", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 4", 
        software: "Canva", 
        icon: ImageIcon, 
        size: "col-span-1", 
        featured: true, 
        about: "DigiPoster encourages students to explore their creativity on Canva by designing a poster or E-Book Cover on either SDG 15, Life on Land or SDG 4, Quality Education.\n\nPreliminary Round: Online Submission.\nFinal Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\nCore Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement)", 
        image: "/digi-poster.png", 
        teamSize: "Individual",
        themes: ["SDG 15: Life on Land", "SDG 4: Quality Education"],
        submissionFormat: "PNG format",
        judgementCriteria: ["Content", "Presentation", "Smart use of tools", "Creativity", "Relevance to the topic"],
        requirements: "Design a poster/E-Book Cover in Canva. Students should make creative pictures, templates, backgrounds, etc. File Naming Convention: Event Name_Student Name"
      },
      { 
        title: "DigiSlides", 
        description: "Class 5", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 5", 
        software: "Canva", 
        icon: Presentation, 
        size: "col-span-1", 
        about: "In DigiSlides, students step into the world of creative expression, creating engaging presentations on Canva to highlight the importance of the chosen topic.\n\nPreliminary Round: Online Submission.\nFinal Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\nCore Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement)", 
        image: "/digi-slides.png", 
        teamSize: "Individual",
        themes: ["SDG 6: Clean Water and Sanitation", "SDG 14: Life Below Water"],
        submissionFormat: ".pptx format",
        judgementCriteria: ["Content", "Coding (Note: explicitly listed under judgment criteria)", "Smart use of tools/Creativity", "Presentation", "Relevance to the topic"],
        requirements: "Create a presentation highlighting the importance of the chosen topic. Length: Exactly 10 Slides. Language: English language only."
      },
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
    gridClass: "md:grid-cols-3",
    events: [
      { title: "DigiTales", description: "Class 6", mode: "Online + Offline", classGroup: "Class 6", software: "Adobe, Canva, ppt, etc.", icon: Clapperboard, size: "col-span-1", about: "DigiTales is all about storytelling in the digital age. Students share experiences through comic strips, animations, digital art, or puzzles. This event encourages imagination, expression, and innovation, allowing participants to transform their thoughts into engaging digital creations that entertain, inform, and inspire.", venue: "Middle Computer Lab (basement)", image: "/digi-tales.png", teamSize: "Individual", themes: ["My Digital Promise for a Better India"], objectives: ["Encourage students to think about national initiatives and sustainable development.", "Promote responsible citizenship through digital storytelling.", "Inspire students to showcase how they contribute towards building a better India.", "Develop creativity, communication, and digital presentation skills."], requirements: "Topic Selection: Choose one Government Mission (e.g., Swachh Bharat, Green India, Save Environment, Mission Life, Water Conservation, etc.).\n\nOutput Requirements: Create either a 4–8 panel digital comic strip OR a 1–2-minute animated video.\n\nAllowed Tools: Students may use Microsoft PowerPoint, Canva, Adobe Express, or any other digital creation tool to design their entries.\n\nAI Policy: The submission must be the student's original work. AI tools may be used only for limited assistance (e.g., brainstorming or creating minor design elements). Fully AI-generated comic strips or videos are strictly prohibited and will result in disqualification.\n\nContent Focus: Show how you are contributing today and how your efforts can help build a stronger, better, and more prosperous India in the future.\n\nIdentification: Clearly mention the student's name, class, and section in the submission.\n\nSubmission Details:\n* Format: Comic Strip (PDF/JPG/PNG) or Animated Video (MP4)\n* Submission Deadline: 10th August 2026\n\nSelection Process:\n* Preliminary Round: Online submission.\n* Final Round: Shortlisted participants will present their entries before a panel of judges." },
      { title: "DigiQuiz", description: "Class 7", mode: "Online", classGroup: "Class 7", software: "Kahoot / Nearpod", icon: Lightbulb, size: "col-span-1", about: "Put your thinking caps on for DigiQuiz! This event tests students’ knowledge of computational thinking and artificial intelligence. Fast-paced and engaging, it challenges participants to think logically, solve problems, and apply concepts, making learning both competitive and fun.", venue: "Online", image: "/digi-quiz.png", teamSize: "Individual", themes: ["Cybersecurity & Artificial Intelligence Challenge"], objectives: ["Assess students' understanding of Cybersecurity and Artificial Intelligence.", "Promote responsible and ethical use of digital technologies."], requirements: "Participation: Individual participation only.\n\nPlatform: The quiz will be conducted online using Kahoot or Nearpod.\n\nProfile Name: Participants must join the quiz using their registered name.\n\nConnectivity: Ensure a stable internet connection throughout the quiz.\n\nTiming: The quiz will be timed, and no extra time will be provided.\n\nFair Play: Use of external help, books, notes, or electronic resources is strictly prohibited. Participants must answer independently.\n\nAuthority: The decision of the organizers will be final.\n\nNote: Participants will be informed of the date and time of the competition in advance.\n\nQuiz Coverage:\n- Cybersecurity\n- Artificial Intelligence (AI)\n- Digital Citizenship", judgementCriteria: ["Accuracy of Responses", "Speed of Answering", "Cybersecurity & AI Awareness", "Overall Score"] },
      { title: "DigiBuild", description: "Class 8", mode: "Online", classGroup: "Class 8", software: "Minecraft", icon: Bot, size: "col-span-1", about: "DigiBuild is a platform for aspiring innovators to showcase their technical prowess. Students will engage in online problem-solving challenges and build creative solutions in real-time.", venue: "Online (Microsoft Teams)", image: "/digi-tales.png", teamSize: "Team of 2", themes: ["Future World Powered by AI Technology"], objectives: ["Design an AI-powered futuristic world in Minecraft showcasing innovation and sustainability."], requirements: "Team Size: Team of 2 participants.\n\nPlatform: Online event conducted via Microsoft Teams.\n\nLive Building: Building must take place during the competition only. Teams will share their screens one by one while building.\n\nTime Allocation:\n* Total Build Time: 1 hour.\n* Submission Time: Additional 30 minutes for recording and submission.\n\nDeliverables: Submit screenshots and a video tour explaining the AI features.\n\nEvaluation: Teams must be ready to answer judges' questions during the presentation.\n\nGameplay Rules:\n* Mode: Vanilla Minecraft (Creative Mode) only.\n* Edition: Java or Bedrock Edition.\n* Allowed Features: Command Blocks are allowed.\n* Prohibited Elements: Mods, plugins, World Edit, downloaded maps/builds, and external editing tools are strictly prohibited.\n\nGeneral Rules:\n* Original work only.\n* No external assistance allowed.\n* Late submissions will not be accepted.\n* The judges' decision will be final.\n\nNote: Participants will be informed of the date and time of the competition in advance.", judgementCriteria: ["Creativity", "AI Integration", "Technical Execution", "Innovation", "Presentation", "Teamwork", "Overall Impact"] },
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
      { title: "DigiCT-AI", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "-", icon: Bot, size: "col-span-1", about: "The Bias Detectives is a fun, hands-on challenge where students act as \"AI Doctors\" to fix \"sick\" computer programs. Today, AI makes many big decisions, such as who gets hired for a job or what shows you see on your feed, but sometimes these programs make unfair choices because they learn from bad or biased information. In this event, students do not need to know how to write complex code; instead, they use computational thinking, which is a way of solving problems that computers use, to find out why an AI is acting unfairly and how to fix it.\n\nTeams will work together to break down a big, confusing AI issue into smaller, easier pieces, look at a list of data to find where the unfair instructions are hiding, and finally create a new, fairer plan to make sure the AI treats everyone equally. The event ends with a quick presentation where teams share their fix, which is a great way to show that when it comes to AI, the most important part is not the technology itself but the human logic used to build it.", venue: "Senior IT Lab", image: "/digi-bug.png", eventHead: "Sheza", eventHeadNumber: "+91 8765432109", teamSize: "Individual" },
      { title: "DigiBattles", description: "Class 9-12", mode: "Online + Offline", classGroup: "Class 9-12", software: "BGMI", icon: Gamepad2, size: "col-span-1", featured: true, about: "DigiBattles brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Second Floor Classrooms", image: "/digi-battles.png", eventHead: "Divyansh", eventHeadNumber: "+91 6543210987" , teamSize: "Team of 4" },
      { title: "DIGIMEME", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "Photoshop / Canva / Any", icon: ImageIcon, size: "col-span-1", about: "DIGIMEME is the ultimate playground for tech-humor and creativity. Students design humorous, high-impact tech memes that blend digital culture, computing jokes, and clever concepts.", venue: "Offline", image: "/digi-tales.png", eventHead: "Aarav", eventHeadNumber: "+91 7654321098" , teamSize: "Individual" },
      { title: "DigiCipher", description: "Class 9-12", mode: "Online", classGroup: "Class 9-12", software: "-", icon: Key, size: "col-span-1", about: "DigiCipher challenges students with cryptography and problem-solving. Decode puzzles, crack ciphers, and find the hidden flag in this intense CTF-style event.", venue: "Online", image: "/digi-tales.png", eventHead: "Student Coord", eventHeadNumber: "+91 1234567890" , teamSize: "Individual" },
    ]
  }
];
