import { motion } from 'framer-motion';

export default function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Computer Science and Information Technology",
      period: "2022 - 2026",
      institution: "Mohan Babu University",
      description: "Currently in my 4th year pursuing my undergraduate degree in Computer Science and Information Technology."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 