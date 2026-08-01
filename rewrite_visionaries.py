import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Replace fullSpeakers array
new_speakers = """const fullSpeakers: Speaker[] = [
  { name: "Dr. Ashok Pandey", role: "Director, Visionary", company: "Ahlcon International School", initial: "AP" },
  { name: "Mr. Sanjay Yadav", role: "Principal, Visionary", company: "Ahlcon International School", initial: "SY" },
  { name: "Mr. Puneet Duggal", role: "Vice Principal, Visionary", company: "Ahlcon International School", initial: "PD" },
  { name: "Dr. Ekta K Ratra", role: "Headmistress (Senior Stage), Visionary", company: "Ahlcon International School", initial: "ER" },
  { name: "Ms. Sunanda S Kumar", role: "Headmistress (Middle Stage), Visionary", company: "Ahlcon International School", initial: "SK" },
  { name: "Ms. Madhuri Dadhich", role: "Headmistress (Preparatory Stage), Visionary", company: "Ahlcon International School", initial: "MD" },
  { name: "Ms. Urvashi Singhal", role: "Mentor", company: "Digit Crew", initial: "US", image: "/Ms Uravshi Singhal.jpg", imagePosition: "center top", bio: "Leads the computer science department, guiding the team and mentoring students in technology." },
  { name: "Ms. Nitika Wadhwa", role: "Mentor", company: "Digit Crew", initial: "NW", image: "/Ms Nitika Wadhwa.jpg", imagePosition: "center top", bio: "Teaches coding foundations to students, making classroom learning technical and engaging." },
  { name: "Ms. Deepti Chopra", role: "Mentor", company: "Digit Crew", initial: "DC", image: "/Ms Deepti Chopra.png", bio: "Guides students through computing concepts with patience and mentorship, inspiring their interest in technology." },
  { name: "Ms. Garima Mehra", role: "Mentor", company: "Digit Crew", initial: "GM", image: "/Ms Garima Mehra.png", bio: "Introduces young students to the basics of computers and digital literacy, building their tech skills early." },
  { name: "Rudransh Kandpal", role: "President", company: "Digit Crew", initial: "RK", image: "/Rudransh Kandpal.jpg", bio: "Leads the team, plans strategies, and makes sure everyone works together to achieve our goals." },
  { name: "Ishika Mittal", role: "Vice President", company: "Digit Crew", initial: "IM", image: "/Ishika Mittal.jpg", bio: "Helps in managing team operations, solving problems, and keeping the team organized." },
  { name: "Sheza Khan", role: "Coordinating Director", company: "Digit Crew", initial: "SK", image: "/Sheza Khan.jpg", bio: "Manages our content and information, keeping everything well-organized and running smoothly." },
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
];"""

content = re.sub(r'const fullSpeakers: Speaker\[\] = \[.*?\];', new_speakers, content, flags=re.DOTALL)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
