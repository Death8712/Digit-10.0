import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Mail, School, Phone, Layout, Send, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

const EVENTS_BY_CATEGORY = {
  "Preparatory Stage": ["Digimagic", "Digiposter", "Digislides"],
  "Middle Stage": ["Digitales", "DigiQuiz"],
  "Seniors Stage": ["Digi Tote", "Digi Bug"],
  "Blockbuster Events": ["Digi Battles", "Digi Arena"]
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    school_name: "",
    phone_number: "",
    selected_event: ""
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setStatus('success');
      setFormData({
        full_name: "",
        email: "",
        school_name: "",
        phone_number: "",
        selected_event: ""
      });
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred');
    }
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-cyan/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan font-mono text-xs tracking-[0.4em] uppercase mb-4 block">Deployment Protocol</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter mb-6 italic">
              SECURE YOUR <span className="text-neon-cyan">SLOT</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto font-sans leading-relaxed">
              Join the elite circle of innovators. Complete the biometric data acquisition form below to register for DIGIT 10.0.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-xl relative overflow-hidden group shadow-2xl"
        >
          {/* Industrial Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 -rotate-45 translate-x-16 -translate-y-16" />
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neon-cyan via-purple-500 to-transparent opacity-50" />

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-white/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <User size={12} className="text-neon-cyan" /> Full Name
              </label>
              <input
                required
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Subject Name"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white font-sans placeholder:text-white/10 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-white/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Mail size={12} className="text-neon-cyan" /> Network ID (Email)
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="id@network.com"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white font-sans placeholder:text-white/10 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* School Name */}
            <div className="space-y-2">
              <label className="text-white/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <School size={12} className="text-neon-cyan" /> Institution
              </label>
              <input
                required
                type="text"
                name="school_name"
                value={formData.school_name}
                onChange={handleChange}
                placeholder="Ahlcon International School"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white font-sans placeholder:text-white/10 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label className="text-white/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Phone size={12} className="text-neon-cyan" /> Comm Link (Phone)
              </label>
              <input
                required
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg text-white font-sans placeholder:text-white/10 focus:outline-none focus:border-neon-cyan/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Selected Event */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-white/60 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Layout size={12} className="text-neon-cyan" /> Mission Objective (Event)
              </label>
              <select
                required
                name="selected_event"
                value={formData.selected_event}
                onChange={handleChange}
                className="w-full bg-[#0c0c0e] border border-white/10 px-4 py-3 rounded-lg text-white font-sans focus:outline-none focus:border-neon-cyan/50 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select Event</option>
                {Object.entries(EVENTS_BY_CATEGORY).map(([category, events]) => (
                  <optgroup key={category} label={category} className="bg-black text-white/50 font-mono uppercase text-[10px] tracking-widest">
                    {events.map(event => (
                      <option key={event} value={event} className="text-white font-sans normal-case text-base">
                        {event}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  "w-full group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-cyan to-purple-600 text-black font-black font-mono tracking-[0.2em] uppercase rounded-lg overflow-hidden transition-all duration-500",
                  status === 'loading' ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] active:scale-95"
                )}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                {status === 'loading' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Layout size={20} />
                    </motion.div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Initialize Registration
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Feedback States */}
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-4 text-green-400"
              >
                <CheckCircle size={20} />
                <div className="font-mono text-xs uppercase tracking-tighter">
                  Data segment secured. Registration confirmed. Welcome aboard.
                </div>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-4 text-red-400"
              >
                <AlertCircle size={20} />
                <div className="font-mono text-xs uppercase tracking-tighter">
                  System Malfunction: {errorMessage}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
