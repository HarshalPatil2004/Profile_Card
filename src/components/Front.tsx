import Image from 'next/image'
import React from 'react'
import { SlUserFollow } from "react-icons/sl";
import { AiTwotoneLike } from "react-icons/ai";
import { FaInstagramSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import WhatsAppButton from './whatapp';

const front = () => {
  return (
    <>
      <div className='flex flex-col items-center p-6 rounded-2xl w-80 h-auto ' style={{
        backgroundImage: 'url(/bg-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="flex relative group">
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-white/50 group-hover:animate-rotate-border transition-all duration-300"></div>
          <div className="relative rounded-full animate-pulse-glow">
            <Image src="/photos/logo.jpg" alt="Profile" width={180} height={170} className="object-cover rounded-full border-4 border-gray-500 w-[180px] h-[170px] relative z-10 transition-transform duration-300 group-hover:scale-105"></Image>
          </div>
        </div>
        <div className='text-center mt-4'>
          <h1 className="text-2xl font-bold text-white" >Mr.Harshal Patil</h1>
          <p className="text-sm mt-4 text-white font-semibold">Computer Engineering Students</p>
        </div>
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <defs>
            <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6ec7" />
              <stop offset="50%" stopColor="#8a2be2" />
              <stop offset="100%" stopColor="#4facfe" />
            </linearGradient>
            <linearGradient id="liGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="100%" stopColor="#140D9E" />
            </linearGradient>
          </defs>
        </svg>
        <div className='mt-4 flex space-x-4'>
          <a href="https://www.instagram.com/harshalpatil_2004" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg">
            <FaInstagramSquare className="text-2xl transition-all duration-300 hover:opacity-90" style={{ fill: 'url(#igGradient)' }} />
          </a>
          <a href="https://github.com/HarshalPatil2004" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg">
            <FaGithub className="text-2xl text-white transition-all duration-300 hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com/in/harshal-patil-39999330b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-transform duration-300 hover:scale-125 hover:drop-shadow-lg">
            <FaLinkedin className="text-2xl transition-all duration-300 hover:opacity-90" style={{ fill: 'url(#liGradient)' }} />
          </a>
          <div className="transition-transform duration-300 hover:scale-125">
            <WhatsAppButton />
          </div>
        </div>
        <div className='mt-6 flex space-x-4'>
          <button className="relative px-4 py-2 gap-2 flex rounded-xl text-xl text-white backdrop-blur-md
bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-white/30
hover:bg-white/30 transition-all duration-300 m-2 hover:-translate-y-1 hover:shadow-lg
overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-slide"></span>
            <span className="relative z-10 flex items-center gap-2">Follow<SlUserFollow /></span>
          </button>
          <button className="relative px-4 py-2 flex rounded-xl text-xl text-white backdrop-blur-md
bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 border border-white/30
hover:bg-white/30 transition-all duration-300 m-2 hover:-translate-y-1 hover:shadow-lg
overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-slide"></span>
            <span className="relative z-10 flex items-center gap-2">Like <AiTwotoneLike /></span>
          </button>
        </div>
        {/*<div>
          <button className=" px-5 py-2 mt-2 rounded-full bg-black/70 text-white
flex items-center justify-center
hover:bg-black transition active:scale-90">
            Swipe ➜
          </button>
        </div>*/}
      </div>
    </>
  )
}

export default front