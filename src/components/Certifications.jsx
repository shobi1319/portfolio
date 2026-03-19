// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { Award, Calendar, Link as LinkIcon } from 'lucide-react';

const certifications = [
  {
    title: "Core Java Specialization",
    issuer: "Coursera",
    date: "September 2022",
    description:
      "Successfully completed the online Specialization in Core Java. Mastered the Java programming language and its rich set of core libraries through hands-on exercises and object-oriented programming concepts.",
    link: "https://coursera.org/share/3a28c8d8a16d179fd913dc1da158693f",
  },
  {
    title: "Google Prompting Essentials Specialization",
    issuer: "Google (offered through Coursera)",
    date: "October 8, 2025",
    description:
      "Successfully completed the Google Prompting Essentials Specialization through Coursera. This specialization includes four courses designed to build AI prompting skills: Start Writing Prompts like a Pro, Design Prompts for Everyday Work Tasks, Speed Up Data Analysis and Presentation Building, and Use AI as a Creative or Expert Partner. Developed competencies in designing effective prompts and applying advanced prompting techniques for complex tasks, data analysis, and information summarization.",
    link: "https://coursera.org/share/f10eda3f83075e46900d06e98ae75b7e",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-max px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Certifications List */}
        <div className="max-w-5xl mx-auto space-y-10 md:space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Gradient top bar */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                <div className="p-7 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-xl bg-indigo-50 text-indigo-600">
                        <Award size={32} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                          {cert.title}
                        </h3>
                        <p className="text-xl text-indigo-600 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span className="font-medium">{cert.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                    {cert.description}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors hover:underline"
                    >
                      <LinkIcon size={18} />
                      <span>View Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}