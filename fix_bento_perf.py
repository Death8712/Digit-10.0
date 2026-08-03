import re

with open('src/components/BentoGrid.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'backdrop-blur-[12px] border bg-[#0F172A]',
    'bg-[#0F172A]/95 md:bg-[#0F172A]/80 md:backdrop-blur-[12px] border'
)

with open('src/components/BentoGrid.tsx', 'w') as f:
    f.write(content)
