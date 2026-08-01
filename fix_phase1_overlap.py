import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Replace the flex-1 positioning with absolute
old_initial_grid = '<div className="flex-1 w-full max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 pointer-events-none content-center mt-8">'
new_initial_grid = '<div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 pointer-events-none">'
content = content.replace(old_initial_grid, new_initial_grid)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
