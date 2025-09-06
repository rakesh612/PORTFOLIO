import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Colloborative Code Editor",
      description: "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      image: "/Colloborative-code-editor.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://collabcode.mooo.com",
      githubLink: "https://github.com/rakesh612/Collab_code-master"
    },
    {
      title: "LMS Portal",
      description: "A real-time chat application with features like private messaging, group chats, file sharing, and online status indicators.",
      image: "/LMS-Portal.png",
      technologies: ["React.js", "Socket.IO", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://educure.duckdns.org",
      githubLink: "https://github.com/rakesh612/LMS_PORTAL"
    }
  ];

  return (
    <section id="projects" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 