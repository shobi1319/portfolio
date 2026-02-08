// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import profilePhoto from '../assets/profile2.png';  // your current photo path

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70">
      {/* Subtle animated background overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Plain photo – no circle, no border, no shadow, just clean image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mb-10 md:mb-14"
        >
          <div className="w-80 h-auto md:w-[480px] lg:w-[520px] mx-auto max-w-full">
            <img
              src={profilePhoto}
              alt="Muhammad Shoaib - Profile"
              className="w-full h-auto object-contain"  // keeps natural shape & aspect ratio
            />
          </div>
        </motion.div>

        {/* Name + animated role */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Muhammad Shoaib
            </span>
          </h1>

          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-medium mb-10 min-h-[3.5rem]">
            <TypeAnimation
              sequence={[
                'Junior Full-Stack Developer',
                2200,
                'React • Node.js • Spring Boot',
                1800,
                'Building modern web & mobile solutions',
                2200,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={true}
              cursorStyle="_"
            />
          </div>
        </motion.div>

        {/* Glassmorphic contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="inline-flex flex-wrap justify-center gap-5 sm:gap-10 mb-12 px-6 py-6 bg-white/70 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-2xl"
        >
          <div className="flex items-center gap-3 text-gray-800">
            <MapPin size={22} className="text-indigo-600" />
            <span className="font-medium">Sukkur, Sindh, Pakistan</span>
          </div>

          <div className="flex items-center gap-3 text-gray-800">
            <Phone size={22} className="text-indigo-600" />
            <a href="tel:+923160360064" className="hover:text-indigo-700 transition-colors font-medium">
              (+92) 316 0360064
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-800">
            <Mail size={22} className="text-indigo-600" />
            <a
              href="mailto:shoaibkhanmahars490@gmail.com"
              className="hover:text-indigo-700 transition-colors font-medium"
            >
              shoaibkhanmahars490@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social + CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-5 sm:gap-8"
        >
          <a
            href="https://github.com/muhammad-shoaib"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-indigo-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Github size={24} className="text-gray-800 group-hover:text-indigo-600" />
            <span className="font-semibold text-gray-800 group-hover:text-indigo-700">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/muhammad-shoaib"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl hover:bg-blue-50/80 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            <Linkedin size={24} className="text-gray-800 group-hover:text-blue-700" />
            <span className="font-semibold text-gray-800 group-hover:text-blue-700">LinkedIn</span>
          </a>

          <a
            href="mailto:shoaibkhanmahars490@gmail.com?subject=Hello%20from%20your%20portfolio"
            className="group flex items-center gap-3 px-9 py-4.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1.5"
          >
            <Mail size={22} />
            <span>Let's Collaborate</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}