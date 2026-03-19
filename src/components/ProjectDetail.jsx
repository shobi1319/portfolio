import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import project1Video from '../assets/project1.mp4';
import soap from '../assets/soap.mp4';
const projectDetails = {
  "bandekibaat": {
    title: "BandeKiBaat — AI Chat App",
    subtitle: "Mobile AI Chat Application",
    description: `BandeKiBaat is a mobile AI chat application built with React Native and Expo. It uses the Groq API with the LLaMA 3.3 70B model to deliver fast, intelligent responses.`,
    features: [
      "Real-time AI chat powered by LLaMA 3.3 70B via Groq API",
      "Custom facts-only system prompt for focused responses",
      "Persistent chat memory across sessions",
      "Custom dark branding with #1a1a2e background and #6C63FF accent",
      "Built with Expo file-based routing",
      "Axios for API communication",
    ],
    tech: ["React Native", "Expo", "Groq API", "LLaMA 3.3", "Axios", "AsyncStorage"],
    github: null,
    live: null,
    videoSrc: project1Video,
    status: "Completed",
  },
  "soap-generator": {
    title: "Clinical SOAP Note Generator",
    subtitle: "AI-Powered Medical Scribe Tool",
    description: `A web and mobile tool that records doctor-patient conversations and automatically generates structured SOAP notes. Built to replace a paid third-party medical scribe service used in a production EMR environment.`,
    features: [
      "Live audio recording in the browser and on mobile",
      "Transcription via Groq Whisper large-v3 model",
      "Structured SOAP note generation using LLaMA 3.3 70B",
      "Strict scribe rules — only documents what was explicitly said, never infers diagnoses",
      "Automatic ICD-10 and CPT code generation from SOAP notes",
      "Denial risk assessment and billing tips per visit",
      "Copy JSON output for direct EMR integration",
    ],
    tech: ["React", "Vite", "React Native", "Expo", "Groq Whisper", "LLaMA 3.3", "Tailwind CSS"],
    github: null,
    live: null,
    videoSrc: soap,
    status: "In Production Use",
  },
  "digiplant": {
    title: "DigiPlant — Plant Ordering App",
    subtitle: "Cross-Platform Mobile Application",
    description: `DigiPlant is a cross-platform mobile application for plant ordering. It features a full Node.js backend with RESTful APIs, user authentication, and order and payment management.`,
    features: [
      "Cross-platform mobile app for iOS and Android",
      "User authentication and profile management",
      "Product browsing and ordering flow",
      "Payment management integration",
      "RESTful API backend with Node.js and Express",
    ],
    tech: ["React Native", "Node.js", "Express", "REST API"],
    github: "https://github.com/muhammad-shoaib/digiplant",
    live: null,
    videoUrl: null,
    status: "Completed",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-indigo-600 hover:underline"
          >
            Go back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
          }}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-10"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              project.status === "In Production Use"
                ? "bg-green-100 text-green-700"
                : "bg-indigo-100 text-indigo-700"
            }`}>
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            {project.title}
          </h1>
          <p className="text-xl text-indigo-600 font-medium">{project.subtitle}</p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          {project.videoSrc ? (
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
              <video
                src={project.videoSrc}
                className="w-full h-full"
                controls
                title={project.title}
              />
            </div>
          ) : (
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-dashed border-indigo-200 aspect-video flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">🎬</div>
              <p className="text-indigo-400 font-medium text-lg">Demo video coming soon</p>
              <p className="text-gray-400 text-sm mt-1">Check back later</p>
            </div>
          )}
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Project</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-100 shadow-md p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {(project.github || project.live) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition font-medium"
              >
                <Github size={20} />
                View Code
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            )}
          </motion.div>
        )}

      </div>
    </div>
  );
}