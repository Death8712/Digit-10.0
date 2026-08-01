import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

replacements = [
    (
        '{ name: "Dr. Ashok Pandey", role: "Director, Visionary", company: "Ahlcon International School", initial: "AP" }',
        '{ name: "Mr. Ashok Pandey", role: "Visionary", company: "Ahlcon International School", initial: "AP", bio: "Mr. Ashok Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards." }'
    ),
    (
        '{ name: "Mr. Sanjay Yadav", role: "Principal, Visionary", company: "Ahlcon International School", initial: "SY" }',
        '{ name: "Mr. Sanjay Yadav", role: "Visionary", company: "Ahlcon International School", initial: "SY", bio: "Mr. Sanjay Yadav manages the day-to-day running of the school and focuses on student growth. He works closely with teachers and students to build a supportive, active learning environment." }'
    ),
    (
        '{ name: "Mr. Puneet Duggal", role: "Vice Principal, Visionary", company: "Ahlcon International School", initial: "PD" }',
        '{ name: "Mr. Puneet Duggal", role: "Visionary", company: "Ahlcon International School", initial: "PD", bio: "Mr. Puneet Duggal oversees daily operations and academic discipline across the school. He works behind the scenes to keep things running smoothly and support both staff and students." }'
    ),
    (
        '{ name: "Dr. Ekta K Ratra", role: "Headmistress (Senior Stage), Visionary", company: "Ahlcon International School", initial: "ER" }',
        '{ name: "Dr. Ekta K. Ratra", role: "Visionary", company: "Ahlcon International School", initial: "ER", bio: "Dr. Ekta K. Ratra leads the Senior Stage, guiding students through higher academics and board prep. She helps older students stay focused on their goals and transition smoothly toward university and careers." }'
    ),
    (
        '{ name: "Ms. Sunanda S Kumar", role: "Headmistress (Middle Stage), Visionary", company: "Ahlcon International School", initial: "SK" }',
        '{ name: "Ms. Sunanda S. Kumar", role: "Visionary", company: "Ahlcon International School", initial: "SK", bio: "Ms. Sunanda S. Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged." }'
    ),
    (
        '{ name: "Ms. Madhuri Dadhich", role: "Headmistress (Preparatory Stage), Visionary", company: "Ahlcon International School", initial: "MD" }',
        '{ name: "Ms. Madhuri Daddich", role: "Visionary", company: "Ahlcon International School", initial: "MD", bio: "Ms. Madhuri Daddich focuses on building strong fundamentals and a comfortable learning space for younger students. She works to help children build confidence and enjoy coming to school every day." }'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
