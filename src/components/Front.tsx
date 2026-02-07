"use client"
import React, { useState } from 'react';
import Image from 'next/image';
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
  Phone,
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
    { name: 'Javascript', color: 'bg-green-500/20 text-green-300' },
    { name: 'Clerk', color: 'bg-purple-500/20 text-purple-300' },
  ];

  return (
    <div className="min-h-screen w-full  bg-[#050505] flex items-center justify-center p-6 font-sans text-zinc-100 ">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Card Container with 3D Perspective */}
      <div className="relative w-full max-w-[400px] h-[650px] perspective-1000">
        <motion.div
          className="relative w-full h-full transition-all duration-500 preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 540 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* FRONT SIDE */}
          <div className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'pointer-events-none' : ''}`}>
            <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col p-6 group">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-colors duration-500" />

              {/* Header / Avatar */}
              <div className="relative z-10 flex flex-col items-center mt-2 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-28 h-28 rounded-full border-2 border-white/20 overflow-hidden bg-zinc-800">
                    <Image
                      src="/photos/logo.jpg"
                      alt="Avatar"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />

                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[#1a1a1a] rounded-full" />
                </div>

                <h1 className="mt-4 text-xl font-bold tracking-tight text-white">
                  Mr. Harshal Patil
                </h1>
                <p className="text-cyan-400 font-medium text-xs mt-1 uppercase tracking-widest">
                  Computer Engineering Student
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex justify-center gap-3 mb-4">
                {[
                  {
                    icon: <Instagram size={20} />,
                    label: 'Instagram',
                    color: 'hover:text-pink-500',
                    link: 'https://www.instagram.com/harshalpatil_2004?igsh=czYxM3FsMDdkMW1q',
                  },
                  {
                    icon: <Github size={20} />,
                    label: 'GitHub',
                    color: 'hover:text-white',
                    link: 'https://github.com/HarshalPatil2004',
                  },
                  {
                    icon: <Linkedin size={20} />,
                    label: 'LinkedIn',
                    color: 'hover:text-blue-500',
                    link: 'https://www.linkedin.com/in/harshal-patil-39999330b/',
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}   // ⭐ IMPORTANT
                    title={social.label}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}

                {/* WhatsApp Button (already working) */}
                <div
                  className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:text-green-500"
                  title="WhatsApp"
                >
                  <WhatsAppButton />
                </div>
              </div>



              {/* Action Buttons */}
              <div className="mt-auto pt-4 space-y-2">
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-900/20 active:scale-95">
                    <UserPlus size={16} />
                    Follow
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                    className={`px-3 rounded-xl border border-white/10 transition-all active:scale-95 flex items-center justify-center ${isLiked ? 'bg-red-500/20 text-red-500 border-red-500/30' : 'bg-white/5 text-white hover:bg-white/10'}`}
                  >
                    <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
                  </button>
                </div>

                <button
                  onClick={handleFlip}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-all group/btn text-sm"
                >
                  <ArrowLeftRight size={14} className="group-hover/btn:rotate-180 transition-transform duration-500" />
                  View About Me
                </button>
              </div>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${!isFlipped ? 'pointer-events-none' : ''}`}>
            <div className="relative w-full h-full rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-2xl shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col p-6">
              {/* Close Button */}
              <button
                onClick={handleFlip}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={18} />
              </button>

              <div className="mt-2 mb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-8 h-1 bg-purple-500 rounded-full" />
                  About Me
                </h2>
                <p className="mt-3 text-zinc-400 leading-relaxed text-xs">
                  Passionate Computer Engineering student focused on building immersive web experiences.
                  I love turning complex problems into elegant, user-friendly solutions.
                  Always learning, always coding.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-4 mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-2">
                  <Code2 size={12} />
                  Tech Stack
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-[9px] py-1.5 px-2 rounded-lg font-bold text-center border border-white/5 ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats/Contact */}
              <div className="mt-2 mb-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                  <Cpu size={12} />
                  Quick Info
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-300 group/info">
                    <div className="p-1.5 rounded-lg bg-white/5 text-cyan-400 group-hover/info:bg-cyan-400/10 transition-colors flex-shrink-0">
                      <Mail size={14} />
                    </div>
                    <span className="break-words">harshal.sharadpatil@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-300 group/info">
                    <div className="p-1.5 rounded-lg bg-white/5 text-purple-400 group-hover/info:bg-purple-400/10 transition-colors flex-shrink-0">
                      <MapPin size={14} />
                    </div>
                    <span>Nagpur, Maharashtra, IN</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-zinc-300 group/info">
                    <div className="p-1.5 rounded-lg bg-white/5 text-indigo-400 group-hover/info:bg-indigo-400/10 transition-colors flex-shrink-0">
                      <Phone size={14} />
                    </div>
                    <span>9284516763</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-3">
                <button
                  onClick={handleFlip}
                  className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all font-medium text-sm"
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
        /* Custom scrollbar styling */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}