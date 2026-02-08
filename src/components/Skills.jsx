// src/components/Skills.jsx
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Layout,
  Cloud,
  Database,
  TerminalSquare,
} from 'lucide-react';

const skills = [
  {
    title: "Programming Languages",
    content: "JavaScript (React Native, Node.js), Java (Spring Boot), Python, HTML, CSS",
    icon: Code,
    color: "indigo",
  },
  {
    title: "Backend Development",
    content: "Node.js, Express.js, Spring Boot, RESTful APIs, Authentication & Security, OAuth 2.0, JWT",
    icon: Server,
    color: "purple",
  },
  {
    title: "Frontend & Mobile Development",
    content: "React Native, React.js, HTML, CSS, Tailwind CSS, UI/UX (Figma)",
    icon: Layout,
    color: "blue",
  },
  {
    title: "Cloud & DevOps (AWS)",
    content: "Amazon Web Services (AWS), AWS Lambda, Amazon S3, Amazon Cognito, Amazon ECS, Amazon SageMaker, API Gateway, IAM, CloudWatch",
    icon: Cloud,
    color: "cyan",
  },
  {
    title: "Database Management",
    content: "MongoDB, MySQL",
    icon: Database,
    color: "emerald",
  },
  {
    title: "Tools & Technologies",
    content: "Git, GitHub, Postman, VS Code, IntelliJ IDEA, Apache NetBeans",
    icon: TerminalSquare,
    color: "amber",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
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
              My Skill Set
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClasses = {
              indigo: "text-indigo-600 group-hover:text-indigo-700 bg-indigo-50/70",
              purple: "text-purple-600 group-hover:text-purple-700 bg-purple-50/70",
              blue: "text-blue-600 group-hover:text-blue-700 bg-blue-50/70",
              cyan: "text-cyan-600 group-hover:text-cyan-700 bg-cyan-50/70",
              emerald: "text-emerald-600 group-hover:text-emerald-700 bg-emerald-50/70",
              amber: "text-amber-600 group-hover:text-amber-700 bg-amber-50/70",
            };

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="group relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  {/* Gradient top bar */}
                  <div className={`h-2 bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`} />

                  <div className="p-7 md:p-9">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl ${colorClasses[skill.color]} transition-colors duration-300`}>
                        <Icon size={32} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-2xl md:text-2.5xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {skill.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {skill.content}
                    </p>
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