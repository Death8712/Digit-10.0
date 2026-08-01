import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Change initialSpeakers to 6
content = content.replace('const initialSpeakers = fullSpeakers.slice(0, 4);', 'const initialSpeakers = fullSpeakers.slice(0, 6);')

# Change grid column logic
old_grid_logic = 'i < 4 ? "col-span-1 md:col-span-3" : "col-span-1 md:col-span-4"'
new_grid_logic = 'i < 6 ? "col-span-1 md:col-span-4 lg:col-span-4" : "col-span-1 md:col-span-4 lg:col-span-3"'
content = content.replace(old_grid_logic, new_grid_logic)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
