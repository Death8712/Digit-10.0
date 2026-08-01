import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Fix grid logic
old_grid_logic = 'i < 6 ? "col-span-1 md:col-span-4 lg:col-span-4" : "col-span-1 md:col-span-4 lg:col-span-3"'
new_grid_logic = '(i >= 6 && i < 10) ? "col-span-1 md:col-span-4 lg:col-span-3" : "col-span-1 md:col-span-4 lg:col-span-4"'
content = content.replace(old_grid_logic, new_grid_logic)

# Fix title z-index / position
old_title_div = '<div ref={titleRef} className="mb-4 md:mb-6">'
new_title_div = '<div ref={titleRef} className="mb-4 md:mb-6 relative z-30 pt-4 md:pt-8">'
content = content.replace(old_title_div, new_title_div)

# Adjust initial grid positioning to push it down slightly to avoid covering title
old_initial_grid = '<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 pointer-events-none">'
new_initial_grid = '<div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 pointer-events-none">'
content = content.replace(old_initial_grid, new_initial_grid)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
