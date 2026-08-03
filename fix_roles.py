import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

replacements = [
    (
        '{ name: "Dr. Ashok Kumar Pandey", role: "Mentor"',
        '{ name: "Dr. Ashok Kumar Pandey", role: "Visionary"'
    ),
    (
        '{ name: "Mr. Sanjay Yadav", role: "Principal"',
        '{ name: "Mr. Sanjay Yadav", role: "Visionary"'
    ),
    (
        '{ name: "Mr. Puneet Duggal", role: "Vice Principal"',
        '{ name: "Mr. Puneet Duggal", role: "Organiser"'
    ),
    (
        '{ name: "Dr. Ekta Kandhari Ratra", role: "Headmistress Senior Stage"',
        '{ name: "Dr. Ekta Kandhari Ratra", role: "Co-Organiser"'
    ),
    (
        '{ name: "Ms. Sunanda S Kumar", role: "Headmistress Middle Stage"',
        '{ name: "Ms. Sunanda S Kumar", role: "Co-Organiser"'
    ),
    (
        '{ name: "Ms. Madhuri Dadhich", role: "Headmistress Preparatory Stage"',
        '{ name: "Ms. Madhuri Dadhich", role: "Co-Organiser"'
    ),
    (
        '{ name: "Ms. Urvashi Singhal", role: "Mentor"',
        '{ name: "Ms. Urvashi Singhal", role: "Founder & Chief Convenor"'
    )
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
