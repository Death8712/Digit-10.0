import re

with open('src/components/RegistrationForm.tsx', 'r') as f:
    content = f.read()

imports = """import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Layout, X, FileEdit, Monitor } from "lucide-react";"""

content = re.sub(r'import { motion } from \"motion/react\";[\s\S]*?import { cn } from \"\.\./lib/utils\";', imports + '\nimport { cn } from "../lib/utils";', content)

# Add submissionLinks to REGISTRATION_LINKS (as done previously but using standard string replace this time to be safe)
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

modal_code = """
      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[10px]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0B132B]/90 backdrop-blur-2xl rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[rgba(0,240,255,0.18)] flex flex-col gap-6"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-ice-blue hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-display font-black text-white uppercase tracking-wider pr-6">
                {selectedEvent.name}
              </h3>
              
              <div className="flex flex-col gap-4">
                <a
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <FileEdit size={20} className="text-neon-cyan" />
                  <span className="font-sans font-bold text-white uppercase tracking-wider text-sm">Registration Form</span>
                </a>
                
                {selectedEvent.submissionLink && (
                  <a
                    href={selectedEvent.submissionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    <Monitor size={20} className="text-neon-cyan" />
                    <span className="font-sans font-bold text-white uppercase tracking-wider text-sm">Submission Form</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
"""

component_start = """export default function RegistrationForm() {
  const [selectedEvent, setSelectedEvent] = useState<{ name: string; link: string; submissionLink?: string } | null>(null);

  return (
"""
content = content.replace("export default function RegistrationForm() {\n  return (", component_start)

# Add the modal right before the closing `</section>`
content = content.replace("    </section>", modal_code + "\n    </section>")

# Manual replace for the anchor
anchor_str_old = """                  <a
                    key={event.name}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] transition-all duration-300 group/link overflow-hidden relative",
                    )}
                  >"""
anchor_str_new = """                  <a
                    key={event.name}
                    href={event.link}
                    target={(event as any).submissionLink ? undefined : "_blank"}
                    rel={(event as any).submissionLink ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if ((event as any).submissionLink) {
                        e.preventDefault();
                        setSelectedEvent(event as any);
                      }
                    }}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border border-[rgba(0,240,255,0.18)] bg-white/[0.02] transition-all duration-300 group/link overflow-hidden relative cursor-pointer",
                    )}
                  >"""

content = content.replace(anchor_str_old, anchor_str_new)

with open('src/components/RegistrationForm.tsx', 'w') as f:
    f.write(content)

