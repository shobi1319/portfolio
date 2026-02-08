// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, MapPin } from 'lucide-react';

const experiences = [
  {
    role: "Junior Full Stack Developer",
    company: "Sami Siddiq Real Estate",
    location: "Remote",
    duration: "Oct 2025 – Present",
    description: [
      "Gained hands-on experience with Python, React Native, Node.js and team collaboration tools like Slack while contributing to real-world projects.",
      "Worked on projects such as NinjaTrader automation, the HealthWiz mobile app, and AWS EC2/Lambda integrations, adhering to company development standards and best practices."
    ],
    icon: Briefcase,
  },
  {
    role: "Junior Backend Developer",
    company: "Genensys",
    location: "Remote",
    duration: "May 2024 – Present",
    description: [
      "Implementing and maintaining Spring Boot backend services, handling authentication, data processing, and API integrations.",
      "Designing and implementing RESTful APIs to facilitate seamless communication between the frontend and backend.",
      "Working with relational databases, ensuring efficient data handling and query optimization.",
      "Collaborating with cross-functional teams to develop scalable and maintainable solutions.",
      "Utilizing Git Version Control for code collaboration, management, and deployment."
    ],
    icon: Briefcase,
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Enumsol",
    location: "Remote",
    duration: "Jun 2023 – Aug 2023",
    description: [
      "Gained hands-on experience in Full-Stack Web Development, covering both frontend and backend aspects.",
      "Implemented UI components, designed databases, and integrated RESTful APIs, ensuring seamless communication between front- and back-end.",
      "Applied SDLC principles, actively participating in requirement gathering, development, testing, and deployment.",
      "Utilized Git Version Control for collaborative development and code management.",
      "Worked within the Scrum framework, contributing to agile team projects."
    ],
    icon: Briefcase,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
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
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Gradient top accent */}
                <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

                <div className="p-7 md:p-10">
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-7">
                    <div className="flex items-start gap-5">
                      <div className="p-4 rounded-xl bg-indigo-50 text-indigo-600">
                        <exp.icon size={32} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-xl text-indigo-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-gray-600 text-right md:text-right">
                      <div className="flex items-center gap-2 justify-end">
                        <Calendar size={18} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-4 text-gray-700 text-base md:text-lg pl-5 md:pl-0">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}