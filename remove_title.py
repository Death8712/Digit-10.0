import re

with open('src/components/Visionaries.tsx', 'r') as f:
    content = f.read()

# Remove titleRef declaration
content = re.sub(r'  const titleRef = useRef<HTMLDivElement>\(null\);\n', '', content)

# Remove title animation
title_anim = r"""    // Fade out title
    tl\.to\(titleRef\.current, \{
      opacity: 0,
      y: -20,
      ease: 'power2\.inOut',
      duration: 0\.5,
      force3D: true
    \}, 0\);
"""
content = re.sub(title_anim, '', content)

# Remove HTML element
html_elem = r"""          <div ref=\{titleRef\} className="mb-4 md:mb-6 relative z-30 pt-4 md:pt-8">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-2 font-\['Orbitron',sans-serif\] text-white">Our Team</h2>
            <p className="text-ice-blue font-sans text-sm md:text-base">Meet the minds behind Digit Crew\.</p>
          </div>"""
content = re.sub(html_elem, '', content)

with open('src/components/Visionaries.tsx', 'w') as f:
    f.write(content)
