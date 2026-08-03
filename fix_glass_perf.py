import re

with open('src/index.css', 'r') as f:
    content = f.read()

content = content.replace(
    '@apply backdrop-blur-2xl bg-white/5 border',
    '@apply bg-black/90 md:bg-white/5 md:backdrop-blur-2xl border'
)

with open('src/index.css', 'w') as f:
    f.write(content)
