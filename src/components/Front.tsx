"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Code2, 
  Cpu, 
  Globe,
  Heart,
  UserPlus,
  ArrowLeftRight,
  X
} from 'lucide-react';
import WhatsAppButton from './whatapp';

/**
 * ProfileCard Component
 * A 3D flipping card with glassmorphism effects and Framer Motion animations.
 * Uses a single-file structure as requested.
 */
export default function App() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const techStack = [
    { name: 'React', color: 'bg-cyan-500/20 text-cyan-300' },
    { name: 'Next.js', color: 'bg-zinc-500/20 text-zinc-300' },
    { name: 'TypeScript', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'Tailwind', color: 'bg-sky-500/20 text-sky-300' },
    { name: 'Node.js', color: 'bg-green-500/20 text-green-300' },
    { name: 'Three.js', color: 'bg-purple-500/20 text-purple-300' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#050505] flex items-center justify-center p-6 font-sans text-zinc-100 ">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Card Container with 3D Perspective */}
      <div className="relative w-full max-w-[400px] h-[580px] perspective-1000">
        <motion.div
          className="relative w-full h-full transition-all duration-500 preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 540 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* FRONT SIDE */}
          <div className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'pointer-events-none' : ''}`}>
            <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col p-8 group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-colors duration-500" />
              
              {/* Header / Avatar */}
              <div className="relative z-10 flex flex-col items-center mt-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-32 h-32 rounded-full border-2 border-white/20 overflow-hidden bg-zinc-800">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harshal" 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[#1a1a1a] rounded-full" />
                </div>

                <h1 className="mt-6 text-2xl font-bold tracking-tight text-white">
                  Mr. Harshal Patil
                </h1>
                <p className="text-cyan-400 font-medium text-sm mt-1 uppercase tracking-widest">
                  Computer Engineering Student
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-10 flex justify-center gap-4">
                {[
                  { icon: <Instagram size={20} />, label: 'Instagram', color: 'hover:text-pink-500' },
                  { icon: <Github size={20} />, label: 'GitHub', color: 'hover:text-white' },
                  { icon: <Linkedin size={20} />, label: 'LinkedIn', color: 'hover:text-blue-500' }
                ].map((social, i) => (
                  <button 
                    key={i}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
                <div 
                  className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-green-500"
                  title="WhatsApp"
                >
                  <WhatsAppButton />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto space-y-3">
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold transition-all shadow-lg shadow-purple-900/20 active:scale-95">
                    <UserPlus size={18} />
                    Follow
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                    className={`px-4 rounded-xl border border-white/10 transition-all active:scale-95 flex items-center justify-center ${isLiked ? 'bg-red-500/20 text-red-500 border-red-500/30' : 'bg-white/5 text-white hover:bg-white/10'}`}
                  >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                  </button>
                </div>
                
                <button 
                  onClick={handleFlip}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-all group/btn"
                >
                  <ArrowLeftRight size={16} className="group-hover/btn:rotate-180 transition-transform duration-500" />
                  View About Me
                </button>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${!isFlipped ? 'pointer-events-none' : ''}`}>
            <div className="relative w-full h-full rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col p-8">
              {/* Close Button */}
              <button 
                onClick={handleFlip}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>

              <div className="mt-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-1 bg-purple-500 rounded-full" />
                  About Me
                </h2>
                <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                  Passionate Computer Engineering student focused on building immersive web experiences. 
                  I love turning complex problems into elegant, user-friendly solutions. 
                  Always learning, always coding.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                  <Code2 size={14} />
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] py-1.5 px-2 rounded-lg font-bold text-center border border-white/5 ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats/Contact */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                  <Cpu size={14} />
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-zinc-300 group/info">
                    <div className="p-2 rounded-lg bg-white/5 text-cyan-400 group-hover/info:bg-cyan-400/10 transition-colors">
                      <Mail size={16} />
                    </div>
                    <span>hello@harshal.dev</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300 group/info">
                    <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover/info:bg-purple-400/10 transition-colors">
                      <MapPin size={16} />
                    </div>
                    <span>Pune, Maharashtra, IN</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300 group/info">
                    <div className="p-2 rounded-lg bg-white/5 text-indigo-400 group-hover/info:bg-indigo-400/10 transition-colors">
                      <Globe size={16} />
                    </div>
                    <span>harshalpatil.me</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={handleFlip}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all font-medium text-sm"
                >
                  Flip Back
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tailwind helper styles for 3D flip */}
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}