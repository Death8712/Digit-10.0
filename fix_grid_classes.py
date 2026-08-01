import re
with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

old_logic = '(i >= 6 && i < 10) ? "col-span-1 md:col-span-6 lg:col-span-3" : "col-span-1 md:col-span-6 lg:col-span-4"'
new_logic = '(i >= 6 && i < 10) ? "col-span-1 md:col-span-6 lg:col-span-3" : "col-span-1 md:col-span-4 lg:col-span-4"'
content = content.replace(old_logic, new_logic)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
