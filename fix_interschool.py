with open('src/components/InterschoolSpecial.tsx', 'w') as f:
    f.write("""import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Lock, Unlock, Globe, Zap, Cpu, ExternalLink, Bot, Video } from "lucide-react";
import { cn } from "../lib/utils";
import EventModal from "./EventModal";
import { EventItem } from "../data/events";

const interschoolEvents: Record<string, EventItem> = {
  digithon: {
    title: "DigiThon",
    registrationLink: "https://forms.gle/XbcUQVdSB3kYenx87",
    submissionLink: "https://forms.gle/PoVHyc1N4pZ6iiYZA",
    description: "Programming on Python and MySQL",
    mode: "Online",
    classGroup: "Class 9 to 12",
    software: "Python & MySQL",
    icon: Cpu,
    size: "col-span-1",
    about: "The aim of DigiThon is to find a real world problem that is worthwhile to solve in groups of 2 students. Participants are encouraged to visit local businesses to identify real problems (such as automated GST invoice generation) and build an application using Python for structure/logic/UI and MySQL for data manipulation.",
    venue: "Online",
    image: "/digi-thon.png",
    eventHead: "Ishika Mittal",
    eventHeadNumber: "+91 9310527312",
    teacherInCharge: "Ms. Urvashi Singhal",
    teacherInChargeNumber: "+91 9818893193",
    teamSize: "1 team per school (2 participants per team)",
    themes: ["MySQL and Python Programming"],
    judgementCriteria: [
      "Problem Understanding",
      "Python Coding",
      "Solution Design",
      "Impact & Insight",
      "Originality and Creativity"
    ],
    requirements: "Guidelines:\\n• Number of teams per school: 1 | Participants per team: 2\\n• Theme: MySQL and Python Programming\\n• Students are encouraged to visit local businesses and ask about real-world challenges (e.g. automating GST invoice generation from raw transaction data).\\n• Students write a Python program that handles the structure, logic, and user interface.\\n• MySQL will be used for data manipulation.\\n• Use a wide variety of Python libraries to create user-friendly applications (games, school software, accessibility apps, or mobile apps).\\n• Must use free, legitimate open-source software.\\n• Plagiarized, copied, or inappropriate/harmful content will lead to disqualification.\\n• The use of AI is strictly prohibited.\\n• E-certificates will be given to the top three winning teams.\\n\\nSubmission:\\n1. Upload the python (.py) files, MySQL (notepad) files, connectivity commands (notepad) file, a short write-up (maximum 500 words), and a video or screen recording (maximum 5 minutes) of working software.\\n2. Share the drive link including all files at https://forms.gle/Hn3NLHXLqcANnkgo7 before the deadline 21st August 2026."
  },
  digiai: {
    title: "DigiAI",
    registrationLink: "https://forms.gle/r6SjjfLxc5CcE96Y7",
    submissionLink: "https://forms.gle/VbGUhrZG3Es4M3U17",
    description: 'Build the "Second Brain" for Real Life',
    mode: "Online",
    classGroup: "Class 9 to 12",
    software: "Python / AI Frameworks / Open Source",
    icon: Bot,
    size: "col-span-1",
    about: "Build an original AI powered MVP (Minimum Viable Product) that helps students schedule their tasks, take decisions, protect their privacy and help them think clearly. Your MVP must feature a system that takes fragmented inputs, applies an AI reasoning layer (pattern detection, modeling, or decision support), and produces a useful output a human operator can act on.",
    venue: "Online",
    image: "/Digi-AI.png",
    eventHead: "Sheza Khan",
    eventHeadNumber: "+91 9968882786",
    teacherInCharge: "Ms. Urvashi Singhal",
    teacherInChargeNumber: "+91 9818893193",
    teamSize: "1 team per school (2 participants per team)",
    themes: ["Computational Thinking and Artificial Intelligence"],
    judgementCriteria: [
      "Problem Understanding",
      "AI Reasoning",
      "Solution Design",
      "Impact & Insight",
      "Responsible AI"
    ],
    requirements: "Guidelines:\\n• Number of teams per school: 1 | Participants per team: 2\\n• Theme: Computational Thinking and Artificial Intelligence\\n• Build an original AI powered MVP that helps students schedule tasks, make decisions, protect privacy, and think clearly.\\n• MVP must feature a system taking fragmented inputs, applying an AI reasoning layer (pattern detection, modeling, or decision support), and producing actionable output.\\n• AI tools may be used for brainstorming, prototyping, and development, but the core idea, logic, and integration must be your team\\'s original work.\\n• Disclose all AI tools used in your submission.\\n• Judging rewards reasoning and design thinking over technical resources. Open-source/free tools are encouraged.\\n• Solutions should not function only as surveillance tools or remove human agency from final decisions.\\n• Plagiarized, copied, or inappropriate/harmful content will lead to disqualification.\\n• E-certificates will be given to the top three winning teams.\\n\\nSubmission:\\n1. Submit a working prototype (MVP) and a short write-up (maximum 500 words) explaining the problem, how the AI works, and how privacy and harm were addressed.\\n2. Include a demo video or screen recording (maximum 3 minutes) of the working prototype.\\n3. Upload the prototype link/files at https://forms.gle/61zWhAfeHR1beX2x9 before the deadline 21st August 2026."
  },
  digiframes: {
    title: "DigiFrames",
    registrationLink: "https://forms.gle/z6Kosigzztwqxnko9",
    submissionLink: "https://forms.gle/N3D1etUKEoNqyroC8",
    description: "Identify. Innovate. Impact.",
    mode: "Online",
    classGroup: "Class 6-8",
    software: "Video Editing Tools",
    icon: Video,
    size: "col-span-1",
    about: "Think like a changemaker and use AI and technology to solve a real problem in your local community. Observe, innovate, and present your idea through a 2–3 minute video that demonstrates how technology can create a positive impact.",
    venue: "Online",
    image: "/Digi-Frames.png",
    eventHead: "Aaradhya Yadav",
    eventHeadNumber: "+91 9818400124",
    teacherInCharge: "Ms. Deepti Chopra",
    teacherInChargeNumber: "+91 8860189198",
    teamSize: "1 team per school (2 participants per team)",
    themes: ["Innovating for a Better Community"],
    judgementCriteria: [
      "Understanding of the Community Problem",
      "Innovation and Creativity",
      "Application of AI & Technology",
      "Effectiveness and Feasibility of the Proposed Solution",
      "Presentation and Communication"
    ],
    requirements: "Objectives:\\n• Inspire students to identify real-world community challenges and propose practical solutions.\\n• Develop problem-solving and design thinking skills.\\n• Encourage responsible, ethical, and creative use of AI and technology.\\n• Foster research, innovation, communication, and teamwork.\\n\\nEligibility:\\n• Open to Classes VI–VIII.\\n• Participation in teams of 2 students.\\n• Only one entry per team is permitted.\\n\\nRules & Requirements:\\n• Submit a 2–3 minute video presenting an innovative Technology solution to a local community problem.\\n• The presentation should clearly address:\\n  ○ Problem Statement – Identify and describe the community issue.\\n  ○ Proposed Solution – Present the technology based solution.\\n  ○ Working Mechanism – Explain how the solution functions.\\n  ○ Target Beneficiaries – Identify who will benefit from the solution.\\n  ○ Community Impact – Describe the expected outcomes and benefits.\\n• The solution should be innovative, practical, and relevant to the chosen problem.\\n• Narration or subtitles must be in English.\\n• AI tools may be used for research, animation, or visualization. However, the concept, explanation, and narration must be entirely the team\\'s own.\\n• Videos may include interviews, photographs, sketches, models, demonstrations, or animations (optional).\\n• A working prototype or coding is NOT required.\\n• The video must be submitted in MP4 format, landscape orientation, with clear audio and visuals.\\n• All work must be original and created specifically for this competition.\\n\\nGrounds for Disqualification:\\n• Video exceeds or falls short of the prescribed duration.\\n• Fully AI-generated submissions without original student contribution.\\n• False claims, fabricated evidence, or misrepresentation of research.\\n• Multiple submissions from the same team or participant.\\n• Failure to comply with the competition rules or submission requirements.\\n\\nSubmission:\\nUpload the 2–3 minute video to YouTube as an Unlisted video and submit the YouTube link at https://forms.gle/YwDugv245ZSnzvfX7. The video must be in MP4 format, landscape orientation, with clear audio and visuals. Last Date of Submission: 21st August 2026."
  },
  digiscratch: {
    title: "DigiScratch",
    registrationLink: "https://forms.gle/KcSh7RZE77C27NoC8",
    submissionLink: "https://forms.gle/itMacTVM679vJ3iN7",
    description: "Math Humour",
    mode: "Online",
    classGroup: "Class 5",
    software: "Scratch",
    icon: ExternalLink,
    size: "col-span-1",
    about: "An engaging inter-school Scratch coding competition designed for Class V students to explore Mathematics through creativity, humour, and coding. Participants will develop an interactive Scratch project that explains a mathematical concept using entertaining elements such as jokes, memes, humorous animations, or storytelling, making learning both enjoyable and meaningful.",
    venue: "Online",
    image: "/Digi-Scratch.png",
    eventHead: "Navya Ahuja",
    eventHeadNumber: "+91 7827651124",
    teacherInCharge: "Ms. Garima Mehra",
    teacherInChargeNumber: "+91 8527886150",
    teamSize: "1 participant per school",
    themes: ["Math Humour"],
    judgementCriteria: [
      "Creativity and Humour",
      "Programming Skills",
      "Clarity of Communication",
      "Understanding of Mathematical Concepts"
    ],
    requirements: "Guidelines:\\n• Mode: Online | Team Size: 1 participant per school | Platform: Scratch\\n• Theme: Math Humour\\n• Develop an interactive Scratch project that explains a mathematical concept using entertaining elements like jokes, memes, humorous animations, or storytelling.\\n• E-certificates will be mailed to the top three winners.\\n• For queries, contact Event In-charge between 3:00 p.m. to 5:00 p.m. (Ms. Garima Mehra: 8527886150, Ms. Navya Ahuja: 7827651124).\\n\\nSubmission Requirements:\\n1. Submit Scratch project file (.sb3) and Scratch project sharing link by the name: Schoolname_EventName_StudentName.\\n2. Register and submit your entries at https://forms.gle/L1MamUhfreoCsUeB8.\\n3. Send your entries latest by 21st August 2026."
  }
};

export default function InterschoolSpecial() {
  const [selectedEvent, setSelectedEvent] = useState<{event: EventItem, accent: string} | null>(null);

  return (
    <section id="interschool" className="py-20 relative z-10 w-full overflow-hidden min-h-[600px] flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
        <div className="relative p-[2px] rounded-3xl overflow-hidden group">
          {/* Static Pink border */}
          <div className="absolute inset-0 bg-neon-magenta" />
          
          <div className="bg-cyber-black rounded-3xl p-8 md:p-12 relative z-10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
            
            <div className="relative z-20 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono text-xs font-bold tracking-widest uppercase mb-6">
                <Zap className="w-3 h-3 fill-neon-magenta" />
                Exclusive Access Granted
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta mb-6">
                INTER-SCHOOL MEGA EVENTS
              </h2>
              
              <p className="text-lg text-ice-blue leading-relaxed font-sans max-w-2xl mb-12">
                Welcome to the elite tier of DIGIT 10.0. These high-stakes challenges are strictly for top-tier competitors representing their institutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left">
                {/* Event 1: DigiThon */}
                <div className="p-6 rounded-2xl border border-neon-cyan/20 bg-black/40 md:backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-cyan transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiThon</h3>
                  <p className="text-neon-cyan text-xs font-mono font-semibold uppercase tracking-wider">
                    Programming on Python & MySQL
                  </p>
                  <p className="text-ice-blue font-sans text-sm flex-1">
                    Find a real-world problem and build a solution using Python & MySQL. Create open-source software for local businesses or schools.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-neon-cyan">CLASS 9-12</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digithon, accent: "text-neon-cyan"}); }}
                      className="text-ice-blue group-hover:text-neon-cyan transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>

                {/* Event 2: DigiAI */}
                <div className="p-6 rounded-2xl border border-purple-400/20 bg-black/40 md:backdrop-blur-sm flex flex-col gap-4 group hover:border-purple-400 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiAI</h3>
                  <p className="text-purple-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    "Second Brain" for Real Life
                  </p>
                  <p className="text-ice-blue font-sans text-sm flex-1">
                    Build an original AI-powered MVP with a reasoning layer to help students schedule tasks, make decisions, and protect privacy.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-purple-400">CLASS 9-12</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiai, accent: "text-purple-400"}); }}
                      className="text-ice-blue group-hover:text-purple-400 transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>
                
                {/* Event 3: DigiFrames */}
                <div className="p-6 rounded-2xl border border-yellow-500/20 bg-black/40 md:backdrop-blur-sm flex flex-col gap-4 group hover:border-yellow-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiFrames</h3>
                  <p className="text-yellow-500 text-xs font-mono font-semibold uppercase tracking-wider">
                    Identify. Innovate. Impact.
                  </p>
                  <p className="text-ice-blue font-sans text-sm flex-1">
                    Think like a changemaker and use AI and technology to solve a real problem in your local community through a 2-3 minute video.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-yellow-500">CLASS 6-8</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiframes, accent: "text-yellow-500"}); }}
                      className="text-ice-blue group-hover:text-yellow-500 transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>

                {/* Event 4: DigiScratch */}
                <div className="p-6 rounded-2xl border border-neon-magenta/20 bg-black/40 md:backdrop-blur-sm flex flex-col gap-4 group hover:border-neon-magenta transition-colors">
                  <div className="flex justify-between items-start mb-2">
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">DigiScratch</h3>
                  <p className="text-neon-magenta text-xs font-mono font-semibold uppercase tracking-wider">
                    Math O Mania ('Math Humour')
                  </p>
                  <p className="text-ice-blue font-sans text-sm flex-1">
                    Explain mathematical concepts using Scratch coding, humor, memes, storytelling, and interactive animations.
                  </p>
                  <div className="flex items-center justify-between mt-4 text-xs font-mono font-bold">
                    <span className="text-neon-magenta">CLASS 5</span>
                    <button 
                      onClick={(e) => { e.preventDefault(); setSelectedEvent({event: interschoolEvents.digiscratch, accent: "text-neon-magenta"}); }}
                      className="text-ice-blue group-hover:text-neon-magenta transition-colors uppercase tracking-[0.2em]"
                    >
                      [ INITIATE ]
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EventModal 
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event || interschoolEvents.digithon}
        categoryAccent={selectedEvent?.accent || "text-neon-cyan"}
      />
    </section>
  );
}
""")
