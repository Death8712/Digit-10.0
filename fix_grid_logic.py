import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Fix grid logic so it's 3 items in a row after Garima Mehra.
# Garima Mehra is index 9 (if Ashok Pandey is 0).
# We want indices 10, 11, 12, ... to be col-span-4 to fit 3 in a row.
# Actually, lg:col-span-4 gives 3 items per row (12/4 = 3).
# Wait, let's see how many items per row we want:
# index 0-5 (Visionaries): 3 per row -> col-span-1 md:col-span-4 lg:col-span-4
# index 6-9 (Mentors): 4 per row -> col-span-1 md:col-span-3 lg:col-span-3
# index 10+ (President, etc): 3 per row -> col-span-1 md:col-span-4 lg:col-span-4

old_grid_logic = '(i >= 6 && i < 10) ? "col-span-1 md:col-span-4 lg:col-span-3" : "col-span-1 md:col-span-4 lg:col-span-4"'
new_grid_logic = '(i >= 6 && i < 10) ? "col-span-1 md:col-span-6 lg:col-span-3" : "col-span-1 md:col-span-6 lg:col-span-4"'
content = content.replace(old_grid_logic, new_grid_logic)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
