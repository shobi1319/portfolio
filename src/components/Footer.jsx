// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/muhammad-shoaib', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammad-shoaib', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shoaibkhanmahars490@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container-max px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Muhammad Shoaib
          </h3>

          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Junior Full-Stack Developer • Building scalable applications with passion and precision
          </p>

          <div className="flex justify-center gap-10 mb-10">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <link.icon size={32} strokeWidth={1.8} />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Muhammad Shoaib. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}