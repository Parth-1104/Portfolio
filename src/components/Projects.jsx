import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Calendar, Code, Zap } from "lucide-react";
import assets from "../assets/assets";

const projects = [
  {
    title: "Walmart In-Store Navigation System – Smart Retail Assistant",
    description:
      "Smart retail system with real-time navigation and AI chatbot, reducing item search time and boosting basket value.",
    image: assets.pic3,
    year: "2024",
    tech: ["React.js", "Node.js", "MongoDB", "Dijkstra’s Algorithm", "OpenAI API"],
    status: "Live",
    website: "https://wallmart-gray.vercel.app",
    github: "https://github.com/Parth-1104/Wallmart",
  },
  {
    title: "AI Chat Filter – Intelligent Classroom Chat Cleaner",
    description:
      "AI tool that filters out non-doubt messages in virtual classes, enabling distraction-free teaching.",
    image: assets.pic5,
    year: "2025",
    tech: ["Gemini API", "Transformers", "Fine-tuned AI", "JavaScript"],
    status: "Live",
    website: "https://edtechchatapp.web.app",
    github: "https://github.com/Parth-1104/FastAPI-GEN-AI/tree/main/Ai-FilteredChatApp/AifilteredchatApp",
  },
  {
    title: "HealthSphere – AI-Powered Healthcare Platform",
    description:
      "AI-driven health portal with secure records, video consultations, and smart diagnostics.",
    image: assets.pic4,
    year: "2024",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "OpenAI API", "JWT"],
    status: "Live",
    website: "https://healthsphere-frontend.onrender.com",
    github: "https://github.com/Parth-1104/HealthSphere",
  },
  {
    title: "SyncUp – Enterprise Task Management Platform",
    description:
      "SaaS task manager with real-time sync, team roles, analytics, and encrypted document sharing.",
    image: assets.pic6,
    year: "2024",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Chart.js", "VideoSDK"],
    status: "Live",
    website: "https://syncup-microsoft-frontend.onrender.com/",
    github: "https://github.com/Parth-1104/SyncUp--Microsoft-Hackathon-",
  },
  
  {  
    "title": "Verse – Full-Stack Blogging Platform",
    "description": "Built an SEO-friendly blog with server-side rendering, markdown support, image optimization, and secure auth. Styled with Tailwind and powered by Prisma ORM and PostgreSQL.",
    "image": assets.pic7,
    "year": "2025",
    "tech": ["Next.js", "React.js", "PostgreSQL", "Tailwind CSS", "NextAuth", "Prisma ORM"],
    "status": "Live",
    "website": "https://verse-blogging-website.vercel.app/login",
    "github": "https://github.com/Parth-1104/Verse"
  },
  
  
  
];



function AnimatedProject({ project, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: "-50px 0px"
  });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: 80, 
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.1,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: index * 0.1 + 0.2 }
    },
    hover: {
      scale: 1.05,
      opacity: 0.7,
      transition: { duration: 0.3 }
    }
  };

  const isEven = index % 2 === 0;

  const statusConfig = {
    'Live': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
    'Active': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    'Completed': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' }
  };

  const ProjectCard = ({ className = "" }) => (
    <motion.div
      className={`relative group w-full max-w-5xl ${className}`}
      variants={cardHoverVariants}
      whileHover="hover"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-2xl blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500"
        variants={glowVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        whileHover="hover"
      />
      
      {/* Card Background */}
      <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-500">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-transparent to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Mobile-first layout */}
        <div className="relative z-10 p-4 sm:p-6">
          {/* Mobile Layout - Stacked vertically */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
            {/* Project Image */}
            <motion.div
              className="relative overflow-hidden rounded-lg border-2 border-gray-200 shadow-sm flex-shrink-0 mx-auto sm:mx-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full sm:w-28 lg:w-32 h-32 sm:h-20 lg:h-24 object-cover cursor-pointer hover:opacity-90 transition-opacity duration-300"
                onClick={() => window.open(project.website, '_blank')}
                title="Visit Website"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            {/* Project Details */}
            <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
              {/* Title and Status */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-gray-800 flex items-center justify-center sm:justify-start gap-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  {project.title}
                </motion.h3>
                <motion.span 
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig[project.status].bg} ${statusConfig[project.status].text} ${statusConfig[project.status].border} shadow-sm`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Zap className="w-3 h-3 mr-1" />
                  {project.status}
                </motion.span>
              </div>

              {/* Description - More concise on mobile */}
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 sm:line-clamp-none">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span 
                    key={i} 
                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium border border-gray-200 hover:border-gray-300 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons and Year */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* GitHub Button */}
                  <motion.button
                    onClick={() => window.open(project.github, '_blank')}
                    className="px-3 sm:px-4 py-2 bg-gray-900 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    title="View on GitHub"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    GitHub
                  </motion.button>

                  {/* Live Site Button */}
                  <motion.button
                    onClick={() => window.open(project.website, '_blank')}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 hover:from-gray-800 hover:to-gray-900 transition-all duration-200 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    title="Visit Live Site"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Live Site
                  </motion.button>
                </div>

                {/* Year */}
                <motion.div 
                  className="flex items-center gap-1 text-gray-600 font-semibold text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative w-full mb-8 sm:mb-12 lg:mb-16 group"
    >
      {/* Desktop Timeline Layout (lg and up) */}
      <div className="hidden lg:flex w-full max-w-6xl mx-auto items-center relative">
        {/* Left side content (even indexes) */}
        <div className="w-1/2 pr-8 flex justify-end">
          {isEven && <ProjectCard />}
        </div>

        {/* Timeline center */}
        <div className="flex flex-col items-center z-20 absolute left-1/2 transform -translate-x-1/2">
          <motion.div 
            className="relative w-6 h-6 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 border-4 border-white shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="absolute inset-1 rounded-full bg-white opacity-40"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          {index !== projects.length - 1 && (
            <motion.div 
              className="w-0.5 h-32 bg-gradient-to-b from-gray-500 to-gray-300 opacity-60 mt-2"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
            />
          )}
        </div>

        {/* Right side content (odd indexes) */}
        <div className="w-1/2 pl-8 flex justify-start">
          {!isEven && <ProjectCard />}
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden w-full max-w-4xl mx-auto flex items-start px-4 sm:px-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center mr-4 sm:mr-6 mt-6 flex-shrink-0">
          <motion.div 
            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 border-3 sm:border-4 border-white shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          />
          {index !== projects.length - 1 && (
            <motion.div 
              className="w-0.5 h-24 sm:h-32 bg-gradient-to-b from-gray-500 to-gray-300 opacity-60 mt-2"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
            />
          )}
        </div>

        {/* Project card for mobile/tablet */}
        <div className="flex-1">
          <ProjectCard />
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{background: "linear-gradient(135deg, #f5f5f5 0%, #e3e3e3 50%, #f0f0f0 100%)"}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-800 mb-4 sm:mb-6 relative">
              Projects Timeline
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-gray-400/20 via-gray-300/20 to-gray-400/20 rounded-xl blur-lg"
                animate={{ scale: [1, 1.02, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4"
          >
            A journey through my development projects, showcasing growth, innovation, and technical expertise
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            className="flex justify-center mt-6 sm:mt-8 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-gray-500 to-gray-600"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {projects.map((project, i) => (
            <AnimatedProject key={i} project={project} index={i} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
          className="flex justify-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="relative">
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-gray-500 via-gray-600 to-gray-500 flex items-center justify-center shadow-xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <motion.div 
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-white opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-gray-400/30 via-gray-300/30 to-gray-400/30 rounded-full blur-lg"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        @media (max-width: 640px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  );
};

export default Projects;