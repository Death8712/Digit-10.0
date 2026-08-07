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
  teacherInCharge?: string;
  teacherInChargeNumber?: string;
  teamSize?: string;
  registrationLink?: string;
  submissionLink?: string;
  submissionDate?: string;
  themes?: string[];
  sdgs?: string[];
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
        mode: "Preliminary: Online | Final: Offline", 
        classGroup: "Class 3", 
        software: "Paint 3D OR Tux Paint", 
        icon: Brush, 
        size: "col-span-1", 
        isLive: true, 
        about: "Students will design vibrant digital posters on TuxPaint or Paint 3D, bringing to life the theme of either SDG-3, Good Health and Well-Being or SDG-13, Climate Action.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-magic.png", 
        eventHead: "Ananya Gahlot", eventHeadNumber: "9810743364",
        teamSize: "Individual",
        themes: ["Internet Safety"],
        sdgs: ["SDG 3: Good Health and Well-Being", "OR", "SDG 13: Climate Action"],
        submissionFormat: ".png or .jpg format",
        objectives: [
          "To foster creativity and digital art skills by designing meaningful artwork based on Sustainable Development Goals (SDGs).",
          "To encourage young learners to use digital drawing tools to spread awareness about health, well-being, and environmental conservation."
        ],
        judgementCriteria: [
          "Originality", 
          "Creativity", 
          "Effective and Smart Use of Digital Tools", 
          "Presentation", 
          "Relevance to the Theme"
        ],
        requirements: `<b>Guidelines</b>
• Students are required to create a digital artwork based on <b>Internet Safety</b>.
• Students will create a colourful Internet Safety artwork in <b>Tux Paint</b>, highlighting safe online practices such as keeping passwords private, avoiding strangers online, protecting personal information, and being kind online. They can add a catchy slogan like <b>"Think Before You Click!"</b>
• The Artwork must be created using <b>Tux Paint or Paint 3D</b>.
• Students may use appropriate templates, images, effects, and other tools available within the software to enhance their artwork.
• The submission must be the <b>original work</b> of the student.
• Students should use Templates, Pictures, Effects and other tools relevant to the topic.
• Submission of entry should be uploaded in <b>.png or .jpg</b> format on submission link by <b>14th August 2026</b>.
• The submitted file should be clearly named as instructed, for example: <b>EventName_StudentName_ClassSec</b>
• You can submit your entries on the website <a href="https://aisdigit10.in" target="_blank">aisdigit10.in</a>
• Students shortlisted in the Preliminary Round will qualify for the Final Round.
• Students shortlisted in the Preliminary Round will be invited to participate in the Final Round, where they will present and explain their poster in <b>2–3 minutes on 21st August 2026</b> in front of the judges in <b>Junior Computer Lab</b>.
• Certificates will be given to the <b>top 3 winners</b>.

<b>Judgment Criteria</b>
• Originality
• Presentation
• Effective and Smart Use of Digital Tools
• Creativity
• Relevance to the Theme`
      , submissionLink: "https://aisdigit10.in", submissionDate: "14th August 2026"},
      { 
        title: "DigiPoster", registrationLink: "https://forms.gle/oT2hqWsrEbQrRcFu9", 
        description: "Class 4", 
        mode: "Preliminary: Online | Final: Offline", 
        classGroup: "Class 4", 
        software: "Canva", 
        icon: ImageIcon, 
        size: "col-span-1", 
        featured: true, 
        about: "DigiPoster encourages students to explore their creativity on Canva by designing a Poster on either SDG 4, Quality Education OR SDG 15, Life on Land.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-poster.png", 
        eventHead: "Ananya Gahlot", eventHeadNumber: "9810743364",
        teamSize: "Individual",
        themes: ["Cyber Smart Kids"],
        sdgs: ["SDG 4: Quality Education", "OR", "SDG 15: Life on Land"],
        submissionFormat: ".png format",
        objectives: [
          "To inspire students to express their ideas creatively through digital poster designing on Sustainable Development Goals (SDGs).",
          "To enhance visual communication skills using digital design tools and original artwork."
        ],
        judgementCriteria: [
          "Originality", 
          "Presentation", 
          "Effective and Smart Use of Digital Tools", 
          "Creativity", 
          "Relevance to the Theme"
        ],
        requirements: `<b>Guidelines</b>
• Students are required to Design a Digital Awareness Poster in <b>Canva</b> on <b>Cyber Smart Kids</b>.
• The poster should spread awareness about safe, responsible, and smart use of the internet and digital devices.
• Participants are encouraged to use creative elements such as images, templates, backgrounds, icons, and graphics to enhance their posters.
• The poster should include a <b>catchy title or slogan</b> and a clear cyber-safety message.
• The content and design must be the <b>original work</b> of the student.
• The submitted file should be clearly named as instructed, for example: <b>EventName_StudentName_ClassSec</b>
• The file should be saved using the following naming convention: <b>Event Name_Student Name</b>
• Submission of entry should be uploaded in <b>.PNG or .JPG</b> format on the submission link by <b>14th August 2026</b>.
• Students shortlisted in the Preliminary Round will be invited to participate in the Final Round, where they will present and explain their poster in <b>2–3 minutes on 21st August 2026</b> in front of the judges in <b>Junior Computer Lab</b>.
• Certificates will be given to the <b>top 3 winners</b>.

<b>Judgment Criteria</b>
• Originality
• Creativity
• Effective and Smart Use of Digital Tools
• Presentation
• Relevance to the Theme`
      , submissionLink: "https://forms.gle/oT2hqWsrEbQrRcFu9", submissionDate: "14th August 2026"},
      { 
        title: "DigiSlides", registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc0MgJPoUwAOcSG_UtGBAzvPlr-O7FCDNOJc7YcE3r5vLptTA/viewform?usp=publish-editor", 
        description: "Class 5", 
        mode: "Preliminary: Online | Final: Offline", 
        classGroup: "Class 5", 
        software: "Canva", 
        icon: Presentation, 
        size: "col-span-1", 
        about: "In DigiSlides, students step into the world of creative expression, creating engaging presentations on Canva to highlight the importance of the chosen topic.", 
        venue: "Primary Computer Lab (basement) (Final Round)", 
        image: "/digi-slides.png", 
        eventHead: "Navya Ahuja", eventHeadNumber: "7827651124",
        teamSize: "Individual",
        themes: ["AI for a Better Tomorrow – Imagine, Innovate, Inspire"],
        sdgs: ["SDG 6: Clean Water and Sanitation", "OR", "SDG 14: Life Below Water"],
        submissionFormat: ".pptx format",
        judgementCriteria: [
          "Originality", 
          "Technical Skills and Digital Competency", 
          "Creativity and Effective Use of Digital Tools", 
          "Presentation", 
          "Relevance to the Theme"
        ],
        requirements: `<b>Guidelines</b>
• Students are required to create a presentation on <b>AI for a Better Tomorrow – Imagine, Innovate, Inspire</b>.
• The presentation should showcase how Artificial Intelligence (AI) can be used positively and responsibly to make our lives and the world better.
• Participants are encouraged to use <b>Canva</b> features such as templates, text, graphics, elements, images, animations, and transitions creatively.
• The presentation should consist of <b>10 slides</b>, highlighting the mentioned topic and its significance.
• Students should use <b>Canva</b> to create the presentation.
• The submission must be the <b>original work</b> of the student.
• The presentation should be uploaded in <b>.PPTX</b> format by <b>14th August 2026</b>.
• The submitted file should be clearly named as instructed, for example: <b>EventName_StudentName_ClassSec</b>
• Shortlisted participants will be invited to the Final Round, where they will present and explain their topic in <b>2–3 minutes</b> in front of the judges on <b>21st August 2026</b> in the <b>Junior Computer Lab</b>.
• Certificates will be given to the <b>top 3 winners</b>.

<b>Judging Criteria</b>
• Originality
• Technical Skills and Digital Competency
• Creativity and Effective Use of Digital Tools
• Presentation
• Relevance to the Theme`
      , submissionLink: "https://forms.gle/oT2hqWsrEbQrRcFu9", submissionDate: "14th August 2026"},
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
      { title: "DigiTales", registrationLink: "https://forms.gle/N1VUwZehgdyR2jg47", description: "Class 6", mode: "Hybrid (Online Prelims & Offline Final)", classGroup: "Class 6", software: "PowerPoint, Canva, Adobe Express, Scratch", icon: Clapperboard, size: "col-span-1", about: "DigiTales is all about storytelling in the digital age. Students share experiences through comic strips, animations, digital art, or puzzles. This event encourages imagination, expression, and innovation, allowing participants to transform their thoughts into engaging digital creations that entertain, inform, and inspire.", venue: "Middle Computer Lab (basement)", image: "/digi-tales.png", eventHead: "Hanisha Nagi", eventHeadNumber: "9810924894", teamSize: "Individual", themes: ["My Digital Promise for a Better India"], objectives: ["Encourage students to think about national initiatives and sustainable development.", "Promote responsible citizenship through digital storytelling.", "Inspire students to showcase how they contribute towards building a better India.", "Develop creativity, communication, and digital presentation skills."], requirements: `<b>Guidelines</b>
• Choose one Government Mission, such as <b>Swachh Bharat, Green India, Save Environment, Mission Life, Water Conservation, etc.</b>
• Create <b>1 to 2 minute animated video</b>.
• Students may use <b>Microsoft PowerPoint, Canva, Adobe Express</b>, or any other digital creation tool to design their entries.
• The submission must be the student's <b>original work</b>. AI tools may be used only for limited assistance, such as brainstorming or creating minor design elements.
• <b>Note: Fully AI-generated videos are strictly prohibited and will be disqualified.</b>
• Show how you are contributing today and how your efforts can help build a stronger, better, and more prosperous India in the future.
• Clearly mention the student's name, class, and section in the submission.

<b>Selection Process:</b>
• <b>Preliminary Round:</b> Last date for online submission is <b>14th August 2026</b>
• <b>Final Round:</b> Shortlisted participants will present their entries before the panel of judges on <b>21st August 2026</b>.
• Certificates will be given to the <b>top 3 winners</b>.` , submissionLink: "https://forms.gle/vKKVwLvWYNDMsAkT9", submissionDate: "14th August 2026"},
      { title: "DigiQuiz", registrationLink: "https://forms.gle/SHMUFddF3xkrEJVk8", description: "Class 7", mode: "Online", classGroup: "Class 7", software: "Kahoot", icon: Lightbulb, size: "col-span-1", about: "Put your thinking caps on for DigiQuiz! This event tests students’ knowledge of computational thinking and artificial intelligence. Fast-paced and engaging, it challenges participants to think logically, solve problems, and apply concepts, making learning both competitive and fun.", venue: "Online", image: "/digi-quiz.png", eventHead: "Hanisha Nagi", eventHeadNumber: "9810924894", teamSize: "Individual", themes: ["Cybersecurity & Artificial Intelligence Challenge"], objectives: ["Assess students' understanding of Cybersecurity and Artificial Intelligence.", "Promote responsible and ethical use of digital technologies."], requirements: `<b>Guidelines</b>
• Participants must join the quiz using their <b>registered name</b>.
• Ensure a <b>stable internet connection</b> throughout the quiz.
• The quiz will be <b>timed</b>, and no extra time will be provided.
• Use of external help, books, notes, or electronic resources is <b>strictly prohibited</b>.
• Participants must answer independently and maintain fair play.
• The decision of the organizers will be final.
• Certificates will be given to the <b>top 3 winners</b>.
• <b>Note: Participants will be informed of the date and time of the competition in advance.</b>

<b>Judgement Criteria</b>
• Accuracy of Responses
• Speed of Answering
• Cybersecurity & AI Awareness
• Overall Score`, judgementCriteria: ["Accuracy of Responses", "Speed of Answering", "Cybersecurity & AI Awareness", "Overall Score"] , submissionLink: "https://forms.gle/9NYwguZbFp2kEbBL6", submissionDate: "To be informed in advance"},
      { title: "DigiBuild", registrationLink: "https://forms.gle/a6zgNzGwftbnNTQQ7", description: "Class 8", mode: "Online (via Microsoft Teams)", classGroup: "Class 8", software: "Minecraft (Vanilla Creative - Java/Bedrock)", icon: Bot, size: "col-span-1", about: "DigiBuild is a platform for aspiring innovators to showcase their technical prowess. Students will engage in online problem-solving challenges and build creative solutions in real-time.", venue: "Online (Microsoft Teams)", image: "/digi-build.png", eventHead: "Aaradhya Yadav", eventHeadNumber: "9818400124", teamSize: "Team of 2", themes: ["Future World Powered by AI Technology"], objectives: ["Design an AI-powered futuristic world in Minecraft showcasing innovation and sustainability."], requirements: `<b>Competition Guidelines</b>
• Build during the competition <b>only</b>.
• Teams will <b>share their screens</b> one by one while building.
• Total build time will be <b>1 hour</b>. Additional <b>30 minutes</b> will be given for recording and submission.
• Submit <b>screenshots and a video tour</b> explaining the AI features.
• Be ready to answer judges’ questions.
• Certificates will be given to the <b>top 3 winners</b>.

<b>Gameplay Rules</b>
• Vanilla Minecraft (Creative Mode) only.
• Java or Bedrock Edition.
• Command Blocks allowed.
• Mods, plugins, World Edit, downloaded maps/builds and external editing tools are <b>strictly prohibited</b>.

<b>General Rules</b>
• Original work only.
• No external assistance.
• Late submissions not accepted.
• Judges' decision will be final.

<b>Judgement Criteria</b>
• Creativity
• AI Integration
• Technical Execution
• Innovation
• Presentation
• Teamwork
• Overall Impact`, judgementCriteria: ["Creativity", "AI Integration", "Technical Execution", "Innovation", "Presentation", "Teamwork", "Overall Impact"] , submissionLink: "https://forms.gle/yJ8XXKPEkuB7bwwcA", submissionDate: "To be informed in advance"},
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
      { title: "DigiTote", registrationLink: "https://forms.gle/99fGYJK4KrEPu26A7", description: "Class 9-12", mode: "Offline", classGroup: "Class 9-12", software: "Physical Tote Bag (Prepared at Home)", icon: ShoppingBag, size: "col-span-1", about: "DigiTote combines creativity with sustainability. Students design eco-friendly tote bags inspired by technology, turning everyday items into meaningful expressions. This offline event encourages innovation, environmental awareness, and artistic flair, proving that style and sustainability can go hand in hand.", venue: "Auditorium", image: "/digi-tote.png", eventHead: "Ishika Mittal", eventHeadNumber: "9310527312" , teamSize: "Team of 2", themes: ["Upcycle E-Waste: Design for a Greener Tomorrow"], objectives: ["Encourage students to creatively reuse discarded electronic components.", "Promote awareness about responsible e-waste management and environmental sustainability.", "Inspire innovation by transforming waste into functional and artistic designs.", "Develop creativity, teamwork, and design-thinking skills.", "Highlight the importance of the 3Rs—Reduce, Reuse, and Recycle—in building a sustainable future."], requirements: `<b>Guidelines</b>
• <b>Register till <mark>August 14th</mark></b>
• The tote bag must be <b>designed and completed before the competition</b> and brought to school on the event day.
• The design should effectively communicate a message related to e-waste reduction, sustainability, responsible technology use, or the circular economy.
• Certificates will be awarded to the <b>Top 3 winners</b>.

<b>Design Rules</b>
• The tote bag must be made using <b>jute, cotton, or any other eco-friendly fabric</b>.
• <b>Dimensions: 14.5 inches × 16.5 inches (L × B)</b>.
• Incorporate <b>upcycled e-waste materials</b> such as old keyboard keys, circuit boards, wires, CDs/DVDs, floppy disks, charging cables, or other discarded electronic components.
• Participants may use fabric paints, embroidery, appliqué, hand lettering, or other suitable art techniques.
• All e-waste components must be <b>securely attached</b>.
• Batteries, broken glass, exposed circuits, live electrical parts, or any other hazardous materials are <b>strictly prohibited</b>.
• Clearly mention both participants' names, class, and section on the reverse side of the tote bag.

<b>Judgement Criteria</b>
• Creativity & Innovation
• Effective Use of Upcycled E-Waste
• Theme Relevance & Sustainability
• Craftsmanship & Finish
• Presentation` , submissionDate: "Register till <mark>August 14th</mark> (Event Day: 21st August 2026)"},
      { title: "DigiBattles", registrationLink: "https://forms.gle/DqjJ9N5dAHnQ4Le66", description: "Class 9-12", mode: "Online Prelims | Offline Finals", classGroup: "Class 9-12", software: "Battlegrounds Mobile India (BGMI)", icon: Gamepad2, size: "col-span-1", featured: true, about: "DigiBattles brings teamwork and strategy into the spotlight. Students compete in teams through gaming challenges, testing coordination, communication, and quick decision-making. It’s not just about playing—it’s about strategy, collaboration, and performing under pressure.", venue: "Online & Offline (Second Floor Classrooms)", image: "/digi-battles.png", eventHead: "Divyansh Rathore", eventHeadNumber: "9560802211" , teamSize: "Team of 4", themes: ["The Ultimate Battlegrounds Mobile Tournament"], objectives: ["Step into the battleground and compete in DIGIBattle. Form your squad, showcase your teamwork, strategy, and gaming skills, and battle through intense TPP/FPP survival shooter matches against the best teams. Fight for victory, earn bragging rights, and experience the thrill of competitive mobile esports."], requirements: `<b>Tournament Schedule</b>
• <b>Register till <mark>August 14th</mark></b>
• <b>First Round (Online):</b> 19th August 2026
• <b>Second Round (Offline):</b> 21st August 2026

<b>Requirements</b>
• All participants must possess a <b>valid BGMI account</b>.
• Only registered players are permitted. Substitutes or unregistered players are <b>not allowed</b>.
• Teams must report and be ready before the scheduled match time.
• Participants must ensure they have sufficient gameplay availability on the tournament days.
• Any technical issues must be reported to the organizers immediately.
• Certificates will be awarded to the <b>Top 3 winners</b>.

<b>Gameplay Rules</b>
• Complete all mandatory in-game tutorials before the tournament. No extra time will be provided.
• Matches will be played in <b>TPP/FPP Survival Shooter mode</b> as instructed by the organizers.
• Teaming, collusion, or cooperation with opposing teams is <b>strictly prohibited</b>.
• The use of hacks, cheats, exploits, or unauthorized third-party software will result in <b>immediate disqualification</b>.

<b>General Rules</b>
• Maintain professional conduct throughout the tournament.
• Abusive, offensive, discriminatory language, or unsportsmanlike behaviour will lead to disqualification.
• Late registrations will not be accepted.
• Organizers reserve the right to interpret, amend, or enforce the rules to ensure fair play.
• The decision of the organizers and judges will be final.` , submissionDate: "Register till <mark>August 14th</mark> | Event: 19th & 21st August 2026"},
      { title: "DigiMeme", registrationLink: "https://forms.gle/tK29smSro85PP8Ct9", description: "Class 9-12", mode: "Online Prelims | Offline Finals", classGroup: "Class 9-12", software: "Photoshop / Canva / Any", icon: ImageIcon, size: "col-span-1", about: "DigiMeme is the ultimate playground for tech-humor and creativity. Students design humorous, high-impact tech memes that blend digital culture, computing jokes, and clever concepts.", venue: "Offline", image: "/digi-meme.png", eventHead: "Aditya Pandey", eventHeadNumber: "9211977792" , teamSize: "Team of 2", themes: ["Daily Dose of Digital Depths"], objectives: ["Encourage creativity through digital memes.", "Promote digital literacy and responsible technology use.", "Develop teamwork, humour, and visual communication skills.", "Spread awareness about technology, AI, cybersecurity, and digital wellness."], requirements: `<b>Guidelines</b>
<b>Round 1 – Online Preliminary Round</b>
• <b>Register till <mark>August 14th</mark></b>
• This is a <b>team event</b>, with 2 participants per team.
• Create <b>one original digital meme</b> based on the given theme.
• AI tools may be used only for brainstorming. <b>AI-generated memes are not allowed.</b>
• Offensive, copied, or inappropriate content will lead to <b>disqualification</b>.
• Submit the meme in <b>JPEG/PNG format (1080 × 1080 px)</b> with a caption (maximum 30 words).
• Shortlisted teams will qualify for the Final Round which will be held on <b>21st August 2026</b> in Senior IT Lab.

<b>Round 2 – Offline Final Round</b>
• A <b>surprise theme</b> will be announced on the spot.
• Teams will have <b>45 minutes</b> to create a new original meme.
• Internet browsing and pre-made templates are <b>not permitted</b>.
• Teams may be asked to briefly explain the concept behind their meme.

<b>Submission</b>
• <b>Round 1:</b> Upload the meme through the designated online submission link before the deadline.
• <b>Round 2:</b> Submit the completed meme during the event within the allotted time.
• Certificates will be given to the <b>top 3 winners only</b>.` , submissionDate: "Register till <mark>August 14th</mark>"},
      { title: "DigiCipher", registrationLink: "https://forms.gle/D32aJLKhFkyd3Lui7", description: "Class 9-12", mode: "Online (via WhatsApp)", classGroup: "Class 9-12", software: "-", icon: Key, size: "col-span-1", about: "DigiCipher challenges students with cryptography and problem-solving. Decode puzzles, crack ciphers, and find the hidden flag in this intense CTF-style event.", venue: "Online", image: "/digi-cipher.png", eventHead: "Vivaan Tripathi", eventHeadNumber: "7011309610" , teamSize: "Individual", themes: ["Alternate Reality Game (ARG): Decipher the Matrix"], objectives: ["Enhance Problem-Solving: Test and develop the critical thinking, logical reasoning, and deciphering skills of the participants.", "Promote Digital Literacy: Encourage the effective use of digital file management tools, encryption techniques, and online decoding resources.", "Foster Independent Thinking: Challenge students to rely on their intellect and analytical skills to solve complex, layered puzzles without automated assistance.", "Simulate Real-World Cybersecurity Puzzles: Introduce students to basic concepts of cryptography, file security, and pattern recognition in an engaging, competitive format."], requirements: `<b>Guidelines</b>
• <b>Register till <mark>August 14th</mark></b>
• This is an <b>individual event</b>.
• The competition consists of <b>5 sequential cipher-based levels</b> in an Alternate Reality Game (ARG) format.
• Each solved level reveals the password required to unlock the next encrypted folder.
• Participants must use a computer (preferred) or a mobile device capable of opening password-protected ZIP files.
• Online decoding and decryption tools may be used where required.
• Challenges must be solved in the <b>given sequence</b>.
• Using AI to generate direct answers is <b>strictly prohibited</b>.
• Collaboration, sharing clues, or discussing solutions with other participants will result in <b>immediate disqualification</b>.
• Official hints will be shared every 20 minutes. Additional hints may be provided at the organizers' discretion.
• The event will be conducted through a dedicated <b>WhatsApp group</b> where all encrypted files, announcements, and official hints will be shared.
• Upon completing all five levels, participants must submit the final verification password to the organizer via WhatsApp.
• Ensure your device has a compatible file explorer capable of extracting password-protected ZIP files.
• Organizers reserve the right to modify or interpret the rules if required.
• The decision of the organizers and judges will be final.
• Certificates will be awarded to the <b>Top 3 winners</b>.` , submissionDate: "Register till <mark>August 14th</mark>"},
    ]
  },
];
