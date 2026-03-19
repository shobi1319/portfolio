// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white relative overflow-hidden"
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="container-max px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Open to freelance, full-time roles, collaborations, or just interesting conversations.
          </p>
        </motion.div>

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-16 items-center">
  {/* Profile Image */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="flex justify-center"
>
  <div className="relative">
    <img
      src={profileImg}
      alt="Profile"
      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-indigo-500/40 shadow-2xl"
    />

    {/* Glow effect */}
    <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl -z-10"></div>
  </div>
</motion.div>          {/* Left: Quick contact + social */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-4 text-lg">
                <div className="p-4 rounded-full bg-indigo-600/20">
                  <Mail size={28} className="text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:shoaibkhanmahars490@gmail.com"
                    className="text-xl font-medium hover:text-indigo-400 transition-colors"
                  >
                    shoaibkhanmahars490@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-lg">
                <div className="p-4 rounded-full bg-purple-600/20">
                  <Phone size={28} className="text-purple-400" /> {/* ← now imported */}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+923160360064"
                    className="text-xl font-medium hover:text-purple-400 transition-colors"
                  >
                    (+92) 316 0360064
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/muhammad-shoaib"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Github size={28} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/muhammad-shoaib"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: -5 }}
                className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: CTA + Optional Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.a
              href="mailto:shoaibkhanmahars490@gmail.com?subject=Hello%20from%20Portfolio"
              className="group relative inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white font-semibold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:from-indigo-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-500 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={26} className="group-hover:rotate-12 transition-transform" />
              <span>Email Me Now</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <p className="mt-6 text-gray-400 text-center md:text-left">
              Prefer a quick message? Drop me an email — I usually reply within 6 hours.
            </p>

            {/* Optional real form (uncomment & configure) */}
            {/*
            <form
              action="https://formspree.io/f/YOUR_FORMSPREE_ID"
              method="POST"
              className="mt-12 w-full max-w-md space-y-5"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message..."
                required
                className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}