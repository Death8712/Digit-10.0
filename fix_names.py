import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

replacements = [
    (
        '{ name: "Mr. Ashok Pandey", role: "Visionary", company: "Ahlcon International School", initial: "AP", bio: "Mr. Ashok Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards." }',
        '{ name: "Dr. Ashok Kumar Pandey", role: "Mentor", company: "Ahlcon International School", initial: "AP", bio: "Dr. Ashok Kumar Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards.", image: "/Dr Ashok Kumar Pandey.jpg" }'
    ),
    (
        '{ name: "Mr. Sanjay Yadav", role: "Visionary", company: "Ahlcon International School", initial: "SY", bio: "Mr. Sanjay Yadav manages the day-to-day running of the school and focuses on student growth. He works closely with teachers and students to build a supportive, active learning environment." }',
        '{ name: "Mr. Sanjay Yadav", role: "Principal", company: "Ahlcon International School", initial: "SY", bio: "Mr. Sanjay Yadav manages the day-to-day running of the school and focuses on student growth. He works closely with teachers and students to build a supportive, active learning environment.", image: "/Mr Sanjay Yadav.jpg" }'
    ),
    (
        '{ name: "Mr. Puneet Duggal", role: "Visionary", company: "Ahlcon International School", initial: "PD", bio: "Mr. Puneet Duggal oversees daily operations and academic discipline across the school. He works behind the scenes to keep things running smoothly and support both staff and students." }',
        '{ name: "Mr. Puneet Duggal", role: "Vice Principal", company: "Ahlcon International School", initial: "PD", bio: "Mr. Puneet Duggal oversees daily operations and academic discipline across the school. He works behind the scenes to keep things running smoothly and support both staff and students.", image: "/Mr Puneet Duggal.jpg" }'
    ),
    (
        '{ name: "Dr. Ekta K. Ratra", role: "Visionary", company: "Ahlcon International School", initial: "ER", bio: "Dr. Ekta K. Ratra leads the Senior Stage, guiding students through higher academics and board prep. She helps older students stay focused on their goals and transition smoothly toward university and careers." }',
        '{ name: "Dr. Ekta Kandhari Ratra", role: "Headmistress Senior Stage", company: "Ahlcon International School", initial: "ER", bio: "Dr. Ekta Kandhari Ratra leads the Senior Stage, guiding students through higher academics and board prep. She helps older students stay focused on their goals and transition smoothly toward university and careers.", image: "/Dr Ekta Kandhari Ratra.jpg" }'
    ),
    (
        '{ name: "Ms. Sunanda S. Kumar", role: "Visionary", company: "Ahlcon International School", initial: "SK", bio: "Ms. Sunanda S. Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged." }',
        '{ name: "Ms. Sunanda S Kumar", role: "Headmistress Middle Stage", company: "Ahlcon International School", initial: "SK", bio: "Ms. Sunanda S Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged.", image: "/Ms Sunanda S Kumar.jpg" }'
    ),
    (
        '{ name: "Ms. Madhuri Daddich", role: "Visionary", company: "Ahlcon International School", initial: "MD", bio: "Ms. Madhuri Daddich focuses on building strong fundamentals and a comfortable learning space for younger students. She works to help children build confidence and enjoy coming to school every day." }',
        '{ name: "Ms. Madhuri Dadhich", role: "Headmistress Preparatory Stage", company: "Ahlcon International School", initial: "MD", bio: "Ms. Madhuri Dadhich focuses on building strong fundamentals and a comfortable learning space for younger students. She works to help children build confidence and enjoy coming to school every day.", image: "/Ms Madhuri Dadhich.jpg" }'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
