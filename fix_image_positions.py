import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

replacements = [
    (
        '{ name: "Dr. Ashok Kumar Pandey", role: "Mentor", company: "Ahlcon International School", initial: "AP", bio: "Dr. Ashok Kumar Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards.", image: "/Dr. Ashok Kumar Pandey.jpg" }',
        '{ name: "Dr. Ashok Kumar Pandey", role: "Mentor", company: "Ahlcon International School", initial: "AP", bio: "Dr. Ashok Kumar Pandey guides the overall vision and direction of Ahlcon International School. He focuses on keeping learning modern and helping the school maintain strong educational standards.", image: "/Dr. Ashok Kumar Pandey.jpg", imagePosition: "center top" }'
    ),
    (
        '{ name: "Ms. Sunanda S Kumar", role: "Headmistress Middle Stage", company: "Ahlcon International School", initial: "SK", bio: "Ms. Sunanda S Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged.", image: "/Ms.Sunanda S Kumar.jpg" }',
        '{ name: "Ms. Sunanda S Kumar", role: "Headmistress Middle Stage", company: "Ahlcon International School", initial: "SK", bio: "Ms. Sunanda S Kumar heads the Middle Stage, helping students adapt as their studies become more structured. She balances academics with extracurriculars to keep students curious and engaged.", image: "/Ms.Sunanda S Kumar.jpg", imagePosition: "center top" }'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
