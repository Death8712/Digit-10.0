import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

replacements = [
    ('image: "/Dr Ashok Kumar Pandey.jpg"', 'image: "/Dr. Ashok Kumar Pandey.jpg"'),
    ('image: "/Mr Sanjay Yadav.jpg"', 'image: "/Mr.Sanjay Yadav.jpg"'),
    ('image: "/Mr Puneet Duggal.jpg"', 'image: "/Mr. Puneet Duggal.jpg"'),
    ('image: "/Dr Ekta Kandhari Ratra.jpg"', 'image: "/Dr. Ekta Kandhari Ratra.jpg"'),
    ('image: "/Ms Sunanda S Kumar.jpg"', 'image: "/Ms.Sunanda S Kumar.jpg"'),
    ('image: "/Ms Madhuri Dadhich.jpg"', 'image: "/Ms.Madhuri Dadhich.jpg"'),
]

for old, new in replacements:
    content = content.replace(old, new)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
