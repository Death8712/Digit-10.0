import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Card 1 (Phase 1)
content = content.replace(
    'className="bg-[#0F172A] backdrop-blur-md',
    'className="bg-[#0F172A]/95 md:bg-[#0F172A]/80 md:backdrop-blur-md'
)

# Card 2 (Phase 2)
content = content.replace(
    '"bg-cyber-black/80 backdrop-blur-md',
    '"bg-cyber-black/95 md:bg-cyber-black/80 md:backdrop-blur-md'
)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
