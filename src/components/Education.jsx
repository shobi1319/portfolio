// src/components/Education.jsx
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white">
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
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    BS in Computer Science
                  </h3>
                  <p className="text-xl text-indigo-600 font-medium">
                    Sukkur IBA University
                  </p>
                </div>

                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={20} />
                    <span>Sept 2021 — Aug 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>Sukkur, Sindh, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <GraduationCap size={28} className="text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    CGPA: 2.95 / 4.0
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Relevant Coursework: Data Structures & Algorithms, Databases, Mobile App Development,
                    Data Science, Enterprise App Development, Operating Systems, Object Oriented Programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}