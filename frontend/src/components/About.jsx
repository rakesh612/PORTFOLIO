import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am a passionate Full Stack Developer with a strong foundation in web development technologies. 
              Currently in my 4th year pursuing Bachelor's Degree in Computer Science and Information Technology (2022-2026) 
              at Mohan Babu University, I combine academic knowledge with practical development skills to create innovative solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My expertise spans across both frontend and backend development, with a particular focus on 
              creating responsive, user-friendly applications. I am constantly learning and adapting to new 
              technologies to stay at the forefront of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, I enjoy solving programming challenges on LeetCode and contributing to 
              open-source projects. I believe in writing clean, maintainable code and following best 
              practices in software development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 