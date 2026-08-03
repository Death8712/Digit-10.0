with open('src/components/InterschoolSpecial.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";',
    ''
)
content = content.replace(
    'import { Lock, Unlock, Globe, Zap, Cpu, ExternalLink, Bot, Video } from "lucide-react";',
    'import { Zap, Cpu, ExternalLink, Bot, Video } from "lucide-react";'
)
content = content.replace(
    'import { useState, useRef, useEffect } from "react";',
    'import { useState } from "react";'
)

with open('src/components/InterschoolSpecial.tsx', 'w') as f:
    f.write(content)
