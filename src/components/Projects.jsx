import { useEffect, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Stethoscope, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import soapgenerator from '../assets/projectsoap.png';
import project3 from '../assets/project3.png';
// project images
import project2 from '../assets/project2.png';

const projects = [
  {
    id: "bandekibaat",
    title: "BandeKiBaat — AI Chat App",
    description: "A mobile AI chat application built with React Native and Expo, powered by Groq API and LLaMA 3.3 70B. Features custom branding, facts-only system prompt, and persistent chat memory.",
    tech: ["React Native", "Expo", "Groq API", "LLaMA 3.3"],
    github: null,
    live: null,
    icon: Code,
    image: project2,
    color: "from-violet-500 to-indigo-600",
    emoji: "🤖",
  },
  {
    id: "soap-generator",
    title: "Clinical SOAP Note Generator",
    description: "Records doctor-patient conversations, transcribes via Groq Whisper, and generates structured SOAP notes using LLaMA. Outputs ICD-10 and CPT billing codes automatically.",
    tech: ["React", "React Native", "Groq Whisper", "LLaMA 3.3", "Vite"],
    github: null,
    live: null,
    icon: Stethoscope,
    image: soapgenerator,
    color: "from-emerald-500 to-teal-600",
    emoji: "🏥",
  },
  {
    id: "digiplant",
    title: "DigiPlant — Plant Ordering App",
    description: "Cross-platform mobile application for seamless plant ordering with Node.js backend, RESTful APIs, order and payment management, and user authentication.",
    tech: ["React Native", "Node.js", "Express", "REST API"],
    github: "https://github.com/muhammad-shoaib/digiplant",
    live: null,
    icon: Code,
    image: project3,
    color: "from-green-500 to-lime-600",
    emoji: "🌿",
  },
];

export default function Projects() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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

        {/* Carousel Wrapper */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <ChevronLeft size={22} className="text-indigo-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-200 transition-all"
          >
            <ChevronRight size={22} className="text-indigo-600" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="flex-none w-full md:w-[80%] lg:w-[70%] mx-auto px-4"
                    style={{ flex: '0 0 100%' }}
                  >
                    <div
                      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      {/* Image / Placeholder */}
                      <div className={`relative h-72 md:h-96 bg-gradient-to-br ${project.color} flex flex-col items-center justify-center`}>
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="text-center">
                            <div className="text-8xl mb-4">{project.emoji}</div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
                              <p className="text-white font-semibold text-lg">Screenshot coming soon</p>
                            </div>
                          </div>
                        )}

                        {/* Status badge */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5">
                          <div className="flex items-center gap-2">
                            <Icon size={14} className="text-indigo-600" />
                            <span className="text-xs font-semibold text-gray-700">View Details →</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-8 md:p-10">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center justify-between">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                            >
                              <Github size={20} />
                              <span>Code</span>
                            </a>
                          )}
                          <span className="ml-auto text-indigo-500 font-semibold text-sm">
                            Click to view details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === selectedIndex
                    ? 'w-8 h-3 bg-indigo-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-indigo-300'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}