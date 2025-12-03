import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm <span className="text-gray-900 dark:text-white">HANUMATH RAKESH</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              Software Developer Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Aspiring SDE skilled in building scalable applications, writing clean code, and collaborating in team-driven environments.
Passionate about learning new technologies and contributing to innovative solutions and can efficiently use AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary cursor-pointer"
              >
              Get in Touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1QE3_HavVZVxHsxEpKOzHNbD8vP3GTU8h/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Resume
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/rakesh612"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hanumath-rakesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/rakeshnukala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.653 1.653 0 0 0-.193.215 1.374 1.374 0 0 0-.438.96v6.515a1.374 1.374 0 0 0 1.374 1.374h.194l6.293-6.293a1.374 1.374 0 0 1 1.942 0l6.293 6.293h.194a1.374 1.374 0 0 0 1.374-1.374V11.65a1.374 1.374 0 0 0-.438-.961 1.653 1.653 0 0 0-.215-.193l-3.854-4.126L13.444.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 0 0-.468.961v6.515a1.374 1.374 0 0 0 1.374 1.374h.194l6.293-6.293a1.374 1.374 0 0 1 1.942 0l6.293 6.293h.194a1.374 1.374 0 0 0 1.374-1.374v-6.515a1.374 1.374 0 0 0-.438-.961 1.653 1.653 0 0 0-.215-.193l-3.854-4.126-5.406-5.788a1.374 1.374 0 0 0-1.942 0l-5.406 5.788-3.854 4.126a1.653 1.653 0 0 0-.193.215z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right side - Image or Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                <img
                  src="/Hanumath-Rakesh.jpg"
                  alt="HANUMATH RAKESH - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 