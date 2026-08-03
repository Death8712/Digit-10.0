import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]',
    'md:drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]'
)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
