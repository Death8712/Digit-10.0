import re

with open('src/components/RegistrationForm.tsx', 'r') as f:
    content = f.read()

# Add submissionLinks
content = content.replace(
    '{ name: "DigiBuild", link: "https://forms.gle/vvVwPuHbq6xC383P7" }',
    '{ name: "DigiBuild", link: "https://forms.gle/vvVwPuHbq6xC383P7", submissionLink: "https://forms.gle/yJ8XXKPEkuB7bwwcA" }'
)

content = content.replace(
    '{ name: "DigiThon", link: "https://forms.gle/XbcUQVdSB3kYenx87" }',
    '{ name: "DigiThon", link: "https://forms.gle/XbcUQVdSB3kYenx87", submissionLink: "https://forms.gle/PoVHyc1N4pZ6iiYZA" }'
)

content = content.replace(
    '{ name: "DigiAI", link: "https://forms.gle/r6SjjfLxc5CcE96Y7" }',
    '{ name: "DigiAI", link: "https://forms.gle/r6SjjfLxc5CcE96Y7", submissionLink: "https://forms.gle/VbGUhrZG3Es4M3U17" }'
)

content = content.replace(
    '{ name: "DigiFrames", link: "https://forms.gle/z6Kosigzztwqxnko9" }',
    '{ name: "DigiFrames", link: "https://forms.gle/z6Kosigzztwqxnko9", submissionLink: "https://forms.gle/N3D1etUKEoNqyroC8" }'
)

content = content.replace(
    '{ name: "DigiScratch", link: "https://forms.gle/yqvhAApcUWGkr3qi6" }',
    '{ name: "DigiScratch", link: "https://forms.gle/yqvhAApcUWGkr3qi6", submissionLink: "https://forms.gle/L1MamUhfreoCsUeB8" }'
)

# Also need to import useState, AnimatePresence, X, FileEdit, Monitor
# Add state to RegistrationForm
# Let's just rewrite the whole file using a python script to avoid regex hell

