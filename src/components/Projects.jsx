// src/components/Projects.jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    title: "DigiPlant - Plant Ordering App",
    description:
      "Cross-platform mobile application for seamless plant ordering with Node.js backend, RESTful APIs, order/payment management, and user authentication.",
    tech: ["React Native", "Node.js", "Express", "REST API"],
    github: "https://github.com/muhammad-shoaib/digiplant", // ← replace with real link
    live: null, // or "https://digiplant.app" if you have live demo
    icon: Code,
  },
  // Add more real projects here
  {
    title: "HealthWiz Mobile App",
    description:
      "Mobile health & wellness application developed during internship, including features for tracking and AWS integrations.",
    tech: ["React Native", "AWS Lambda", "Python"],
    github: null,
    live: null,
    icon: Code,
  },
  {
    title: "NinjaTrader Automation",
    description:
      "Automation scripts and tools for trading platform integration and workflow optimization.",
    tech: ["Python", "Node.js"],
    github: null,
    live: null,
    icon: Code,
  },
  // You can keep adding more objects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container-max px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                className="group h-full"
              >
                <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Gradient top bar */}
                  <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                  <div className="p-6 md:p-8 flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                        <Icon size={32} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"
                        >
                          <Github size={20} />
                          <span className="font-medium">Code</span>
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors font-medium"
                        >
                          <ExternalLink size={20} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}