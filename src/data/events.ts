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
  registrationLink?: string;
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
    name: "Intra-School: Primary Stage (Class 3-5)",
    accentCode: "text-amber-400",
    glowCode: "rgba(251, 191, 36, 0.15)", // Tailwind Amber-400
    lineColor: "from-amber-400",
    borderCode: "border-amber-400",
    hoverBgCode: "bg-gradient-to-br from-amber-400/20 to-amber-500/5",
    gridClass: "md:grid-cols-3",
    events: [
      { 
        title: "DigiMagic", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc8EG57o4A2Pw7kOJuPL9gJggOoGHZgBqYmbieBBAfdogFGvg/viewform?usp=header", 
        description: "Class 3", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 3", 
        software: "TuxPaint or Paint3D", 
        icon: Brush, 
        size: "col-span-1", 
        isLive: true, 
        about: "Students will design vibrant digital posters on TuxPaint or Paint3D, bringing to life the theme of either SDG-3, Good Health and Well-Being or SDG-13, Climate Action.\n\n- Preliminary Round: Online Submission.\n- Final Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\n- Core Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-magic.png", 
        eventHead: "Ananya Gahlot", eventHeadNumber: "+91 9810743364",
        teamSize: "Individual",
        themes: ["SDG 3: Good Health and Well-Being", "OR", "SDG 13: Climate Action"],
        submissionFormat: ".png or .jpg format",
        judgementCriteria: ["Originality", "Creativity", "Smart use of tools", "Presentation", "Relevance to the topic"],
        requirements: "- Create an artwork related to the given themes.\n- Students should use templates, pictures, effects, and other relevant tools.\n- File Naming Convention: Eventname_Studentname\n- Send your entries latest by 10th August, 2026."
      },
      { 
        title: "DigiPoster", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSczZFpFJKOMVQr3VOJb6yuyzJYoLjSE_3nQ4BseSftSD_0kEg/viewform?usp=publish-editor", 
        description: "Class 4", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 4", 
        software: "Canva", 
        icon: ImageIcon, 
        size: "col-span-1", 
        featured: true, 
        about: "DigiPoster encourages students to explore their creativity on Canva by designing a Poster on either SDG 4, Quality Education OR SDG 15, Life on Land.\n\n- Preliminary Round: Online Submission.\n- Final Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\n- Core Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-poster.png", 
        eventHead: "Ananya Gahlot", eventHeadNumber: "+91 9810743364",
        teamSize: "Individual",
        themes: ["SDG 4: Quality Education", "OR", "SDG 15: Life on Land"],
        submissionFormat: ".png format",
        judgementCriteria: ["Originality", "Presentation", "Smart use of tools", "Creativity", "Relevance to the topic"],
        requirements: "- Design a poster in Canva.\n- Students should make creative pictures, templates, backgrounds, etc.\n- File Naming Convention: Eventname_Studentname\n- Send your entries latest by 10th August, 2026."
      },
      { 
        title: "DigiSlides", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc0MgJPoUwAOcSG_UtGBAzvPlr-O7FCDNOJc7YcE3r5vLptTA/viewform?usp=publish-editor", 
        description: "Class 5", 
        mode: "Preliminary Round: Online Submission | Final Round: Offline", 
        classGroup: "Class 5", 
        software: "Canva", 
        icon: Presentation, 
        size: "col-span-1", 
        about: "In DigiSlides, students step into the world of creative expression, creating engaging presentations on Canva to highlight the importance of the chosen topic.\n\n- Preliminary Round: Online Submission.\n- Final Round: Offline (Selected students will present/explain their work for 2–3 minutes).\n\n- Core Rule: All entries must be the original creation of the students.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-slides.png", 
        eventHead: "Navya Ahuja", eventHeadNumber: "+91 7827651124",
        teamSize: "Individual",
        themes: ["SDG 6: Clean Water and Sanitation", "OR", "SDG 14: Life Below Water"],
        submissionFormat: ".pptx format",
        judgementCriteria: ["Originality", "Coding (Note: explicitly listed under judgment criteria)", "Smart use of tools/Creativity", "Presentation", "Relevance to the topic"],
        requirements: "- Create a presentation highlighting the importance of the chosen topic.\n- Length: Exactly 10 Slides.\n- Language: English language only.\n- File Naming Convention: Eventname_Studentname\n- Send your entries latest by 10th August, 2026."
      },
    ]
  },
  {
    id: "middle",
    name: "Intra-School: Middle Stage (Class 6-8)",
    accentCode: "text-purple-400",
    glowCode: "rgba(192, 132, 252, 0.15)", // Tailwind Purple-400
    lineColor: "from-purple-400",
    borderCode: "border-purple-400",
    hoverBgCode: "bg-gradient-to-br from-purple-400/20 to-purple-500/5",
    gridClass: "md:grid-cols-3",
    events: [
      { title: "DigiTales", description: "Class 6", mode: "Online + Offline", classGroup: "Class 6", software: "Adobe, Canva, ppt, etc.", icon: Clapperboard, size: "col-span-1", about: "DigiTales is all about storytelling in the digital age. Students share experiences through comic strips, animations, digital art, or puzzles. This event encourages imagination, expression, and innovation, allowing participants to transform their thoughts into engaging digital creations that entertain, inform, and inspire.", venue: "Middle Computer Lab (basement)", image: "/digi-tales.png", eventHead: "Hanisha Nagi", eventHeadNumber: "+91 9810924894", teamSize: "Individual", themes: ["My Digital Promise for a Better India"], objectives: ["Encourage students to think about national initiatives and sustainable development.", "Promote responsible citizenship through digital storytelling.", "Inspire students to showcase how they contribute towards building a better India.", "Develop creativity, communication, and digital presentation skills."], requirements: "Topic Selection: Choose one Government Mission (e.g., Swachh Bharat, Green India, Save Environment, Mission Life, Water Conservation, etc.).\n\nOutput Requirements: Create either a 4–8 panel digital comic strip OR a 1–2-minute animated video.\n\nAllowed Tools: Students may use Microsoft PowerPoint, Canva, Adobe Express, or any other digital creation tool to design their entries.\n\nAI Policy: The submission must be the student's original work. AI tools may be used only for limited assistance (e.g., brainstorming or creating minor design elements). Fully AI-generated comic strips or videos are strictly prohibited and will result in disqualification.\n\nContent Focus: Show how you are contributing today and how your efforts can help build a stronger, better, and more prosperous India in the future.\n\nIdentification: Clearly mention the student's name, class, and section in the submission.\n\nSubmission Details:\n* Format: Comic Strip (PDF/JPG/PNG) or Animated Video (MP4)\n* Submission Deadline: 10th August 2026\n\nSelection Process:\n* Preliminary Round: Online submission.\n* Final Round: Shortlisted participants will present their entries before a panel of judges." },
      { title: "DigiQuiz", description: "Class 7", mode: "Online", classGroup: "Class 7", software: "Kahoot / Nearpod", icon: Lightbulb, size: "col-span-1", about: "Put your thinking caps on for DigiQuiz! This event tests students’ knowledge of computational thinking and artificial intelligence. Fast-paced and engaging, it challenges participants to think logically, solve problems, and apply concepts, making learning both competitive and fun.", venue: "Online", image: "/digi-quiz.png", eventHead: "Hanisha Nagi", eventHeadNumber: "+91 9810924894", teamSize: "Individual", themes: ["Cybersecurity & Artificial Intelligence Challenge"], objectives: ["Assess students' understanding of Cybersecurity and Artificial Intelligence.", "Promote responsible and ethical use of digital technologies."], requirements: "Participation: Individual participation only.\n\nPlatform: The quiz will be conducted online using Kahoot or Nearpod.\n\nProfile Name: Participants must join the quiz using their registered name.\n\nConnectivity: Ensure a stable internet connection throughout the quiz.\n\nTiming: The quiz will be timed, and no extra time will be provided.\n\nFair Play: Use of external help, books, notes, or electronic resources is strictly prohibited. Participants must answer independently.\n\nAuthority: The decision of the organizers will be final.\n\nNote: Participants will be informed of the date and time of the competition in advance.\n\nQuiz Coverage:\n- Cybersecurity\n- Artificial Intelligence (AI)\n- Digital Citizenship", judgementCriteria: ["Accuracy of Responses", "Speed of Answering", "Cybersecurity & AI Awareness", "Overall Score"] },
      { title: "DigiBuild", description: "Class 8", mode: "Online", classGroup: "Class 8", software: "Minecraft", icon: Bot, size: "col-span-1", about: "DigiBuild is a platform for aspiring innovators to showcase their technical prowess. Students will engage in online problem-solving challenges and build creative solutions in real-time.", venue: "Online (Microsoft Teams)", image: "/digi-build.png", eventHead: "Aaradhya Yadav", eventHeadNumber: "+91 9818400124", teamSize: "Team of 2", themes: ["Future World Powered by AI Technology"], objectives: ["Design an AI-powered futuristic world in Minecraft showcasing innovation and sustainability."], requirements: "Team Size: Team of 2 participants.\n\nPlatform: Online event conducted via Microsoft Teams.\n\nLive Building: Building must take place during the competition only. Teams will share their screens one by one while building.\n\nTime Allocation:\n* Total Build Time: 1 hour.\n* Submission Time: Additional 30 minutes for recording and submission.\n\nDeliverables: Submit screenshots and a video tour explaining the AI features.\n\nEvaluation: Teams must be ready to answer judges' questions during the presentation.\n\nGameplay Rules:\n* Mode: Vanilla Minecraft (Creative Mode) only.\n* Edition: Java or Bedrock Edition.\n* Allowed Features: Command Blocks are allowed.\n* Prohibited Elements: Mods, plugins, World Edit, downloaded maps/builds, and external editing tools are strictly prohibited.\n\nGeneral Rules:\n* Original work only.\n* No external assistance allowed.\n* Late submissions will not be accepted.\n* The judges' decision will be final.\n\nNote: Participants will be informed of the date and time of the competition in advance.", judgementCriteria: ["Creativity", "AI Integration", "Technical Execution", "Innovation", "Presentation", "Teamwork", "Overall Impact"] },
    ]
  },
  {
    id: "senior",
    name: "Intra-School: Seniors Stage (Class 9-12)",
    accentCode: "text-neon-cyan",
    glowCode: "rgba(0, 255, 255, 0.12)", // Neon Cyan
    lineColor: "from-neon-cyan",
    borderCode: "border-neon-cyan",
    hoverBgCode: "bg-gradient-to-br from-neon-cyan/20 to-blue-500/5",
    gridClass: "md:grid-cols-2 lg:grid-cols-2",
    events: [
      { title: "DigiTote", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "-", icon: ShoppingBag, size: "col-span-1", about: "DigiTote combines creativity with sustainability. Students design eco-friendly tote bags inspired by technology, turning everyday items into meaningful expressions. This offline event encourages innovation, environmental awareness, and artistic flair, proving that style and sustainability can go hand in hand.", venue: "Auditorium", image: "/digi-tote.png", eventHead: "Ishika Mittal", eventHeadNumber: "+91 9310527312" , teamSize: "Team of 2", themes: ["Upcycle E-Waste: Design for a Greener Tomorrow"], objectives: ["Encourage students to creatively reuse discarded electronic components.", "Promote awareness about responsible e-waste management and environmental sustainability.", "Inspire innovation by transforming waste into functional and artistic designs.", "Develop creativity, teamwork, and design-thinking skills.", "Highlight the importance of the 3Rs—Reduce, Reuse, and Recycle—in building a sustainable future."], requirements: "Guidelines\n\nThis is a team event, and each team must consist of exactly two participants. Individual entries will not be accepted.\n\nDesign an eco-friendly tote bag based on the theme \"Upcycle E-Waste: Design for a Greener Tomorrow.\"\n\nThe tote bag must be prepared at home and brought to school on the day of the event.\n\nParticipants must creatively incorporate upcycled e-waste materials (such as old keyboard keys, circuit boards, wires, CDs/DVDs, floppy disks, charging cables, or other discarded electronic components) into their design.\n\nThe tote bag must be made from jute, cotton, or any other eco-friendly fabric.\n\nThe size of the tote bag should be 14.5 inches × 16.5 inches (L × B).\n\nParticipants may use fabric paints, embroidery, appliqué, hand lettering, or other suitable art techniques. Upcycled e-waste materials must be securely attached. Sharp, hazardous, or unsafe electronic components (such as batteries, broken glass, exposed circuits, or live electrical parts) are strictly prohibited.\n\nThe artwork must be the original creation of the participants. AI tools may be used only for brainstorming or concept development. AI-generated or printed designs are strictly prohibited and will lead to disqualification.\n\nThe design should effectively communicate a message about e-waste reduction, sustainability, responsible technology use, or the circular economy.\n\nClearly mention the team members' names, class, and section on the reverse side of the tote bag.\n\nOn the day of the DIGIT 10.0 Inauguration Ceremony, participants will showcase their tote bags in a ramp walk.\n\nSubmission\n* Format: Physical Tote Bag\n* Submission: Participants must bring their completed tote bag on the day of the event.\n* Presentation: Ramp walk during the inauguration ceremony." },
      { title: "DigiBattles", description: "Class 9-12", mode: "Online + Offline", classGroup: "Class 9-12", software: "BGMI", icon: Gamepad2, size: "col-span-1", featured: true, about: "DigiBattles brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Second Floor Classrooms", image: "/digi-battles.png", eventHead: "Divyansh Rathore", eventHeadNumber: "+91 95608 02211" , teamSize: "Team of 4", themes: ["The Ultimate Battlegrounds Mobile Tournament"], objectives: ["Step into the battleground and compete in DIGIBattle. Form your squad, showcase your teamwork, strategy, and gaming skills, and battle through intense TPP/FPP survival shooter matches against the best teams. Fight for victory, earn bragging rights, and experience the thrill of competitive mobile esports."], requirements: "Competition Guidelines\n\nTeam of 4 participants.\n\nTournament Format: Two rounds (Preliminary Round: Online | Final Round: Offline).\n\nAll participants must possess a valid BGMI account.\n\nOnly officially registered players are eligible (no substitute or unregistered players allowed).\n\nAll teams are required to be READY before the scheduled start of the match.\n\nParticipants must ensure they have sufficient gameplay availability limits on the day of the tournament.\n\nIn the event of technical issues, report to the organizers immediately.\n\nRegistration deadline: 4th July 2026.\n\nGameplay Rules\n• Complete mandatory in-game tutorials before the tournament (no additional time will be granted).\n• Teaming, collusion, or any form of cooperation with opposing teams is strictly prohibited.\n• The use of hacks, cheats, exploits, or unauthorized third-party software will result in immediate disqualification.\n\nGeneral Rules\n• Maintain professional conduct throughout the tournament.\n• Abusive, offensive, discriminatory language, or unsportsmanlike behavior will lead to disqualification.\n• Late registrations submitted after the deadline will not be accepted.\n• Organizers reserve the right to interpret, amend, or enforce rules to ensure fair play.\n• Organizers' and Judges' decisions will be final and binding." },
      { title: "DigiMeme", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "Photoshop / Canva / Any", icon: ImageIcon, size: "col-span-1", about: "DigiMeme is the ultimate playground for tech-humor and creativity. Students design humorous, high-impact tech memes that blend digital culture, computing jokes, and clever concepts.", venue: "Offline", image: "/digi-meme.png", eventHead: "Aditya Pandey" , teamSize: "Team of 2", themes: ["Think Before You Meme: Technology with a Purpose"], objectives: ["Encourage creativity through digital memes.", "Promote digital literacy and responsible technology use.", "Develop teamwork, humour, and visual communication skills.", "Spread awareness about technology, AI, cybersecurity, and digital wellness."], requirements: "Guidelines\nRound 1 – Online Preliminary Round\nThis is a team event, with 2 participants per team.\nCreate one original digital meme based on the given theme.\nAI tools may be used only for brainstorming. AI-generated memes are not allowed.\nOffensive, copied, or inappropriate content will lead to disqualification.\nSubmit the meme in JPEG/PNG format (1080 × 1080 px) with a caption (maximum 30 words).\nShortlisted teams will qualify for the Final Round.\n\nRound 2 – Offline Final Round\nA surprise theme will be announced on the spot.\nTeams will have 45 minutes to create a new original meme.\nBring one fully charged laptop.\nInternet browsing and pre-made templates are not permitted.\nTeams may be asked to briefly explain the concept behind their meme.\n\nSubmission\nRound 1: Upload the meme through the designated online submission link before the deadline.\nRound 2: Submit the completed meme during the event within the allotted time." },
      { title: "DigiCipher", description: "Class 9-12", mode: "Online", classGroup: "Class 9-12", software: "-", icon: Key, size: "col-span-1", about: "DigiCipher challenges students with cryptography and problem-solving. Decode puzzles, crack ciphers, and find the hidden flag in this intense CTF-style event.", venue: "Online", image: "/digi-cipher.png", eventHead: "Vivaan Tripathi", eventHeadNumber: "+91 7011309610" , teamSize: "Individual", themes: ["Alternate Reality Game (ARG): Decipher the Matrix"], objectives: ["Enhance Problem-Solving: Test and develop the critical thinking, logical reasoning, and deciphering skills of the participants.", "Promote Digital Literacy: Encourage the effective use of digital file management tools, encryption techniques, and online decoding resources.", "Foster Independent Thinking: Challenge students to rely on their intellect and analytical skills to solve complex, layered puzzles without automated assistance.", "Simulate Real-World Cybersecurity Puzzles: Introduce students to basic concepts of cryptography, file security, and pattern recognition in an engaging, competitive format."], requirements: "Guidelines\nThis is an individual event. Team entries are strictly prohibited.\n\nThe event consists of a 5-level cipher-based challenge structured in an Alternate Reality Game (ARG) style.\n\nThe challenges are designed to be completed in sequence. The levels are contained within password-encrypted folders; solving one level provides the password to unlock the next folder.\n\nParticipants must ensure they have access to a computer (preferred) or a mobile device equipped with an up-to-date File Explorer capable of zipping and unzipping password-protected folders. (Online unzipping tools may be used as an alternative).\n\nOnline tools (e.g., decryption sites, cipher solvers) are permitted and recommended for analyzing encryption methods.\n\nThe use of AI tools for generating direct answers is strictly prohibited. The challenges are designed to resist AI interpretation, and participants are expected to think for themselves.\n\nCollaboration, sharing clues, or discussing solutions with other participants will result in immediate disqualification.\n\nTo assist participants who are falling behind, official hints will be broadcast by the organizer at fixed 20-minute intervals. Additional clues may be provided at the organizer’s discretion.\n\nThe event will be conducted virtually through a dedicated WhatsApp group where all timing details, encrypted files, and official clues will be shared. (Note: If absolute necessity dictates, the event can pivot to an in-person format where participants must bring their own devices).\n\nSubmission\nFormat: Digital Verification Code\n\nSubmission: Upon clearing all five levels, participants will access a final text file containing a unique victory password. This password must be sent immediately to the event organizer via WhatsApp to timestamp completion.\n\nDuration: 1.5 hours (90 minutes)\n\nJudging Criteria: The top three positions will be awarded to the first three students who successfully submit the correct final password. In the event that no participant completes all five levels within the 90-minute limit, prizes will be awarded based on the furthest progress made in the shortest time." },
    ]
  },
];
