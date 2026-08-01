import re
with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Let's ensure Phase 1 has 6 cards explicitly in the comment to avoid confusion, though it doesn't affect code.
content = content.replace('{/* 4 Initial Cards - Phase 1 */}', '{/* 6 Initial Cards - Phase 1 */}')

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
