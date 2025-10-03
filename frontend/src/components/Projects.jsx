import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: "Colloborative Code Editor",
      description: "Developed a secure real-time collaborative code editor with live sync, chat, and room management, featuring hybrid JWT-Redis authentication, Dockerized code execution, and deployment on GCP with caching, rate-limiting, and HTTPS.",
      image: "/Colloborative-code-editor.png",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"," Redis", "Docker", "BullMQ", "JWT"],
      liveLink: "https://collabcode.mooo.com",
      githubLink: "https://github.com/rakesh612/Collab_code-master"
    },
    {
      title: "LMS Portal",
      description: "Built a role-based LMS with Google OAuth, dynamic quizzes, real-time tracking, AWS S3 content delivery, and Razorpay payments, deployed on AWS EC2 with SSL-secured Nginx for 99.9% uptime.",
      image: "/LMS-Portal.png",
      technologies: ["React.js", "Google OAuth", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AWS S3", "JWT"],
      liveLink: "https://educure.duckdns.org",
      githubLink: "https://github.com/rakesh612/LMS_PORTAL"
    },
    {
      title: "E-Commerce",
      description: "Built a full-stack e-commerce platform using the MERN stack with Vite, Tailwind CSS, and Stripe for secure payments, featuring authentication, product browsing, cart management, and Redis-based starred products.Admins can monitor business performance through sales analytics dashboards powered by Recharts.",
      image: "/ecommerce.png",
      technologies: ["React.js", "Re-Charts", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Axios", "JWT"],
      // liveLink: "https://educure.duckdns.org",
      githubLink: "https://github.com/rakesh612/E-Commerce-Site"
    },
        {
      title: "Zero-Waste",
      description: "ZeroWaste is a web-based platform designed to minimize food waste by connecting donors with NGOs and individuals in need. Leveraging AI and geolocation technologies, the system ensures efficient food rescue operations, promoting sustainability and community welfare.",
      image: "/Zero-Waste.png",
      technologies: ["React.js", "Socket.io", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Axios", "JWT", "TensorFlow", "Google Maps Api"],
      // liveLink: "https://educure.duckdns.org",
      githubLink: "https://github.com/rakesh612/food-donation"
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